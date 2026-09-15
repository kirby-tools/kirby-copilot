<?php

declare(strict_types = 1);

use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class FieldsetsRouteTest extends ApiRouteTestCase
{
    private function callFieldsetsRoute(array $blueprints = [], array $fields = []): array
    {
        $appConfig = ['blueprints' => $blueprints];

        if ($fields !== []) {
            $appConfig['fields'] = $fields;
        }

        return $this->callRoute(self::bootApp($appConfig), '__copilot__/fieldsets');
    }

    private function findBlock(array $result, string $type): array|null
    {
        foreach ($result as $block) {
            if ($block['type'] === $type) {
                return $block;
            }
        }

        return null;
    }

    #[Test]
    public function returns_the_name_and_fields_of_a_block_blueprint(): void
    {
        $result = $this->callFieldsetsRoute([
            'blocks/test-basic' => [
                'name' => 'Test Block',
                'fields' => [
                    'title' => ['type' => 'text', 'label' => 'Title'],
                    'content' => ['type' => 'textarea'],
                ],
            ],
        ]);

        $block = $this->findBlock($result, 'test-basic');
        $this->assertNotNull($block);
        $this->assertSame('Test Block', $block['name']);
        $this->assertSame('text', $block['fields']['title']['type']);
        $this->assertSame('textarea', $block['fields']['content']['type']);
    }

    #[Test]
    public function translates_i18n_labels(): void
    {
        $result = $this->callFieldsetsRoute([
            'blocks/test-i18n' => [
                'name' => 'I18n Block',
                'fields' => [
                    'title' => ['type' => 'text', 'label' => 'field.blocks.heading.text'],
                    'plain' => ['type' => 'text', 'label' => 'My Plain Label'],
                    'auto' => ['type' => 'text'],
                ],
            ],
        ]);

        $block = $this->findBlock($result, 'test-i18n');
        $this->assertNotNull($block);
        // Known i18n key should be translated.
        $this->assertSame('Text', $block['fields']['title']['label']);
        // Plain string labels should pass through unchanged.
        $this->assertSame('My Plain Label', $block['fields']['plain']['label']);
        // Auto-generated labels should be title-cased from the field name.
        $this->assertSame('Auto', $block['fields']['auto']['label']);
    }

    #[Test]
    public function query_based_options_resolve_to_empty_array(): void
    {
        $result = $this->callFieldsetsRoute([
            'blocks/test-query' => [
                'name' => 'Query Block',
                'fields' => [
                    'source' => [
                        'type' => 'select',
                        'options' => [
                            'type' => 'query',
                            'query' => 'page.siblings',
                        ],
                    ],
                ],
            ],
        ]);

        $block = $this->findBlock($result, 'test-query');
        $this->assertNotNull($block);
        $this->assertArrayHasKey('source', $block['fields']);
        $this->assertSame('select', $block['fields']['source']['type']);
        $this->assertSame([], $block['fields']['source']['options']);
    }

    #[Test]
    public function merges_the_fields_of_all_tabs(): void
    {
        $result = $this->callFieldsetsRoute([
            'blocks/test-tabs' => [
                'name' => 'Tabbed Block',
                'tabs' => [
                    'content' => [
                        'fields' => [
                            'heading' => ['type' => 'text'],
                        ],
                    ],
                    'settings' => [
                        'fields' => [
                            'color' => ['type' => 'select'],
                        ],
                    ],
                ],
            ],
        ]);

        $block = $this->findBlock($result, 'test-tabs');
        $this->assertNotNull($block);
        $this->assertArrayHasKey('heading', $block['fields']);
        $this->assertArrayHasKey('color', $block['fields']);
    }

    #[Test]
    public function skips_a_block_with_a_broken_extends_and_keeps_the_others(): void
    {
        $result = $this->callFieldsetsRoute([
            'blocks/valid-block' => [
                'name' => 'Valid Block',
                'fields' => [
                    'title' => ['type' => 'text'],
                ],
            ],
            'blocks/broken-block' => [
                'extends' => 'blocks/nonexistent-parent',
            ],
        ]);

        $this->assertNotNull($this->findBlock($result, 'valid-block'));
    }
}
