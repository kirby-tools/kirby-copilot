<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\FieldDigest;
use Kirby\Cms\App;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class FieldDigestTest extends ApiRouteTestCase
{
    private const PLAYGROUND_BLUEPRINTS = __DIR__ . '/../playground/site/blueprints';

    #[Test]
    public function describes_a_text_field_with_its_help_as_plain_text(): void
    {
        $digest = FieldDigest::for($this->playgroundApp()->page('product'))['fields'];

        $this->assertSame([
            'name' => 'price',
            'type' => 'text',
            'label' => 'Price',
            'help' => 'Product pricing information',
            'required' => false,
            'translate' => true,
            'disabled' => false,
            'hint' => 'single-line plain text without line breaks or formatting'
        ], self::findField($digest, 'price'));
    }

    #[Test]
    public function lists_the_options_of_a_select_field(): void
    {
        $digest = FieldDigest::for($this->playgroundApp()->page('product'))['fields'];
        $category = self::findField($digest, 'category');

        $this->assertSame('single selection value based on the predefined options', $category['hint']);
        $this->assertSame(
            ['value' => 'Electronics', 'text' => 'Electronics'],
            $category['options'][0]
        );
    }

    #[Test]
    public function describes_the_sub_fields_of_a_structure_field(): void
    {
        $digest = FieldDigest::for($this->playgroundApp()->page('product'))['fields'];
        $features = self::findField($digest, 'features');

        $this->assertSame('structure', $features['type']);
        $this->assertSame(
            'repeatable structured data, each containing the defined sub-fields with appropriate content',
            $features['hint']
        );
        $this->assertSame(['title', 'description', 'icon'], array_column($features['fields'], 'name'));
        $this->assertSame(
            'text wrapped in paragraph <p> tags (can contain one or multiple paragraphs). Inline formatting (bold, italic, underline, code, links, email, sub, sup) is allowed.',
            self::findField($features['fields'], 'description')['hint']
        );
    }

    #[Test]
    public function describes_each_fieldset_of_a_blocks_field(): void
    {
        $digest = FieldDigest::for($this->playgroundApp()->page('article'));
        $content = self::findField($digest['fields'], 'content');

        $this->assertSame('blocks', $content['type']);
        $this->assertSame(
            ['heading', 'text', 'quote', 'image', 'list', 'code', 'related-pages'],
            $content['fieldsets']
        );

        $relatedPages = $digest['fieldsets']['related-pages'];
        $this->assertSame('related-pages', $relatedPages['type']);
        $this->assertSame('Related Pages', $relatedPages['name']);
        $this->assertContains('style', array_column($relatedPages['fields'], 'name'));
    }

    #[Test]
    public function resolves_query_options_against_the_model(): void
    {
        $relatedPages = FieldDigest::for($this->playgroundApp()->page('article'))['fieldsets']['related-pages'];

        $this->assertSame(
            ['article', 'landing', 'product'],
            array_column(self::findField($relatedPages['fields'], 'source')['options'], 'value')
        );
    }

    #[Test]
    public function merges_the_fields_of_all_tabs_of_a_fieldset(): void
    {
        $hero = FieldDigest::for($this->playgroundApp()->page('landing'))['fieldsets']['hero'];

        $this->assertContains('title', array_column($hero['fields'], 'name'));
        $this->assertContains('text_alignment', array_column($hero['fields'], 'name'));
    }

    #[Test]
    public function lists_the_column_layouts_of_a_layout_field(): void
    {
        $layout = self::findField(FieldDigest::for($this->playgroundApp()->page('landing'))['fields'], 'layout');

        $this->assertSame('Kirby layout with columns and blocks', $layout['hint']);
        $this->assertSame([['1/1'], ['1/2', '1/2']], array_slice($layout['layouts'], 0, 2));
        $this->assertContains('faq', $layout['fieldsets']);
    }

    #[Test]
    public function describes_a_fieldset_shared_by_two_fields_once(): void
    {
        $page = self::bootApp([
            'blueprints' => [
                'pages/default' => [
                    'fields' => [
                        'intro' => ['type' => 'blocks', 'fieldsets' => ['heading', 'text']],
                        'body' => ['type' => 'blocks', 'fieldsets' => ['text', 'quote']]
                    ]
                ]
            ],
            'site' => ['children' => [['slug' => 'test']]]
        ])->page('test');

        $digest = FieldDigest::for($page);

        $this->assertSame([['heading', 'text'], ['text', 'quote']], array_column($digest['fields'], 'fieldsets'));
        $this->assertSame(['heading', 'text', 'quote'], array_keys($digest['fieldsets']));
    }

    #[Test]
    public function keys_a_fieldset_that_a_field_defines_differently_apart(): void
    {
        $page = self::bootApp([
            'blueprints' => [
                'pages/default' => [
                    'fields' => [
                        'intro' => ['type' => 'blocks', 'fieldsets' => ['text']],
                        'body' => [
                            'type' => 'blocks',
                            'fieldsets' => [
                                'text' => ['name' => 'Lead', 'fields' => ['text' => ['type' => 'textarea']]]
                            ]
                        ]
                    ]
                ]
            ],
            'site' => ['children' => [['slug' => 'test']]]
        ])->page('test');

        $digest = FieldDigest::for($page);

        $this->assertSame([['text'], ['text-2']], array_column($digest['fields'], 'fieldsets'));
        $this->assertSame('text', $digest['fieldsets']['text-2']['type']);
        $this->assertSame('Lead', $digest['fieldsets']['text-2']['name']);
    }

    #[Test]
    public function skips_fields_without_a_value_and_hidden_fields(): void
    {
        $page = self::bootApp([
            'blueprints' => [
                'pages/default' => [
                    'fields' => [
                        'intro' => ['type' => 'info', 'text' => 'Welcome'],
                        'section' => ['type' => 'headline'],
                        'secret' => ['type' => 'hidden'],
                        'body' => ['type' => 'textarea']
                    ]
                ]
            ],
            'site' => ['children' => [['slug' => 'test']]]
        ])->page('test');

        $this->assertSame(['body'], array_column(FieldDigest::for($page)['fields'], 'name'));
    }

    #[Test]
    public function describes_reference_fields_as_uuid_lists(): void
    {
        $kirby = self::bootApp([
            'blueprints' => [
                'pages/default' => [
                    'fields' => [
                        'cover' => ['type' => 'files', 'multiple' => false],
                        'related' => ['type' => 'pages', 'query' => 'site.find("notes").children'],
                        'authors' => ['type' => 'users', 'max' => 3]
                    ]
                ]
            ],
            'site' => ['children' => [['slug' => 'test']]],
            'users' => [
                ['id' => 'ada', 'email' => 'ada@example.com', 'name' => 'Ada', 'role' => 'admin'],
                ['id' => 'grace', 'email' => 'grace@example.com', 'role' => 'admin']
            ]
        ]);
        $kirby->impersonate('ada');

        $digest = FieldDigest::for($kirby->page('test'))['fields'];

        $this->assertSame(
            ['a list of file UUIDs (file://...)', 'a list of page UUIDs (page://...)', 'a list of user UUIDs (user://...)'],
            array_column($digest, 'hint')
        );
        $this->assertSame([1, null, 3], array_map(fn (array $field) => $field['max'] ?? null, $digest));
        $this->assertSame(['page.files', 'site.find("notes").children'], [$digest[0]['query'], $digest[1]['query']]);
        $this->assertSame([['value' => 'user://ada', 'text' => 'Ada'], ['value' => 'user://grace', 'text' => 'grace@example.com']], $digest[2]['options']);
    }

    #[Test]
    public function offers_users_by_id_without_uuids(): void
    {
        $kirby = self::bootApp([
            'options' => ['content' => ['uuid' => false]],
            'blueprints' => ['pages/default' => ['fields' => ['authors' => ['type' => 'users']]]],
            'site' => ['children' => [['slug' => 'test']]],
            'users' => [['id' => 'ada', 'email' => 'ada@example.com', 'role' => 'admin']]
        ]);
        $kirby->impersonate('ada');

        $this->assertSame('ada', FieldDigest::for($kirby->page('test'))['fields'][0]['options'][0]['value']);
    }

    #[Test]
    public function names_the_marks_and_nodes_a_writer_field_narrows_to(): void
    {
        $page = self::bootApp([
            'blueprints' => [
                'pages/default' => [
                    'fields' => [
                        'text' => ['type' => 'writer'],
                        'teaser' => ['type' => 'writer', 'marks' => ['bold', 'link'], 'nodes' => false, 'headings' => [2, 3]]
                    ]
                ]
            ],
            'site' => ['children' => [['slug' => 'test']]]
        ])->page('test');

        [$text, $teaser] = FieldDigest::for($page)['fields'];

        $this->assertSame([], array_intersect_key($text, ['marks' => 0, 'nodes' => 0, 'headings' => 0]));
        $this->assertSame(['marks' => ['bold', 'link'], 'nodes' => false, 'headings' => [2, 3]], array_intersect_key($teaser, ['marks' => 0, 'nodes' => 0, 'headings' => 0]));
    }

    #[Test]
    public function skips_the_title_slug_and_uuid_fields(): void
    {
        $page = self::bootApp([
            'blueprints' => [
                'pages/default' => [
                    'fields' => [
                        'title' => ['type' => 'text'],
                        'slug' => ['type' => 'slug'],
                        'uuid' => ['type' => 'text'],
                        'body' => ['type' => 'textarea']
                    ]
                ]
            ],
            'site' => ['children' => [['slug' => 'test']]]
        ])->page('test');

        $this->assertSame(['body'], array_column(FieldDigest::for($page)['fields'], 'name'));
    }

    #[Test]
    public function resolves_a_custom_field_type_to_its_base_type(): void
    {
        $page = self::bootApp([
            'fields' => [
                'headline-text' => ['extends' => 'text']
            ],
            'blueprints' => [
                'pages/default' => [
                    'fields' => [
                        'heading' => ['type' => 'headline-text']
                    ]
                ]
            ],
            'site' => ['children' => [['slug' => 'test']]]
        ])->page('test');

        $this->assertSame('text', FieldDigest::for($page)['fields'][0]['type']);
    }

    #[Test]
    public function picks_the_hint_variant_from_the_field_props(): void
    {
        $page = self::bootApp([
            'blueprints' => [
                'pages/default' => [
                    'fields' => [
                        'teaser' => ['type' => 'writer', 'inline' => true],
                        'start' => ['type' => 'date', 'time' => true],
                        'rating' => ['type' => 'range', 'min' => 1, 'max' => 5],
                        'keywords' => ['type' => 'tags'],
                        'topics' => ['type' => 'checkboxes', 'options' => ['news', 'events']],
                        'links' => ['type' => 'entries', 'field' => 'url', 'max' => 3]
                    ]
                ]
            ],
            'site' => ['children' => [['slug' => 'test']]]
        ])->page('test');

        $this->assertSame([
            'text with inline formatting only (bold, italic, underline, code, links, email, sub, sup). NO wrapping paragraph <p> tags allowed.',
            'a date with time in YYYY-MM-DD HH:MM:SS format (ISO 8601)',
            'a numeric value within the defined range',
            'multiple selection values',
            'one or many values based on the predefined options',
            'multiple entries of url values within the defined count range'
        ], array_column(FieldDigest::for($page)['fields'], 'hint'));
    }

    #[Test]
    public function keeps_the_constraints_of_a_field(): void
    {
        $page = self::bootApp([
            'blueprints' => [
                'pages/default' => [
                    'fields' => [
                        'rating' => ['type' => 'range', 'min' => 1, 'max' => 5],
                        'teaser' => ['type' => 'text', 'minlength' => 10, 'maxlength' => 80]
                    ]
                ]
            ],
            'site' => ['children' => [['slug' => 'test']]]
        ])->page('test');

        [$rating, $teaser] = FieldDigest::for($page)['fields'];

        $this->assertEquals([1, 5], [$rating['min'], $rating['max']]);
        $this->assertSame([10, 80], [$teaser['minlength'], $teaser['maxlength']]);
    }

    #[Test]
    public function describes_the_settings_of_a_layout_field(): void
    {
        $page = self::bootApp([
            'blueprints' => [
                'pages/default' => [
                    'fields' => [
                        'layout' => [
                            'type' => 'layout',
                            'settings' => [
                                'fields' => [
                                    'background' => ['type' => 'select', 'options' => ['light', 'dark']]
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            'site' => ['children' => [['slug' => 'test']]]
        ])->page('test');

        $settings = FieldDigest::for($page)['fields'][0]['settings'];

        $this->assertSame(['background'], array_column($settings, 'name'));
        $this->assertSame('single selection value based on the predefined options', $settings[0]['hint']);
    }

    #[Test]
    public function disables_an_untranslatable_field_in_a_secondary_language(): void
    {
        $page = $this->multilangApp()->page('event');

        $this->assertFalse(self::findField(FieldDigest::for($page, 'en')['fields'], 'price')['disabled']);
        $this->assertTrue(self::findField(FieldDigest::for($page, 'de')['fields'], 'price')['disabled']);
        $this->assertFalse(self::findField(FieldDigest::for($page, 'de')['fields'], 'tagline')['disabled']);
    }

    #[Test]
    public function keeps_a_translatable_structure_field_enabled_in_a_secondary_language(): void
    {
        $digest = FieldDigest::for($this->multilangApp()->page('product'), 'de')['fields'];
        $features = self::findField($digest, 'features');

        $this->assertFalse($features['disabled']);
        $this->assertSame(['title', 'description', 'icon'], array_column($features['fields'], 'name'));
    }

    #[Test]
    public function disables_every_field_for_a_user_who_may_not_update_the_page(): void
    {
        $app = $this->playgroundApp([
            'blueprints' => [
                'users/viewer' => ['name' => 'viewer', 'permissions' => ['pages' => ['update' => false]]]
            ],
            'users' => [
                ['id' => 'viewer', 'email' => 'viewer@example.com', 'role' => 'viewer']
            ]
        ]);
        $app->impersonate('viewer');

        $this->assertSame(
            [true],
            array_values(array_unique(array_column(FieldDigest::for($app->page('product'))['fields'], 'disabled')))
        );
    }

    private function playgroundApp(array $props = []): App
    {
        return self::bootApp(array_replace_recursive([
            'roots' => ['blueprints' => self::PLAYGROUND_BLUEPRINTS],
            'site' => [
                'children' => [
                    ['slug' => 'article', 'template' => 'article', 'content' => ['title' => 'Article']],
                    ['slug' => 'landing', 'template' => 'landing', 'content' => ['title' => 'Landing']],
                    ['slug' => 'product', 'template' => 'product', 'content' => ['title' => 'Product']]
                ]
            ]
        ], $props));
    }

    private function multilangApp(): App
    {
        return self::bootApp([
            'roots' => ['blueprints' => self::PLAYGROUND_BLUEPRINTS],
            'options' => ['languages' => true],
            'languages' => [
                ['code' => 'en', 'name' => 'English', 'default' => true],
                ['code' => 'de', 'name' => 'Deutsch']
            ],
            'blueprints' => [
                'pages/event' => [
                    'fields' => [
                        'price' => ['type' => 'text', 'translate' => false],
                        'tagline' => ['type' => 'text']
                    ]
                ]
            ],
            'site' => [
                'children' => [
                    ['slug' => 'event', 'template' => 'event'],
                    ['slug' => 'product', 'template' => 'product']
                ]
            ]
        ]);
    }

    private static function findField(array $fields, string $name): array
    {
        foreach ($fields as $field) {
            if ($field['name'] === $name) {
                return $field;
            }
        }

        throw new OutOfBoundsException("No field named \"{$name}\"");
    }
}
