<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class FindPagesToolTest extends McpToolTestCase
{
    #[Test]
    public function finds_every_listable_page_and_draft_of_the_site(): void
    {
        $result = $this->findPages();

        $ids = array_column($result['pages'], 'id');
        sort($ids);

        $this->assertSame(['home', 'notes', 'notes/first', 'notes/second', 'notes/third'], $ids);
        $this->assertSame(5, $result['total']);
    }

    #[Test]
    public function describes_each_page(): void
    {
        $result = $this->findPages(['parent' => 'notes']);

        $this->assertSame(
            [
                'id' => 'notes/first',
                'uuid' => 'page://first-uuid',
                'title' => 'First note',
                'template' => 'note',
                'status' => 'listed',
                'panelUrl' => 'https://example.com/panel/pages/notes+first',
                'hasChanges' => false,
                'url' => 'https://example.com/notes/first'
            ],
            $result['pages'][0]
        );
        $this->assertNull($result['pages'][2]['url']);
    }

    #[Test]
    public function finds_the_children_and_drafts_of_a_parent_given_by_uuid(): void
    {
        $result = $this->findPages(['parent' => 'page://notes-uuid']);

        $this->assertSame(['notes/first', 'notes/third', 'notes/second'], array_column($result['pages'], 'id'));
    }

    #[Test]
    public function finds_the_top_level_pages_with_the_site_as_parent(): void
    {
        $result = $this->findPages(['parent' => 'site']);

        $this->assertSame(['home', 'notes'], array_column($result['pages'], 'id'));
    }

    #[Test]
    public function filters_by_template_and_status(): void
    {
        $this->assertSame(['notes'], array_column($this->findPages(['template' => 'notes'])['pages'], 'id'));
        $this->assertSame(['notes/second'], array_column($this->findPages(['status' => 'draft'])['pages'], 'id'));
    }

    #[Test]
    public function searches_the_content(): void
    {
        $result = $this->findPages(['query' => 'agents']);

        $this->assertSame(['notes/third'], array_column($result['pages'], 'id'));
    }

    #[Test]
    public function pages_through_the_results(): void
    {
        $result = $this->findPages(['parent' => 'notes', 'limit' => 1, 'offset' => 1]);

        $this->assertSame(['notes/third'], array_column($result['pages'], 'id'));
        $this->assertSame(3, $result['total']);
    }

    #[Test]
    public function returns_titles_and_urls_in_the_requested_language(): void
    {
        $page = $this->callTool('find_pages', ['language' => 'de'], $this->multilangProps())['structuredContent']['pages'][0];

        $this->assertSame('Über uns', $page['title']);
        $this->assertSame('https://example.com/de/about', $page['url']);
    }

    #[Test]
    public function rejects_an_unknown_language(): void
    {
        $result = $this->callTool('find_pages', ['language' => 'fr'], $this->multilangProps());

        $this->assertTrue($result['isError']);
        $this->assertSame('Unknown language "fr". The site\'s languages are: en, de.', $result['content'][0]['text']);
    }

    #[Test]
    public function marks_a_page_with_unsaved_changes(): void
    {
        $result = $this->findPages(['parent' => 'notes'], function (App $kirby) {
            $kirby->page('notes/first')->version('changes')->save(['title' => 'First note, revised']);
        });

        $this->assertSame([true, false, false], array_column($result['pages'], 'hasChanges'));
    }

    #[Test]
    public function rejects_a_parent_the_account_cannot_access(): void
    {
        $result = $this->callTool('find_pages', ['parent' => 'secret'], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('Found no page or file "secret" the account may access. find_pages finds a page\'s ID; get_content lists a page\'s files.', $result['content'][0]['text']);
    }

    #[Test]
    public function rejects_a_limit_above_50(): void
    {
        $result = $this->callTool('find_pages', ['limit' => 51], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('`limit` must be an integer from 1 to 50.', $result['content'][0]['text']);
    }

    private function findPages(array $arguments = [], Closure|null $prepare = null): array
    {
        $result = $this->callTool('find_pages', $arguments, $this->props(), $prepare);
        $this->assertFalse($result['isError'], $result['content'][0]['text']);

        return $result['structuredContent'];
    }

    private function props(): array
    {
        return [
            'site' => [
                'children' => [
                    ['slug' => 'home', 'num' => 1, 'template' => 'home', 'content' => ['title' => 'Home', 'uuid' => 'home-uuid']],
                    [
                        'slug' => 'notes',
                        'template' => 'notes',
                        'content' => ['title' => 'Notes', 'uuid' => 'notes-uuid'],
                        'children' => [
                            ['slug' => 'first', 'num' => 1, 'template' => 'note', 'content' => ['title' => 'First note', 'uuid' => 'first-uuid']],
                            ['slug' => 'third', 'num' => 2, 'template' => 'note', 'content' => ['title' => 'Third note', 'text' => 'Kirby loves agents', 'uuid' => 'third-uuid']]
                        ],
                        'drafts' => [
                            ['slug' => 'second', 'template' => 'note', 'content' => ['title' => 'Second note', 'uuid' => 'second-uuid']]
                        ]
                    ],
                    ['slug' => 'secret', 'num' => 2, 'template' => 'secret', 'content' => ['title' => 'Secret', 'uuid' => 'secret-uuid']]
                ]
            ],
            'blueprints' => [
                'pages/secret' => ['options' => ['access' => false]]
            ]
        ];
    }

    private function multilangProps(): array
    {
        return [
            'options' => ['languages' => true],
            'languages' => [
                ['code' => 'en', 'name' => 'English', 'default' => true],
                ['code' => 'de', 'name' => 'Deutsch']
            ],
            'site' => [
                'children' => [
                    [
                        'slug' => 'about',
                        'translations' => [
                            ['code' => 'en', 'content' => ['title' => 'About']],
                            ['code' => 'de', 'content' => ['title' => 'Über uns']]
                        ]
                    ]
                ]
            ]
        ];
    }
}
