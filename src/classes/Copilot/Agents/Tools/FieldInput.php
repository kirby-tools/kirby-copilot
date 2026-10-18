<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ToolError;
use JohannSchopplich\Copilot\FieldDigest;
use Kirby\Cms\Blocks;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Data\Data;
use Kirby\Data\Json;
use Kirby\Form\Fields;
use Kirby\Form\Form;

/**
 * The checks on the field values an agent sends.
 */
final class FieldInput
{
    private const SHARED_FIELD_REASON = 'The field has one value for all languages. Write it in the default language.';

    public const UPDATE_REFUSAL = "The account may not change this content – its role or the blueprint's options don't allow it.";

    /**
     * Keeps the values of fields an agent may write and names the others
     * with the reason. Kirby itself would store unknown keys, a disabled
     * field's value, and a title the role may not change. Refuses new
     * blocks of a type their field doesn't take.
     *
     * @return array{0: array<string, mixed>, 1: list<array{name: string, reason: string}>}
     */
    public static function split(Site|Page|File $model, Language $language, array $input): array
    {
        $digest = FieldDigest::for($model, $language);
        $fields = array_column($digest['fields'], null, 'name');
        $values = [];
        $ignored = [];

        foreach ($input as $name => $value) {
            $name = strtolower((string)$name);
            $field = $fields[$name] ?? null;
            $blueprintField = $model->blueprint()->field($name);

            $reason = match (true) {
                $name === 'title' => self::titleIgnoreReason($model, $value),
                $name === 'slug' => 'The slug isn\'t a field. change_slug changes it.',
                $field === null && $blueprintField !== null => "Agents can't write fields of the type {$blueprintField['type']}; tell the user to edit it in the Panel.",
                $field === null => 'There is no such field. get_content lists the fields.',
                !$field['translate'] && !$language->isDefault() => self::SHARED_FIELD_REASON,
                $field['disabled'] => 'The field is disabled.',
                default => null
            };

            if ($reason === null) {
                if (in_array($field['type'] ?? null, ['blocks', 'layout'], true)) {
                    self::refuseUnknownBlocks($model, $language, $field, $value, $digest['fieldsets']);
                }

                $values[$name] = $value;
            } else {
                $ignored[] = ['name' => $name, 'reason' => $reason];
            }
        }

        return [$values, $ignored];
    }

    /**
     * @param array<string, array> $fieldsets
     */
    public static function unknownBlockTypeReason(array $field, string $type, array $fieldsets): string
    {
        $types = array_map(fn (string $key) => $fieldsets[$key]['type'], $field['fieldsets'] ?? []);

        return "{$field['name']} takes no block of the type {$type}. Its types: " . implode(', ', $types) . '.';
    }

    /**
     * Refuses values Kirby would empty or cut short on saving, such as an
     * option the field doesn't have, since the field would lose them without
     * the agent noticing.
     *
     * @param array<string, mixed> $sent
     * @param list<array> $digestFields The digest fields of the form
     */
    public static function refuseDropped(Fields|Form $form, array $sent, array $digestFields): void
    {
        $sent = array_change_key_case($sent);
        $reasons = [];

        foreach ($digestFields as $digestField) {
            $name = $digestField['name'];

            if (!array_key_exists($name, $sent)) {
                continue;
            }

            $field = $form->field($name);
            $keptValue = $field->toFormValue();
            $isDropped = ($field->isEmptyValue($keptValue) && !$field->isEmptyValue($sent[$name])) ||
                (is_array($sent[$name]) && is_array($keptValue) && count($keptValue) < count($sent[$name]));

            if ($isDropped) {
                $reasons[] = "{$name} doesn't take " . Json::encode($sent[$name]) . '.'
                    . (isset($digestField['options']) ? ' Its options: ' . implode(', ', array_column($digestField['options'], 'value')) . '.' : '');
            }
        }

        if ($reasons !== []) {
            throw new ToolError("Nothing was written, since Kirby would drop values its fields don't take: " . implode(' ', $reasons));
        }
    }

    /**
     * Lists the validation errors of the filled fields, which saving ignores
     * and making content public doesn't. A field with one value for all
     * languages is left out in another language, whose publishing checks
     * the default language's value.
     *
     * @return list<array{field: string, message: string}>
     */
    public static function warnings(Fields $fields, Language $language): array
    {
        $warnings = [];

        foreach ($fields->errors() as $name => $error) {
            if (!$fields->field($name)->isTranslatable($language)) {
                continue;
            }

            foreach ($error['message'] as $message) {
                $warnings[] = ['field' => $name, 'message' => $message];
            }
        }

        return $warnings;
    }

    /**
     * Joins Kirby's validation errors into one line for a tool error.
     */
    public static function describeErrors(array $errors): string
    {
        $messages = [];

        foreach ($errors as $name => $error) {
            $messages[] = $name . ': ' . implode(' ', $error['message']);
        }

        return implode('; ', $messages);
    }

    /**
     * Kirby stores a block of a type its field doesn't take, and the site
     * renders it as nothing. A stored block of a type the blueprint has since
     * dropped stays, as in the Panel.
     *
     * @param array<string, array> $fieldsets
     */
    private static function refuseUnknownBlocks(Site|Page|File $model, Language $language, array $field, mixed $value, array $fieldsets): void
    {
        $items = match (true) {
            !is_string($value) => $value,
            $field['type'] === 'blocks' => Blocks::parse($value),
            default => Data::decode($value, type: 'json', fail: false)
        };
        $types = array_map(fn (string $key) => $fieldsets[$key]['type'], $field['fieldsets'] ?? []);
        $storedValue = GetContent::values($model, $language, [$field], $fieldsets)[$field['name']];
        $storedTypes = [];

        foreach (self::blocks($field, $storedValue) as $block) {
            if (is_array($block) && is_string($block['id'] ?? null)) {
                $storedTypes[$block['id']] = $block['type'] ?? null;
            }
        }

        foreach (self::blocks($field, $items) as $block) {
            $type = $block['type'] ?? null;

            if (!is_string($type)) {
                throw new ToolError("Each block in {$field['name']} needs a `type` and its `content`, as get_content returns them.");
            }

            if (!in_array($type, $types, true) && (!is_string($block['id'] ?? null) || ($storedTypes[$block['id']] ?? null) !== $type)) {
                throw new ToolError(self::unknownBlockTypeReason($field, $type, $fieldsets));
            }
        }
    }

    /**
     * Lists the blocks of a blocks value, or of the columns of a layout value.
     */
    private static function blocks(array $field, mixed $items): array
    {
        $blocks = $field['type'] === 'blocks' ? $items : array_merge([], ...array_map(
            fn (mixed $row) => array_merge([], ...array_map(fn (mixed $column) => $column['blocks'] ?? [], $row['columns'] ?? [])),
            is_array($items) ? $items : []
        ));

        return is_array($blocks) ? $blocks : [];
    }

    /**
     * Describes why the title can't go into the changes, or returns `null`.
     * Only a role that may change the title writes it, since publishing the
     * changes publishes it too.
     */
    private static function titleIgnoreReason(Site|Page|File $model, mixed $title): string|null
    {
        return match (true) {
            $model instanceof File => 'Files have no title.',
            !is_string($title) || trim($title) === '' => 'The title can\'t be empty.',
            $model->permissions()->can('changeTitle') !== true => 'The account may not change the title.',
            default => null
        };
    }
}
