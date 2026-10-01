<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\Client;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ConnectionStore;
use Kirby\Cms\App;

/**
 * Calls the MCP URL as Ada, an editor, over a connection with the
 * permissions to read and prepare changes.
 */
abstract class McpToolTestCase extends ApiRouteTestCase
{
    /**
     * @param Closure(App): void|null $prepare Changes the content, which lives in memory, before the call
     */
    protected function callTool(string $name, array $arguments = [], array $props = [], Closure|null $prepare = null): array
    {
        return $this->rpc('tools/call', ['name' => $name, 'arguments' => (object)$arguments], $props, $prepare)['result'];
    }

    protected function listedTool(string $name): array
    {
        foreach ($this->rpc('tools/list')['result']['tools'] as $tool) {
            if ($tool['name'] === $name) {
                return $tool;
            }
        }

        $this->fail("Tool not listed: {$name}");
    }

    protected function rpc(string $method, array $params = [], array $props = [], Closure|null $prepare = null): array
    {
        $props = array_replace_recursive([
            'options' => ['johannschopplich.copilot' => ['agents' => true]],
            'blueprints' => [
                'users/editor' => ['name' => 'editor', 'title' => 'Editor']
            ],
            'users' => [['id' => 'ada', 'email' => 'ada@example.com', 'name' => 'Ada', 'role' => 'editor']]
        ], $props);

        $store = ConnectionStore::for(self::bootApp($props)->user('ada'));
        $code = $store->create(
            new Client('https://claude.ai/oauth/claude-code-client-metadata', 'Claude Code', 'claude.ai', true),
            'http://localhost/callback',
            'https://example.com/api/copilot/mcp',
            [ConnectionPermission::Read, ConnectionPermission::Write],
            'challenge'
        );
        $token = $store->redeemCode($code, fn () => true)['accessToken']->value;

        $kirby = self::bootApp(array_replace_recursive($props, [
            'request' => [
                'method' => 'POST',
                'body' => json_encode(['jsonrpc' => '2.0', 'id' => 1, 'method' => $method, 'params' => $params])
            ],
            'server' => [
                'HTTP_AUTHORIZATION' => 'Bearer ' . $token,
                'HTTP_MCP_PROTOCOL_VERSION' => '2025-11-25'
            ]
        ]));

        if ($prepare !== null) {
            $prepare($kirby);
        }

        return json_decode($this->callRoute($kirby, 'copilot/mcp', 'GET|POST|DELETE')->body(), true);
    }
}
