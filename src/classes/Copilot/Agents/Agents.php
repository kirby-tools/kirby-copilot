<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Kirby\Cache\Cache;
use Kirby\Cms\App;
use Kirby\Cms\User;

/**
 * Entry point of the Agents feature: whether it is on, its URLs, who may
 * connect, and the tools.
 */
final class Agents
{
    public static function isEnabled(): bool
    {
        return App::instance()->option('johannschopplich.copilot.agents') === true;
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
     * Tells whether the user's role may use the Panel and its Agents area.
     * Read from the role each time, since editing a role blueprint fires no
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
            Tools\GetContent::tool(),
            Tools\ViewImage::tool()
        ];
    }
}
