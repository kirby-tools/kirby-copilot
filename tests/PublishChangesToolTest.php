<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use Kirby\Filesystem\Dir;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class PublishChangesToolTest extends McpToolTestCase
{
    protected array $permissions = [ConnectionPermission::Read, ConnectionPermission::Prepare, ConnectionPermission::Publish];

    protected function setUp(): void
    {
        parent::setUp();

        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
        self::writeContent('notes/1_first/note.txt', ['Title' => 'First note', 'Intro' => 'Hello', 'Uuid' => 'first']);
        // An agent's changes, or the user's from more than ten minutes ago.
        self::writeContent('notes/1_first/_changes/note.txt', ['Title' => 'First note', 'Intro' => 'Hello, agent', 'Uuid' => 'first', 'Lock' => 'ada'], time() - 601);
        self::writeContent('notes/1_first/photo.jpg.txt', ['Alt' => 'A lake', 'Template' => 'image']);
        touch(self::indexRoot() . '/content/notes/1_first/photo.jpg');
    }

    #[Test]
    public function publishes_the_changes_and_returns_the_published_content_etag(): void
    {
        $result = $this->publish();

        $this->assertFalse($result['isError'], $result['content'][0]['text']);
        $this->assertSame('latest', $result['structuredContent']['version']);
        $this->assertSame($this->read()['etag'], $result['structuredContent']['etag']);
        $this->assertSame('https://example.com/panel/pages/notes+first', $result['structuredContent']['panelUrl']);
        $this->assertArrayNotHasKey('notices', $result['structuredContent']);

        $page = self::bootApp($this->props())->page('notes/first');
        $this->assertSame('Hello, agent', $page->content()->get('intro')->value());
        $this->assertFalse($page->version('changes')->exists());
    }

    #[Test]
    public function publishes_the_changes_of_a_file(): void
    {
        $this->callTool('prepare_changes', [
            'model' => 'notes/first/photo.jpg',
            'etag' => $this->read('notes/first/photo.jpg')['etag'],
            'fields' => ['alt' => 'A lake at dawn']
        ], $this->props());

        $result = $this->callTool('publish_changes', [
            'model' => 'notes/first/photo.jpg',
            'etag' => $this->read('notes/first/photo.jpg')['etag']
        ], $this->props());

        $this->assertFalse($result['isError'], $result['content'][0]['text']);
        $this->assertSame('https://example.com/panel/pages/notes+first/files/photo.jpg', $result['structuredContent']['panelUrl']);
        $this->assertSame('A lake at dawn', self::bootApp($this->props())->file('notes/first/photo.jpg')->content()->get('alt')->value());
    }

    #[Test]
    public function tells_an_open_panel_view_when_an_agent_published(): void
    {
        $this->publish();

        $this->assertNotNull($this->lastWrite('pages/notes+first'));
    }

    #[Test]
    public function publishes_only_the_requested_language(): void
    {
        // A multi-language site reads `note.en.txt` and `note.de.txt`, so the single-language files go.
        Dir::remove(self::indexRoot() . '/content/notes/1_first');
        self::writeContent('notes/1_first/note.en.txt', ['Title' => 'First note', 'Intro' => 'Hello']);
        self::writeContent('notes/1_first/note.de.txt', ['Title' => 'Erste Notiz', 'Intro' => 'Hallo']);
        self::writeContent('notes/1_first/_changes/note.en.txt', ['Title' => 'First note', 'Intro' => 'Hello, agent', 'Lock' => 'ada'], time() - 601);
        self::writeContent('notes/1_first/_changes/note.de.txt', ['Title' => 'Erste Notiz', 'Intro' => 'Hallo, Agent', 'Lock' => 'ada'], time() - 601);
        $props = $this->props([
            'options' => ['languages' => true],
            'languages' => [
                ['code' => 'en', 'name' => 'English', 'default' => true],
                ['code' => 'de', 'name' => 'Deutsch']
            ]
        ]);

        $etag = $this->callTool('get_content', ['model' => 'notes/first', 'language' => 'de'], $props)['structuredContent']['etag'];
        $result = $this->callTool('publish_changes', ['model' => 'notes/first', 'language' => 'de', 'etag' => $etag], $props);

        $this->assertFalse($result['isError'], $result['content'][0]['text']);
        $this->assertSame('https://example.com/panel/pages/notes+first?language=de', $result['structuredContent']['panelUrl']);

        $page = self::bootApp($props)->page('notes/first');
        $this->assertSame('Hallo, Agent', $page->content('de')->get('intro')->value());
        $this->assertSame('Hello', $page->content('en')->get('intro')->value());
        $this->assertFalse($page->version('changes')->exists('de'));
        $this->assertTrue($page->version('changes')->exists('en'));
    }

    #[Test]
    public function refuses_changes_with_validation_errors_and_names_them(): void
    {
        self::writeContent('notes/1_first/_changes/note.txt', ['Title' => 'First note', 'Intro' => '', 'Lock' => 'ada'], time() - 601);
        $props = $this->props(['blueprints' => ['pages/note' => ['fields' => ['intro' => ['type' => 'text', 'required' => true]]]]]);

        $result = $this->callTool('publish_changes', [
            'model' => 'notes/first',
            'etag' => $this->callTool('get_content', ['model' => 'notes/first'], $props)['structuredContent']['etag']
        ], $props);

        $this->assertTrue($result['isError']);
        $this->assertStringStartsWith('The changes have validation errors, so they stay unpublished. Fix them with prepare_changes: intro: ', $result['content'][0]['text']);
        $this->assertTrue(self::bootApp($props)->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    public function publishes_the_changes_of_a_draft_with_validation_errors(): void
    {
        self::writeContent('notes/_drafts/idea/note.txt', ['Title' => 'Idea', 'Intro' => 'Hello', 'Uuid' => 'idea']);
        self::writeContent('notes/_drafts/idea/_changes/note.txt', ['Title' => 'Idea', 'Intro' => '', 'Uuid' => 'idea', 'Lock' => 'ada'], time() - 601);
        $props = $this->props(['blueprints' => ['pages/note' => ['fields' => ['intro' => ['type' => 'text', 'required' => true]]]]]);

        $result = $this->callTool('publish_changes', [
            'model' => 'notes/idea',
            'etag' => $this->callTool('get_content', ['model' => 'notes/idea'], $props)['structuredContent']['etag']
        ], $props);

        $this->assertFalse($result['isError'], $result['content'][0]['text']);
        $this->assertSame(['The page is a draft, so it stays hidden from visitors. change_status makes it public.'], $result['structuredContent']['notices']);
        $this->assertSame('', self::bootApp($props)->page('notes/idea')->content()->get('intro')->value());
    }

    #[Test]
    public function refuses_a_stale_etag(): void
    {
        $result = $this->callTool('publish_changes', ['model' => 'notes/first', 'etag' => 'stale'], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('The content changed since your etag. Read it again with get_content and base the call on what it holds now.', $result['content'][0]['text']);
        $this->assertTrue(self::bootApp($this->props())->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    public function refuses_to_publish_while_the_user_edits_in_the_panel(): void
    {
        self::writeContent('notes/1_first/_changes/note.txt', ['Title' => 'First note', 'Intro' => 'Typing', 'Lock' => 'ada']);

        $result = $this->publish();

        $this->assertTrue($result['isError']);
        $this->assertStringStartsWith('Ada edited this content in the Panel', $result['content'][0]['text']);
        $this->assertSame('Hello', self::bootApp($this->props())->page('notes/first')->content()->get('intro')->value());
    }

    #[Test]
    public function says_when_there_is_nothing_to_publish(): void
    {
        unlink(self::indexRoot() . '/content/notes/1_first/_changes/note.txt');

        $result = $this->publish();

        $this->assertTrue($result['isError']);
        $this->assertSame('There are no unsaved changes to publish.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_an_account_that_may_not_update_the_page(): void
    {
        $result = $this->publish(role: 'reviewer');

        $this->assertTrue($result['isError']);
        $this->assertSame('You are not allowed to update "first"', $result['content'][0]['text']);
        $this->assertSame('Hello', self::bootApp($this->props())->page('notes/first')->content()->get('intro')->value());
    }

    private function publish(string $role = 'editor'): array
    {
        return $this->callTool('publish_changes', [
            'model' => 'notes/first',
            'etag' => $this->read()['etag']
        ], $this->props(['users' => [['role' => $role]]]));
    }

    private function read(string $model = 'notes/first'): array
    {
        return $this->callTool('get_content', ['model' => $model], $this->props())['structuredContent'];
    }

    private function props(array $props = []): array
    {
        return array_replace_recursive([
            'blueprints' => [
                'pages/note' => ['fields' => ['intro' => ['type' => 'text']]],
                'files/image' => ['fields' => ['alt' => ['type' => 'text']]],
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['pages' => ['update' => false]]]
            ]
        ], $props);
    }
}
