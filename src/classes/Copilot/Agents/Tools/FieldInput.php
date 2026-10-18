<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ToolError;
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
    public static function split(ContentDigest $digest, array $input): array
    {
        $model = $digest->model;
        $language = $digest->language;
        $values = [];
        $ignored = [];

        foreach ($input as $name => $value) {
            $name = strtolower((string)$name);
            $field = $digest->fields[$name] ?? null;
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
                    self::refuseUnknownBlocks($digest, $field, $value);
                }

                $values[$name] = $value;
            } else {
                $ignored[] = ['name' => $name, 'reason' => $reason];
            }
        }

        return [$values, $ignored];
    }

    public static function unknownBlockTypeReason(ContentDigest $digest, array $field, string $type): string
    {
        $types = array_map(fn (string $key) => $digest->fieldsets[$key]['type'], $field['fieldsets'] ?? []);

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
     */
    private static function refuseUnknownBlocks(ContentDigest $digest, array $field, mixed $value): void
    {
        $items = match (true) {
            !is_string($value) => $value,
            $field['type'] === 'blocks' => Blocks::parse($value),
            default => Data::decode($value, type: 'json', fail: false)
        };
        $storedValue = GetContent::values($digest, [$field])[$field['name']];
        $storedTypes = [];

        foreach (is_array($storedValue) ? $digest->items($field, $storedValue) : [] as $item) {
            if ($item['kind'] === 'block' && is_string($item['id'])) {
                $storedTypes[$item['id']] = $item['value']['type'] ?? null;
            }
        }

        foreach (is_array($items) ? $digest->items($field, $items) : [] as $item) {
            if ($item['kind'] !== 'block') {
                continue;
            }

            $type = $item['value']['type'] ?? null;
            $parentField = $item['parentField'];

            if (!is_string($type)) {
                throw new ToolError("Each block in {$parentField['name']} needs a `type` and its `content`, as get_content returns them.");
            }

            if ($digest->fieldset($parentField, $type) === null && (!is_string($item['id']) || ($storedTypes[$item['id']] ?? null) !== $type)) {
                throw new ToolError(self::unknownBlockTypeReason($digest, $parentField, $type));
            }
        }
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
