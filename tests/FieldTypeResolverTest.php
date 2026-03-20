<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\FieldTypeResolver;
use Kirby\Cms\App;
use PHPUnit\Framework\TestCase;

final class FieldTypeResolverTest extends TestCase
{
    protected function setUp(): void
    {
        new App([
            'fields' => [
                'custom-writer' => [
                    'extends' => 'writer',
                ],
                'custom-files' => [
                    'extends' => 'files',
                ],
                'deep-custom' => [
                    'extends' => 'custom-writer',
                ],
            ],
        ]);
    }

    protected function tearDown(): void
    {
        App::destroy();
    }

    public function testResolveBaseTypeReturnsKnownTypeAsIs(): void
    {
        $this->assertSame('text', FieldTypeResolver::resolveBaseType('text'));
        $this->assertSame('writer', FieldTypeResolver::resolveBaseType('writer'));
    }

    public function testResolveBaseTypeResolvesCustomType(): void
    {
        $this->assertSame('writer', FieldTypeResolver::resolveBaseType('custom-writer'));
        $this->assertSame('files', FieldTypeResolver::resolveBaseType('custom-files'));
    }

    public function testResolveBaseTypeResolvesMultiLevelChain(): void
    {
        // deep-custom → custom-writer → writer
        $this->assertSame('writer', FieldTypeResolver::resolveBaseType('deep-custom'));
    }

    public function testResolveBaseTypeReturnsUnknownTypeAsIs(): void
    {
        $result = @FieldTypeResolver::resolveBaseType('nonexistent-field-type');
        $this->assertSame('nonexistent-field-type', $result);
    }

    public function testNormalizeFieldsResolvesNestedCustomTypes(): void
    {
        $fields = [
            'title' => ['type' => 'text'],
            'content' => [
                'type' => 'structure',
                'fields' => [
                    'heading' => ['type' => 'text'],
                    'body' => ['type' => 'custom-writer'],
                ],
            ],
        ];

        $normalized = FieldTypeResolver::normalizeFields($fields);

        $this->assertSame('writer', $normalized['content']['fields']['body']['type']);
    }

    public function testNormalizeFieldsConvertsKeyValueOptions(): void
    {
        $fields = [
            'style' => [
                'type' => 'select',
                'options' => [
                    'grid' => 'Grid',
                    'list' => 'List',
                ],
            ],
        ];

        $normalized = FieldTypeResolver::normalizeFields($fields);
        $options = $normalized['style']['options'];

        $this->assertCount(2, $options);
        $this->assertSame('grid', $options[0]['value']);
        $this->assertSame('Grid', $options[0]['text']);
        $this->assertSame('list', $options[1]['value']);
        $this->assertSame('List', $options[1]['text']);
    }

    public function testNormalizeFieldsDropsDynamicOptionSources(): void
    {
        $fields = [
            'querySource' => [
                'type' => 'select',
                'options' => ['type' => 'query', 'query' => 'page.siblings'],
            ],
            'apiSource' => [
                'type' => 'select',
                'options' => ['type' => 'api', 'url' => '/api/options'],
            ],
        ];

        $normalized = FieldTypeResolver::normalizeFields($fields);

        $this->assertSame([], $normalized['querySource']['options']);
        $this->assertSame([], $normalized['apiSource']['options']);
    }

    public function testNormalizeFieldsHandlesIndexedOptions(): void
    {
        $fields = [
            'status' => [
                'type' => 'select',
                'options' => ['draft', 'listed'],
            ],
        ];

        $normalized = FieldTypeResolver::normalizeFields($fields);

        $this->assertSame('draft', $normalized['status']['options'][0]['value']);
        $this->assertSame('draft', $normalized['status']['options'][0]['text']);
    }

    public function testNormalizeFieldsPassesThroughResolvedOptions(): void
    {
        $fields = [
            'alignment' => [
                'type' => 'select',
                'options' => [
                    ['value' => 'left', 'text' => 'Left'],
                    ['value' => 'center', 'text' => 'Center'],
                ],
            ],
        ];

        $normalized = FieldTypeResolver::normalizeFields($fields);

        $this->assertSame('left', $normalized['alignment']['options'][0]['value']);
        $this->assertSame('center', $normalized['alignment']['options'][1]['value']);
    }
}
