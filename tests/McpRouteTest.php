<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\Client;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ConnectionStore;
use Kirby\Cms\App;
use Kirby\Http\Response;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\Attributes\TestWith;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class McpRouteTest extends ApiRouteTestCase
{
    private const MCP_URL = 'https://example.com/api/copilot/mcp';
    private const INITIALIZE = '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{}}}';

    private App|null $kirby = null;

    #[Test]
    public function answers_get_with_405(): void
    {
        $response = $this->call(method: 'GET');

        $this->assertSame(405, $response->code());
        $this->assertSame('POST', $response->headers()['Allow']);
    }

    #[Test]
    public function asks_for_authorization_without_a_token(): void
    {
        $response = $this->call();

        $this->assertSame(401, $response->code());
        $this->assertSame(
            'Bearer resource_metadata="https://example.com/.well-known/oauth-protected-resource/api/copilot/mcp"',
            $response->headers()['WWW-Authenticate']
        );
    }

    #[Test]
    public function names_an_invalid_token_only_when_one_arrived(): void
    {
        $response = $this->call(token: 'kca_editor.c0123456789abcdef.' . str_repeat('a', 43));

        $this->assertSame(401, $response->code());
        $this->assertStringEndsWith(', error="invalid_token"', $response->headers()['WWW-Authenticate']);
    }

    #[Test]
    public function answers_a_valid_token(): void
    {
        $response = $this->call(token: $this->accessToken());

        $this->assertSame(200, $response->code());
        $this->assertSame('2025-11-25', json_decode($response->body(), true)['result']['protocolVersion']);
    }

    #[Test]
    public function refuses_a_foreign_origin_before_checking_the_token(): void
    {
        $this->assertSame(403, $this->call(origin: 'https://evil.example')->code());
        $this->assertSame(200, $this->call(token: $this->accessToken(), origin: 'https://example.com')->code());
    }

    #[Test]
    public function refuses_a_token_issued_for_another_resource(): void
    {
        $this->assertSame(401, $this->call(token: $this->accessToken(resource: 'https://example.com/api/other'))->code());
    }

    #[Test]
    #[TestWith(['copilot-agents'])]
    #[TestWith(['panel'])]
    public function refuses_a_user_whose_role_lost_the_panel_or_the_agents_area(string $area): void
    {
        $this->assertSame(401, $this->call(token: $this->accessToken(withheldArea: $area))->code());
    }

    private function accessToken(string|null $withheldArea = null, string $resource = self::MCP_URL): string
    {
        $this->kirby = self::bootApp([
            'options' => ['johannschopplich.copilot' => ['agents' => true]],
            // Blueprints load after the plugin registered its area, so a role can set `access.copilot-agents`.
            'blueprints' => $withheldArea === null ? [] : [
                'users/writer' => ['name' => 'writer', 'permissions' => ['access' => [$withheldArea => false]]]
            ],
            'users' => [['id' => 'editor', 'email' => 'editor@example.com', 'role' => $withheldArea === null ? 'admin' : 'writer']]
        ]);

        $store = ConnectionStore::for($this->kirby->user('editor'));
        $code = $store->create(
            new Client('https://claude.ai/oauth/claude-code-client-metadata', 'Claude Code', 'claude.ai', true),
            'http://localhost/callback',
            $resource,
            [ConnectionPermission::Read],
            'challenge'
        );

        return $store->redeemCode($code, fn () => true)['accessToken']->value;
    }

    private function call(string $method = 'POST', string|null $token = null, string|null $origin = null): Response
    {
        $props = [
            'options' => ['johannschopplich.copilot' => ['agents' => true]],
            'request' => ['method' => $method, 'body' => self::INITIALIZE],
            'server' => array_filter([
                'HTTP_AUTHORIZATION' => $token !== null ? 'Bearer ' . $token : null,
                'HTTP_ORIGIN' => $origin
            ])
        ];

        $kirby = $this->kirby?->clone($props) ?? self::bootApp($props);

        return $this->callRoute($kirby, 'copilot/mcp', 'GET|POST|DELETE');
    }
}
