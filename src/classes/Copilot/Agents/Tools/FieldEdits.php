<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use Closure;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\ToolError;
use JohannSchopplich\Copilot\FieldDigest;
use Kirby\Cms\Block;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\Layout;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Form\Field\BlocksField;
use Kirby\Form\Fields;

/**
 * Turns an agent's edits inside fields into whole field values, so that a
 * change to one sentence or one block doesn't make the agent send the rest
 * of the field again. Blocks, layout rows, and layout columns are found by
 * their ids, wherever they sit in the field.
 */
final class FieldEdits
{
    public const OPERATIONS = ['replace', 'set', 'insert', 'move', 'remove'];

    /** @var array<string, array> Digest fields by name */
    private array $fields;

    /** @var array<string, array> */
    private array $fieldsets;

    private Fields|null $form = null;

    /** @var list<array{edit: int, id: string, columns?: list<array{id: string, blocks: list<string>}>}> */
    private array $inserted = [];

    /** @var array<string, string> The id of the item last placed after each id, keyed by that id */
    private array $placedAfter = [];

    private function __construct(
        private readonly Site|Page|File $model,
        private readonly Language $language
    ) {
        $digest = FieldDigest::for($model, $language);
        $this->fields = array_column($digest['fields'], null, 'name');
        $this->fieldsets = $digest['fieldsets'];
    }

    /**
     * @param list<array<string, mixed>> $edits
     * @param array<string, mixed> $input The values sent in `fields`
     * @return array{values: array<string, mixed>, inserted: list<array{edit: int, id: string, columns?: list<array{id: string, blocks: list<string>}>}>} `$input` with the edited fields added, and what each edit inserted
     */
    public static function apply(Site|Page|File $model, Language $language, array $edits, array $input): array
    {
        if ($edits === []) {
            return ['values' => $input, 'inserted' => []];
        }

        $fieldEdits = new self($model, $language);
        $values = [];

        foreach ($edits as $index => $edit) {
            try {
                $name = strtolower(self::string($edit, 'field'));

                if (array_key_exists($name, array_change_key_case($input))) {
                    throw new ToolError("{$name} is both in `fields` and in `edits`. Send it once.");
                }

                $value = array_key_exists($name, $values) ? $values[$name] : $fieldEdits->currentValue($name);
                $values[$name] = $fieldEdits->edit($edit, $index + 1, $name, $value);
            } catch (ToolError $error) {
                throw new ToolError('edit ' . ($index + 1) . ': ' . $error->getMessage());
            }
        }

        return ['values' => [...$input, ...$values], 'inserted' => $fieldEdits->inserted];
    }

    private function edit(array $edit, int $number, string $name, mixed $value): mixed
    {
        $operation = self::string($edit, 'operation');

        if (!in_array($operation, self::OPERATIONS, true)) {
            throw new ToolError('`operation` must be one of: ' . implode(', ', self::OPERATIONS) . '.');
        }

        if ($operation === 'replace') {
            return $this->replace($name, $value, self::string($edit, 'old'), self::string($edit, 'new', allowEmpty: true), isset($edit['id']) ? self::string($edit, 'id') : null);
        }

        $field = $this->fields[$name] ?? null;

        if (!is_array($value) || !in_array($field['type'] ?? null, ['blocks', 'layout'], true)) {
            throw new ToolError("{$name} holds no blocks or layout rows. Send it whole in `fields`.");
        }

        if (in_array($operation, ['move', 'remove'], true)) {
            // A moved or removed item no longer marks the place after its id.
            $this->placedAfter = array_diff($this->placedAfter, [self::string($edit, 'id')]);
        }

        return match ($operation) {
            'set' => $this->set($field, $value, self::string($edit, 'id'), self::string($edit, 'name'), $edit),
            'insert' => $this->insert($field, $value, $edit, $number),
            'move' => $this->move($field, $value, self::string($edit, 'id'), $edit),
            'remove' => self::removeAt($value, $this->locate($field, $value, self::string($edit, 'id'), ['block', 'layout'])['path'])
        };
    }

    /**
     * Reads the field's value as `get_content` returns it.
     */
    private function currentValue(string $name): mixed
    {
        if ($name === 'title' && !$this->model instanceof File) {
            return ContentVersion::source($this->model, $this->language)->content($this->language)->get('title')->value();
        }

        $field = $this->fields[$name] ?? null;

        if ($field === null) {
            [, $ignored] = FieldInput::split($this->model, $this->language, [$name => null]);

            throw new ToolError("{$name}: {$ignored[0]['reason']}");
        }

        return GetContent::values($this->model, $this->language, [$field], $this->fieldsets)[$name];
    }

