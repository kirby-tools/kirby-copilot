<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\Connection;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\Tool;
use Kirby\Cms\App;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use stdClass;

final class GetSite
{
    private const PAGE_LIMIT = 100;

    public static function tool(): Tool
    {
        return new Tool(
            name: 'get_site',
            title: 'Get site',
            description: 'Returns the site\'s title, URL, and languages, the account the agent acts as, this connection\'s permissions, and the top-level pages. Call it first. get_content with `site` reads the site\'s fields.',
            inputSchema: ['type' => 'object', 'properties' => new stdClass(), 'additionalProperties' => false],
            annotations: Tool::READ_ONLY,
            permission: ConnectionPermission::Read,
            handler: fn (Arguments $arguments, Connection $connection) => self::run($connection)
        );
    }

    private static function run(Connection $connection): array
    {
        $kirby = App::instance();
        $site = $kirby->site();
        $user = $kirby->user();
        $pages = $site->childrenAndDrafts()->filter(fn (Page $page) => $page->isListable());
        $languages = $kirby->languages()->values(fn (Language $language) => [
            'code' => $language->code(),
            'name' => $language->name(),
            'isDefault' => $language->isDefault()
        ]);
        usort($languages, fn (array $a, array $b) => $b['isDefault'] <=> $a['isDefault']);

        return [
            'site' => [
                'title' => $site->title()->value(),
                'url' => $site->url(),
                'panelUrl' => $site->panel()->url()
            ],
            'languages' => $languages,
            'account' => [
                'id' => $user->id(),
                'uuid' => $user->uuid()?->toString(),
                'name' => $user->name()->value(),
                'role' => $user->role()->title()
            ],
            'permissions' => ConnectionPermission::values($connection->permissions),
            'pages' => $pages->limit(self::PAGE_LIMIT)->values(ModelSummary::page(...)),
            'hasMorePages' => $pages->count() > self::PAGE_LIMIT
        ];
    }
}
