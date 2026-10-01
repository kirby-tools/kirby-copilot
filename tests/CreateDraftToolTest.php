<?php

declare(strict_types = 1);

use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

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
        $this->assertSame('draft', $result['page']['status']);
        $this->assertSame('https://example.com/panel/pages/notes+hello-agents', $result['page']['panelUrl']);

        $draft = self::bootApp($this->props())->page('notes/hello-agents');
        $this->assertTrue($draft->isDraft());
        $this->assertSame('Hello, agents', $draft->title()->value());
        $this->assertSame('Written by an agent', $draft->intro()->value());
        $this->assertSame('Default text', $draft->summary()->value());
        $this->assertSame($result['etag'], $this->callTool('get_content', ['model' => 'notes/hello-agents'], $this->props())['structuredContent']['etag']);
    }

    #[Test]
    public function slugifies_the_given_slug(): void
    {
        $result = $this->create(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello', 'slug' => 'Hello World']);

        $this->assertSame('notes/hello-world', $result['page']['id']);
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
    public function refuses_a_parent_whose_pages_section_is_full(): void
    {
        self::writeContent('notes/1_first/note.txt', ['Title' => 'First']);
        $props = $this->props(['blueprints' => ['pages/default' => ['sections' => ['pages' => ['max' => 1]]]]]);

        $result = $this->callTool('create_draft', ['parent' => 'notes', 'template' => 'note', 'title' => 'Hello'], $props);

        $this->assertTrue($result['isError']);
        $this->assertSame('Notes takes no new pages.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_a_role_without_the_create_permission(): void
    {
        $result = $this->createResult(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello'], role: 'reviewer');

        $this->assertTrue($result['isError']);
        $this->assertSame('You are not allowed to create "hello"', $result['content'][0]['text']);
        $this->assertNull(self::bootApp($this->props())->page('notes/hello'));
    }

    #[Test]
    public function refuses_active_markup(): void
    {
        $result = $this->createResult(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello', 'fields' => ['intro' => '<script>alert(1)</script>']]);

        $this->assertTrue($result['isError']);
        $this->assertNull(self::bootApp($this->props())->page('notes/hello'));
    }

    #[Test]
    public function refuses_active_markup_in_the_title(): void
    {
        $result = $this->createResult(['parent' => 'notes', 'template' => 'note', 'title' => 'Hi <script>alert(1)</script>', 'slug' => 'hello']);

        $this->assertTrue($result['isError']);
        $this->assertStringStartsWith('`title` contains the element `<script>`', $result['content'][0]['text']);
        $this->assertNull(self::bootApp($this->props())->page('notes/hello'));
    }

    #[Test]
    public function ignores_fields_it_may_not_write(): void
    {
        $result = $this->create(['parent' => 'notes', 'template' => 'note', 'title' => 'Hello', 'fields' => ['unknown' => 'x', 'title' => 'Other', 'slug' => 'other']]);

        $this->assertSame(['unknown', 'title', 'slug'], array_column($result['ignored'], 'name'));
        $this->assertSame('Send the slug as `slug`.', $result['ignored'][2]['reason']);
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
                        'summary' => ['type' => 'text', 'default' => 'Default text']
                    ]
                ],
                'pages/listed-note' => ['title' => 'Listed note', 'create' => ['status' => 'listed']],
                'pages/secret' => ['title' => 'Secret'],
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['pages' => ['create' => false]]]
            ]
        ], $props);
    }
}
