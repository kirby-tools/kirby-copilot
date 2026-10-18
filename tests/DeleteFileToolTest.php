<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use Kirby\Filesystem\F;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class DeleteFileToolTest extends McpToolTestCase
{
    protected array $permissions = [ConnectionPermission::Read, ConnectionPermission::Prepare, ConnectionPermission::Delete];

    protected function setUp(): void
    {
        parent::setUp();

        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
        self::writeContent('notes/notes.md.txt', ['Alt' => 'Notes']);
        F::write(self::indexRoot() . '/content/notes/notes.md', 'Hello');
    }

    #[Test]
    public function deletes_a_file_with_its_content(): void
    {
        $result = $this->callTool('delete_file', ['file' => 'notes/notes.md'], $this->props());

        $this->assertFalse($result['isError'], $result['content'][0]['text']);
        $this->assertSame(['deleted' => 'notes/notes.md'], $result['structuredContent']);
        $this->assertFileDoesNotExist(self::indexRoot() . '/content/notes/notes.md');
        $this->assertFileDoesNotExist(self::indexRoot() . '/content/notes/notes.md.txt');
    }

    #[Test]
    public function refuses_a_file_another_user_edits(): void
    {
        self::writeContent('notes/_changes/notes.md.txt', ['Alt' => 'Edited notes', 'Lock' => 'grace']);

        $result = $this->callTool('delete_file', ['file' => 'notes/notes.md'], $this->props(['users' => [1 => ['id' => 'grace', 'email' => 'grace@example.com', 'role' => 'editor']]]));

        $this->assertTrue($result['isError']);
        $this->assertSame('grace@example.com is editing this content in the Panel. Try again once they leave its view, or 10 minutes after their last edit.', $result['content'][0]['text']);
        $this->assertFileExists(self::indexRoot() . '/content/notes/notes.md');
    }

    #[Test]
    public function refuses_a_page(): void
    {
        $result = $this->callTool('delete_file', ['file' => 'notes'], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('`file` must be a file.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_an_account_that_may_not_delete_the_file(): void
    {
        $result = $this->callTool('delete_file', ['file' => 'notes/notes.md'], $this->props(['users' => [['role' => 'reviewer']]]));

        $this->assertTrue($result['isError']);
        $this->assertSame('Kirby refused this for the user\'s account – its role or the blueprint\'s options: The file cannot be deleted', $result['content'][0]['text']);
        $this->assertFileExists(self::indexRoot() . '/content/notes/notes.md');
    }

    private function props(array $props = []): array
    {
        return array_replace_recursive([
            'blueprints' => [
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['files' => ['delete' => false]]]
            ]
        ], $props);
    }
}
