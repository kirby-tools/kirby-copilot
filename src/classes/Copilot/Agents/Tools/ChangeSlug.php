<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\Tool;
use Kirby\Cms\App;

final class ChangeSlug
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'change_slug',
            title: 'Change slug',
            description: 'Changes the URL slug of a page in one language. The default language\'s slug renames the page; another language\'s slug changes only that language\'s URL. The new URL is live at once, and links to the old one break. Call it only when the user asks. Returns the page with its new URL.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'page' => ['type' => 'string', 'description' => Arguments::PAGE_DESCRIPTION],
                    'slug' => ['type' => 'string', 'description' => 'The new slug. Kirby turns it into a URL-safe one.'],
                    'language' => ['type' => 'string', 'description' => Arguments::LANGUAGE_DESCRIPTION]
                ],
                'required' => ['page', 'slug'],
                'additionalProperties' => false
            ],
            annotations: Tool::DESTRUCTIVE,
            permission: ConnectionPermission::Publish,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): array
    {
        $language = $arguments->language();
        $page = $arguments->page('page');
        $slug = $arguments->requiredString('slug');

        $page = AgentWrites::lock($page, fn () => $page->changeSlug($slug, App::instance()->multilang() ? $language->code() : null));

        return [
            'page' => [
                ...ModelSummary::page($page),
                'url' => $page->isDraft() ? null : $page->url($language->code())
            ]
        ];
    }
}
