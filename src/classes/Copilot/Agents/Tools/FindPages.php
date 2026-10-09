<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\Tool;
use Kirby\Cms\App;
use Kirby\Cms\Page;

/**
 * Pages the account may not list stay out of the results, as in the Panel's search.
 */
final class FindPages
{
    private const DEFAULT_LIMIT = 20;
    private const MAX_LIMIT = 50;

    public static function tool(): Tool
    {
        return new Tool(
            name: 'find_pages',
            title: 'Find pages',
            description: 'Searches the site\'s pages and drafts by their content, or lists one parent\'s children and drafts; filters combine. Pages only: get_content lists a page\'s files. Returns each page\'s ID, UUID, title, template, status, URLs, and whether it has unsaved changes, plus the total number of matches.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'query' => ['type' => 'string', 'description' => 'Words to search the published content for; a page matches any of them. Results are sorted by relevance.'],
                    'parent' => ['type' => 'string', 'description' => 'The `id` or `uuid` of a page to list its children and drafts, or `site` for the top-level pages. Without it, the whole site is searched.'],
                    'template' => ['type' => 'string', 'description' => 'Only pages with this template.'],
                    'status' => ['type' => 'string', 'enum' => Arguments::PAGE_STATUSES],
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
        $arguments->language();

        $template = $arguments->string('template');
        $status = $arguments->oneOf('status', Arguments::PAGE_STATUSES);
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
            ($status === null || $page->status() === $status));

        if ($query !== null) {
            $pages = $pages->search($query);
        }

        return [
            'pages' => $pages->offset($offset)->limit($limit)->values(fn (Page $page) => [
                ...ModelSummary::page($page),
                'hasChanges' => $page->version('changes')->exists('*'),
                'url' => ModelSummary::model($page)['url']
            ]),
            'total' => $pages->count()
        ];
    }
}
