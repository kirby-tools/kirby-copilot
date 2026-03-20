<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\FieldNormalizer;
use Kirby\Cms\App;
use PHPUnit\Framework\TestCase;

final class FieldNormalizerTest extends TestCase
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
        $this->assertSame('text', FieldNormalizer::resolveBaseType('text'));
        $this->assertSame('writer', FieldNormalizer::resolveBaseType('writer'));
    }

    public function testResolveBaseTypeResolvesCustomType(): void
    {
        $this->assertSame('writer', FieldNormalizer::resolveBaseType('custom-writer'));
        $this->assertSame('files', FieldNormalizer::resolveBaseType('custom-files'));
    }

    public function testResolveBaseTypeResolvesMultiLevelChain(): void
    {
        // deep-custom → custom-writer → writer
        $this->assertSame('writer', FieldNormalizer::resolveBaseType('deep-custom'));
    }

    public function testResolveBaseTypeReturnsUnknownTypeAsIs(): void
    {
        $result = @FieldNormalizer::resolveBaseType('nonexistent-field-type');
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

        $normalized = FieldNormalizer::normalizeFields($fields);

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

        $normalized = FieldNormalizer::normalizeFields($fields);
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

        $normalized = FieldNormalizer::normalizeFields($fields);

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

        $normalized = FieldNormalizer::normalizeFields($fields);

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

        $normalized = FieldNormalizer::normalizeFields($fields);

        $this->assertSame('left', $normalized['alignment']['options'][0]['value']);
        $this->assertSame('center', $normalized['alignment']['options'][1]['value']);
    }
}
