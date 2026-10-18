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
use Kirby\Cms\App;
use Kirby\Cms\Site;
use Kirby\Content\Lock;
use Kirby\Data\Json;
use Kirby\Form\Fields;
use Kirby\Toolkit\Str;

final class PrepareChanges
{
    /** Characters before the first difference that an excerpt keeps. */
    private const EXCERPT_CONTEXT_LENGTH = 100;

    public static function tool(): Tool
    {
        return new Tool(
            name: 'prepare_changes',
            title: 'Prepare changes',
            description: 'Writes field values to the unsaved changes of a page, a file, or the site in one language; they go live once published – by an editor in the Panel, or with publish_changes when the user asks. Send values in the shape get_content returns them, the title included. Each value replaces the whole field – send every block or row of a blocks or structure field – and fields you leave out keep their values. Values a field doesn\'t take, such as an unknown option, are refused with its options. To change part of a field – a sentence, one block, or the order of blocks – send `edits` instead of the whole field. Returns what changed, a long value cut to the passage where it starts to differ, ignored fields with the reason, the ids of inserted blocks and layout rows, validation errors, the new etag, and the Panel URL to review the changes. For a list field such as blocks or a structure, what changed also counts the items before and after; tell the user when items went missing.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'model' => ['type' => 'string', 'description' => Arguments::MODEL_DESCRIPTION],
                    'language' => ['type' => 'string', 'description' => Arguments::LANGUAGE_DESCRIPTION],
                    'etag' => ['type' => 'string', 'description' => Arguments::ETAG_DESCRIPTION],
                    'fields' => ['type' => 'object', 'description' => 'The new values by field name.'],
                    'edits' => [
                        'type' => 'array',
                        'description' => implode("\n", [
                            'Changes inside fields, applied in order to the values get_content returns. If one fails, nothing is saved. Blocks, layout rows, and layout columns go by the `id` get_content returns for them.',
                            '- `replace`: `old` becomes `new`. `old` must occur exactly once in the field, or with `id` in that block, HTML tags included.',
                            '- `set`: the field `name` of the block `id` becomes `value`, or its `isHidden`, or the setting `name` of the layout row `id`.',
                            '- `insert`: a block of `type` with `content`, or in a layout field, unless it goes next to a block or `into` a column, a row with `columns`, each a `width` and its `blocks`, and its settings as `content`. Fields left out of `content` take their defaults. Several blocks inserted or moved `after` the same id keep the order they are sent in.',
                            '- `move`: the block or layout row `id` moves within the field.',
                            '- `remove`: the block or layout row `id` with everything in it.',
                            'An inserted or moved item goes `after` or `before` an id, `into` a layout column, or else to the end of the field.'
                        ]),
                        'items' => [
                            'type' => 'object',
                            'properties' => [
                                'operation' => ['type' => 'string', 'enum' => FieldEdits::OPERATIONS],
                                'field' => ['type' => 'string'],
                                'id' => ['type' => 'string'],
                                'old' => ['type' => 'string'],
                                'new' => ['type' => 'string'],
                                'name' => ['type' => 'string'],
                                // No type: strict clients drop a tool whose schema holds an empty one.
                                'value' => ['description' => 'The value in the shape get_content returns for the field.'],
                                'type' => ['type' => 'string', 'description' => 'A block type of the field.'],
                                'content' => ['type' => 'object'],
                                'columns' => [
                                    'type' => 'array',
                                    'items' => [
                                        'type' => 'object',
                                        'properties' => ['width' => ['type' => 'string'], 'blocks' => ['type' => 'array', 'items' => ['type' => 'object']]],
                                        'required' => ['width']
                                    ]
                                ],
                                'after' => ['type' => 'string'],
                                'before' => ['type' => 'string'],
                                'into' => ['type' => 'string']
                            ],
                            'required' => ['operation', 'field'],
                            'additionalProperties' => false
                        ]
                    ]
                ],
                'required' => ['model', 'etag'],
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
        $input = $arguments->object('fields') ?? [];
        $edits = $arguments->objects('edits') ?? [];

        if ($input === [] && $edits === []) {
            throw new ToolError('Send at least one field in `fields` or one edit in `edits`.');
        }

        // Kirby disables every field of a model the account can't update, so one refusal replaces a "disabled" per field.
        if ($model->permissions()->can('update') !== true) {
            throw new ToolError(FieldInput::UPDATE_REFUSAL);
        }

        $editResult = FieldEdits::apply($model, $language, $edits, $input);
        [$values, $ignored] = FieldInput::split($model, $language, $editResult['values']);

        if ($values === []) {
            throw new ToolError('None of the fields can be written. ' . implode(' ', array_map(fn (array $field) => "{$field['name']}: {$field['reason']}", $ignored)));
        }

        return AgentWrites::write($model, $language, $etag, function () use ($model, $language, $values, $ignored, $editResult) {
            $read = fn () => ContentVersion::source($model, $language)->content($language)->toArray();
            $fields = Fields::for($model, $language);
            $current = $fields->fill($read())->toFormValues();

            $fields->submit($values);
            ActiveContent::refuseIntroduced($fields, array_keys($values), $current);
            FieldInput::refuseDropped($fields, $values, FieldDigest::for($model, $language)['fields']);

            // Kirby refuses changes another user holds open, but hands over the ones they left –
            // without a name once the Panel unlocked them on leaving the view. Without locking, changes are no one's.
            $owner = Lock::for($model->version('changes'), $language)->user();
            $notices = !Lock::isEnabled() || $owner?->is(App::instance()->user()) === true ? [] : [
                'The unsaved changes held ' . ($owner === null ? 'earlier edits' : "edits by {$owner->username()}") . ', which now count as yours in the Panel. Tell the user, so they review them before publishing.'
            ];

            Changes::save($model, $values);

            $fields->reset()->fill($read());
            $digest = FieldDigest::for($model, $language);
            $before = GetContent::compactValues($digest['fields'], $current, $digest['fieldsets']);
            $after = GetContent::compactValues($digest['fields'], $fields->toFormValues(), $digest['fieldsets']);
            $result = [
                'changed' => array_values(array_filter(array_map(
                    fn (string $name) => ($before[$name] ?? null) === ($after[$name] ?? null) ? null : [
                        'name' => $name,
                        ...self::excerpts($before[$name] ?? null, $after[$name] ?? null),
                        ...self::itemCounts($before[$name] ?? null, $after[$name] ?? null)
                    ],
                    array_keys($values)
                ))),
                'ignored' => $ignored,
                'warnings' => FieldInput::warnings($fields, $language),
                ...ContentVersion::describe($model, $language)
            ];

            if ($editResult['inserted'] !== []) {
                $result['inserted'] = $editResult['inserted'];
            }

            if ($model instanceof Site) {
                $notices[] = 'The Panel\'s list of changes leaves out the site, so tell the editor to open the site in the Panel.';
            }

            if ($notices !== []) {
                $result['notices'] = $notices;
            }

            return $result;
        });
    }

    /**
     * Cuts long values down to the passage where they start to differ, so
     * that a change deep in a long text or blocks field shows in the result.
     *
     * @return array{before: mixed, after: mixed}
     */
    private static function excerpts(mixed $before, mixed $after): array
    {
        $texts = array_map(fn (mixed $value) => is_string($value) ? $value : Json::encode($value), [$before, $after]);

        if (max(Str::length($texts[0]), Str::length($texts[1])) <= GetContent::SHORT_VALUE_LENGTH) {
            return ['before' => $before, 'after' => $after];
        }

        $differenceOffset = strspn($texts[0] ^ $texts[1], "\0");
        $start = max(0, Str::length(mb_strcut($texts[0], 0, $differenceOffset)) - self::EXCERPT_CONTEXT_LENGTH);
        [$beforeExcerpt, $afterExcerpt] = array_map(
            fn (string $text) => ($start > 0 ? '…' : '') . Str::short(Str::substr($text, $start), GetContent::SHORT_VALUE_LENGTH),
            $texts
        );

        return ['before' => $beforeExcerpt, 'after' => $afterExcerpt];
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
