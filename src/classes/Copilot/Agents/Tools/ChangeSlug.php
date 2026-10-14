<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\Tool;
use Kirby\Cms\App;
use Kirby\Content\LockedContentException;

final class ChangeSlug
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'change_slug',
            title: 'Change slug',
            description: 'Changes the URL slug of a page in one language. The new URL is live at once. The default language\'s slug renames the page, and links to the old URL break. Another language\'s slug changes only that language\'s URL: links with the old translated slug break, while the default language\'s slug keeps working in that language too. Call it only when the user asks. Returns the page with its new URL.',
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

        $page = AgentWrites::lock(function () use ($page, $slug, $language) {
            if ($page->lock()->isLocked()) {
                throw new LockedContentException($page->lock());
            }

            return $page->changeSlug($slug, App::instance()->multilang() ? $language->code() : null);
        });

        return ['page' => ModelSummary::page($page)];
    }
}
