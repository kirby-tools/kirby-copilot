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
        self::writeContent('notes/_drafts/idea/note.txt', ['Title' => 'Idea']);
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
    public function deletes_a_draft(): void
    {
        $this->callTool('delete_page', ['page' => 'notes/idea'], $this->props());

        $this->assertDirectoryDoesNotExist(self::indexRoot() . '/content/notes/_drafts/idea');
    }

    #[Test]
    public function refuses_a_page_with_subpages(): void
    {
        $result = $this->callTool('delete_page', ['page' => 'notes'], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('The page has subpages and cannot be deleted', $result['content'][0]['text']);
        $this->assertDirectoryExists(self::indexRoot() . '/content/notes/1_first');
    }

    #[Test]
    public function refuses_a_page_with_unsaved_changes(): void
    {
        self::writeContent('notes/1_first/_changes/note.txt', ['Title' => 'First note, edited', 'Lock' => 'ada']);

        $result = $this->callTool('delete_page', ['page' => 'notes/first'], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('The page has unsaved changes, which someone may still be working on. Ask the user whether to discard them, then try again.', $result['content'][0]['text']);
        $this->assertDirectoryExists(self::indexRoot() . '/content/notes/1_first');
    }

    #[Test]
    public function refuses_a_page_whose_files_have_unsaved_changes(): void
    {
        F::write(self::indexRoot() . '/content/notes/1_first/a.md', 'A');
        F::write(self::indexRoot() . '/content/notes/1_first/b.md', 'B');
        F::write(self::indexRoot() . '/content/notes/1_first/c.md', 'C');
        self::writeContent('notes/1_first/_changes/a.md.txt', ['Alt' => 'A, edited', 'Lock' => 'ada']);
        self::writeContent('notes/1_first/_changes/c.md.txt', ['Alt' => 'C, edited', 'Lock' => 'ada']);

        $result = $this->callTool('delete_page', ['page' => 'notes/first'], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('Files of the page have unsaved changes, which someone may still be working on: a.md, c.md. Ask the user whether to discard them, then try again.', $result['content'][0]['text']);
        $this->assertFileExists(self::indexRoot() . '/content/notes/1_first/a.md');
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
        $this->assertSame('You are not allowed to delete "first"', $result['content'][0]['text']);
        $this->assertDirectoryExists(self::indexRoot() . '/content/notes/1_first');
    }

    private function props(array $props = []): array
    {
        return array_replace_recursive([
            'blueprints' => [
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['pages' => ['delete' => false]]]
            ]
        ], $props);
    }
}