    private function replace(string $name, mixed $value, string $old, string $new, string|null $id): mixed
    {
        $field = $this->fields[$name] ?? ['name' => $name, 'type' => 'text'];
        $count = 0;
        $replaceText = function (string $text) use ($old, $new, &$count) {
            $text = str_replace($old, $new, $text, $replacements);
            $count += $replacements;

            return $text;
        };

        if (in_array($field['type'], [...FieldDigest::REFERENCE_TYPES, ...FieldDigest::CHOICE_TYPES], true) || (!is_string($value) && !is_array($value))) {
            throw new ToolError("{$name} holds no text to edit. Send it whole in `fields`.");
        }

        if ($id === null) {
            $where = $name;
            $value = $this->walkText($field, $value, $replaceText);
        } elseif (!is_array($value)) {
            throw new ToolError("{$name} holds no blocks. Leave out `id`.");
        } else {
            $item = $this->locate($field, $value, $id, ['block']);
            $where = "the block {$id} of {$name}";
            $value = self::replaceAt($value, $item['path'], $this->walkBlock($item['parentField'], self::valueAt($value, $item['path']), $replaceText));
        }

        if ($count !== 1) {
            throw new ToolError($count === 0
                ? "`old` doesn't occur in {$where}. get_content returns its current value."
                : "`old` occurs {$count} times in {$where}. Make it longer" . ($id === null && is_array($value) ? ', or pass the `id` of its block,' : '') . ' so it occurs once.');
        }

        return $value;
    }

    private function set(array $field, array $value, string $id, string $name, array $edit): array
    {
        if (!array_key_exists('value', $edit)) {
            throw new ToolError('`set` needs a `value`.');
        }

        $item = $this->locate($field, $value, $id, ['block', 'layout']);
        $target = self::valueAt($value, $item['path']);

        if ($item['kind'] === 'block' && $name === 'isHidden') {
            if (!is_bool($edit['value'])) {
                throw new ToolError('`isHidden` takes `true` or `false`.');
            }

            return self::replaceAt($value, $item['path'], [...$target, 'isHidden' => $edit['value']]);
        }

        $isBlock = $item['kind'] === 'block';
        $subFields = $isBlock ? $this->fieldset($item['parentField'], $target['type'])['fields'] ?? [] : $item['parentField']['settings'] ?? [];
        $names = array_column($subFields, 'name');
        $name = strtolower($name);

        if (!in_array($name, $names, true)) {
            throw new ToolError($isBlock
                ? "The block {$id} has no field {$name}. Its fields: " . implode(', ', $names) . '.'
                : "The layout row {$id} has no setting {$name}." . ($names === [] ? '' : ' Its settings: ' . implode(', ', $names) . '.'));
        }

        $this->refuseSharedFields([$name => $edit['value']], $subFields);
        $kirbyField = $this->kirbyField($field['name'], $item['steps']);
        $form = $isBlock ? $kirbyField->form($kirbyField->fields($target['type'])) : $kirbyField->attrsForm();
        $form->submit(input: [$name => $edit['value']]);
        FieldInput::refuseDropped($form, [$name => $edit['value']], $subFields);

        $key = $isBlock ? 'content' : 'attrs';
        $target[$key] = [...($target[$key] ?? []), $name => $edit['value']];

        return self::replaceAt($value, $item['path'], $target);
    }

    private function insert(array $field, array $value, array $edit, int $number): array
    {
        $place = $this->place($field, $value, $edit);
        $kirbyField = $this->kirbyField($field['name'], $place['steps']);

        if ($place['kind'] === 'layout') {
            $item = $this->newLayoutRow($place['parentField'], $kirbyField, $edit);
            $this->inserted[] = ['edit' => $number, 'id' => $item['id'], 'columns' => array_map(fn (array $column) => ['id' => $column['id'], 'blocks' => array_column($column['blocks'], 'id')], $item['columns'])];
        } else {
            $item = $this->newBlock($place['parentField'], $kirbyField, self::string($edit, 'type'), self::content($edit));
            $this->inserted[] = ['edit' => $number, 'id' => $item['id']];
        }

        $this->notePlacedAfter($edit, $item['id']);

        return self::insertAt($value, $place['path'], $place['index'], $item);
    }

