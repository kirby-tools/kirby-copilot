<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Kirby\Cache\Cache;
use Kirby\Cms\App;
use Kirby\Cms\User;

final class Agents
{
    /**
     * Agents need Kirby's API, which serves the MCP URL and the OAuth
     * endpoints, and the Panel, where users approve connection requests and
     * manage connections.
     */
    public static function isEnabled(): bool
    {
        $kirby = App::instance();

        return $kirby->option('johannschopplich.copilot.agents') === true && $kirby->option('api') !== false && $kirby->option('panel') !== false;
    }

    /**
     * Returns the URL agents connect to, which is also the `resource` of
     * every token. Claude compares it byte for byte.
     */
    public static function mcpUrl(): string
    {
        return App::instance()->url('api') . '/copilot/mcp';
    }

    public static function issuer(): string
    {
        return App::instance()->url('index');
    }

    public static function resourceMetadataUrl(): string
    {
        return self::issuer() . '/.well-known/oauth-protected-resource' . parse_url(self::mcpUrl(), PHP_URL_PATH);
    }

    /**
     * Reads the role each time, since editing a role blueprint fires no
     * hook.
     */
    public static function canConnect(User $user): bool
    {
        $permissions = $user->role()->permissions();

        return $permissions->for('access', 'panel') && $permissions->for('access', 'copilot-agents');
    }

    public static function siteName(): string
    {
        $site = App::instance()->site();

        return $site->title()->or($site->url())->value();
    }

    public static function cache(): Cache
    {
        return App::instance()->cache('johannschopplich.copilot.agents');
    }

    public static function authorizationServer(): AuthorizationServer
    {
        return new AuthorizationServer(
            App::instance(),
            new ClientResolver(new PublicUrlFetcher(), self::cache())
        );
    }

    /**
     * @return list<Tool>
     */
    public static function tools(): array
    {
        return [
            Tools\GetSite::tool(),
            Tools\FindPages::tool(),
            Tools\FindFiles::tool(),
            Tools\GetContent::tool(),
            Tools\ViewImage::tool(),
            Tools\PrepareChanges::tool(),
            Tools\DiscardChanges::tool(),
            Tools\CreateDraft::tool(),
            Tools\UploadFile::tool(),
            Tools\PublishChanges::tool(),
            Tools\ChangeStatus::tool(),
            Tools\ChangeSlug::tool(),
            Tools\MovePage::tool(),
            Tools\DeletePage::tool(),
            Tools\DeleteFile::tool()
        ];
    }
}
