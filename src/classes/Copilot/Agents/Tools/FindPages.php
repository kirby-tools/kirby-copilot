<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\FieldDigest;
use Kirby\Cms\App;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Data\Json;
use Kirby\Toolkit\Str;

/**
 * Pages the account may not list stay out of the results, as in the Panel's search.
 */
final class FindPages
{
    private const DEFAULT_LIMIT = 20;
    private const MAX_LIMIT = 50;
    private const MAX_VALUE_LENGTH = 300;

    public static function tool(): Tool
    {
        return new Tool(
            name: 'find_pages',
            title: 'Find pages',
            description: 'Finds pages and drafts across the site or below one parent, by words in their content, template, status, or unsaved changes; filters combine. Pages only: get_content lists a page\'s files. Returns each page\'s ID, UUID, title, template, status, URLs, whether it has unsaved changes in `language`, and with `fields` their `values`, plus the total number of matches. Field values and sorting read the unsaved changes where they exist, else the published content, as get_content does.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'query' => ['type' => 'string', 'description' => 'Words to search the published content for; a page matches any of them.'],
                    'parent' => ['type' => 'string', 'description' => 'The `id` or `uuid` of a page to list its children and drafts, or `site` for the top-level pages. Without it, the whole site is searched.'],
                    'template' => ['type' => 'string', 'description' => 'Only pages with this template.'],
                    'status' => ['type' => 'string', 'enum' => Arguments::PAGE_STATUSES],
                    'hasChanges' => ['type' => 'boolean', 'description' => 'Only pages with unsaved changes in `language`, or with `false` only pages without.'],
                    'fields' => ['type' => 'array', 'items' => ['type' => 'string'], 'description' => 'Field names whose values to return per page, compact as in get_content. Values beyond ' . self::MAX_VALUE_LENGTH . ' characters are cut, lists and objects as JSON text; get_content returns them whole. Fields a page doesn\'t have are left out.'],
                    'sortBy' => ['type' => 'string', 'description' => '`modified` for the time the content was last saved, or a field name. Without it, results are sorted by relevance for a query, else in the site\'s order.'],
                    'direction' => ['type' => 'string', 'enum' => ['asc', 'desc'], 'default' => 'asc'],
                    'language' => ['type' => 'string', 'description' => Arguments::LANGUAGE_DESCRIPTION],
                    'limit' => ['type' => 'integer', 'minimum' => 1, 'maximum' => self::MAX_LIMIT, 'default' => self::DEFAULT_LIMIT],
                    'offset' => ['type' => 'integer', 'minimum' => 0, 'default' => 0]
                ],
                'additionalProperties' => false
            ],
            annotations: Tool::READ_ONLY,
            permission: ConnectionPermission::Read,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): array
    {
        $language = $arguments->language();

        $template = $arguments->string('template');
        $status = $arguments->oneOf('status', Arguments::PAGE_STATUSES);
        $hasChanges = $arguments->boolean('hasChanges');
        $names = $arguments->strings('fields');
        $sortBy = $arguments->string('sortBy');
        $direction = $arguments->oneOf('direction', ['asc', 'desc']) ?? 'asc';
        $query = $arguments->string('query');
        $limit = $arguments->integer('limit', self::DEFAULT_LIMIT, 1, self::MAX_LIMIT);
        $offset = $arguments->integer('offset', 0, 0);

        $pages = match ($arguments->string('parent')) {
            null => App::instance()->site()->index(true),
            default => $arguments->parent('parent')->childrenAndDrafts()
        };

        $pages = $pages->filter(fn (Page $page) =>
            $page->isListable() &&
            ($template === null || $page->intendedTemplate()->name() === $template) &&
            ($status === null || $page->status() === $status) &&
            ($hasChanges === null || $page->version('changes')->exists($language) === $hasChanges));

        if ($query !== null) {
            $pages = $pages->search($query);
        }

        // A closure reads content fields only; `sortBy()` with a bare field
        // name would call a page method of that name.
        if ($sortBy !== null) {
            $pages = $pages->sortBy(function (Page $page) use ($sortBy, $language) {
                $version = ContentVersion::source($page, $language);

                return $sortBy === 'modified' ? $version->modified($language) : $version->content($language)->get($sortBy)->value();
            }, $direction);
        }

        return [
            'pages' => $pages->offset($offset)->limit($limit)->values(function (Page $page) use ($language, $names) {
                $row = [
                    ...ModelSummary::page($page),
                    'hasChanges' => $page->version('changes')->exists($language),
                    'url' => ModelSummary::model($page)['url']
                ];

                if ($names !== null) {
                    $row['values'] = (object)self::values($page, $language, $names);
                }

                return $row;
            }),
            'total' => $pages->count()
        ];
    }

    /**
     * @param list<string> $names
     * @return array<string, mixed>
     */
    private static function values(Page $page, Language $language, array $names): array
    {
        $digest = FieldDigest::for($page, $language);
        $fields = array_values(array_filter($digest['fields'], fn (array $field) => in_array($field['name'], $names, true)));

        return array_map(self::shortValue(...), GetContent::values($page, $language, $fields, $digest['fieldsets']));
    }

    private static function shortValue(mixed $value): mixed
    {
        $text = is_string($value) ? $value : Json::encode($value);

        return Str::length($text) > self::MAX_VALUE_LENGTH ? Str::short($text, self::MAX_VALUE_LENGTH) : $value;
    }
}
