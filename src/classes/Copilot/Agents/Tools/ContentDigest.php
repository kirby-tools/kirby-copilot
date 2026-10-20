<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use Closure;
use JohannSchopplich\Copilot\FieldDigest;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;

/**
 * The field digest of a model in one language, and the walk through field
 * values along it: into structure rows, objects, blocks, and layout rows
 * and columns, at any depth.
 */
final class ContentDigest
{
    /** @var array<string, array> Keyed by field name */
    public readonly array $fields;

    /** @var list<array{label?: string, text: string, when?: array}> */
    public readonly array $info;

    /** @var array<string, array> */
    public readonly array $fieldsets;

    /** @var list<array{name: string, type: string, label: string|null}> */
    public readonly array $unhinted;

    public function __construct(
        public readonly Site|Page|File $model,
        public readonly Language $language
    ) {
        $digest = FieldDigest::for($model, $language);
        $this->fields = array_column($digest['fields'], null, 'name');
        $this->info = $digest['info'];
        $this->fieldsets = $digest['fieldsets'];
        $this->unhinted = $digest['unhinted'];
    }

    public function fieldsetKey(array $field, mixed $type): string|null
    {
        if (!is_string($type)) {
            return null;
        }

        foreach ($field['fieldsets'] ?? [] as $key) {
            if ($this->fieldsets[$key]['type'] === $type) {
                return $key;
            }
        }

        return null;
    }

    public function fieldset(array $field, mixed $type): array|null
    {
        $key = $this->fieldsetKey($field, $type);

        return $key === null ? null : $this->fieldsets[$key];
    }

    /**
     * Keeps the fieldsets the fields name, and the ones those fieldsets name
     * in turn.
     *
     * @return array<string, array>
     */
    public function fieldsetsOf(array $fields): array
    {
        $usedKeys = [];
        $pending = [$fields];

        while ($pending !== []) {
            foreach (array_pop($pending) as $field) {
                foreach ($field['fieldsets'] ?? [] as $key) {
                    if (!isset($usedKeys[$key])) {
                        $usedKeys[$key] = true;
                        $pending[] = $this->fieldsets[$key]['fields'];
                    }
                }

                $pending[] = $field['fields'] ?? [];
                $pending[] = $field['settings'] ?? [];
            }
        }

        return array_intersect_key($this->fieldsets, $usedKeys);
    }

    /**
     * Passes each value of a field without sub-fields to `$map`, along with
     * its digest field, and puts back what `$map` returns.
     *
     * @param Closure(array, mixed): mixed $map
     */
    public function map(array $field, mixed $value, Closure $map): mixed
    {
        if (!in_array($field['type'], ['structure', 'object', 'blocks', 'layout'], true)) {
            return $map($field, $value);
        }

        if (!is_array($value)) {
            return $value;
        }

        return match ($field['type']) {
            'structure' => array_map(fn (mixed $row) => is_array($row) ? $this->mapFields($field['fields'] ?? [], $row, $map) : $row, $value),
            'object' => $this->mapFields($field['fields'] ?? [], $value, $map),
            'blocks' => array_map(fn (mixed $block) => is_array($block) ? $this->mapBlock($field, $block, $map) : $block, $value),
            'layout' => array_map(fn (mixed $row) => is_array($row) ? $this->mapRow($field, $row, $map) : $row, $value)
        };
    }

    /**
     * @param list<array>|array<string, array> $fields
     * @param Closure(array, mixed): mixed $map
     */
    public function mapFields(array $fields, array $values, Closure $map): array
    {
        foreach ($fields as $field) {
            if (array_key_exists($field['name'], $values)) {
                $values[$field['name']] = $this->map($field, $values[$field['name']], $map);
            }
        }

        return $values;
    }

    /**
     * @param array $field The blocks or layout field the block sits in
     * @param Closure(array, mixed): mixed $map
     */
    public function mapBlock(array $field, array $block, Closure $map): array
    {
        $fieldset = $this->fieldset($field, $block['type'] ?? null);

        if ($fieldset !== null && is_array($block['content'] ?? null)) {
            $block['content'] = $this->mapFields($fieldset['fields'], $block['content'], $map);
        }

        return $block;
    }

    /**
     * @param Closure(array, mixed): mixed $map
     */
    public function mapRow(array $field, array $row, Closure $map): array
    {
        $row['attrs'] = $this->mapFields($field['settings'] ?? [], $row['attrs'] ?? [], $map);

        foreach ($row['columns'] ?? [] as $index => $column) {
            $row['columns'][$index]['blocks'] = array_map(
                fn (mixed $block) => is_array($block) ? $this->mapBlock($field, $block, $map) : $block,
                $column['blocks'] ?? []
            );
        }

        return $row;
    }

    /**
     * Lists the blocks, layout rows, and layout columns of a blocks or
     * layout value, at any depth, with their paths. `parentField` is the
     * blocks or layout field an item sits in, and `steps` names the blocks
     * a nested blocks or layout field sits in.
     *
     * @param list<int|string> $path
     * @param list<array{0: string, 1: string}> $steps
     * @return iterable<array{id: string|null, kind: string, label: string, value: mixed, path: list<int|string>, parentField: array, steps: list<array{0: string, 1: string}>}>
     */
    public function items(array $field, array $value, array $path = [], array $steps = []): iterable
    {
        if ($field['type'] === 'blocks') {
            yield from $this->blockItems($field, $value, $path, $steps);

            return;
        }

        foreach ($value as $index => $row) {
            if (!is_array($row)) {
                continue;
            }

            yield ['id' => $row['id'] ?? null, 'kind' => 'layout', 'label' => 'layout row', 'value' => $row, 'path' => [...$path, $index], 'parentField' => $field, 'steps' => $steps];

            foreach (is_array($row['columns'] ?? null) ? $row['columns'] : [] as $columnIndex => $column) {
                if (!is_array($column)) {
                    continue;
                }

                $columnPath = [...$path, $index, 'columns', $columnIndex];

                yield ['id' => $column['id'] ?? null, 'kind' => 'column', 'label' => 'layout column', 'value' => $column, 'path' => $columnPath, 'parentField' => $field, 'steps' => $steps];
                yield from $this->blockItems($field, is_array($column['blocks'] ?? null) ? $column['blocks'] : [], [...$columnPath, 'blocks'], $steps);
            }
        }
    }

    private function blockItems(array $field, array $blocks, array $path, array $steps): iterable
    {
        foreach ($blocks as $index => $block) {
            yield ['id' => $block['id'] ?? null, 'kind' => 'block', 'label' => 'block', 'value' => $block, 'path' => [...$path, $index], 'parentField' => $field, 'steps' => $steps];

            if (!is_array($block)) {
                continue;
            }

            foreach ($this->fieldset($field, $block['type'] ?? null)['fields'] ?? [] as $subField) {
                $subValue = $block['content'][$subField['name']] ?? null;

                if (in_array($subField['type'], ['blocks', 'layout'], true) && is_array($subValue)) {
                    yield from $this->items($subField, $subValue, [...$path, $index, 'content', $subField['name']], [...$steps, [$block['type'], $subField['name']]]);
                }
            }
        }
    }
}
