<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ToolError;
use JohannSchopplich\Copilot\FieldDigest;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
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
     * field's value, and a title the role may not change.
     *
     * @return array{0: array<string, mixed>, 1: list<array{name: string, reason: string}>}
     */
    public static function split(Site|Page|File $model, Language $language, array $input): array
    {
        $fields = array_column(FieldDigest::for($model, $language)['fields'], null, 'name');
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
                $values[$name] = $value;
            } else {
                $ignored[] = ['name' => $name, 'reason' => $reason];
            }
        }

        return [$values, $ignored];
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
     * and making content public doesn't.
     *
     * @return list<array{field: string, message: string}>
     */
    public static function warnings(Fields $fields): array
    {
        $warnings = [];

        foreach ($fields->errors() as $name => $error) {
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
