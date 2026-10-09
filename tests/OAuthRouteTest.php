<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\Client;
use JohannSchopplich\Copilot\Agents\ClientResolver;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ConnectionStore;
use JohannSchopplich\Copilot\Agents\PendingAuthorization;
use Kirby\Cms\App;
use Kirby\Http\Response;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class OAuthRouteTest extends ApiRouteTestCase
{
    private const CLIENT_ID = 'https://claude.ai/oauth/claude-code-client-metadata';
    private const MCP_URL = 'https://example.com/api/copilot/mcp';
    private const VERIFIER = 'dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk';
    private const CHALLENGE = 'E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM';

    #[Test]
    public function serves_authorization_server_metadata_at_the_site_root(): void
    {
        $metadata = $this->decode(self::bootApp(self::enabled())->call('.well-known/oauth-authorization-server'));

        $this->assertSame('https://example.com', $metadata['issuer']);
        $this->assertSame('https://example.com/api/copilot/oauth/authorize', $metadata['authorization_endpoint']);
        $this->assertSame('https://example.com/api/copilot/oauth/token', $metadata['token_endpoint']);
        $this->assertSame(['S256'], $metadata['code_challenge_methods_supported']);
        $this->assertSame(['none'], $metadata['token_endpoint_auth_methods_supported']);
        $this->assertTrue($metadata['client_id_metadata_document_supported']);
        $this->assertTrue($metadata['authorization_response_iss_parameter_supported']);
        $this->assertSame(['content:read', 'content:prepare', 'content:publish', 'content:delete'], $metadata['scopes_supported']);
    }

    #[Test]
    public function serves_authorization_server_metadata_below_the_issuer_path_of_a_subfolder_install(): void
    {
        $kirby = self::bootApp([...self::enabled(), 'urls' => ['index' => 'https://example.com/cms']]);

        $this->assertSame('https://example.com/cms', $this->decode($kirby->call('.well-known/oauth-authorization-server/cms'))['issuer']);
        $this->assertNull($kirby->call('.well-known/oauth-authorization-server/other'));
    }

    #[Test]
    public function serves_protected_resource_metadata_for_the_mcp_url_only(): void
    {
        $kirby = self::bootApp(self::enabled());
        $metadata = $this->decode($kirby->call('.well-known/oauth-protected-resource/api/copilot/mcp'));

        $this->assertSame(self::MCP_URL, $metadata['resource']);
        $this->assertSame(['https://example.com'], $metadata['authorization_servers']);
        $this->assertSame(['header'], $metadata['bearer_methods_supported']);
        $this->assertNull($kirby->call('.well-known/oauth-protected-resource/api/other'));
    }

    #[Test]
    public function serves_protected_resource_metadata_at_the_site_root_too(): void
    {
        $metadata = $this->decode(self::bootApp(self::enabled())->call('.well-known/oauth-protected-resource'));

        $this->assertSame(self::MCP_URL, $metadata['resource']);
    }

    #[Test]
    public function registers_no_endpoint_while_agents_are_off(): void
    {
        $kirby = self::bootApp();
        $api = require dirname(__DIR__) . '/src/extensions/api.php';
        $patterns = array_column($api['routes']($kirby), 'pattern');

        $this->assertNull($kirby->call('.well-known/oauth-authorization-server'));
        $this->assertNull($kirby->call('.well-known/oauth-protected-resource'));
        $this->assertNotContains('copilot/mcp', $patterns);
        $this->assertNotContains('copilot/oauth/token', $patterns);
    }

    #[Test]
    #[DataProvider('invalidConnectionRequests')]
    public function refuses_an_invalid_connection_request_with_a_page_instead_of_redirecting(array $query): void
    {
        $response = $this->authorize($query);

        $this->assertSame(400, $response->code());
        $this->assertArrayNotHasKey('Location', $response->headers());
        $this->assertStringContainsString("frame-ancestors 'none'", $response->headers()['Content-Security-Policy']);
    }

    public static function invalidConnectionRequests(): iterable
    {
        yield 'unknown client' => [['client_id' => 'https://unknown.example/client.json']];
        yield 'unregistered redirect uri' => [['redirect_uri' => 'http://evil.example/callback']];
        yield 'plain PKCE' => [['code_challenge_method' => 'plain']];
        yield 'implicit flow' => [['response_type' => 'token']];
        yield 'foreign resource' => [['resource' => 'https://example.com/api/other']];
        yield 'unknown scope' => [['scope' => 'content:read admin']];
    }

    #[Test]
    public function keeps_a_valid_request_pending_and_sends_the_user_to_the_panel(): void
    {
        $kirby = null;
        $response = $this->authorize([], $kirby);

        $this->assertSame(302, $response->code());
        $location = (string)$response->headers()['Location'];
        $this->assertMatchesRegularExpression('#^https://example\.com/panel/copilot-agents/authorize/[a-f0-9]{32}$#', $location);

        $pending = PendingAuthorization::find($kirby->session(), basename($location));

        $this->assertSame(self::CLIENT_ID, $pending->client->id);
        $this->assertSame('http://localhost:4242/callback', $pending->redirectUri);
        $this->assertSame('xyz', $pending->state);
        $this->assertSame(self::CHALLENGE, $pending->codeChallenge);
    }

    #[Test]
    public function exchanges_a_code_for_tokens(): void
    {
        [$kirby, $code] = $this->createCode();

        $response = $this->token($kirby, [
            'grant_type' => 'authorization_code',
            'code' => $code,
            'client_id' => self::CLIENT_ID,
            'redirect_uri' => 'http://localhost:4242/callback',
            'code_verifier' => self::VERIFIER,
            'resource' => self::MCP_URL
        ]);
        $body = $this->decode($response);

        $this->assertSame(200, $response->code());
        $this->assertSame('no-store', $response->headers()['Cache-Control']);
        $this->assertSame('Bearer', $body['token_type']);
        $this->assertSame(3600, $body['expires_in']);
        $this->assertSame('content:read content:prepare', $body['scope']);
        $this->assertStringStartsWith('kca_editor.', $body['access_token']);
        $this->assertStringStartsWith('kcr_editor.', $body['refresh_token']);
    }

    #[Test]
    #[DataProvider('mismatchedExchanges')]
    public function refuses_a_code_exchange_that_does_not_match_the_authorization(string $error, array $overrides): void
    {
        [$kirby, $code] = $this->createCode();

        $response = $this->token($kirby, array_filter([
            'grant_type' => 'authorization_code',
            'code' => $code,
            'client_id' => self::CLIENT_ID,
            'redirect_uri' => 'http://localhost:4242/callback',
            'code_verifier' => self::VERIFIER,
            ...$overrides
        ]));

        $this->assertSame(400, $response->code());
        $this->assertSame($error, $this->decode($response)['error']);
    }

    public static function mismatchedExchanges(): iterable
    {
        yield 'wrong verifier' => ['invalid_grant', ['code_verifier' => str_repeat('a', 43)]];
        yield 'other redirect uri' => ['invalid_grant', ['redirect_uri' => 'http://localhost:4242/other']];
        yield 'other client' => ['invalid_grant', ['client_id' => 'https://chatgpt.com/oauth/client.json']];
        yield 'foreign resource' => ['invalid_target', ['resource' => 'https://example.com/api/other']];
        yield 'no verifier' => ['invalid_request', ['code_verifier' => null]];
    }

    #[Test]
    public function rotates_the_refresh_token(): void
    {
        [$kirby, $code] = $this->createCode();
        $tokens = $this->exchange($kirby, $code);

        $refreshed = $this->decode($this->token($kirby, [
            'grant_type' => 'refresh_token',
            'refresh_token' => $tokens['refresh_token'],
            'client_id' => self::CLIENT_ID
        ]));

        $this->assertNotSame($tokens['refresh_token'], $refreshed['refresh_token']);
        $this->assertSame('content:read content:prepare', $refreshed['scope']);
    }

    #[Test]
    public function refuses_a_refresh_for_another_client(): void
    {
        [$kirby, $code] = $this->createCode();
        $tokens = $this->exchange($kirby, $code);

        $response = $this->token($kirby, [
            'grant_type' => 'refresh_token',
            'refresh_token' => $tokens['refresh_token'],
            'client_id' => 'https://chatgpt.com/oauth/client.json'
        ]);

        $this->assertSame('invalid_grant', $this->decode($response)['error']);
    }

    #[Test]
    public function refuses_a_refresh_for_another_resource(): void
    {
        [$kirby, $code] = $this->createCode();
        $tokens = $this->exchange($kirby, $code);

        $response = $this->token($kirby, [
            'grant_type' => 'refresh_token',
            'refresh_token' => $tokens['refresh_token'],
            'client_id' => self::CLIENT_ID,
            'resource' => 'https://example.com/api/other'
        ]);

        $this->assertSame('invalid_target', $this->decode($response)['error']);
    }

    #[Test]
    public function refuses_a_refresh_for_a_user_whose_role_lost_the_agents_area(): void
    {
        [$kirby, $code] = $this->createCode();
        $tokens = $this->exchange($kirby, $code);

        $kirby = self::bootApp([
            ...self::enabled(),
            // Blueprints load after the plugin registered its area, so a role can set `access.copilot-agents`.
            'blueprints' => ['users/writer' => ['name' => 'writer', 'permissions' => ['access' => ['copilot-agents' => false]]]],
            'users' => [['id' => 'editor', 'email' => 'editor@example.com', 'role' => 'writer']]
        ]);

        $response = $this->token($kirby, [
            'grant_type' => 'refresh_token',
            'refresh_token' => $tokens['refresh_token'],
            'client_id' => self::CLIENT_ID
        ]);

        $this->assertSame('invalid_grant', $this->decode($response)['error']);
    }

    #[Test]
    public function refuses_an_unsupported_grant_type(): void
    {
        $response = $this->token(self::bootApp(self::enabled()), ['grant_type' => 'client_credentials']);

        $this->assertSame('unsupported_grant_type', $this->decode($response)['error']);
    }

    private function authorize(array $overrides, App|null &$kirby = null): Response
    {
        $query = array_filter([
            'response_type' => 'code',
            'client_id' => self::CLIENT_ID,
            'redirect_uri' => 'http://localhost:4242/callback',
            'code_challenge' => self::CHALLENGE,
            'code_challenge_method' => 'S256',
            'state' => 'xyz',
            'resource' => self::MCP_URL,
            ...$overrides
        ]);

        $kirby = self::bootApp([...self::enabled(), 'request' => ['query' => $query]]);

        // A cached document spares the route a network request.
        (new ClientResolver(
            new FakeClientMetadataFetcher([self::CLIENT_ID => [
                'client_id' => self::CLIENT_ID,
                'client_name' => 'Claude Code',
                'redirect_uris' => ['http://localhost/callback', 'http://127.0.0.1/callback']
            ]]),
            $kirby->cache('johannschopplich.copilot.agents')
        ))->resolve(self::CLIENT_ID);

        return $this->callRoute($kirby, 'copilot/oauth/authorize');
    }

    /**
     * @return array{0: App, 1: string}
     */
    private function createCode(): array
    {
        $kirby = self::bootApp([
            ...self::enabled(),
            'users' => [['id' => 'editor', 'email' => 'editor@example.com', 'role' => 'admin']]
        ]);

        $code = ConnectionStore::for($kirby->user('editor'))->create(
            new Client(self::CLIENT_ID, 'Claude Code', 'claude.ai', true),
            'http://localhost:4242/callback',
            self::MCP_URL,
            [ConnectionPermission::Read, ConnectionPermission::Prepare],
            self::CHALLENGE
        );

        return [$kirby, $code->value];
    }

    private function exchange(App $kirby, string $code): array
    {
        return $this->decode($this->token($kirby, [
            'grant_type' => 'authorization_code',
            'code' => $code,
            'client_id' => self::CLIENT_ID,
            'redirect_uri' => 'http://localhost:4242/callback',
            'code_verifier' => self::VERIFIER
        ]));
    }

    private function token(App $kirby, array $body): Response
    {
        $kirby = $kirby->clone(['request' => ['method' => 'POST', 'body' => $body]]);

        return $this->callRoute($kirby, 'copilot/oauth/token', 'POST');
    }

    private function decode(Response $response): array
    {
        return json_decode($response->body(), true);
    }

    private static function enabled(): array
    {
        return ['options' => ['johannschopplich.copilot' => ['agents' => true]]];
    }
}
