<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use JohannSchopplich\Copilot\FieldDigest;
use Kirby\Cms\App;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\ModelWithContent;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Content\Lock;
use Kirby\Content\Version;
use Kirby\Form\Fields;

/**
 * Pairs each value with what its field expects, so that an agent can write
 * it back in the same shape.
 */
final class GetContent
{
    private const FILE_LIMIT = 100;

    /** About 20k tokens of JSON, below the 25k that clients like Claude Code accept */
    private const MAX_RESULT_LENGTH = 80_000;

    public static function tool(): Tool
    {
        return new Tool(
            name: 'get_content',
            title: 'Get content',
            description: 'Returns the content of a page, a file, or the site in one language: each field with its type, label, a hint for the value format, its options and sub-fields, and its value. Values are the unsaved changes where they exist, else the published content. Also returns an etag for writing, who else made the unsaved changes, the files of a page or the site, and the Panel URL to review the content in. find_pages lists subpages.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'model' => ['type' => 'string', 'description' => '`site`, a page ID, a `page://` or `file://` UUID, or `<page ID>/<filename>`.'],
                    'language' => ['type' => 'string', 'description' => 'The language code to read. Defaults to the default language.'],
                    'fields' => ['type' => 'array', 'items' => ['type' => 'string'], 'description' => 'Only these fields, by name. Use it for values a large result left out.']
                ],
                'required' => ['model'],
                'additionalProperties' => false
            ],
            annotations: ['readOnlyHint' => true, 'destructiveHint' => false, 'idempotentHint' => true, 'openWorldHint' => false],
            permission: ConnectionPermission::Read,
            handler: fn (array $arguments) => self::run(new Arguments($arguments))
        );
    }

    /**
     * Identifies what a model's content was when it was read. The version
     * is part of it, so publishing or discarding changes the etag too.
     */
    public static function etag(ModelWithContent $model, Language $language): string
    {
        $version = self::sourceVersion($model, $language);

        return hash('xxh128', $version->id() . json_encode($version->content($language)->toArray()));
    }

    private static function run(Arguments $arguments): array
    {
        $language = $arguments->language();
        $model = $arguments->model('model');
        $names = $arguments->strings('fields');

        $version = self::sourceVersion($model, $language);
        $digest = FieldDigest::for($model, $language);
        $fields = $digest['fields'];

        if ($names !== null) {
            $fields = self::pickFields($fields, $names);
        }

        $values = Fields::for($model, $language)->fill($version->content($language)->toArray())->toFormValues();
        $fieldsets = self::usedFieldsets($fields, $digest['fieldsets']);

        $fields = array_map(fn (array $field) => [
            ...$field,
            'value' => self::compactValue($field, $values[$field['name']] ?? null, $fieldsets)
        ], $fields);

        $owner = $version->id()->is('changes') ? Lock::for($version, $language)->user() : null;
        $result = [
            'model' => self::describeModel($model),
            'language' => App::instance()->multilang() ? $language->code() : null,
            'version' => $version->id()->value(),
            'etag' => self::etag($model, $language),
            'changesBy' => $owner !== null && $owner->id() !== App::instance()->user()?->id() ? $owner->username() : null,
            'panelUrl' => self::panelUrl($model, $language, $version),
            'fields' => $fields
        ];

        if ($fieldsets !== []) {
            $result['fieldsets'] = $fieldsets;
        }

        $notices = [];

        if (!$language->isDefault() && !$version->exists($language)) {
            $notices[] = "The content isn't translated into {$language->name()} yet: the values are the default language's.";
        }

        if (!$model instanceof File && $names === null) {
            $files = $model->files()->filter(fn (File $file) => $file->isListable());
            $result['files'] = $files->limit(self::FILE_LIMIT)->values(fn (File $file) => [
                'id' => $file->id(),
                'uuid' => $file->uuid()?->toString(),
                'filename' => $file->filename(),
                'template' => $file->template(),
                'alt' => $file->content()->get('alt')->or(null)->value(),
                'panelUrl' => $file->panel()->url()
            ]);

            if ($files->count() > self::FILE_LIMIT) {
                $notices[] = 'Lists the first ' . self::FILE_LIMIT . " of {$files->count()} files.";
            }
        }

        // A field requested alone comes back whole, however large.
        $omitted = $names === null || count($fields) > 1 ? self::omitLargestValues($result) : [];

        if ($omitted !== []) {
            $result['omittedValues'] = $omitted;
            $notices[] = 'Left out the values of ' . implode(', ', $omitted) . ' to keep the result small. Request them one by one with `fields`.';
        }

        if ($notices !== []) {
            $result['notices'] = $notices;
        }

        return $result;
    }

    private static function sourceVersion(ModelWithContent $model, Language $language): Version
    {
        $changes = $model->version('changes');

        return $changes->exists($language) ? $changes : $model->version('latest');
    }

    /**
     * @param list<string> $names
     */
    private static function pickFields(array $fields, array $names): array
    {
        $known = array_column($fields, 'name');
        // The title is part of `model`.
        $unknown = array_diff($names, $known, ['title']);

        if ($unknown !== []) {
            throw new ToolError('Unknown fields: ' . implode(', ', $unknown) . '. The fields are: ' . implode(', ', $known) . '.');
        }

        return array_values(array_filter($fields, fn (array $field) => in_array($field['name'], $names, true)));
    }

    /**
     * Keeps the fieldsets that the fields, or the fieldsets they use, name.
     */
    private static function usedFieldsets(array $fields, array $fieldsets): array
    {
        $used = [];
        $pending = [$fields];

        while ($pending !== []) {
            foreach (array_pop($pending) as $field) {
                foreach ($field['fieldsets'] ?? [] as $key) {
                    if (!isset($used[$key])) {
                        $used[$key] = $fieldsets[$key];
                        $pending[] = $fieldsets[$key]['fields'];
                    }
                }

                $pending[] = $field['fields'] ?? [];
                $pending[] = $field['settings'] ?? [];
            }
        }

        return array_intersect_key($fieldsets, $used);
    }

    /**
     * The Panel's form values, with the items of reference fields cut down
     * to the UUIDs that the field stores.
     */
    private static function compactValue(array $field, mixed $value, array $fieldsets): mixed
    {
        if (!is_array($value)) {
            return $value;
        }

        return match ($field['type']) {
            'files', 'pages', 'users' => array_map(
                fn (mixed $item) => is_array($item) ? ($item['uuid'] ?? $item['id']) : $item,
                $value
            ),
            'structure' => array_map(fn (array $row) => self::compactValues($field['fields'], $row, $fieldsets), $value),
            'object' => self::compactValues($field['fields'], $value, $fieldsets),
            'blocks' => array_map(fn (array $block) => self::compactBlock($block, $field['fieldsets'], $fieldsets), $value),
            'layout' => array_map(function (array $layout) use ($field, $fieldsets) {
                $layout['attrs'] = self::compactValues($field['settings'] ?? [], $layout['attrs'] ?? [], $fieldsets);

                foreach ($layout['columns'] ?? [] as $index => $column) {
                    $layout['columns'][$index]['blocks'] = array_map(
                        fn (array $block) => self::compactBlock($block, $field['fieldsets'], $fieldsets),
                        $column['blocks'] ?? []
                    );
                }

                return $layout;
            }, $value),
            default => $value
        };
    }

    private static function compactValues(array $fields, array $values, array $fieldsets): array
    {
        foreach ($fields as $field) {
            if (array_key_exists($field['name'], $values)) {
                $values[$field['name']] = self::compactValue($field, $values[$field['name']], $fieldsets);
            }
        }

        return $values;
    }

    /**
     * @param list<string> $keys The keys of the field's fieldsets
     */
    private static function compactBlock(array $block, array $keys, array $fieldsets): array
    {
        foreach ($keys as $key) {
            if ($fieldsets[$key]['type'] === ($block['type'] ?? null)) {
                $block['content'] = self::compactValues($fieldsets[$key]['fields'], $block['content'] ?? [], $fieldsets);
                break;
            }
        }

        return $block;
    }

    private static function describeModel(Site|Page|File $model): array
    {
        return match (true) {
            $model instanceof Page => [
                'type' => 'page',
                'id' => $model->id(),
                'uuid' => $model->uuid()?->toString(),
                'title' => $model->title()->value(),
                'template' => $model->intendedTemplate()->name(),
                'status' => $model->status(),
                'url' => $model->isDraft() ? null : $model->url()
            ],
            $model instanceof Site => [
                'type' => 'site',
                'id' => 'site',
                'uuid' => $model->uuid()?->toString(),
                'title' => $model->title()->value(),
                'url' => $model->url()
            ],
            default => [
                'type' => 'file',
                'id' => $model->id(),
                'uuid' => $model->uuid()?->toString(),
                'filename' => $model->filename(),
                'template' => $model->template(),
                'url' => $model->url()
            ]
        };
    }

    /**
     * The compare preview shows the editor the changes next to the published
     * content, in the language the agent read (critique M1).
     */
    private static function panelUrl(Site|Page|File $model, Language $language, Version $version): string
    {
        $url = $model->panel()->url();

        if (!$model instanceof File && $version->id()->is('changes') && $model->previewUrl() !== null) {
            $url .= '/preview/compare';
        }

        if (App::instance()->multilang()) {
            $url .= '?language=' . $language->code();
        }

        return $url;
    }

    /**
     * Removes the largest field values until the result fits.
     *
     * @return list<string> The names of the fields whose values were removed
     */
    private static function omitLargestValues(array &$result): array
    {
        $omitted = [];
        $lengths = array_map(fn (array $field) => strlen(self::encode($field['value'])), $result['fields']);
        arsort($lengths);

        foreach (array_keys($lengths) as $index) {
            if (strlen(self::encode($result)) <= self::MAX_RESULT_LENGTH) {
                break;
            }

            unset($result['fields'][$index]['value']);
            $omitted[] = $result['fields'][$index]['name'];
        }

        return $omitted;
    }

    /** Encodes like the MCP result does */
    private static function encode(mixed $value): string
    {
        return json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }
}
