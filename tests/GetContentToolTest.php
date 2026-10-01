<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class GetContentToolTest extends McpToolTestCase
{
    #[Test]
    public function returns_the_published_content_of_a_page(): void
    {
        $content = $this->getContent(['model' => 'notes/first']);

        $this->assertSame(
            [
                'type' => 'page',
                'id' => 'notes/first',
                'uuid' => 'page://first-uuid',
                'title' => 'First note',
                'template' => 'note',
                'status' => 'listed',
                'url' => 'https://example.com/notes/first'
            ],
            $content['model']
        );
        $this->assertSame('latest', $content['version']);
        $this->assertNull($content['changesBy']);
        $this->assertSame('https://example.com/panel/pages/notes+first', $content['panelUrl']);
        $this->assertSame(['intro', 'cover', 'related', 'body', 'author', 'sections'], array_column($content['fields'], 'name'));
        $this->assertSame('Hello', $content['fields'][0]['value']);
    }

    #[Test]
    public function reads_unsaved_changes_and_links_the_compare_preview(): void
    {
        $content = $this->getContent(['model' => 'page://first-uuid'], function (App $kirby) {
            $kirby->page('notes/first')->version('changes')->save(['title' => 'First note', 'intro' => 'Hello, agent']);
        });

        $this->assertSame('changes', $content['version']);
        $this->assertSame('Hello, agent', $content['fields'][0]['value']);
        $this->assertSame('https://example.com/panel/pages/notes+first/preview/compare', $content['panelUrl']);
    }

    #[Test]
    public function changes_the_etag_with_the_content(): void
    {
        $etag = $this->getContent(['model' => 'notes/first'])['etag'];

        $this->assertSame($etag, $this->getContent(['model' => 'notes/first'])['etag']);
        $this->assertNotSame($etag, $this->getContent(['model' => 'notes/first'], function (App $kirby) {
            $kirby->page('notes/first')->version('changes')->save(['title' => 'First note', 'intro' => 'Hello, agent']);
        })['etag']);
    }

    #[Test]
    public function names_who_else_made_the_unsaved_changes_after_their_lock_ends(): void
    {
        self::writeContent('memo/default.txt', ['Title' => 'Memo']);
        // Kirby's lock ends ten minutes after the last edit.
        self::writeContent('memo/_changes/default.txt', ['Title' => 'Memo, edited', 'Lock' => 'grace'], time() - 601);

        $content = $this->getContent(['model' => 'memo'], null, ['users' => $this->props()['users']]);

        $this->assertSame('Grace', $content['changesBy']);
    }

    #[Test]
    public function reads_files_pages_and_users_fields_as_uuid_lists(): void
    {
        $fields = $this->getContent(['model' => 'notes/first'])['fields'];

        $this->assertSame(['file://photo-uuid'], $fields[1]['value']);
        $this->assertSame(['page://home-uuid'], $fields[2]['value']);
        $this->assertSame(['user://grace'], $fields[4]['value']);
    }

    #[Test]
    public function describes_the_fieldsets_of_blocks_once_and_compacts_their_values(): void
    {
        $content = $this->getContent(['model' => 'notes/first']);
        $body = $content['fields'][3];

        $this->assertSame(['heading', 'image'], $body['fieldsets']);
        $this->assertSame(['heading', 'image'], array_keys($content['fieldsets']));
        $this->assertSame(['file://photo-uuid'], $body['value'][1]['content']['image']);
    }

    #[Test]
    public function compacts_the_blocks_in_the_columns_of_a_layout(): void
    {
        $sections = $this->getContent(['model' => 'notes/first'])['fields'][5];

        $this->assertSame(['file://photo-uuid'], $sections['value'][0]['columns'][0]['blocks'][0]['content']['image']);
    }

    #[Test]
    public function lists_the_files_of_a_page(): void
    {
        $content = $this->getContent(['model' => 'notes/first']);

        $this->assertSame(
            [[
                'id' => 'notes/first/photo.jpg',
                'uuid' => 'file://photo-uuid',
                'filename' => 'photo.jpg',
                'template' => 'image',
                'alt' => 'A lake at dawn',
                'panelUrl' => 'https://example.com/panel/pages/notes+first/files/photo.jpg'
            ]],
            $content['files']
        );
    }

    #[Test]
    public function lists_the_alt_text_of_a_file_with_unsaved_changes(): void
    {
        $content = $this->getContent(['model' => 'notes/first'], function (App $kirby) {
            $kirby->file('notes/first/photo.jpg')->version('changes')->save(['alt' => 'A lake at dusk']);
        });

        $this->assertSame('A lake at dusk', $content['files'][0]['alt']);
    }

    #[Test]
    public function returns_only_the_requested_fields(): void
    {
        $content = $this->getContent(['model' => 'notes/first', 'fields' => ['title', 'related']]);

        $this->assertSame(['related'], array_column($content['fields'], 'name'));
        $this->assertArrayNotHasKey('fieldsets', $content);
        $this->assertArrayNotHasKey('files', $content);
    }

    #[Test]
    public function rejects_an_unknown_field(): void
    {
        $result = $this->callTool('get_content', ['model' => 'notes/first', 'fields' => ['summary']], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('Unknown fields: summary. The fields are: intro, cover, related, body, author, sections.', $result['content'][0]['text']);
    }

    #[Test]
    public function omits_the_largest_values_from_a_large_result(): void
    {
        $prepare = function (App $kirby) {
            $kirby->page('notes/first')->version('changes')->save([
                'title' => 'First note',
                'intro' => str_repeat('a', 1_000),
                'body' => json_encode([['id' => 'b1', 'type' => 'heading', 'isHidden' => false, 'content' => ['text' => str_repeat('a', 90_000)]]])
            ]);
        };
        $content = $this->getContent(['model' => 'notes/first'], $prepare);

        $this->assertSame(str_repeat('a', 1_000), $content['fields'][0]['value']);
        $this->assertArrayNotHasKey('value', $content['fields'][3]);
        $this->assertSame(['body'], $content['omittedValues']);
        $this->assertSame(
            ['Left out the values of body to keep the result small. Request them one by one with `fields`.'],
            $content['notices']
        );

        $body = $this->getContent(['model' => 'notes/first', 'fields' => ['body']], $prepare);
        $this->assertArrayHasKey('value', $body['fields'][0]);
        $this->assertArrayNotHasKey('omittedValues', $body);
    }

    #[Test]
    public function reads_the_content_of_a_file(): void
    {
        $content = $this->getContent(['model' => 'notes/first/photo.jpg']);
        $model = $content['model'];

        $this->assertStringStartsWith('https://example.com/media/pages/notes/first/', $model['url']);
        unset($model['url']);
        $this->assertSame(
            ['type' => 'file', 'id' => 'notes/first/photo.jpg', 'uuid' => 'file://photo-uuid', 'filename' => 'photo.jpg', 'template' => 'image'],
            $model
        );
        $this->assertSame([['name' => 'alt', 'value' => 'A lake at dawn']], array_map(
            fn (array $field) => ['name' => $field['name'], 'value' => $field['value']],
            $content['fields']
        ));
        $this->assertArrayNotHasKey('files', $content);
    }

    #[Test]
    public function reads_the_site(): void
    {
        $content = $this->getContent(['model' => 'site']);

        $this->assertSame(
            ['type' => 'site', 'id' => 'site', 'uuid' => 'site://', 'title' => 'Kirby Playground', 'url' => 'https://example.com'],
            $content['model']
        );
        $this->assertSame('https://example.com/panel/site', $content['panelUrl']);
        $this->assertSame([], $content['files']);
    }

    #[Test]
    public function reads_a_language_and_links_the_panel_in_it(): void
    {
        // The German content goes in through `prepare`, since a secondary translation in the props makes the page fall back to the default blueprint.
        $content = $this->getContent(['model' => 'about', 'language' => 'de'], function (App $kirby) {
            $kirby->page('about')->version('latest')->save(['title' => 'Über uns', 'tagline' => 'Hallo'], 'de');
        }, self::languageProps());

        $this->assertSame('de', $content['language']);
        $this->assertSame('Über uns', $content['model']['title']);
        $this->assertSame(['Hallo', '10'], array_column($content['fields'], 'value'));
        $this->assertSame([false, true], array_column($content['fields'], 'disabled'));
        $this->assertSame('https://example.com/panel/pages/about?language=de', $content['panelUrl']);
        $this->assertArrayNotHasKey('notices', $content);
    }

    #[Test]
    public function notes_that_a_language_without_its_own_content_shows_the_default_language(): void
    {
        $content = $this->getContent(['model' => 'about', 'language' => 'de'], null, self::languageProps());

        $this->assertSame('Hello', $content['fields'][0]['value']);
        $this->assertSame(["The content isn't translated into Deutsch yet: the values are the default language's."], $content['notices']);
    }

    #[Test]
    #[DataProvider('unreachableModels')]
    public function reports_a_missing_or_inaccessible_model_as_no_page_or_file(string $model): void
    {
        $result = $this->callTool('get_content', ['model' => $model], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame("Found no page or file \"{$model}\" the account may access. find_pages finds a page's ID; get_content lists a page's files.", $result['content'][0]['text']);
    }

    public static function unreachableModels(): iterable
    {
        yield 'inaccessible page' => ['secret'];
        yield 'unknown address' => ['abot'];
        yield 'file UUID on an inaccessible page' => ['file://plan-uuid'];
    }

    #[Test]
    public function reads_a_file_with_a_plus_in_its_name_by_its_uuid(): void
    {
        $this->assertSame('home/lake+dawn.jpg', $this->getContent(['model' => 'file://lake-uuid'])['model']['id']);
    }

    private function getContent(array $arguments, Closure|null $prepare = null, array|null $props = null): array
    {
        $result = $this->callTool('get_content', $arguments, $props ?? $this->props(), $prepare);
        $this->assertFalse($result['isError'], $result['content'][0]['text']);

        return $result['structuredContent'];
    }

    private function props(): array
    {
        return [
            'site' => [
                'content' => ['title' => 'Kirby Playground'],
                'children' => [
                    [
                        'slug' => 'home',
                        'num' => 1,
                        'template' => 'home',
                        'content' => ['title' => 'Home', 'uuid' => 'home-uuid'],
                        'files' => [['filename' => 'lake+dawn.jpg', 'content' => ['uuid' => 'lake-uuid']]]
                    ],
                    [
                        'slug' => 'notes',
                        'content' => ['title' => 'Notes', 'uuid' => 'notes-uuid'],
                        'children' => [
                            [
                                'slug' => 'first',
                                'num' => 1,
                                'template' => 'note',
                                'content' => [
                                    'title' => 'First note',
                                    'uuid' => 'first-uuid',
                                    'intro' => 'Hello',
                                    'cover' => "- file://photo-uuid\n",
                                    'related' => "- page://home-uuid\n",
                                    'body' => json_encode([
                                        ['id' => 'b1', 'type' => 'heading', 'isHidden' => false, 'content' => ['text' => 'Welcome']],
                                        ['id' => 'b2', 'type' => 'image', 'isHidden' => false, 'content' => ['image' => ['file://photo-uuid']]]
                                    ]),
                                    'author' => "- user://grace\n",
                                    'sections' => json_encode([[
                                        'id' => 'l1',
                                        'attrs' => [],
                                        'columns' => [[
                                            'id' => 'c1',
                                            'width' => '1/1',
                                            'blocks' => [['id' => 'b3', 'type' => 'image', 'isHidden' => false, 'content' => ['image' => ['file://photo-uuid']]]]
                                        ]]
                                    ]])
                                ],
                                'files' => [
                                    ['filename' => 'photo.jpg', 'template' => 'image', 'content' => ['uuid' => 'photo-uuid', 'alt' => 'A lake at dawn']]
                                ]
                            ]
                        ]
                    ],
                    [
                        'slug' => 'secret',
                        'num' => 2,
                        'template' => 'secret',
                        'content' => ['title' => 'Secret'],
                        'files' => [['filename' => 'plan.jpg', 'content' => ['uuid' => 'plan-uuid']]]
                    ]
                ]
            ],
            'blueprints' => [
                'pages/note' => [
                    'fields' => [
                        'intro' => ['type' => 'text', 'label' => 'Intro'],
                        'cover' => ['type' => 'files', 'multiple' => false],
                        'related' => ['type' => 'pages'],
                        'body' => ['type' => 'blocks', 'fieldsets' => ['heading', 'image']],
                        'author' => ['type' => 'users'],
                        'sections' => ['type' => 'layout', 'fieldsets' => ['image']]
                    ]
                ],
                'pages/secret' => ['options' => ['access' => false]],
                'files/image' => [
                    'fields' => [
                        'alt' => ['type' => 'text']
                    ]
                ],
                'users/editor' => ['name' => 'editor', 'title' => 'Editor']
            ],
            'users' => [
                1 => ['id' => 'grace', 'email' => 'grace@example.com', 'name' => 'Grace', 'role' => 'editor']
            ]
        ];
    }

    private static function languageProps(): array
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
                        'template' => 'about',
                        'translations' => [
                            ['code' => 'en', 'content' => ['title' => 'About', 'tagline' => 'Hello', 'price' => '10']]
                        ]
                    ]
                ]
            ],
            'blueprints' => [
                'pages/about' => [
                    'fields' => [
                        'tagline' => ['type' => 'text'],
                        'price' => ['type' => 'text', 'translate' => false]
                    ]
                ]
            ]
        ];
    }
}