    private function move(array $field, array $value, string $id, array $edit): array
    {
        $item = $this->locate($field, $value, $id, ['block', 'layout']);
        $movedItem = self::valueAt($value, $item['path']);
        $value = self::removeAt($value, $item['path']);
        $place = $this->place($field, $value, $edit);

        if ($place['kind'] !== $item['kind']) {
            throw new ToolError($item['kind'] === 'layout'
                ? 'A layout row moves only next to another layout row.'
                : 'A block moves only next to another block or `into` a layout column.');
        }

        if ($item['kind'] === 'block' && $this->fieldset($place['parentField'], $movedItem['type']) === null) {
            throw new ToolError("The block {$id} is of the type {$movedItem['type']}, which its new place doesn't take.");
        }

        $this->notePlacedAfter($edit, $id);

        return self::insertAt($value, $place['path'], $place['index'], $movedItem);
    }

    /**
     * Finds where an inserted or moved item goes: `after` or `before` a block
     * or layout row, `into` a layout column, or else at the end of the field.
     * Items inserted or moved `after` the same id keep the order they were
     * sent in.
     *
     * @return array{kind: string, path: list<int|string>, index: int|null, parentField: array, steps: list<array{0: string, 1: string}>}
     */
    private function place(array $field, array $value, array $edit): array
    {
        foreach (['after', 'before'] as $key) {
            if (isset($edit[$key])) {
                $id = self::string($edit, $key);
                $item = $this->locate($field, $value, $key === 'after' ? $this->placedAfter[$id] ?? $id : $id, ['block', 'layout']);
                $index = array_pop($item['path']);

                return [...$item, 'index' => $key === 'after' ? $index + 1 : $index];
            }
        }

        if (isset($edit['into'])) {
            $item = $this->locate($field, $value, self::string($edit, 'into'), ['column']);

            return [...$item, 'kind' => 'block', 'path' => [...$item['path'], 'blocks'], 'index' => null];
        }

        return [
            'kind' => $field['type'] === 'layout' ? 'layout' : 'block',
            'path' => [],
            'index' => null,
            'parentField' => $field,
            'steps' => []
        ];
    }

    private function notePlacedAfter(array $edit, string $id): void
    {
        if (isset($edit['after'])) {
            $this->placedAfter[self::string($edit, 'after')] = $id;
        }
    }

    /**
     * Builds a block as the Panel does for a new one: its fieldset's defaults,
     * then the content sent.
     */
    private function newBlock(array $field, BlocksField $kirbyField, string $type, array $content): array
    {
        $fieldset = $this->fieldset($field, $type);

        if ($fieldset === null) {
            throw new ToolError(FieldInput::unknownBlockTypeReason($field, $type, $this->fieldsets));
        }

        self::refuseUnknownNames($content, $fieldset['fields'], "The block type {$type}");
        $this->refuseSharedFields($content, $fieldset['fields']);

        $form = $kirbyField->form($kirbyField->fields($type));
        $form->fill(input: $form->defaults());
        $form->submit(input: $content);
        FieldInput::refuseDropped($form, $content, $fieldset['fields']);
        $block = Block::factory(['content' => $form->toFormValues(), 'type' => $type])->toArray();
        $block['content'] = GetContent::compactValues($fieldset['fields'], $block['content'], $this->fieldsets);

        return $block;
    }

    /**
     * Builds a layout row as the Panel does for a new one.
     */
    private function newLayoutRow(array $field, BlocksField $kirbyField, array $edit): array
    {
        $columns = $edit['columns'] ?? null;
        $layouts = $field['layouts'];

        if (!is_array($columns) || $columns === [] || !array_is_list($columns)) {
            throw new ToolError('A layout row needs `columns`, each with a `width` and optional `blocks`.');
        }

        $widths = array_map(fn (mixed $column) => is_string($column['width'] ?? null) ? $column['width'] : throw new ToolError('Each column needs a `width`, like `1/2`.'), $columns);

        if (!in_array($widths, $layouts, true)) {
            throw new ToolError("{$field['name']} takes these column widths: " . implode(' · ', array_map(fn (array $layout) => implode(', ', $layout), $layouts)) . '.');
        }

        $settings = self::content($edit);
        self::refuseUnknownNames($settings, $field['settings'] ?? [], 'The layout rows');
        $this->refuseSharedFields($settings, $field['settings'] ?? []);

        $form = $kirbyField->attrsForm();
        $form->fill(input: $form->defaults());
        $form->submit(input: $settings);
        FieldInput::refuseDropped($form, $settings, $field['settings'] ?? []);

        return Layout::factory([
            'attrs' => GetContent::compactValues($field['settings'] ?? [], $form->toFormValues(), $this->fieldsets),
            'columns' => array_map(fn (array $column) => [
                'blocks' => array_map(
                    fn (mixed $block) => is_array($block) ? $this->newBlock($field, $kirbyField, self::string($block, 'type'), self::content($block)) : throw new ToolError('Each block in `blocks` needs a `type` and its `content`.'),
                    is_array($column['blocks'] ?? null) ? $column['blocks'] : []
                ),
                'width' => $column['width']
            ], $columns)
        ])->toArray();
    }

