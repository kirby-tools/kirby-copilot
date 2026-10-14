<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\FieldDigest;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Data\Json;
use Kirby\Form\Fields;

/**
 * The checks on the field values an agent sends.
 */
final class FieldInput
{
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
                !$field['translate'] && !$language->isDefault() => 'The field has one value for all languages. Write it in the default language.',
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
     * Lists the validation errors of the filled fields, which saving ignores
     * and making content public doesn't, and each value an agent sent that
     * Kirby stores empty, such as an unknown option.
     *
     * @param array<string, mixed> $sent
     * @return list<array{field: string, message: string}>
     */
    public static function warnings(Fields $fields, array $sent): array
    {
        $warnings = [];

        foreach ($fields->errors() as $name => $error) {
            foreach ($error['message'] as $message) {
                $warnings[] = ['field' => $name, 'message' => $message];
            }
        }

        $stored = $fields->toFormValues();

        foreach ($sent as $name => $value) {
            $storedValue = $stored[$name] ?? null;

            // Loosely, so a "0" Kirby stores as 0 counts as kept, and a toggle sent "off" or "false" as false.
            $isKept = $value == $storedValue || (is_bool($storedValue) && filter_var($value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) === $storedValue);
            $isEmptied = (is_scalar($value) && is_scalar($storedValue) && empty($storedValue)) || ($value !== '' && $storedValue === []);

            if ($isEmptied && !$isKept) {
                $warnings[] = ['field' => $name, 'message' => 'The field doesn\'t take ' . Json::encode($value) . ', so Kirby stored ' . Json::encode($storedValue) . '.'];
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
