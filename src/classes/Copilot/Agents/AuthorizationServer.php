<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Kirby\Cms\App;
use Kirby\Data\Json;
use Kirby\Http\Request;
use Kirby\Http\Response;
use Kirby\Toolkit\Escape;

/**
 * The OAuth 2.1 authorization server agents connect through: authorization
 * code with PKCE for public clients, identified by their metadata document
 * or registered dynamically.
 */
final class AuthorizationServer
{
    private const RATE_LIMIT = 30;

    public function __construct(
        private readonly App $kirby,
        private readonly ClientResolver $clientResolver
    ) {
    }

    /**
     * Returns the authorization server metadata (RFC 8414).
     */
    public function metadata(): array
    {
        return [
            'issuer' => Agents::issuer(),
            'authorization_endpoint' => $this->kirby->url('api') . '/copilot/oauth/authorize',
            'token_endpoint' => $this->kirby->url('api') . '/copilot/oauth/token',
            'registration_endpoint' => $this->kirby->url('api') . '/copilot/oauth/register',
            'response_types_supported' => ['code'],
            'grant_types_supported' => ['authorization_code', 'refresh_token'],
            'code_challenge_methods_supported' => ['S256'],
            'token_endpoint_auth_methods_supported' => ['none'],
            'scopes_supported' => ConnectionPermission::values(ConnectionPermission::cases()),
            'client_id_metadata_document_supported' => true,
            'authorization_response_iss_parameter_supported' => true
        ];
    }

    /**
     * Returns the protected resource metadata of the MCP URL (RFC 9728).
     */
    public function resourceMetadata(): array
    {
        return [
            'resource' => Agents::mcpUrl(),
            'authorization_servers' => [Agents::issuer()],
            'scopes_supported' => ConnectionPermission::values(ConnectionPermission::cases()),
            'bearer_methods_supported' => ['header'],
            'resource_name' => Agents::siteName()
        ];
    }

    /**
     * Checks a connection request, keeps it pending, and sends the user
     * to the Panel to log in and consent. Errors show a page instead of
     * going back to the client: anyone can host a metadata document, and a
     * redirect before consent would make the site an open redirector.
     */
    public function authorize(Request $request): Response
    {
        if (RateLimit::hit('authorize.' . $this->kirby->visitor()->ip(), self::RATE_LIMIT)) {
            return self::errorPage('Too many connection attempts. Try again in a minute.', 429);
        }

        $query = $request->query()->toArray();
        $clientId = self::stringParameter($query, 'client_id');
        $client = $clientId !== null ? $this->clientResolver->resolve($clientId) : null;

        if ($client === null) {
            return self::errorPage('The agent didn’t identify itself with a client metadata document Kirby could load or with a valid registration.');
        }

        $redirectUri = self::stringParameter($query, 'redirect_uri');

        if ($redirectUri === null || !self::isRegistered($client, $redirectUri)) {
            return self::errorPage('The agent asked to return to an address it didn’t register.');
        }

        $state = self::stringParameter($query, 'state');
        $codeChallenge = self::stringParameter($query, 'code_challenge');
        $resource = self::stringParameter($query, 'resource');
        $scope = self::stringParameter($query, 'scope');

        $error = match (true) {
            ($query['response_type'] ?? null) !== 'code' => 'The agent asked for a flow other than the authorization code flow.',
            ($query['code_challenge_method'] ?? null) !== 'S256' || $codeChallenge === null || preg_match('/^[A-Za-z0-9_-]{43}$/', $codeChallenge) !== 1 => 'The agent didn’t send a PKCE challenge with S256.',
            $resource !== null && $resource !== Agents::mcpUrl() => 'The agent asked for access to ' . $resource . ' instead of ' . Agents::mcpUrl() . '.',
            $scope !== null && ConnectionPermission::parse($scope) === null => 'The agent asked for unknown permissions. Supported scopes: ' . ConnectionPermission::join(ConnectionPermission::cases()) . '.',
            default => null
        };

        if ($error !== null) {
            return self::errorPage($error);
        }

        $pending = PendingAuthorization::create($client, $redirectUri, $state, $codeChallenge);
        $pending->store($this->kirby->session());

        // The id goes in the path: the Panel drops the query string after login.
        return Response::redirect($this->kirby->url('panel') . '/copilot-agents/authorize/' . $pending->id);
    }

