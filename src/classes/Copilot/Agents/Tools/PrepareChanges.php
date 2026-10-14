<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ActiveContent;
use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use JohannSchopplich\Copilot\FieldDigest;
use Kirby\Api\Controller\Changes;
use Kirby\Cms\Site;
use Kirby\Form\Fields;

final class PrepareChanges
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'prepare_changes',
            title: 'Prepare changes',
            description: 'Writes field values to the unsaved changes of a page, a file, or the site in one language; they go live once published – by an editor in the Panel, or with publish_changes when the user asks. Send values in the shape get_content returns them, the title included. Each value replaces the whole field – send every block or row of a blocks or structure field – and fields you leave out keep their values. Returns what changed, ignored fields with the reason, validation errors and values their fields don\'t take, the new etag, and the Panel URL to review the changes. For a list field such as blocks or a structure, what changed also counts the items before and after; tell the user when items went missing.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'model' => ['type' => 'string', 'description' => Arguments::MODEL_DESCRIPTION],
                    'language' => ['type' => 'string', 'description' => Arguments::LANGUAGE_DESCRIPTION],
                    'etag' => ['type' => 'string', 'description' => Arguments::ETAG_DESCRIPTION],
                    'fields' => ['type' => 'object', 'description' => 'The new values by field name.']
                ],
                'required' => ['model', 'etag', 'fields'],
                'additionalProperties' => false
            ],
            annotations: Tool::WRITE,
            permission: ConnectionPermission::Prepare,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): array
    {
        $language = $arguments->language();
        $model = $arguments->model('model');
        $etag = $arguments->etag();
        $input = $arguments->object('fields');

        if ($input === null || $input === []) {
            throw new ToolError('`fields` must name at least one field.');
        }

        // Kirby disables every field of a model the account can't update, so one refusal replaces a "disabled" per field.
        if ($model->permissions()->can('update') !== true) {
            throw new ToolError(FieldInput::UPDATE_REFUSAL);
        }

        [$values, $ignored] = FieldInput::split($model, $language, $input);

        if ($values === []) {
            throw new ToolError('None of the fields can be written. ' . implode(' ', array_map(fn (array $field) => "{$field['name']}: {$field['reason']}", $ignored)));
        }

        return AgentWrites::write($model, $language, $etag, function () use ($model, $language, $values, $ignored) {
            $read = fn () => ContentVersion::source($model, $language)->content($language)->toArray();
            $fields = Fields::for($model, $language);
            $current = $fields->fill($read())->toFormValues();

            $fields->submit($values);
            ActiveContent::refuseIntroduced($fields, array_keys($values), $current);

            Changes::save($model, $values);

            $fields->reset()->fill($read());
            $digest = FieldDigest::for($model, $language);
            $before = GetContent::compactValues($digest['fields'], $current, $digest['fieldsets']);
            $after = GetContent::compactValues($digest['fields'], $fields->toFormValues(), $digest['fieldsets']);
            $result = [
                'changed' => array_values(array_filter(array_map(
                    fn (string $name) => ($before[$name] ?? null) === ($after[$name] ?? null) ? null : [
                        'name' => $name,
                        'before' => GetContent::shortValue($before[$name] ?? null),
                        'after' => GetContent::shortValue($after[$name] ?? null),
                        ...self::itemCounts($before[$name] ?? null, $after[$name] ?? null)
                    ],
                    array_keys($values)
                ))),
                'ignored' => $ignored,
                'warnings' => FieldInput::warnings($fields, $values),
                ...ContentVersion::describe($model, $language)
            ];

            if ($model instanceof Site) {
                $result['notices'] = ['The Panel\'s list of changes leaves out the site, so tell the editor to open the site in the Panel.'];
            }

            return $result;
        });
    }

    /**
     * Counts the items of a list, such as blocks or structure rows, and a
     * layout's blocks, since the shortened preview can't show that one went
     * missing.
     */
    private static function itemCounts(mixed $before, mixed $after): array
    {
        if (!is_array($after) || !array_is_list($after)) {
            return [];
        }

        return ['itemsBefore' => self::countItems($before), 'itemsAfter' => self::countItems($after)];
    }

    private static function countItems(mixed $value): int
    {
        if (!is_array($value)) {
            return 0;
        }

        return array_sum(array_map(
            fn (mixed $item) => is_array($item['columns'] ?? null) ? array_sum(array_map(fn (array $column) => count($column['blocks'] ?? []), $item['columns'])) : 1,
            $value
        ));
    }
}
