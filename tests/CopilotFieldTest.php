<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use Kirby\Form\Field;
use Kirby\Form\Form;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class CopilotFieldTest extends ApiRouteTestCase
{
    #[Test]
    public function toArray_exports_the_field_options_and_resolves_the_prompt_queries(): void
    {
        $props = $this->formField($this->appWithField([
            'userPrompt' => "  Write about {{ page.title }} for {audience}\n",
            'systemPrompt' => 'Answer as JSON: {"title": "…"}',
            'storage' => false,
            'editable' => false,
            'files' => 'auto',
            'icon' => 'ai',
            'theme' => 'positive',
            'size' => 'lg',
            'logLevel' => 'debug',
            'open' => true
        ]))->toArray();

        $expected = [
            'editable' => false,
            'files' => 'auto',
            'icon' => 'ai',
            'licenseDialog' => 'johannschopplich-kirby-copilot/activate',
            'licenseStatus' => 'inactive',
            'logLevel' => 'debug',
            'open' => true,
            'size' => 'lg',
            'storage' => false,
            'systemPrompt' => 'Answer as JSON: {"title": "…"}',
            'theme' => 'positive',
            'userPrompt' => 'Write about Kirby Copilot for {audience}'
        ];

        $this->assertSame($expected, array_intersect_key($props, $expected));
    }

    #[Test]
    public function field_resolves_to_the_target_fields_props_without_its_value(): void
    {
        $field = $this->formField($this->appWithField(['field' => 'MetaTitle']))->field();

        $this->assertSame(['metatitle', 'textarea'], [$field['name'], $field['type']]);
        $this->assertArrayNotHasKey('value', $field);
    }

    #[Test]
    public function field_keeps_the_name_of_a_target_the_model_lacks(): void
    {
        $this->assertSame('missing', $this->formField($this->appWithField(['field' => 'missing']))->field());
    }

    #[Test]
    public function field_keeps_the_name_of_a_target_without_a_value(): void
    {
        $this->assertSame('copilot', $this->formField($this->appWithField(['field' => 'copilot']))->field());
    }

    #[Test]
    public function label_falls_back_to_the_plugin_translation_unless_the_blueprint_sets_one(): void
    {
        $this->assertSame('Copilot', $this->formField($this->appWithField(key: 'assistant'), 'assistant')->label());
        $this->assertSame('Teaser', $this->formField($this->appWithField(['label' => 'Teaser']))->label());
    }

    #[Test]
    public function an_unknown_logLevel_turns_the_field_into_an_error_field(): void
    {
        $props = $this->formField($this->appWithField(['logLevel' => 'nope']))->toArray();

        $this->assertSame(['info', 'negative'], [$props['type'], $props['theme']]);
    }

    #[Test]
    public function nesting_in_a_structure_turns_the_field_into_an_error_field(): void
    {
        $app = self::bootApp([
            'blueprints' => ['pages/default' => ['fields' => ['links' => ['type' => 'structure', 'fields' => [
                'url' => ['type' => 'url'],
                'copilot' => ['type' => 'copilot', 'field' => 'url']
            ]]]]],
            'site' => ['children' => [['slug' => 'test']]]
        ]);

        $props = Form::for($app->page('test'))->field('links')->toArray()['fields']['copilot'];

        $this->assertSame(['info', 'negative'], [$props['type'], $props['theme']]);
        $this->assertStringContainsString('only among the top-level fields', (string)$props['text']);
    }

    private function appWithField(array $field = [], string $key = 'copilot'): App
    {
        return self::bootApp([
            'blueprints' => [
                'pages/article' => [
                    'title' => 'Article',
                    'fields' => [
                        'metaTitle' => ['type' => 'textarea'],
                        $key => ['type' => 'copilot', ...$field]
                    ]
                ]
            ],
            'site' => [
                'children' => [
                    [
                        'slug' => 'test',
                        'template' => 'article',
                        'content' => ['title' => 'Kirby Copilot', 'metaTitle' => 'Hello']
                    ]
                ]
            ]
        ]);
    }

    private function formField(App $app, string $key = 'copilot'): Field
    {
        return Form::for($app->page('test'))->field($key);
    }
}
