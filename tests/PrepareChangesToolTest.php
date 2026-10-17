<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use Kirby\Cms\Blocks;
use Kirby\Data\Json;
use Kirby\Data\Yaml;
use Kirby\Filesystem\Dir;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\Attributes\TestWith;

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
        $this->assertTrue($result['hasChanges']);
        $content = $this->read();
        $this->assertSame($content['etag'], $result['etag']);
        $this->assertNull($content['changesBy']);
        $this->assertSame('https://example.com/panel/pages/notes+first/preview/compare', $result['panelUrl']);

        $page = $this->app()->page('notes/first');
        $this->assertSame('Hello, agent', $page->version('changes')->content()->get('intro')->value());
        $this->assertSame('A first note', $page->version('changes')->content()->get('summary')->value());
        $this->assertSame('Hello', $page->version('latest')->content()->get('intro')->value());
    }

    #[Test]
    public function reports_a_pages_field_as_a_uuid_list(): void
    {
        self::writeContent('notes/second/note.txt', ['Title' => 'Second note', 'Uuid' => 'second-uuid']);
        $props = $this->props(['blueprints' => ['pages/note' => ['fields' => ['related' => ['type' => 'pages']]]]]);

        $result = $this->callTool('prepare_changes', [
            'model' => 'notes/first',
            'etag' => $this->read(props: $props)['etag'],
            'fields' => ['related' => ['page://second-uuid']]
        ], $props)['structuredContent'];

        $this->assertSame([['name' => 'related', 'before' => [], 'after' => ['page://second-uuid'], 'itemsBefore' => 0, 'itemsAfter' => 1]], $result['changed']);
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
    public function drops_changes_that_equal_the_published_content(): void
    {
        // A stored URL Kirby rejects.
        self::writeContent('notes/first/note.txt', ['Title' => 'First note', 'Intro' => 'Hello', 'Website' => 'www.example.com', 'Uuid' => 'first-uuid']);

        $result = $this->prepare(['intro' => 'Hello', 'website' => 'www.example.com']);

        $this->assertSame([], $result['changed']);
        $this->assertFalse($result['hasChanges']);
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
    public function names_the_language_to_read_again_in_when_refusing_an_etag_of_another_language(): void
    {
        $props = $this->multilang();

        $result = $this->callTool('prepare_changes', [
            'model' => 'notes/first',
            'language' => 'de',
            'etag' => $this->read(props: $props)['etag'],
            'fields' => ['intro' => 'Hallo, Agent']
        ], $props);

        $this->assertStringContainsString('get_content with `language` "de"', $result['content'][0]['text']);
    }

    #[Test]
    public function writes_onto_the_changes_the_user_is_making_in_the_panel(): void
    {
        self::writeContent(self::CHANGES, ['Intro' => 'Typing', 'Lock' => 'ada']);

        $this->prepare(['summary' => 'Written']);

        $changes = $this->app()->page('notes/first')->version('changes')->content();

        $this->assertSame('Typing', $changes->get('intro')->value());
        $this->assertSame('Written', $changes->get('summary')->value());
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
    public function writes_metaDescription_by_its_camelcase_blueprint_key(): void
    {
        $props = $this->props(['blueprints' => ['pages/note' => ['fields' => ['metaDescription' => ['type' => 'text']]]]]);

        $result = $this->callTool('prepare_changes', [
            'model' => 'notes/first',
            'etag' => $this->read(props: $props)['etag'],
            'fields' => ['metaDescription' => 'About the first note']
        ], $props)['structuredContent'];

        $this->assertSame(['metadescription'], array_column($result['changed'], 'name'));
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
        $result = $this->prepareResult(['intro' => 'Hi'], role: 'reviewer');

        $this->assertTrue($result['isError']);
        $this->assertSame("The account may not change this content – its role or the blueprint's options don't allow it.", $result['content'][0]['text']);
        $this->assertFalse($this->app()->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    #[TestWith(['intro', 'Hi <script>alert(1)</script>', 'the element `<script>`'], 'script')]
    #[TestWith(['body', '[{"type":"markdown","content":{"text":"\\u003Cscript>alert(1)\\u003C/script>"}}]', 'the element `<script>`'], 'blocks as a JSON string')]
    #[TestWith(['body', [['type' => 'text', 'content' => ['text' => '<p>Shoe&quot;&#32;onmouseover=&#39;alert(1)</p>']]], 'the event attribute `onmouseover`'], 'encoded quote and space in a writer')]
    public function refuses_new_active_markup(string $name, mixed $value, string $markup): void
    {
        $result = $this->prepareResult([$name => $value]);

        $this->assertTrue($result['isError']);
        $this->assertSame("`{$name}` contains {$markup}, which the site doesn't accept from agents. Write it without. What the field already holds passes when you send it unchanged.", $result['content'][0]['text']);
        $this->assertFalse($this->app()->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    #[TestWith(['website', 'javascript&colon;alert(1)', '`website`'], 'script URL with an encoded colon')]
    #[TestWith(['cta', 'javascript:alert(1)', '`cta`'], 'script URL in a link field with custom links')]
    #[TestWith(['body', [['type' => 'button', 'content' => ['link' => 'javascript:alert(1)']]], '`link` in `body`'], 'script URL in a block')]
    #[TestWith(['links', [['url' => 'javascript:alert(1)']], '`url` in `links`'], 'script URL in a structure row')]
    public function refuses_a_script_url(string $name, mixed $value, string $place): void
    {
        $result = $this->prepareResult([$name => $value]);

        $this->assertTrue($result['isError']);
        $this->assertSame("{$place} contains a `javascript:` URL, which the site doesn't accept from agents. Write it without. What the field already holds passes when you send it unchanged.", $result['content'][0]['text']);
        $this->assertFalse($this->app()->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    public function keeps_a_script_url_that_a_structure_row_already_holds(): void
    {
        self::writeContent('notes/first/note.txt', ['Title' => 'First note', 'Links' => Yaml::encode([['url' => 'javascript:alert(1)']]), 'Uuid' => 'first-uuid']);

        $result = $this->prepare(['links' => [['url' => 'javascript:alert(1)'], ['url' => 'https://example.com']]]);

        $this->assertSame(['links'], array_column($result['changed'], 'name'));
    }

    #[Test]
    #[TestWith(['Watch it: <iframe src="https://www.youtube.com/embed/x"></iframe>'], 'iframe the field holds')]
    #[TestWith(['a &quot; onmouseover=alert(1) x=&quot;'], 'encoded quotes')]
    #[TestWith(['JavaScript: The Good Parts'], 'script scheme outside a URL field')]
    public function writes_a_textarea_without_new_active_markup(string $text): void
    {
        $result = $this->prepare(['text' => $text]);

        $this->assertSame(['text'], array_column($result['changed'], 'name'));
    }

    #[Test]
    public function counts_the_items_of_a_list_field_it_changes(): void
    {
        $result = $this->prepare(['body' => []]);

        $this->assertSame([1, 0], [$result['changed'][0]['itemsBefore'], $result['changed'][0]['itemsAfter']]);
    }

    #[Test]
    public function replaces_passages_of_a_field_in_order_and_keeps_the_rest(): void
    {
        $this->editResult([
            ['operation' => 'replace', 'field' => 'text', 'old' => 'Watch', 'new' => 'See'],
            ['operation' => 'replace', 'field' => 'text', 'old' => 'See this', 'new' => 'See that']
        ]);

        $this->assertSame('See that: <iframe src="https://www.youtube.com/embed/x"></iframe>', $this->app()->page('notes/first')->version('changes')->content()->get('text')->value());
    }

    #[Test]
    public function replaces_a_passage_inside_an_entry(): void
    {
        self::writeContent('notes/first/note.txt', ['Title' => 'First note', 'Summary' => 'A first note', 'Entries' => "- First entry\n- Second entry\n", 'Uuid' => 'first-uuid']);

        $this->editResult([['operation' => 'replace', 'field' => 'entries', 'old' => 'Second', 'new' => 'Last']]);

        $this->assertSame(['First entry', 'Last entry'], $this->app()->page('notes/first')->version('changes')->content()->get('entries')->toData('yaml'));
    }

    #[Test]
    public function replaces_the_text_of_the_block_with_the_given_id(): void
    {
        self::writeBlocks([self::block('b1', '<p>Welcome</p>'), self::block('b2', '<p>Welcome back</p>')]);

        $this->editResult([['operation' => 'replace', 'field' => 'body', 'id' => 'b2', 'old' => 'Welcome', 'new' => 'Good to see you']]);

        $this->assertSame(['<p>Welcome</p>', '<p>Good to see you back</p>'], $this->storedBlocks()->values(fn ($block) => $block->text()->value()));
    }

    #[Test]
    public function sets_a_field_of_a_block_and_hides_another(): void
    {
        self::writeBlocks([['id' => 'h1', 'type' => 'heading', 'isHidden' => false, 'content' => ['level' => 'h2', 'text' => 'Intro']], self::block('b1', '<p>Old</p>')]);

        $this->editResult([
            ['operation' => 'set', 'field' => 'body', 'id' => 'h1', 'name' => 'level', 'value' => 'h3'],
            ['operation' => 'set', 'field' => 'body', 'id' => 'b1', 'name' => 'isHidden', 'value' => true]
        ]);

        $blocks = $this->storedBlocks();
        $this->assertSame('h3', $blocks->first()->level()->value());
        $this->assertTrue($blocks->last()->isHidden());
    }

    #[Test]
    public function inserts_a_block_with_its_defaults_after_another_and_returns_its_id(): void
    {
        self::writeBlocks([self::block('b1', '<p>First</p>'), self::block('b2', '<p>Last</p>')]);

        $result = $this->editResult([['operation' => 'insert', 'field' => 'body', 'after' => 'b1', 'type' => 'heading', 'content' => ['text' => 'Between']]])['structuredContent'];

        $blocks = $this->storedBlocks();
        $this->assertSame(['b1', $result['inserted'][0]['id'], 'b2'], $blocks->keys());
        $this->assertSame(['Between', 'h2'], [$blocks->nth(1)->text()->value(), $blocks->nth(1)->level()->value()]);
    }

    #[Test]
    public function inserts_blocks_after_the_same_block_in_reading_order(): void
    {
        self::writeBlocks([self::block('b1', '<p>First</p>'), self::block('b2', '<p>Last</p>')]);

        $this->editResult([
            ['operation' => 'insert', 'field' => 'body', 'after' => 'b1', 'type' => 'text', 'content' => ['text' => '<p>One</p>']],
            ['operation' => 'insert', 'field' => 'body', 'after' => 'b1', 'type' => 'text', 'content' => ['text' => '<p>Two</p>']]
        ]);

        $this->assertSame(['<p>First</p>', '<p>One</p>', '<p>Two</p>', '<p>Last</p>'], $this->storedBlocks()->values(fn ($block) => $block->text()->value()));
    }

    #[Test]
    public function moves_a_block_before_another_and_removes_one(): void
    {
        self::writeBlocks([self::block('b1', '<p>One</p>'), self::block('b2', '<p>Two</p>'), self::block('b3', '<p>Three</p>')]);

        $this->editResult([
            ['operation' => 'move', 'field' => 'body', 'id' => 'b3', 'before' => 'b1'],
            ['operation' => 'remove', 'field' => 'body', 'id' => 'b2']
        ]);

        $this->assertSame(['b3', 'b1'], $this->storedBlocks()->keys());
    }

    #[Test]
    public function moves_a_block_into_a_layout_column_and_appends_a_row(): void
    {
        self::writeContent('notes/first/note.txt', ['Title' => 'First note', 'Layout' => Json::encode([[
            'id' => 'r1',
            'attrs' => [],
            'columns' => [
                ['id' => 'c1', 'width' => '1/2', 'blocks' => [self::block('l1', '<p>Left</p>')]],
                ['id' => 'c2', 'width' => '1/2', 'blocks' => []]
            ]
        ]]), 'Uuid' => 'first-uuid']);

        $result = $this->editResult([
            ['operation' => 'move', 'field' => 'layout', 'id' => 'l1', 'into' => 'c2'],
            ['operation' => 'insert', 'field' => 'layout', 'columns' => [['width' => '1/1', 'blocks' => [['type' => 'text', 'content' => ['text' => '<p>Below</p>']]]]]]
        ])['structuredContent'];

        $layouts = $this->app()->page('notes/first')->version('changes')->content()->get('layout')->toLayouts();
        $this->assertSame([[], ['l1']], $layouts->first()->columns()->values(fn ($column) => $column->blocks()->keys()));
        $this->assertSame($result['inserted'][0]['id'], $layouts->last()->id());
        $this->assertSame($result['inserted'][0]['columns'][0]['blocks'][0], $layouts->last()->columns()->first()->blocks()->first()->id());
        $this->assertSame('<p>Below</p>', $layouts->last()->columns()->first()->blocks()->first()->text()->value());
    }

    #[Test]
    #[TestWith([[['operation' => 'replace', 'field' => 'text', 'old' => 'Goodbye', 'new' => 'x']], 'edit 1: `old` doesn\'t occur in text. get_content returns its current value.'])]
    #[TestWith([[['operation' => 'replace', 'field' => 'text', 'old' => 'iframe', 'new' => 'x']], 'edit 1: `old` occurs 2 times in text. Make it longer so it occurs once.'])]
    #[TestWith([[['operation' => 'replace', 'field' => 'body', 'old' => 'b1', 'new' => 'x']], 'edit 1: `old` doesn\'t occur in body. get_content returns its current value.'])]
    #[TestWith([[['operation' => 'remove', 'field' => 'body', 'id' => 'b9']], 'edit 1: body has no block, layout row, or layout column with the id b9. get_content returns the ids.'])]
    #[TestWith([[['operation' => 'insert', 'field' => 'body', 'type' => 'gallery']], 'edit 1: body takes no block of the type gallery. Its types: text, markdown, button, heading.'])]
    #[TestWith([[['operation' => 'set', 'field' => 'body', 'id' => 'b1', 'name' => 'color', 'value' => 'red']], 'edit 1: The block b1 has no field color. Its fields: text.'])]
    #[TestWith([[['operation' => 'replace', 'field' => 'category', 'old' => 'news', 'new' => 'essay']], 'edit 1: category holds no text to edit. Send it whole in `fields`.'])]
    #[TestWith([[['operation' => 'insert', 'field' => 'text', 'type' => 'text']], 'edit 1: text holds no blocks or layout rows. Send it whole in `fields`.'])]
    #[TestWith([[['operation' => 'replace', 'field' => 'nope', 'old' => 'x', 'new' => 'y']], 'edit 1: nope: There is no such field. get_content lists the fields.'])]
    public function refuses_an_edit_it_cant_apply(array $edits, string $message): void
    {
        $result = $this->editResult($edits);

        $this->assertTrue($result['isError']);
        $this->assertSame($message, $result['content'][0]['text']);
        $this->assertFalse($this->app()->page('notes/first')->version('changes')->exists());
    }

    #[Test]
    public function refuses_a_field_in_both_fields_and_edits(): void
    {
        $result = $this->editResult([['operation' => 'replace', 'field' => 'intro', 'old' => 'Hello', 'new' => 'Hi']], ['intro' => 'Hey']);

        $this->assertTrue($result['isError']);
        $this->assertSame('edit 1: intro is both in `fields` and in `edits`. Send it once.', $result['content'][0]['text']);
    }

    #[Test]
    public function counts_the_blocks_of_a_layout_field(): void
    {
        $result = $this->prepare(['layout' => [
            ['id' => 'r1', 'attrs' => [], 'columns' => [
                ['id' => 'c1', 'width' => '1/2', 'blocks' => [['id' => 'l1', 'type' => 'text', 'content' => ['text' => '<p>One</p>']]]],
                ['id' => 'c2', 'width' => '1/2', 'blocks' => [
                    ['id' => 'l2', 'type' => 'text', 'content' => ['text' => '<p>Two</p>']],
                    ['id' => 'l3', 'type' => 'text', 'content' => ['text' => '<p>Three</p>']]
                ]]
            ]]
        ]]);

        $this->assertSame([0, 3], [$result['changed'][0]['itemsBefore'], $result['changed'][0]['itemsAfter']]);
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
    public function warns_of_validation_errors_and_of_a_value_kirby_stores_empty(): void
    {
        $result = $this->prepare(['summary' => '', 'website' => 'www.example.com', 'category' => 'unknown']);

        $this->assertSame(['summary', 'website', 'category'], array_column($result['warnings'], 'field'));
        $this->assertSame('The field doesn\'t take "unknown", so Kirby stored "".', $result['warnings'][2]['message']);
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

        $this->assertStringContainsString('leaves out the site', $result['notices'][0]);
    }

    #[Test]
    public function writes_a_secondary_language(): void
    {
        $props = $this->multilang();

        $result = $this->callTool('prepare_changes', [
            'model' => 'notes/first',
            'language' => 'de',
            'etag' => $this->read(language: 'de', props: $props)['etag'],
            'fields' => ['intro' => 'Hallo, Agent'],
            'edits' => [['operation' => 'replace', 'field' => 'summary', 'old' => 'Notiz', 'new' => 'Note']]
        ], $props)['structuredContent'];

        $page = self::bootApp($props)->page('notes/first');
        $this->assertSame('https://example.com/panel/pages/notes+first/preview/compare?language=de', $result['panelUrl']);
        $this->assertSame('Hallo, Agent', $page->version('changes')->content('de')->get('intro')->value());
        $this->assertSame('Eine erste Note', $page->version('changes')->content('de')->get('summary')->value());
        $this->assertFalse($page->version('changes')->exists('en'));
    }

    #[Test]
    public function ignores_a_field_with_translate_false_in_a_secondary_language_and_points_to_the_default_language(): void
    {
        $props = $this->multilang();

        $result = $this->callTool('prepare_changes', [
            'model' => 'notes/first',
            'language' => 'de',
            'etag' => $this->read(language: 'de', props: $props)['etag'],
            'fields' => ['intro' => 'Hallo, Agent', 'price' => '12']
        ], $props)['structuredContent'];

        $this->assertSame(
            [['name' => 'price', 'reason' => 'The field has one value for all languages. Write it in the default language.']],
            $result['ignored']
        );
    }

    #[Test]
    public function keeps_the_etag_when_only_the_lock_of_the_changes_changes(): void
    {
        self::writeContent(self::CHANGES, ['Title' => 'First note', 'Intro' => 'Hello, agent', 'Lock' => 'ada']);
        $etag = $this->read()['etag'];
        self::writeContent(self::CHANGES, ['Title' => 'First note', 'Intro' => 'Hello, agent', 'Lock' => 'grace']);

        $this->assertSame($etag, $this->read()['etag']);
    }

    #[Test]
    public function keeps_the_etag_of_a_translation_when_the_default_language_changes(): void
    {
        $props = $this->multilang();
        self::writeContent('notes/first/_changes/note.de.txt', ['Title' => 'Erste Notiz', 'Intro' => 'Hallo, Agent']);
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

    private static function block(string $id, string $text): array
    {
        return ['id' => $id, 'type' => 'text', 'isHidden' => false, 'content' => ['text' => $text]];
    }

    private static function writeBlocks(array $blocks): void
    {
        self::writeContent('notes/first/note.txt', ['Title' => 'First note', 'Summary' => 'A first note', 'Body' => Json::encode($blocks), 'Uuid' => 'first-uuid']);
    }

    /**
     * Reads the stored blocks, the hidden ones included.
     */
    private function storedBlocks(): Blocks
    {
        return Blocks::factory(Blocks::parse($this->app()->page('notes/first')->version('changes')->content()->get('body')->value()));
    }

    private function editResult(array $edits, array $fields = []): array
    {
        return $this->callTool('prepare_changes', array_filter([
            'model' => 'notes/first',
            'etag' => $this->read()['etag'],
            'fields' => $fields,
            'edits' => $edits
        ]), $this->props());
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
                        'body' => ['type' => 'blocks', 'fieldsets' => ['text', 'markdown', 'button' => ['fields' => ['link' => ['type' => 'link']]], 'heading']],
                        'layout' => ['type' => 'layout', 'fieldsets' => ['text']],
                        'price' => ['type' => 'text', 'translate' => false],
                        'website' => ['type' => 'url'],
                        'cta' => ['type' => 'link', 'options' => ['url', 'custom']],
                        'links' => ['type' => 'structure', 'fields' => ['url' => ['type' => 'url']]],
                        'category' => ['type' => 'select', 'options' => ['news', 'essay']],
                        'map' => ['type' => 'locator'],
                        'entries' => ['type' => 'entries']
                    ]
                ],
                'files/image' => ['fields' => ['alt' => ['type' => 'text']]],
                'site' => ['fields' => ['tagline' => ['type' => 'text']]],
                'users/editor' => ['name' => 'editor', 'title' => 'Editor'],
                'users/writer' => ['name' => 'writer', 'permissions' => ['pages' => ['changeTitle' => false]]],
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['pages' => ['update' => false]]]
            ],
            'users' => [
                ['id' => 'ada', 'email' => 'ada@example.com', 'name' => 'Ada', 'role' => 'editor'],
                ['id' => 'grace', 'email' => 'grace@example.com', 'name' => 'Grace', 'role' => 'editor']
            ]
        ], $props);
    }
}