    /**
     * @param list<string> $kinds The kinds of items the edit takes
     * @return array{kind: string, label: string, path: list<int|string>, parentField: array, steps: list<array{0: string, 1: string}>}
     */
    private function locate(array $field, array $value, string $id, array $kinds): array
    {
        foreach ($this->items($field, $value, [], []) as $item) {
            if ($item['id'] === $id) {
                if (!in_array($item['kind'], $kinds, true)) {
                    throw new ToolError("{$id} is a {$item['label']}, which this edit doesn't take.");
                }

                return $item;
            }
        }

        throw new ToolError("{$field['name']} has no block, layout row, or layout column with the id {$id}. get_content returns the ids.");
    }

    /**
     * Lists the blocks, layout rows, and layout columns of a blocks or layout
     * value with their paths. `parentField` is the blocks or layout field they sit
     * in, and `steps` names the blocks a nested blocks or layout field sits in.
     *
     * @param list<int|string> $path
     * @param list<array{0: string, 1: string}> $steps
     * @return iterable<array{id: string|null, kind: string, label: string, path: list<int|string>, parentField: array, steps: list<array{0: string, 1: string}>}>
     */
    private function items(array $field, array $value, array $path, array $steps): iterable
    {
        if ($field['type'] === 'blocks') {
            yield from $this->blockItems($field, $value, $path, $steps);

            return;
        }

        foreach ($value as $index => $row) {
            if (!is_array($row)) {
                continue;
            }

            yield ['id' => $row['id'] ?? null, 'kind' => 'layout', 'label' => 'layout row', 'path' => [...$path, $index], 'parentField' => $field, 'steps' => $steps];

            foreach ($row['columns'] ?? [] as $columnIndex => $column) {
                $columnPath = [...$path, $index, 'columns', $columnIndex];

                yield ['id' => $column['id'] ?? null, 'kind' => 'column', 'label' => 'layout column', 'path' => $columnPath, 'parentField' => $field, 'steps' => $steps];
                yield from $this->blockItems($field, $column['blocks'] ?? [], [...$columnPath, 'blocks'], $steps);
            }
        }
    }

    private function blockItems(array $field, array $blocks, array $path, array $steps): iterable
    {
        foreach ($blocks as $index => $block) {
            if (!is_array($block)) {
                continue;
            }

            yield ['id' => $block['id'] ?? null, 'kind' => 'block', 'label' => 'block', 'path' => [...$path, $index], 'parentField' => $field, 'steps' => $steps];

            foreach ($this->fieldset($field, $block['type'] ?? '')['fields'] ?? [] as $subField) {
                $subValue = $block['content'][$subField['name']] ?? null;

                if (in_array($subField['type'], ['blocks', 'layout'], true) && is_array($subValue)) {
                    yield from $this->items($subField, $subValue, [...$path, $index, 'content', $subField['name']], [...$steps, [$block['type'], $subField['name']]]);
                }
            }
        }
    }

    /**
     * Returns the Kirby field behind a blocks or layout field, or behind one
     * nested in the blocks that `$steps` names.
     *
     * @param list<array{0: string, 1: string}> $steps
     */
    private function kirbyField(string $name, array $steps): BlocksField
    {
        $this->form ??= Fields::for($this->model, $this->language);
        $field = $this->form->field($name);

        foreach ($steps as [$type, $subName]) {
            $field = $field->form($field->fields($type))->field($subName);
        }

        return $field;
    }

