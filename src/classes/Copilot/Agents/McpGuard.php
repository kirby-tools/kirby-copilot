<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Kirby\Cms\App;
use Kirby\Http\Request;
use Kirby\Http\Request\Auth\BearerAuth;
use Kirby\Http\Response;
use Kirby\Http\Uri;

/**
 * The guard of the MCP URL: only a valid access token of a user who may
 * still connect reaches the MCP server, which then runs as that user.
 */
final class McpGuard
{
    private const RATE_LIMIT = 120;

    public function __construct(
        private readonly App $kirby
    ) {
    }

    public function handle(Request $request): Response
    {
        // Streams and sessions don't exist here (Streamable HTTP allows 405).
        if ($request->method() !== 'POST') {
            return new Response('', 'text/plain', 405, ['Allow' => 'POST']);
        }

        // Stops DNS rebinding: a browser always sends `Origin` cross-origin.
        if (!$this->isAllowedOrigin($request->header('Origin'))) {
            return new Response('', 'text/plain', 403);
        }

        $auth = $request->auth();
        $connection = $auth instanceof BearerAuth ? $this->authenticate($auth->token()) : null;

        if ($connection === null) {
            $challenge = 'Bearer resource_metadata="' . Agents::resourceMetadataUrl() . '", scope="' . ConnectionPermission::join(ConnectionPermission::defaults()) . '"';

            // RFC 6750 adds `invalid_token` only when a token arrived, so a setup check can tell that the `Authorization` header reaches PHP.
            if ($auth instanceof BearerAuth) {
                $challenge .= ', error="invalid_token"';
            }

            return new Response('', 'text/plain', 401, ['WWW-Authenticate' => $challenge]);
        }

        if (RateLimit::hit('mcp.' . $connection->id, self::RATE_LIMIT)) {
            return new Response('', 'text/plain', 429, ['Retry-After' => '60']);
        }

        return $this->kirby->impersonate(
            $connection->userId,
            fn () => (new McpServer(Agents::tools()))->handle($request, $connection)
        );
    }

    private function authenticate(string $value): Connection|null
    {
        $token = Token::parse($value, Token::ACCESS);
        $connection = $token !== null ? ConnectionStore::forToken($token)?->authenticate($token) : null;

        return $connection?->resource === Agents::mcpUrl() ? $connection : null;
    }

    private function isAllowedOrigin(string|null $origin): bool
    {
        if ($origin === null) {
            return true;
        }

        return $origin === (new Uri($this->kirby->url('index')))->base();
    }
}
