<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use PHPUnit\Framework\TestCase;

final class FieldsetsRouteTest extends TestCase
{
    protected function tearDown(): void
    {
        App::destroy();
    }

    private function callFieldsetsRoute(array $blueprints = [], array $fields = []): array
    {
        $appConfig = ['blueprints' => $blueprints];

        if (!empty($fields)) {
            $appConfig['fields'] = $fields;
        }

        $kirby = new App($appConfig);

        $api = require dirname(__DIR__) . '/src/extensions/api.php';
        $routes = $api['routes']($kirby);

        $action = null;
        foreach ($routes as $route) {
            if (($route['pattern'] ?? '') === '__copilot__/fieldsets') {
                $action = $route['action'];
                break;
            }
        }

        $this->assertNotNull($action, 'Fieldsets route not found');

        return $action();
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

    public function testBlockFieldsAreExtracted(): void
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

    public function testI18nLabelsAreTranslated(): void
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
        // Known i18n key should be translated
        $this->assertSame('Text', $block['fields']['title']['label']);
        // Plain string labels should pass through unchanged
        $this->assertSame('My Plain Label', $block['fields']['plain']['label']);
        // Auto-generated labels should be title-cased from the field name
        $this->assertSame('Auto', $block['fields']['auto']['label']);
    }

    public function testQueryBasedOptionsDontCrash(): void
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
        $this->assertNotNull($block, 'Block with query options must not crash');
        $this->assertArrayHasKey('source', $block['fields']);
        $this->assertSame('select', $block['fields']['source']['type']);
        $this->assertSame([], $block['fields']['source']['options']);
    }

    public function testTabbedBlockFieldsAreMerged(): void
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

    public function testInvalidBlueprintIsSkipped(): void
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