    public function token(Request $request): Response
    {
        if (RateLimit::hit('token.' . $this->kirby->visitor()->ip(), self::RATE_LIMIT)) {
            return self::oauthError('invalid_request', 'Too many token requests. Try again in a minute.', 429);
        }

        $body = $request->body()->toArray();

        return match ($body['grant_type'] ?? null) {
            'authorization_code' => $this->exchangeCode($body),
            'refresh_token' => $this->refresh($body),
            default => self::oauthError('unsupported_grant_type', 'Supported grant types: authorization_code, refresh_token.')
        };
    }

    /**
     * Registers a public client for agents without a metadata document,
     * like Cursor (RFC 7591). The Panel shows such a client as unverified.
     */
    public function register(Request $request): Response
    {
        if (RateLimit::hit('register.' . $this->kirby->visitor()->ip(), self::RATE_LIMIT)) {
            return self::oauthError('invalid_request', 'Too many registrations. Try again in a minute.', 429);
        }

        $body = $request->body()->toArray();
        $redirectUris = $body['redirect_uris'] ?? null;

        if (!is_array($redirectUris) || $redirectUris === [] || !array_is_list($redirectUris)) {
            return self::oauthError('invalid_redirect_uri', 'Send redirect_uris as a list of URLs.');
        }

        foreach ($redirectUris as $uri) {
            if (!is_string($uri) || !RedirectUri::isAllowed($uri)) {
                return self::oauthError('invalid_redirect_uri', 'Redirect URIs must use HTTPS, loopback HTTP, or an app scheme.');
            }
        }

        $error = match (true) {
            ($body['token_endpoint_auth_method'] ?? 'none') !== 'none' => 'Only public clients can register: send token_endpoint_auth_method none.',
            !self::isSubset($body['grant_types'] ?? [], ['authorization_code', 'refresh_token']) => 'Supported grant types: authorization_code, refresh_token.',
            !self::isSubset($body['response_types'] ?? [], ['code']) => 'Supported response types: code.',
            default => null
        };
        $client = $error === null
            ? ClientResolver::registeredClientFor(is_string($body['client_name'] ?? null) ? $body['client_name'] : null, $redirectUris)
            : null;

        if ($client === null) {
            return self::oauthError('invalid_client_metadata', $error ?? 'The registration must be UTF-8 and fit into a client id of 2 KB.');
        }

        return self::json([
            'client_id' => $client->id,
            'client_id_issued_at' => time(),
            'client_name' => $client->name,
            'redirect_uris' => $client->redirectUris,
            'grant_types' => ['authorization_code', 'refresh_token'],
            'response_types' => ['code'],
            'token_endpoint_auth_method' => 'none'
        ], 201);
    }

    private function exchangeCode(array $body): Response
    {
        $code = self::stringParameter($body, 'code');
        $clientId = self::stringParameter($body, 'client_id');
        $redirectUri = self::stringParameter($body, 'redirect_uri');
        $verifier = self::stringParameter($body, 'code_verifier');
        $resource = self::stringParameter($body, 'resource');

        if ($code === null || $clientId === null || $redirectUri === null || $verifier === null) {
            return self::oauthError('invalid_request', 'Send code, client_id, redirect_uri, and code_verifier.');
        }

        if ($resource !== null && $resource !== Agents::mcpUrl()) {
            return self::oauthError('invalid_target', 'The resource must be ' . Agents::mcpUrl() . '.');
        }

        $token = Token::parse($code, Token::CODE);
        $store = $token !== null ? ConnectionStore::forToken($token) : null;

        $tokens = $store?->redeemCode(
            $token,
            fn (Connection $connection, string $challenge) =>
                $connection->client->id === $clientId &&
                $connection->redirectUri === $redirectUri &&
                self::isPkceVerified($verifier, $challenge)
        );

        if ($tokens === null) {
            return self::oauthError('invalid_grant', 'The code is invalid, expired, used, or doesn\'t match this request.');
        }

        return self::tokenResponse($tokens);
    }

