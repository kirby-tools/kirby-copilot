<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use Kirby\Filesystem\F;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class DeletePageToolTest extends McpToolTestCase
{
    protected array $permissions = [ConnectionPermission::Read, ConnectionPermission::Prepare, ConnectionPermission::Delete];

    protected function setUp(): void
    {
        parent::setUp();

        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
        self::writeContent('notes/1_first/note.txt', ['Title' => 'First note']);
    }

    #[Test]
    public function deletes_a_page(): void
    {
        $result = $this->callTool('delete_page', ['page' => 'notes/first'], $this->props());

        $this->assertFalse($result['isError'], $result['content'][0]['text']);
        $this->assertSame(['deleted' => 'notes/first'], $result['structuredContent']);
        $this->assertDirectoryDoesNotExist(self::indexRoot() . '/content/notes/1_first');
    }

    #[Test]
    public function deletes_a_page_with_the_account_s_unsaved_changes(): void
    {
        self::writeContent('notes/1_first/_changes/note.txt', ['Title' => 'First note, edited', 'Lock' => 'ada']);

        $result = $this->callTool('delete_page', ['page' => 'notes/first'], $this->props());

        $this->assertFalse($result['isError'], $result['content'][0]['text']);
        $this->assertDirectoryDoesNotExist(self::indexRoot() . '/content/notes/1_first');
    }

    #[Test]
    public function refuses_a_page_another_user_edits_before_deleting_its_files(): void
    {
        F::write(self::indexRoot() . '/content/notes/1_first/a.md', 'A');
        self::writeContent('notes/1_first/_changes/note.txt', ['Title' => 'First note, edited', 'Lock' => 'grace']);

        $result = $this->callTool('delete_page', ['page' => 'notes/first'], $this->props(['users' => [1 => ['id' => 'grace', 'email' => 'grace@example.com', 'role' => 'editor']]]));

        $this->assertTrue($result['isError']);
        $this->assertSame('grace@example.com is editing this content in the Panel. Try again once they leave its view, or 10 minutes after their last edit.', $result['content'][0]['text']);
        $this->assertFileExists(self::indexRoot() . '/content/notes/1_first/a.md');
    }

    #[Test]
    public function refuses_a_page_with_files_the_account_may_not_delete(): void
    {
        F::write(self::indexRoot() . '/content/notes/1_first/a.md', 'A');
        F::write(self::indexRoot() . '/content/notes/1_first/b.md', 'B');
        F::write(self::indexRoot() . '/content/notes/1_first/b.md.txt', 'Template: secret');

        $result = $this->callTool('delete_page', ['page' => 'notes/first'], $this->props([
            'blueprints' => ['files/secret' => ['options' => ['access' => false]]],
            'users' => [['role' => 'archivist']]
        ]));

        $this->assertTrue($result['isError']);
        $this->assertSame('The account may not delete these files of the page, which deleting it would delete too: a.md, a file the account may not access.', $result['content'][0]['text']);
        $this->assertFileExists(self::indexRoot() . '/content/notes/1_first/note.txt');
    }

    #[Test]
    public function refuses_a_page_with_subpages_before_files_the_account_may_not_delete(): void
    {
        F::write(self::indexRoot() . '/content/notes/a.md', 'A');

        $result = $this->callTool('delete_page', ['page' => 'notes'], $this->props(['users' => [['role' => 'archivist']]]));

        $this->assertTrue($result['isError']);
        $this->assertSame('The page has subpages and cannot be deleted', $result['content'][0]['text']);
        $this->assertDirectoryExists(self::indexRoot() . '/content/notes/1_first');
    }

    #[Test]
    public function refuses_the_site(): void
    {
        $result = $this->callTool('delete_page', ['page' => 'site'], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('`page` must be a page.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_an_account_that_may_not_delete_the_page(): void
    {
        $result = $this->callTool('delete_page', ['page' => 'notes/first'], $this->props(['users' => [['role' => 'reviewer']]]));

        $this->assertTrue($result['isError']);
        $this->assertSame('Kirby refused this for the user\'s account – its role or the blueprint\'s options: You are not allowed to delete "first"', $result['content'][0]['text']);
        $this->assertDirectoryExists(self::indexRoot() . '/content/notes/1_first');
    }

    private function props(array $props = []): array
    {
        return array_replace_recursive([
            'blueprints' => [
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['pages' => ['delete' => false]]],
                'users/archivist' => ['name' => 'archivist', 'permissions' => ['files' => ['delete' => false]]]
            ]
        ], $props);
    }
}
