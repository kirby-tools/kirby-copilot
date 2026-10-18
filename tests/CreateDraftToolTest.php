<?php

declare(strict_types = 1);

use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\Attributes\TestWith;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class CreateDraftToolTest extends McpToolTestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        self::writeContent('site.txt', ['Title' => 'Kirby Playground']);
        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
    }

    #[Test]
    public function creates_a_draft_with_its_fields(): void
    {
        $result = $this->create(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello, agents', 'fields' => ['intro' => 'Written by an agent']]);

        $this->assertSame('notes/hello-agents', $result['page']['id']);
        $this->assertSame(['status' => 'draft', 'url' => null], array_intersect_key($result['page'], ['status' => 0, 'url' => 0]));
        $this->assertSame('https://example.com/panel/pages/notes+hello-agents', $result['page']['panelUrl']);

        $draft = self::bootApp($this->props())->page('notes/hello-agents');
        $this->assertTrue($draft->isDraft());
        $this->assertSame('Hello, agents', $draft->title()->value());
        $this->assertSame('Written by an agent', $draft->intro()->value());
        $this->assertSame('Default text', $draft->summary()->value());
        $this->assertSame($result['etag'], $this->callTool('get_content', ['model' => 'notes/hello-agents'], $this->props())['structuredContent']['etag']);
    }

    #[Test]
    public function takes_the_given_slug(): void
    {
        $result = $this->create(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello', 'slug' => 'hello-world']);

        $this->assertSame('notes/hello-world', $result['page']['id']);
    }

    #[Test]
    public function makes_the_title_and_slug_from_the_blueprint_create_templates(): void
    {
        $props = $this->eventProps('{{ page.venue }}, {{ page.day }}');

        $result = $this->callTool('create_draft', ['parent' => 'notes', 'template' => 'event', 'title' => 'Concert', 'fields' => ['venue' => 'Berlin', 'day' => '2026-11-05']], $props)['structuredContent'];

        $this->assertSame('notes/2026-11-05-berlin', $result['page']['id']);
        $this->assertSame('Berlin, 2026-11-05', $result['page']['title']);
        $this->assertSame([['name' => 'title', 'reason' => 'The blueprint makes the title from other fields.']], $result['ignored']);
    }

    #[Test]
    public function refuses_a_blueprint_made_title_whose_fields_are_empty(): void
    {
        $result = $this->callTool('create_draft', ['parent' => 'notes', 'template' => 'event'], $this->eventProps('{{ page.venue }}'));

        $this->assertSame('The blueprint makes the title from other fields, which are empty. Send them in `fields`.', $result['content'][0]['text']);
    }

    #[Test]
    public function creates_a_draft_even_when_the_blueprint_creates_listed_pages(): void
    {
        $result = $this->create(['parent' => 'notes', 'template' => 'listed-note', 'title' => 'Hello']);

        $this->assertSame('draft', $result['page']['status']);
    }

    #[Test]
    public function refuses_a_blank_title(): void
    {
        $result = $this->createResult(['parent' => 'notes', 'template' => 'note', 'title' => '   ', 'slug' => 'hello']);

        $this->assertTrue($result['isError']);
        $this->assertSame('`title` must be a non-empty string.', $result['content'][0]['text']);
        $this->assertDirectoryDoesNotExist(self::indexRoot() . '/content/notes/_drafts/hello');
    }

    #[Test]
    public function refuses_a_template_the_parent_does_not_allow(): void
    {
        $result = $this->createResult(['parent' => 'notes', 'template' => 'secret', 'title' => 'Hello']);

        $this->assertTrue($result['isError']);
        $this->assertSame('Notes takes new pages with the templates: note, listed-note.', $result['content'][0]['text']);
    }

    #[Test]
    #[TestWith([['max' => 1]], 'full')]
    #[TestWith([['status' => 'listed', 'templates' => ['listed-note']]], 'adding listed pages')]
    #[TestWith([['parent' => 'site', 'templates' => ['note']]], 'listing the site\'s pages')]
    public function refuses_a_parent_whose_pages_section_takes_no_new_pages(array $section): void
    {
        self::writeContent('notes/1_first/note.txt', ['Title' => 'First']);
        $props = $this->props(['blueprints' => ['pages/default' => ['sections' => ['pages' => $section]]]]);

        $result = $this->callTool('create_draft', ['parent' => 'notes', 'template' => 'note', 'title' => 'Hello'], $props);

        $this->assertTrue($result['isError']);
        $this->assertSame('Notes takes no new pages.', $result['content'][0]['text']);
    }

    #[Test]
    public function takes_a_pages_section_on_the_site_that_lists_the_parent(): void
    {
        $props = $this->props(['blueprints' => [
            'site' => ['sections' => ['notes' => ['type' => 'pages', 'parent' => 'site.find("notes")', 'templates' => ['note']]]],
            'pages/notes' => ['title' => 'Notes']
        ]]);

        $result = $this->callTool('create_draft', ['parent' => 'notes', 'template' => 'note', 'title' => 'Hello'], $props);

        $this->assertFalse($result['isError'], $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_a_role_without_the_create_permission(): void
    {
        $result = $this->createResult(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello'], role: 'reviewer');

        $this->assertTrue($result['isError']);
        $this->assertSame('Kirby refused this for the user\'s account – its role or the blueprint\'s options: You are not allowed to create "hello"', $result['content'][0]['text']);
        $this->assertNull(self::bootApp($this->props())->page('notes/hello'));
    }

    #[Test]
    #[TestWith([['intro' => '<script>alert(1)</script>']], 'script')]
    #[TestWith([['body' => '[{"type":"markdown","content":{"text":"\\u003Cscript>alert(1)\\u003C/script>"}}]']], 'blocks as a JSON string')]
    #[TestWith([['website' => 'javascript:alert(1)']], 'script URL in a url field')]
    public function refuses_active_markup_or_a_script_url(array $fields): void
    {
        $result = $this->createResult(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello', 'fields' => $fields]);

        $this->assertTrue($result['isError']);
        $this->assertNull(self::bootApp($this->props())->page('notes/hello'));
    }

    #[Test]
    public function refuses_active_markup_in_the_title(): void
    {
        $result = $this->createResult(['parent' => 'notes', 'template' => 'note', 'title' => 'Hi <script>alert(1)</script>', 'slug' => 'hello']);

        $this->assertTrue($result['isError']);
        $this->assertSame("`title` contains the element `<script>`, which the site doesn't accept from agents. Write it without.", $result['content'][0]['text']);
        $this->assertNull(self::bootApp($this->props())->page('notes/hello'));
    }

    #[Test]
    public function ignores_fields_it_may_not_write(): void
    {
        $result = $this->create(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello', 'fields' => ['unknown' => 'x', 'Title' => 'Other', 'slug' => 'other']]);

        $this->assertSame(['unknown', 'title', 'slug'], array_column($result['ignored'], 'name'));
        $this->assertSame('Send the slug as `slug`.', $result['ignored'][2]['reason']);
    }

    #[Test]
    #[TestWith([['topics' => ['news', 'nonsense']], 'topics doesn\'t take ["news","nonsense"]. Its options: news, events.'], 'one unknown option')]
    #[TestWith([['topics' => 'nonsense'], 'topics doesn\'t take "nonsense". Its options: news, events.'], 'unknown option as a string')]
    public function refuses_a_value_kirby_would_drop(array $fields, string $reason): void
    {
        $result = $this->createResult(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello', 'fields' => $fields]);

        $this->assertTrue($result['isError']);
        $this->assertSame("Nothing was written, since Kirby would drop values its fields don't take: {$reason}", $result['content'][0]['text']);
        $this->assertNull(self::bootApp($this->props())->page('notes/hello'));
    }

    #[Test]
    #[TestWith(['rating', '0'], 'zero as a string')]
    #[TestWith(['featured', 'false'], 'false as a string')]
    public function takes_a_number_or_toggle_sent_as_a_string(string $name, string $value): void
    {
        $this->create(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello', 'fields' => [$name => $value]]);

        $this->assertSame($value, self::bootApp($this->props())->page('notes/hello')->content()->get($name)->value());
    }

    #[Test]
    public function creates_a_draft_below_the_site(): void
    {
        $result = $this->create(['parent' => 'site', 'template' => 'note', 'title' => 'Top']);

        $this->assertSame('top', $result['page']['id']);
    }

    private function create(array $arguments): array
    {
        $result = $this->createResult($arguments);
        $this->assertFalse($result['isError'], $result['content'][0]['text']);

        return $result['structuredContent'];
    }

    private function createResult(array $arguments, string $role = 'editor'): array
    {
        return $this->callTool('create_draft', $arguments, $this->props(['users' => [['role' => $role]]]));
    }

    private function eventProps(string $title): array
    {
        return $this->props(['blueprints' => [
            'pages/default' => ['sections' => ['pages' => ['templates' => [2 => 'event']]]],
            'pages/event' => [
                'create' => ['title' => $title, 'slug' => '{{ page.day }}-{{ page.venue }}'],
                'fields' => ['venue' => ['type' => 'text'], 'day' => ['type' => 'date']]
            ]
        ]]);
    }

    private function props(array $props = []): array
    {
        return array_replace_recursive([
            'blueprints' => [
                'site' => ['sections' => ['pages' => ['type' => 'pages', 'templates' => ['note']]]],
                'pages/default' => ['sections' => ['pages' => ['type' => 'pages', 'templates' => ['note', 'listed-note']]]],
                'pages/note' => [
                    'title' => 'Note',
                    'fields' => [
                        'intro' => ['type' => 'text'],
                        'summary' => ['type' => 'text', 'default' => 'Default text'],
                        'rating' => ['type' => 'number'],
                        'featured' => ['type' => 'toggle'],
                        'topics' => ['type' => 'checkboxes', 'options' => ['news', 'events']],
                        'website' => ['type' => 'url'],
                        'body' => ['type' => 'blocks', 'fieldsets' => ['markdown']]
                    ]
                ],
                'pages/listed-note' => ['title' => 'Listed note', 'create' => ['status' => 'listed']],
                'pages/secret' => ['title' => 'Secret'],
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['pages' => ['create' => false]]]
            ]
        ], $props);
    }
}
