<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\FieldDigest;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Form\Fields;

/**
 * The checks on the field values an agent sends.
 */
final class FieldInput
{
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
        $blueprintFields = $model->blueprint()->fields();
        $values = [];
        $ignored = [];

        foreach ($input as $name => $value) {
            $name = (string)$name;
            $field = $fields[$name] ?? null;

            $reason = match (true) {
                $name === 'title' => self::titleIgnoreReason($model, $value),
                $name === 'slug' => 'Agents don\'t change slugs, since a new slug changes the page\'s URL right away.',
                $field === null && isset($blueprintFields[$name]) => "Agents can't write this field of the type {$blueprintFields[$name]['type']}.",
                $field === null => 'There is no such field. get_content lists the fields.',
                $field['disabled'] => 'The field is disabled.',
                !$field['translate'] && !$language->isDefault() => 'The field has one value for all languages. Write it in the default language.',
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
     * Lists the validation errors of content, which saving ignores and
     * publishing doesn't.
     *
     * @return list<array{field: string, message: string}>
     */
    public static function warnings(Site|Page|File $model, Language $language, array $content): array
    {
        $warnings = [];

        foreach (Fields::for($model, $language)->fill($content)->errors() as $name => $error) {
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