    /**
     * Replaces every text in a value with what `$transform` returns for it,
     * leaving out ids, references, and choices.
     */
    private function walkText(array $field, mixed $value, Closure $transform): mixed
    {
        if (in_array($field['type'], [...FieldDigest::REFERENCE_TYPES, ...FieldDigest::CHOICE_TYPES], true)) {
            return $value;
        }

        if (is_string($value)) {
            return $transform($value);
        }

        if (!is_array($value)) {
            return $value;
        }

        return match ($field['type']) {
            'structure' => array_map(fn (mixed $row) => is_array($row) ? $this->walkFields($field['fields'] ?? [], $row, $transform) : $row, $value),
            'object' => $this->walkFields($field['fields'] ?? [], $value, $transform),
            'entries' => array_map(fn (mixed $entry) => is_string($entry) ? $transform($entry) : $entry, $value),
            'blocks' => array_map(fn (mixed $block) => is_array($block) ? $this->walkBlock($field, $block, $transform) : $block, $value),
            'layout' => array_map(fn (mixed $row) => is_array($row) ? $this->walkLayoutRow($field, $row, $transform) : $row, $value),
            default => $value
        };
    }

    private function walkFields(array $fields, array $values, Closure $transform): array
    {
        foreach ($fields as $field) {
            if (array_key_exists($field['name'], $values)) {
                $values[$field['name']] = $this->walkText($field, $values[$field['name']], $transform);
            }
        }

        return $values;
    }

    private function walkBlock(array $field, array $block, Closure $transform): array
    {
        $fieldset = $this->fieldset($field, $block['type'] ?? '');

        if ($fieldset !== null && is_array($block['content'] ?? null)) {
            $block['content'] = $this->walkFields($fieldset['fields'], $block['content'], $transform);
        }

        return $block;
    }

    private function walkLayoutRow(array $layout, array $row, Closure $transform): array
    {
        $row['attrs'] = $this->walkFields($layout['settings'] ?? [], $row['attrs'] ?? [], $transform);

        foreach ($row['columns'] ?? [] as $index => $column) {
            $row['columns'][$index]['blocks'] = array_map(fn (array $block) => $this->walkBlock($layout, $block, $transform), $column['blocks'] ?? []);
        }

        return $row;
    }

    /**
     * Returns the fieldset that a blocks or layout field has for a block type.
     */
    private function fieldset(array $field, string $type): array|null
    {
        foreach ($field['fieldsets'] ?? [] as $key) {
            if ($this->fieldsets[$key]['type'] === $type) {
                return $this->fieldsets[$key];
            }
        }

        return null;
    }

    /**
     * Kirby's forms skip a field with `translate: false` outside the default
     * language, so its value would be lost without a word.
     */
    private function refuseSharedFields(array $content, array $fields): void
    {
        if ($this->language->isDefault()) {
            return;
        }

        $content = array_change_key_case($content);

        foreach ($fields as $field) {
            if (!$field['translate'] && array_key_exists($field['name'], $content)) {
                throw new ToolError("{$field['name']} can be changed only in the default language, as in the Panel.");
            }
        }
    }

    private static function refuseUnknownNames(array $content, array $fields, string $subject): void
    {
        $names = array_column($fields, 'name');
        $unknown = array_diff(array_map('strtolower', array_keys($content)), $names);

        if ($unknown !== []) {
            throw new ToolError("{$subject} has no field " . implode(', ', $unknown) . '. Its fields: ' . ($names === [] ? 'none' : implode(', ', $names)) . '.');
        }
    }

    private static function valueAt(array $value, array $path): mixed
    {
        foreach ($path as $key) {
            $value = $value[$key];
        }

        return $value;
    }

    private static function replaceAt(array $value, array $path, mixed $item): array
    {
        $target = &$value;

        foreach ($path as $key) {
            $target = &$target[$key];
        }

        $target = $item;

        return $value;
    }

    private static function insertAt(array $value, array $path, int|null $index, mixed $item): array
    {
        $list = $path === [] ? $value : self::valueAt($value, $path) ?? [];
        array_splice($list, $index ?? count($list), 0, [$item]);

        return $path === [] ? $list : self::replaceAt($value, $path, $list);
    }

    private static function removeAt(array $value, array $path): array
    {
        $index = array_pop($path);
        $list = $path === [] ? $value : self::valueAt($value, $path);
        array_splice($list, $index, 1);

        return $path === [] ? $list : self::replaceAt($value, $path, $list);
    }

    private static function content(array $edit): array
    {
        $content = $edit['content'] ?? [];

        if (!is_array($content) || ($content !== [] && array_is_list($content))) {
            throw new ToolError('`content` must be an object of field values.');
        }

        return $content;
    }

    private static function string(array $edit, string $key, bool $allowEmpty = false): string
    {
        $value = $edit[$key] ?? null;

        if (!is_string($value) || (!$allowEmpty && $value === '')) {
            throw new ToolError("`{$key}` must be " . ($allowEmpty ? 'a string' : 'a non-empty string') . '.');
        }

        return $value;
    }
}