    private function refresh(array $body): Response
    {
        $value = self::stringParameter($body, 'refresh_token');
        $clientId = self::stringParameter($body, 'client_id');
        $resource = self::stringParameter($body, 'resource');

        if ($resource !== null && $resource !== Agents::mcpUrl()) {
            return self::oauthError('invalid_target', 'The resource must be ' . Agents::mcpUrl() . '.');
        }

        $token = $value !== null ? Token::parse($value, Token::REFRESH) : null;
        $store = $token !== null ? ConnectionStore::forToken($token) : null;

        if ($store === null || $clientId === null) {
            return self::oauthError('invalid_grant', 'The refresh token is invalid.');
        }

        $tokens = $store->find($token->connectionId)?->client->id === $clientId ? $store->refresh($token) : null;

        if ($tokens === null) {
            return self::oauthError('invalid_grant', 'The refresh token is invalid, expired, or revoked.');
        }

        return self::tokenResponse($tokens);
    }

    private static function isRegistered(Client $client, string $redirectUri): bool
    {
        foreach ($client->redirectUris as $registered) {
            if (RedirectUri::matches($registered, $redirectUri)) {
                return true;
            }
        }

        return false;
    }

    private static function isSubset(mixed $values, array $supported): bool
    {
        return is_array($values) &&
            array_is_list($values) &&
            array_filter($values, fn (mixed $value) => !is_string($value)) === [] &&
            array_diff($values, $supported) === [];
    }

    private static function isPkceVerified(string $verifier, string $challenge): bool
    {
        if (preg_match('/^[A-Za-z0-9._~-]{43,128}$/', $verifier) !== 1) {
            return false;
        }

        return hash_equals($challenge, Token::base64Url(hash('sha256', $verifier, true)));
    }

    private static function stringParameter(array $parameters, string $name): string|null
    {
        $value = $parameters[$name] ?? null;

        return is_string($value) && $value !== '' ? $value : null;
    }

    /**
     * @param array{connection: Connection, accessToken: Token, refreshToken: Token} $tokens
     */
    private static function tokenResponse(array $tokens): Response
    {
        return self::json([
            'access_token' => $tokens['accessToken']->value,
            'token_type' => 'Bearer',
            'expires_in' => ConnectionStore::ACCESS_TOKEN_TTL,
            'refresh_token' => $tokens['refreshToken']->value,
            'scope' => ConnectionPermission::join($tokens['connection']->permissions)
        ]);
    }

    private static function oauthError(string $error, string $description, int $status = 400): Response
    {
        return self::json(['error' => $error, 'error_description' => $description], $status);
    }

    private static function json(array $data, int $status = 200): Response
    {
        return Response::json(Json::encode($data), $status, headers: ['Cache-Control' => 'no-store', 'Pragma' => 'no-cache']);
    }

    /**
     * Renders an error the user sees instead of the Panel.
     */
    private static function errorPage(string $message, int $status = 400): Response
    {
        $html = '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>The agent can’t connect</title>'
            . '<body style="font-family: system-ui, sans-serif; max-width: 32rem; margin: 4rem auto; padding: 0 1rem"><h1>The agent can’t connect</h1><p>'
            . Escape::html($message)
            . '</p></body></html>';

        return new Response($html, 'text/html', $status, [
            'Content-Security-Policy' => "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'"
        ]);
    }
}
