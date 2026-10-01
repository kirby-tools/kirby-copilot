<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class DiscardChangesToolTest extends McpToolTestCase
{
    protected array $permissions = [ConnectionPermission::Read, ConnectionPermission::Prepare, ConnectionPermission::Publish];

    protected function setUp(): void
    {
        parent::setUp();

        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
        self::writeContent('notes/first/note.txt', ['Title' => 'First note', 'Intro' => 'Hello']);
        // An agent's changes, or the user's from more than ten minutes ago.
        self::writeContent('notes/first/_changes/note.txt', ['Title' => 'First note', 'Intro' => 'Hello, agent', 'Lock' => 'ada'], time() - 601);
    }

    #[Test]
    public function discards_the_changes_and_returns_the_published_content_etag(): void
    {
        $result = $this->discard();

        $this->assertFalse($result['isError'], $result['content'][0]['text']);
        $this->assertSame('latest', $result['structuredContent']['version']);
        $this->assertSame($this->read()['etag'], $result['structuredContent']['etag']);
        $this->assertFalse(self::bootApp($this->props())->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    public function refuses_a_stale_etag(): void
    {
        $result = $this->callTool('discard_changes', ['model' => 'notes/first', 'etag' => 'stale'], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('The content changed since your etag. Read it again with get_content and base the call on what it holds now.', $result['content'][0]['text']);
        $this->assertTrue(self::bootApp($this->props())->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    public function refuses_to_discard_while_the_user_edits_in_the_panel(): void
    {
        self::writeContent('notes/first/_changes/note.txt', ['Title' => 'First note', 'Intro' => 'Typing', 'Lock' => 'ada']);

        $result = $this->discard();

        $this->assertTrue($result['isError']);
        $this->assertStringStartsWith('Ada edited this content in the Panel', $result['content'][0]['text']);
    }

    #[Test]
    public function says_when_there_is_nothing_to_discard(): void
    {
        unlink(self::indexRoot() . '/content/notes/first/_changes/note.txt');

        $result = $this->discard();

        $this->assertTrue($result['isError']);
        $this->assertSame('There are no unsaved changes to discard.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_an_account_that_may_not_update_the_page(): void
    {
        $result = $this->discard(role: 'reviewer');

        $this->assertTrue($result['isError']);
        $this->assertSame('You are not allowed to discard this version', $result['content'][0]['text']);
        $this->assertTrue(self::bootApp($this->props())->page('notes/first')->version('changes')->exists());
    }

    private function discard(string $role = 'editor'): array
    {
        return $this->callTool('discard_changes', [
            'model' => 'notes/first',
            'etag' => $this->read()['etag']
        ], $this->props(['users' => [['role' => $role]]]));
    }

    private function read(): array
    {
        return $this->callTool('get_content', ['model' => 'notes/first'], $this->props())['structuredContent'];
    }

    private function props(array $props = []): array
    {
        return array_replace_recursive([
            'blueprints' => [
                'pages/note' => ['fields' => ['intro' => ['type' => 'text']]],
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['pages' => ['update' => false]]]
            ]
        ], $props);
    }
}
