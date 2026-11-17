<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use Kirby\Exception\InvalidArgumentException;
use Kirby\Exception\NotFoundException;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ModelFieldsRouteTest extends ApiRouteTestCase
{
    private function callModelFieldsRoute(array $query = [], array $props = []): mixed
    {
        return $this->callRoute(
            self::bootApp(['request' => ['query' => $query], ...$props]),
            '__copilot__/model-fields'
        );
    }

    #[Test]
    public function returns_the_help_of_a_nested_field_as_plain_text(): void
    {
        $fields = $this->callModelFieldsRoute(['id' => 'site'], [
            'blueprints' => ['site' => ['fields' => [
                'links' => ['type' => 'structure', 'fields' => ['url' => ['type' => 'url', 'help' => 'Starts with **https://**']]]
            ]]]
        ]);

        $this->assertSame('Starts with https://', $fields['links']['fields']['url']['help']);
    }

    #[Test]
    public function returns_a_plugin_field_with_the_core_type_its_plugin_maps_it_onto(): void
    {
        App::plugin('test/rating', extends: [
            'fields' => ['rating' => PluginField::class],
            'johannschopplich.copilot' => ['fieldTypes' => ['rating' => 'number']]
        ]);

        $fields = $this->callModelFieldsRoute(['id' => 'site'], ['blueprints' => ['site' => ['fields' => ['stars' => ['type' => 'rating']]]]]);

        $this->assertSame('number', $fields['stars']['type']);
    }

    #[Test]
    public function returns_the_copilot_options_of_a_field_from_its_blueprint(): void
    {
        $fields = $this->callModelFieldsRoute(['id' => 'site'], [
            'blueprints' => ['site' => ['fields' => [
                'metaDescription' => ['type' => 'textarea', 'copilot' => ['userPrompt' => 'Summarize the page']]
            ]]]
        ]);

        $this->assertSame(['userPrompt' => 'Summarize the page'], $fields['metadescription']['copilot']);
    }

    #[Test]
    public function returns_the_copilot_options_of_fields_nested_in_blocks_and_structures(): void
    {
        $fields = $this->callModelFieldsRoute(['id' => 'site'], [
            'blueprints' => ['site' => ['fields' => [
                'body' => ['type' => 'blocks', 'fieldsets' => [
                    'note' => ['name' => 'Note', 'tabs' => [], 'fields' => [
                        'text' => ['type' => 'writer', 'copilot' => ['userPrompt' => 'Write a note']]
                    ]]
                ]],
                'links' => ['type' => 'structure', 'fields' => [
                    'summary' => ['type' => 'textarea', 'copilot' => ['userPrompt' => 'Summarize the link']]
                ]]
            ]]]
        ]);

        $this->assertSame(['userPrompt' => 'Write a note'], $fields['body']['fieldsets']['note']['tabs']['content']['fields']['text']['copilot']);
        $this->assertSame(['userPrompt' => 'Summarize the link'], $fields['links']['fields']['summary']['copilot']);
    }

    #[Test]
    public function returns_the_copilot_options_of_a_layout_settings_field(): void
    {
        $fields = $this->callModelFieldsRoute(['id' => 'site'], [
            'blueprints' => ['site' => ['fields' => [
                'layout' => ['type' => 'layout', 'settings' => ['tabs' => ['style' => ['fields' => [
                    'class' => ['type' => 'text', 'copilot' => ['userPrompt' => 'Name a class']]
                ]]]]]
            ]]]
        ]);

        $this->assertSame(['userPrompt' => 'Name a class'], $fields['layout']['settings']['tabs']['style']['fields']['class']['copilot']);
    }

    #[Test]
    public function missing_id_throws(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/Missing "id" query parameter/');
        $this->callModelFieldsRoute();
    }

    #[Test]
    public function unresolvable_id_throws(): void
    {
        $this->expectException(NotFoundException::class);
        $this->expectExceptionMessageMatches('/No model found for id: not-a-model/');
        $this->callModelFieldsRoute(['id' => 'not-a-model']);
    }
}
