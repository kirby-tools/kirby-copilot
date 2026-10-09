<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\Tool;

final class MovePage
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'move_page',
            title: 'Move page',
            description: 'Moves a page or a draft with its subpages and files below another parent, such as an archive. The parent must take pages with the page\'s template. The new URL is live at once, and links to the old one break. Call it only when the user asks. Returns the page with its new URL.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'page' => ['type' => 'string', 'description' => Arguments::PAGE_DESCRIPTION],
                    'parent' => ['type' => 'string', 'description' => Arguments::PARENT_DESCRIPTION]
                ],
                'required' => ['page', 'parent'],
                'additionalProperties' => false
            ],
            annotations: Tool::DESTRUCTIVE,
            permission: ConnectionPermission::Publish,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): array
    {
        $page = $arguments->page('page');
        $parent = $arguments->parent('parent');
        $page = AgentWrites::lock($page, fn () => $page->move($parent));

        return [
            'page' => [
                ...ModelSummary::page($page),
                'url' => ModelSummary::model($page)['url']
            ]
        ];
    }
}
