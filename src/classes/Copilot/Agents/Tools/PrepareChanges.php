<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ActiveContent;
use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use Kirby\Api\Controller\Changes;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Data\Json;
use Kirby\Form\Fields;
use Kirby\Toolkit\Str;

final class PrepareChanges
{
    private const PREVIEW_LENGTH = 300;

    public static function tool(): Tool
    {
        return new Tool(
            name: 'prepare_changes',
            title: 'Prepare changes',
            description: 'Writes field values to the unsaved changes of a page, a file, or the site in one language; an editor reviews and publishes them in the Panel. Send values in the shape get_content returns them, the title included. Each value replaces the whole field – send every block or row of a blocks or structure field – and fields you leave out keep their values. Returns what changed, ignored fields with the reason, validation errors, the new etag, and the Panel URL to review the changes.',
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

        [$values, $ignored] = FieldInput::split($model, $language, $input);

        if ($values === []) {
            throw new ToolError('None of the fields can be written. ' . implode(' ', array_map(fn (array $field) => "{$field['name']}: {$field['reason']}", $ignored)));
        }

        return AgentWrites::write($model, $language, $etag, function () use ($model, $language, $values, $ignored) {
            $before = self::formValues($model, $language);

            ActiveContent::refuseIntroduced($values, $before);

            Changes::save($model, $values);

            $after = self::formValues($model, $language);
            $changes = $model->version('changes');
            $notices = ['Written to the unsaved changes, which go live once published. A Panel tab already showing this content picks them up when it regains focus and can overwrite them until then.'];

            if ($model instanceof Site) {
                $notices[] = 'The Panel\'s list of changes leaves out the site, so tell the editor to open the site in the Panel.';
            }

            return [
                'changed' => array_values(array_filter(array_map(
                    fn (string $name) => ($before[$name] ?? null) === ($after[$name] ?? null) ? null : [
                        'name' => $name,
                        'before' => self::preview($before[$name] ?? null),
                        'after' => self::preview($after[$name] ?? null),
                        ...self::itemCounts($before[$name] ?? null, $after[$name] ?? null)
                    ],
                    array_keys($values)
                ))),
                'ignored' => $ignored,
                'warnings' => $changes->exists($language) ? FieldInput::warnings($model, $language, $changes->content($language)->toArray()) : [],
                ...ContentVersion::describe($model, $language),
                'notices' => $notices
            ];
        });
    }

    /**
     * Reads the Panel's form values of the version an agent writes onto,
     * the title included.
     */
    private static function formValues(Site|Page|File $model, Language $language): array
    {
        $content = ContentVersion::source($model, $language)->content($language)->toArray();
        $values = Fields::for($model, $language)->fill($content)->toFormValues();

        if (!$model instanceof File) {
            $values['title'] = $content['title'] ?? null;
        }

        return $values;
    }

    /**
     * Counts the items of a list, such as blocks or structure rows, which
     * the shortened preview hides when one goes missing.
     */
    private static function itemCounts(mixed $before, mixed $after): array
    {
        if (!is_array($after) || !array_is_list($after)) {
            return [];
        }

        return ['itemsBefore' => is_array($before) ? count($before) : 0, 'itemsAfter' => count($after)];
    }

    private static function preview(mixed $value): mixed
    {
        $text = is_string($value) ? $value : Json::encode($value);

        if (mb_strlen($text) <= self::PREVIEW_LENGTH) {
            return $value;
        }

        return Str::short($text, self::PREVIEW_LENGTH);
    }
}
