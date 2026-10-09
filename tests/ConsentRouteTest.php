<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\Client;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ConnectionStore;
use JohannSchopplich\Copilot\Agents\PendingAuthorization;
use JohannSchopplich\Copilot\Agents\Token;
use Kirby\Cms\App;
use Kirby\Exception\NotFoundException;
use Kirby\Exception\PermissionException;
use Kirby\Http\Response;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ConsentRouteTest extends ApiRouteTestCase
{
    private const CLAUDE_CODE = 'https://claude.ai/oauth/claude-code-client-metadata';
    private const VERIFIER = 'dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk';
    private const CHALLENGE = 'E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM';

    #[Test]
    public function shows_the_pending_request_with_the_permissions_the_role_allows(): void
    {
        [$kirby, $id] = $this->pending(role: 'reviewer');

        $props = $this->view($kirby, $id)['props'];

        $this->assertSame(['id' => self::CLAUDE_CODE, 'name' => 'Claude Code', 'host' => 'claude.ai', 'isVerified' => true], $props['client']);
        $this->assertSame(['type' => 'local', 'label' => 'localhost'], $props['redirect']);
        $this->assertSame('editor@example.com', $props['account']);
        $this->assertSame('https://example.com', $props['site']);
        $this->assertSame(['content:publish'], array_column(array_filter($props['permissions'], fn ($permission) => !$permission['disabled']), 'value'));
        $this->assertSame(['content:read'], $props['defaultPermissions']);
    }

    #[Test]
    public function preselects_reading_and_preparing_changes(): void
    {
        [$kirby, $id] = $this->pending();

        $this->assertSame(['content:read', 'content:prepare'], $this->view($kirby, $id)['props']['defaultPermissions']);
    }

    #[Test]
    public function shows_an_unknown_request_as_missing(): void
    {
        [$kirby] = $this->pending();

        $this->assertNull($this->view($kirby, str_repeat('0', 32))['props']['client']);
    }

    #[Test]
    public function shows_an_expired_request_as_missing(): void
    {
        [$kirby] = $this->pending();
        $expired = new PendingAuthorization(
            str_repeat('1', 32),
            new Client(self::CLAUDE_CODE, 'Claude Code', 'claude.ai', true),
            'http://localhost:4242/callback',
            'xyz',
            self::CHALLENGE,
            time() - 1
        );
        $expired->store($kirby->session());

        $this->assertNull($this->view($kirby, $expired->id)['props']['client']);
    }

    #[Test]
    public function returns_a_code_to_the_client_on_approval(): void
    {
        [$kirby, $id] = $this->pending(body: ['isApproved' => true, 'permissions' => ['content:prepare', 'content:delete']]);

        $result = $this->decide($kirby, $id);
        parse_str(parse_url($result['redirect'], PHP_URL_QUERY), $parameters);

        $this->assertStringStartsWith('http://localhost:4242/callback?code=kcc_editor.', $result['redirect']);
        $this->assertSame('xyz', $parameters['state']);
        $this->assertSame('https://example.com', $parameters['iss']);

        $response = $this->redeem($kirby, $parameters['code']);

        $this->assertSame(200, $response->code());
        $this->assertSame('content:read content:prepare content:delete', json_decode($response->body(), true)['scope']);
        $this->assertSame('https://example.com/api/copilot/mcp', ConnectionStore::for($kirby->user('editor'))->all()[0]->resource);
    }

    #[Test]
    public function keeps_a_state_of_zero(): void
    {
        [$kirby, $id] = $this->pending(state: '0', body: ['isApproved' => false]);

        $result = $this->decide($kirby, $id);
        parse_str(parse_url($result['redirect'], PHP_URL_QUERY), $parameters);

        $this->assertSame('0', $parameters['state']);
    }

    #[Test]
    public function grants_only_what_the_role_allows_and_always_reading(): void
    {
        [$kirby, $id] = $this->pending(role: 'reviewer', body: ['isApproved' => true, 'permissions' => ['content:prepare', 'content:publish']]);

        $result = $this->decide($kirby, $id);
        parse_str(parse_url($result['redirect'], PHP_URL_QUERY), $parameters);

        $this->assertSame('content:read content:publish', $this->permissionsOf($kirby, $parameters['code']));
    }

    #[Test]
    public function sends_access_denied_back_on_refusal(): void
    {
        [$kirby, $id] = $this->pending(redirectUri: 'cursor://anysphere.cursor-mcp/oauth/callback', body: ['isApproved' => false]);

        $result = $this->decide($kirby, $id);

        $this->assertSame(
            'cursor://anysphere.cursor-mcp/oauth/callback?error=access_denied&state=xyz&iss=https%3A%2F%2Fexample.com',
            $result['redirect']
        );
        $this->assertSame([], ConnectionStore::for($kirby->user('editor'))->all());
    }

    #[Test]
    public function decides_a_request_only_once(): void
    {
        [$kirby, $id] = $this->pending(body: ['isApproved' => false]);
        $this->decide($kirby, $id);

        $this->expectException(NotFoundException::class);
        $this->expectExceptionMessage('This connection request expired or was already answered. Connect again from your agent.');

        $this->decide($kirby, $id);
    }

    #[Test]
    public function refuses_a_decision_without_the_csrf_token(): void
    {
        [$kirby, $id] = $this->pending(body: ['isApproved' => true]);
        $kirby->user('editor')->loginPasswordless();

        $this->assertSame(401, $kirby->call('api/__copilot__/agents/consent/' . $id, 'POST')->code());
        $this->assertNotNull(PendingAuthorization::find($kirby->session(), $id));
    }

    #[Test]
    public function refuses_a_user_without_the_agents_area(): void
    {
        [$kirby, $id] = $this->pending(role: 'writer', body: ['isApproved' => true]);

        $this->expectException(PermissionException::class);

        $this->decide($kirby, $id);
    }

    /**
     * @return array{0: App, 1: string}
     */
    private function pending(string $role = 'admin', string $redirectUri = 'http://localhost:4242/callback', string $state = 'xyz', array $body = []): array
    {
        $kirby = self::bootApp([
            'options' => ['johannschopplich.copilot' => ['agents' => true]],
            'request' => ['method' => 'POST', 'body' => $body],
            // Blueprints load after the plugin registered its area, so a role can set `access.copilot-agents`.
            'blueprints' => [
                'users/writer' => ['name' => 'writer', 'permissions' => ['access' => ['copilot-agents' => false]]],
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => [
                    'pages' => ['create' => false, 'update' => false, 'delete' => false],
                    'site' => ['update' => false],
                    'files' => ['create' => false, 'update' => false, 'delete' => false]
                ]]
            ],
            'users' => [['id' => 'editor', 'email' => 'editor@example.com', 'role' => $role]]
        ]);
        $kirby->impersonate('editor');

        $pending = PendingAuthorization::create(
            new Client(self::CLAUDE_CODE, 'Claude Code', 'claude.ai', true, ['http://localhost/callback']),
            $redirectUri,
            $state,
            self::CHALLENGE
        );
        $pending->store($kirby->session());

        return [$kirby, $pending->id];
    }

    private function view(App $kirby, string $id): array
    {
        $area = $kirby->extensions('areas')['copilot-agents'][0]($kirby);

        foreach ($area['views'] as $view) {
            if ($view['pattern'] === 'copilot-agents/authorize/(:any)') {
                return $view['action']($id);
            }
        }

        $this->fail('Consent view not found');
    }

    private function decide(App $kirby, string $id): array
    {
        return $this->callRoute($kirby, '__copilot__/agents/consent/(:any)', 'POST', $id);
    }

    private function redeem(App $kirby, string $code): Response
    {
        $kirby = $kirby->clone(['request' => ['method' => 'POST', 'body' => [
            'grant_type' => 'authorization_code',
            'code' => $code,
            'client_id' => self::CLAUDE_CODE,
            'redirect_uri' => 'http://localhost:4242/callback',
            'code_verifier' => self::VERIFIER
        ]]]);

        return $this->callRoute($kirby, 'copilot/oauth/token', 'POST');
    }

    private function permissionsOf(App $kirby, string $code): string
    {
        $tokens = ConnectionStore::for($kirby->user('editor'))->redeemCode(
            Token::parse($code, Token::CODE),
            fn () => true
        );

        return ConnectionPermission::join($tokens['connection']->permissions);
    }
}
