<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use Kirby\Data\Json;
use Kirby\Filesystem\Dir;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class PrepareChangesToolTest extends McpToolTestCase
{
    private const CHANGES = 'notes/first/_changes/note.txt';

    protected function setUp(): void
    {
        parent::setUp();

        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
        self::writeContent('notes/first/note.txt', [
            'Title' => 'First note',
            'Intro' => 'Hello',
            'Summary' => 'A first note',
            'Locked' => 'Fixed',
            'Text' => 'Watch this: <iframe src="https://www.youtube.com/embed/x"></iframe>',
            'Body' => Json::encode([
                ['id' => 'b1', 'type' => 'text', 'isHidden' => false, 'content' => ['text' => '<p>Welcome</p>']]
            ]),
            'Uuid' => 'first-uuid'
        ]);
        self::writeContent('notes/first/photo.jpg.txt', ['Alt' => 'A lake', 'Template' => 'image', 'Uuid' => 'photo-uuid']);
        touch(self::indexRoot() . '/content/notes/first/photo.jpg');
        self::writeContent('site.txt', ['Title' => 'Kirby Playground', 'Tagline' => 'Hello']);
    }

    #[Test]
    public function writes_the_fields_to_the_changes_and_keeps_the_others(): void
    {
        $result = $this->prepare(['intro' => 'Hello, agent']);

        $this->assertSame([['name' => 'intro', 'before' => 'Hello', 'after' => 'Hello, agent']], $result['changed']);
        $this->assertSame('changes', $result['version']);
        $this->assertSame($this->read()['etag'], $result['etag']);
        $this->assertSame('https://example.com/panel/pages/notes+first/preview/compare', $result['panelUrl']);

        $page = $this->app()->page('notes/first');
        $this->assertSame('Hello, agent', $page->version('changes')->content()->get('intro')->value());
        $this->assertSame('A first note', $page->version('changes')->content()->get('summary')->value());
        $this->assertSame('Hello', $page->version('latest')->content()->get('intro')->value());
    }

    #[Test]
    public function writes_onto_the_changes_it_wrote_before(): void
    {
        $this->prepare(['intro' => 'Hello, agent']);
        $this->prepare(['summary' => 'Two fields']);

        $changes = $this->app()->page('notes/first')->version('changes')->content();

        $this->assertSame('Hello, agent', $changes->get('intro')->value());
        $this->assertSame('Two fields', $changes->get('summary')->value());
    }

    #[Test]
    public function refuses_to_write_after_a_panel_edit_onto_its_own_changes(): void
    {
        $this->prepare(['intro' => 'Hello, agent']);
        self::writeContent(self::CHANGES, ['Title' => 'First note', 'Intro' => 'Typing', 'Lock' => 'ada'], time() - 60);

        $result = $this->prepareResult(['summary' => 'Two fields']);

        $this->assertTrue($result['isError']);
        $this->assertStringStartsWith('Ada edited this content in the Panel', $result['content'][0]['text']);
    }

    #[Test]
    public function drops_changes_that_equal_the_published_content(): void
    {
        $result = $this->prepare(['intro' => 'Hello']);

        $this->assertSame([], $result['changed']);
        $this->assertSame('latest', $result['version']);
        $this->assertFalse($this->app()->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    public function refuses_a_stale_etag(): void
    {
        $result = $this->callTool('prepare_changes', ['model' => 'notes/first', 'etag' => 'stale', 'fields' => ['intro' => 'Hi']], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertStringStartsWith('The content changed since your etag.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_to_write_while_the_user_edits_in_the_panel(): void
    {
        self::writeContent(self::CHANGES, ['Intro' => 'Typing', 'Lock' => 'ada']);

        $result = $this->prepareResult(['intro' => 'Hello, agent']);

        $this->assertTrue($result['isError']);
        $this->assertSame('Ada edited this content in the Panel in the last 10 minutes and may still be editing it. Ask them to leave its view in the Panel, then try again.', $result['content'][0]['text']);
    }

    #[Test]
    public function writes_once_the_user_left_the_page_in_the_panel(): void
    {
        // Leaving the view releases the lock.
        self::writeContent(self::CHANGES, ['Intro' => 'Typed']);

        $result = $this->prepare(['summary' => 'Written']);

        $this->assertSame('Typed', $this->app()->page('notes/first')->version('changes')->content()->get('intro')->value());
        $this->assertSame('changes', $result['version']);
    }

    #[Test]
    public function refuses_to_write_after_a_recent_panel_edit_without_content_locking(): void
    {
        self::writeContent(self::CHANGES, ['Intro' => 'Typed']);

        $result = $this->callTool('prepare_changes', [
            'model' => 'notes/first',
            'etag' => $this->read()['etag'],
            'fields' => ['summary' => 'Written']
        ], $this->props(['options' => ['content' => ['locking' => false]]]));

        $this->assertTrue($result['isError']);
        $this->assertSame('Someone edited this content in the Panel in the last 10 minutes and may still be editing it. Try again once 10 minutes have passed since the last edit.', $result['content'][0]['text']);
    }

    #[Test]
    public function writes_ten_minutes_after_the_last_panel_edit(): void
    {
        self::writeContent(self::CHANGES, ['Intro' => 'Typed', 'Lock' => 'ada'], time() - 601);

        $this->assertFalse($this->prepareResult(['summary' => 'Written'])['isError']);
    }

    #[Test]
    public function ignores_the_fields_an_agent_may_not_write(): void
    {
        $result = $this->prepare(['intro' => 'Hi', 'unknown' => 'x', 'locked' => 'Changed', 'slug' => 'renamed', 'map' => 'x']);

        $this->assertSame(['intro'], array_column($result['changed'], 'name'));
        $this->assertSame(['unknown', 'locked', 'slug', 'map'], array_column($result['ignored'], 'name'));
        $this->assertSame('The field is disabled.', $result['ignored'][1]['reason']);
        $this->assertSame("Agents can't write fields of the type locator; tell the user to edit it in the Panel.", $result['ignored'][3]['reason']);
        $this->assertNull($this->app()->page('notes/first')->version('changes')->content()->get('unknown')->value());
    }

    #[Test]
    public function refuses_a_call_without_a_writable_field(): void
    {
        $result = $this->prepareResult(['locked' => 'Changed']);

        $this->assertTrue($result['isError']);
        $this->assertSame('None of the fields can be written. locked: The field is disabled.', $result['content'][0]['text']);
    }

    #[Test]
    public function writes_the_title_when_the_role_may_change_it(): void
    {
        $result = $this->prepare(['title' => 'A better title']);

        $this->assertSame([['name' => 'title', 'before' => 'First note', 'after' => 'A better title']], $result['changed']);
        $this->assertSame('First note', $this->app()->page('notes/first')->version('latest')->content()->title()->value());
    }

    #[Test]
    public function ignores_the_title_when_the_role_may_not_change_it(): void
    {
        $result = $this->prepare(['title' => 'A better title', 'intro' => 'Hi'], role: 'writer');

        $this->assertSame([['name' => 'title', 'reason' => 'The account may not change the title.']], $result['ignored']);
    }

    #[Test]
    public function refuses_an_account_that_may_not_update_the_page(): void
    {
        // The role may change the title, so the write reaches Kirby's own permission check.
        $result = $this->prepareResult(['title' => 'A better title'], role: 'reviewer');

        $this->assertTrue($result['isError']);
        $this->assertSame('You are not allowed to change this version', $result['content'][0]['text']);
        $this->assertFalse($this->app()->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    public function refuses_new_active_markup(): void
    {
        $result = $this->prepareResult(['intro' => 'Hi <script>alert(1)</script>']);

        $this->assertTrue($result['isError']);
        $this->assertSame("`intro` contains the element `<script>`, which the site doesn't accept from agents. Write it without.", $result['content'][0]['text']);
        $this->assertFalse($this->app()->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    public function keeps_active_markup_an_editor_placed(): void
    {
        $result = $this->prepare([
            'text' => 'Watch it: <iframe src="https://www.youtube.com/embed/x"></iframe>'
        ]);

        $this->assertSame(['text'], array_column($result['changed'], 'name'));
    }

    #[Test]
    public function counts_the_items_of_a_list_field_it_changes(): void
    {
        $result = $this->prepare(['body' => []]);

        $this->assertSame([1, 0], [$result['changed'][0]['itemsBefore'], $result['changed'][0]['itemsAfter']]);
    }

    #[Test]
    public function adds_ids_to_new_blocks(): void
    {
        $this->prepare(['body' => [['type' => 'text', 'content' => ['text' => '<p>New</p>']]]]);

        $blocks = $this->app()->page('notes/first')->version('changes')->content()->get('body')->toBlocks();

        $this->assertSame('<p>New</p>', $blocks->first()->text()->value());
        $this->assertNotEmpty($blocks->first()->id());
    }

    #[Test]
    public function returns_validation_warnings(): void
    {
        $result = $this->prepare(['summary' => '']);

        $this->assertSame('summary', $result['warnings'][0]['field']);
    }

    #[Test]
    public function writes_the_alt_text_of_a_file(): void
    {
        $result = $this->prepare(['alt' => 'A lake at dawn'], model: 'file://photo-uuid');

        $this->assertSame([['name' => 'alt', 'before' => 'A lake', 'after' => 'A lake at dawn']], $result['changed']);
        $this->assertSame('A lake at dawn', $this->app()->file('file://photo-uuid')->version('changes')->content()->get('alt')->value());
    }

    #[Test]
    public function says_that_the_list_of_changes_leaves_out_the_site(): void
    {
        $result = $this->prepare(['tagline' => 'Hello, agent'], model: 'site');

        $this->assertStringContainsString('leaves out the site', $result['notices'][1]);
    }

    #[Test]
    public function writes_a_secondary_language(): void
    {
        $props = $this->multilang();

        $result = $this->callTool('prepare_changes', [
            'model' => 'notes/first',
            'language' => 'de',
            'etag' => $this->read(language: 'de', props: $props)['etag'],
            'fields' => ['intro' => 'Hallo, Agent']
        ], $props)['structuredContent'];

        $page = self::bootApp($props)->page('notes/first');
        $this->assertSame('https://example.com/panel/pages/notes+first/preview/compare?language=de', $result['panelUrl']);
        $this->assertSame('Hallo, Agent', $page->version('changes')->content('de')->get('intro')->value());
        $this->assertFalse($page->version('changes')->exists('en'));
    }

    #[Test]
    public function ignores_a_field_with_translate_false_in_a_secondary_language(): void
    {
        $props = $this->multilang();

        $result = $this->callTool('prepare_changes', [
            'model' => 'notes/first',
            'language' => 'de',
            'etag' => $this->read(language: 'de', props: $props)['etag'],
            'fields' => ['intro' => 'Hallo, Agent', 'price' => '12']
        ], $props)['structuredContent'];

        $this->assertSame(['price'], array_column($result['ignored'], 'name'));
    }

    #[Test]
    public function keeps_the_etag_when_only_the_lock_of_the_changes_changes(): void
    {
        self::writeContent(self::CHANGES, ['Title' => 'First note', 'Intro' => 'Hello, agent', 'Lock' => 'ada'], time() - 601);
        $etag = $this->read()['etag'];
        self::writeContent(self::CHANGES, ['Title' => 'First note', 'Intro' => 'Hello, agent', 'Lock' => 'grace'], time() - 601);

        $this->assertSame($etag, $this->read()['etag']);
    }

    #[Test]
    public function keeps_the_etag_of_a_translation_when_the_default_language_changes(): void
    {
        $props = $this->multilang();
        self::writeContent('notes/first/_changes/note.de.txt', ['Title' => 'Erste Notiz', 'Intro' => 'Hallo, Agent'], time() - 601);
        $etag = $this->read(language: 'de', props: $props)['etag'];

        $this->callTool('prepare_changes', [
            'model' => 'notes/first',
            'etag' => $this->read(props: $props)['etag'],
            'fields' => ['intro' => 'Hello, agent']
        ], $props);

        $this->assertSame($etag, $this->read(language: 'de', props: $props)['etag']);
    }

    #[Test]
    public function tells_an_open_panel_view_when_an_agent_wrote(): void
    {
        $this->assertNull($this->lastWrite('pages/notes+first'));

        $this->prepare(['intro' => 'Hello, agent']);

        $this->assertEqualsWithDelta(microtime(true) * 1000, $this->lastWrite('pages/notes+first'), 5000);
    }

    #[Test]
    public function tells_an_open_panel_view_after_a_slug_change(): void
    {
        $this->prepare(['intro' => 'Hello, agent']);
        rename(self::indexRoot() . '/content/notes/first', self::indexRoot() . '/content/notes/renamed');

        $this->assertNotNull($this->lastWrite('pages/notes+renamed'));
    }

    #[Test]
    public function tells_an_open_file_view_when_an_agent_wrote(): void
    {
        $this->prepare(['alt' => 'A lake at dawn'], model: 'file://photo-uuid');

        $this->assertNotNull($this->lastWrite('pages/notes+first/files/photo.jpg'));
    }

    #[Test]
    public function tells_only_the_view_of_the_language_an_agent_wrote(): void
    {
        $props = $this->multilang();

        $this->callTool('prepare_changes', [
            'model' => 'notes/first',
            'language' => 'de',
            'etag' => $this->read(language: 'de', props: $props)['etag'],
            'fields' => ['intro' => 'Hallo, Agent']
        ], $props);

        $this->assertNotNull($this->lastWrite('pages/notes+first', 'de', $props));
        $this->assertNull($this->lastWrite('pages/notes+first', 'en', $props));
    }

    private function prepare(array $fields, string $model = 'notes/first', string $role = 'editor'): array
    {
        $result = $this->prepareResult($fields, $model, $role);
        $this->assertFalse($result['isError'], $result['content'][0]['text']);

        return $result['structuredContent'];
    }

    private function prepareResult(array $fields, string $model = 'notes/first', string $role = 'editor'): array
    {
        $props = $this->props(['users' => [['role' => $role]]]);

        return $this->callTool('prepare_changes', [
            'model' => $model,
            'etag' => $this->read($model)['etag'],
            'fields' => $fields
        ], $props);
    }

    private function read(string $model = 'notes/first', string|null $language = null, array|null $props = null): array
    {
        return $this->callTool('get_content', array_filter(['model' => $model, 'language' => $language]), $props ?? $this->props())['structuredContent'];
    }

    private function multilang(): array
    {
        // A multi-language site reads `note.en.txt` and `note.de.txt`, so the single-language files go.
        Dir::remove(self::indexRoot() . '/content/notes/first');
        self::writeContent('notes/first/note.en.txt', ['Title' => 'First note', 'Intro' => 'Hello', 'Summary' => 'A first note', 'Price' => '10', 'Uuid' => 'first-uuid']);
        self::writeContent('notes/first/note.de.txt', ['Title' => 'Erste Notiz', 'Intro' => 'Hallo', 'Summary' => 'Eine erste Notiz']);

        return $this->props([
            'options' => ['languages' => true],
            'languages' => [
                ['code' => 'en', 'name' => 'English', 'default' => true],
                ['code' => 'de', 'name' => 'Deutsch']
            ]
        ]);
    }

    private function app(): App
    {
        return self::bootApp($this->props());
    }

    private function props(array $props = []): array
    {
        return array_replace_recursive([
            'options' => ['johannschopplich.copilot' => ['agents' => true]],
            // A plugin's field type, which has no format hint.
            'fields' => ['locator' => []],
            'blueprints' => [
                'pages/note' => [
                    'fields' => [
                        'intro' => ['type' => 'text'],
                        'summary' => ['type' => 'text', 'required' => true],
                        'locked' => ['type' => 'text', 'disabled' => true],
                        'text' => ['type' => 'textarea'],
                        'body' => ['type' => 'blocks', 'fieldsets' => ['text']],
                        'price' => ['type' => 'text', 'translate' => false],
                        'map' => ['type' => 'locator']
                    ]
                ],
                'files/image' => ['fields' => ['alt' => ['type' => 'text']]],
                'site' => ['fields' => ['tagline' => ['type' => 'text']]],
                'users/editor' => ['name' => 'editor', 'title' => 'Editor'],
                'users/writer' => ['name' => 'writer', 'permissions' => ['pages' => ['changeTitle' => false]]],
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['pages' => ['update' => false, 'changeTitle' => true]]]
            ],
            'users' => [
                ['id' => 'ada', 'email' => 'ada@example.com', 'name' => 'Ada', 'role' => 'editor'],
                ['id' => 'grace', 'email' => 'grace@example.com', 'name' => 'Grace', 'role' => 'editor']
            ]
        ], $props);
    }
}
