<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\Client;
use JohannSchopplich\Copilot\Agents\Connection;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\McpServer;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use Kirby\Exception\NotFoundException;
use Kirby\Http\Response;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class McpServerTest extends ApiRouteTestCase
{
    #[Test]
    public function answers_initialize_with_the_requested_legacy_version(): void
    {
        $response = $this->handle(['jsonrpc' => '2.0', 'id' => 1, 'method' => 'initialize', 'params' => [
            'protocolVersion' => '2025-06-18',
            'capabilities' => (object)[],
            'clientInfo' => ['name' => 'test', 'version' => '1']
        ]]);
        $result = $this->decode($response)['result'];

        $this->assertSame(200, $response->code());
        $this->assertSame('2025-06-18', $result['protocolVersion']);
    }

    #[Test]
    public function describes_the_server_on_initialize_without_a_session(): void
    {
        $response = $this->handle(['jsonrpc' => '2.0', 'id' => 1, 'method' => 'initialize', 'params' => [
            'protocolVersion' => '2025-06-18',
            'capabilities' => (object)[]
        ]]);
        $result = $this->decode($response)['result'];

        $this->assertSame(['tools' => ['listChanged' => false]], $result['capabilities']);
        $this->assertSame('kirby-copilot', $result['serverInfo']['name']);
        $this->assertStringContainsString('Kirby Playground', $result['instructions']);
        $this->assertArrayNotHasKey('Mcp-Session-Id', $response->headers());
    }

    #[Test]
    public function answers_initialize_for_an_unknown_version_with_its_latest_legacy_version(): void
    {
        $response = $this->handle(['jsonrpc' => '2.0', 'id' => 1, 'method' => 'initialize', 'params' => [
            'protocolVersion' => '2024-11-05',
            'capabilities' => (object)[]
        ]]);

        $this->assertSame('2025-11-25', $this->decode($response)['result']['protocolVersion']);
    }

    #[Test]
    public function accepts_a_notification_with_202_and_no_body(): void
    {
        $response = $this->handle(['jsonrpc' => '2.0', 'method' => 'notifications/initialized']);

        $this->assertSame(202, $response->code());
        $this->assertSame('', $response->body());
    }

    #[Test]
    public function answers_ping_with_an_empty_object(): void
    {
        $response = $this->handle(['jsonrpc' => '2.0', 'id' => 'a', 'method' => 'ping'], ['MCP-Protocol-Version' => '2025-11-25']);

        $this->assertSame('{"jsonrpc":"2.0","id":"a","result":{}}', $response->body());
    }

    #[Test]
    public function lists_only_the_tools_the_connection_may_use(): void
    {
        $response = $this->handle(['jsonrpc' => '2.0', 'id' => 1, 'method' => 'tools/list'], ['MCP-Protocol-Version' => '2025-11-25']);
        $tools = $this->decode($response)['result']['tools'];

        $this->assertSame(['echo', 'crash'], array_column($tools, 'name'));
        $this->assertSame(['readOnlyHint' => true, 'openWorldHint' => false], $tools[0]['annotations']);
        $this->assertStringContainsString('"properties":{}', $response->body());
    }

    #[Test]
    public function answers_server_discover_with_both_protocol_eras(): void
    {
        $response = $this->handle($this->modern('server/discover'), $this->modernHeaders('server/discover'));
        $result = $this->decode($response)['result'];

        $this->assertSame(200, $response->code());
        $this->assertSame('complete', $result['resultType']);
        $this->assertSame(['2026-07-28', '2025-11-25', '2025-06-18'], $result['supportedVersions']);
        $this->assertSame('private', $result['cacheScope']);
        $this->assertIsInt($result['ttlMs']);
        $this->assertSame('kirby-copilot', $result['_meta']['io.modelcontextprotocol/serverInfo']['name']);
    }

    #[Test]
    public function adds_the_cache_hints_to_a_modern_tool_list(): void
    {
        $response = $this->handle($this->modern('tools/list'), $this->modernHeaders('tools/list'));
        $result = $this->decode($response)['result'];

        $this->assertSame(['echo', 'crash'], array_column($result['tools'], 'name'));
        $this->assertSame('private', $result['cacheScope']);
        $this->assertSame('complete', $result['resultType']);
    }

    #[Test]
    public function rejects_a_modern_request_whose_method_header_differs_from_the_body(): void
    {
        $response = $this->handle($this->modern('tools/list'), $this->modernHeaders('server/discover'));

        $this->assertSame(400, $response->code());
        $this->assertSame(-32020, $this->decode($response)['error']['code']);
    }

    #[Test]
    public function rejects_a_modern_tool_call_without_the_mcp_name_header(): void
    {
        $body = $this->modern('tools/call', ['name' => 'echo', 'arguments' => ['text' => 'Hi']]);
        $response = $this->handle($body, $this->modernHeaders('tools/call'));

        $this->assertSame(-32020, $this->decode($response)['error']['code']);
    }

    #[Test]
    public function rejects_a_modern_tool_call_whose_mcp_name_header_names_another_tool(): void
    {
        $body = $this->modern('tools/call', ['name' => 'echo', 'arguments' => ['text' => 'Hi']]);
        $headers = [...$this->modernHeaders('tools/call'), 'Mcp-Name' => 'crash'];

        $this->assertSame(-32020, $this->decode($this->handle($body, $headers))['error']['code']);
    }

    #[Test]
    public function decodes_a_base64_mcp_name_header(): void
    {
        $body = $this->modern('tools/call', ['name' => 'echo', 'arguments' => ['text' => 'Hi']]);
        $headers = [...$this->modernHeaders('tools/call'), 'Mcp-Name' => '=?base64?' . base64_encode('echo') . '?='];

        $this->assertSame(200, $this->handle($body, $headers)->code());
    }

    #[Test]
    public function rejects_an_unsupported_modern_version_and_names_the_supported_ones(): void
    {
        $body = $this->modern('tools/list');
        $body['params']['_meta']['io.modelcontextprotocol/protocolVersion'] = '2027-01-01';
        $headers = [...$this->modernHeaders('tools/list'), 'MCP-Protocol-Version' => '2027-01-01'];
        $response = $this->handle($body, $headers);
        $error = $this->decode($response)['error'];

        $this->assertSame(400, $response->code());
        $this->assertSame(-32022, $error['code']);
        $this->assertSame('2027-01-01', $error['data']['requested']);
        $this->assertContains('2026-07-28', $error['data']['supported']);
    }

    #[Test]
    public function rejects_a_modern_request_without_client_capabilities(): void
    {
        $body = $this->modern('tools/list');
        unset($body['params']['_meta']['io.modelcontextprotocol/clientCapabilities']);
        $response = $this->handle($body, $this->modernHeaders('tools/list'));

        $this->assertSame(400, $response->code());
        $this->assertSame(-32602, $this->decode($response)['error']['code']);
    }

    #[Test]
    public function answers_an_unknown_modern_method_with_404(): void
    {
        $response = $this->handle($this->modern('subscriptions/listen'), $this->modernHeaders('subscriptions/listen'));

        $this->assertSame(404, $response->code());
        $this->assertSame(-32601, $this->decode($response)['error']['code']);
    }

    #[Test]
    public function answers_an_unknown_legacy_method_with_a_method_not_found_error(): void
    {
        $response = $this->handle(['jsonrpc' => '2.0', 'id' => 1, 'method' => 'resources/list'], ['MCP-Protocol-Version' => '2025-11-25']);

        $this->assertSame(-32601, $this->decode($response)['error']['code']);
    }

    #[Test]
    public function rejects_an_unsupported_legacy_protocol_version_header(): void
    {
        $response = $this->handle(['jsonrpc' => '2.0', 'id' => 1, 'method' => 'tools/list'], ['MCP-Protocol-Version' => '2024-01-01']);

        $this->assertSame(400, $response->code());
    }

    #[Test]
    public function rejects_a_legacy_tool_call_whose_mcp_name_header_names_another_tool(): void
    {
        $response = $this->handle(
            ['jsonrpc' => '2.0', 'id' => 1, 'method' => 'tools/call', 'params' => ['name' => 'echo', 'arguments' => ['text' => 'Hi']]],
            ['MCP-Protocol-Version' => '2025-11-25', 'Mcp-Method' => 'tools/call', 'Mcp-Name' => 'crash']
        );

        $this->assertSame(-32020, $this->decode($response)['error']['code']);
    }

    #[Test]
    public function accepts_a_legacy_tool_call_whose_routing_headers_match_the_body(): void
    {
        $response = $this->handle(
            ['jsonrpc' => '2.0', 'id' => 1, 'method' => 'tools/call', 'params' => ['name' => 'echo', 'arguments' => ['text' => 'Hi']]],
            ['MCP-Protocol-Version' => '2025-11-25', 'Mcp-Method' => 'tools/call', 'Mcp-Name' => 'echo']
        );

        $this->assertSame(['text' => 'Hi'], $this->decode($response)['result']['structuredContent']);
    }

    #[Test]
    public function rejects_a_batch(): void
    {
        $response = $this->handle([['jsonrpc' => '2.0', 'id' => 1, 'method' => 'ping']]);

        $this->assertSame(400, $response->code());
        $this->assertSame(-32600, $this->decode($response)['error']['code']);
    }

    #[Test]
    public function answers_invalid_json_with_a_parse_error(): void
    {
        $response = $this->handle('{"jsonrpc":');

        $this->assertSame(400, $response->code());
        $this->assertSame(-32700, $this->decode($response)['error']['code']);
    }

    #[Test]
    public function returns_the_tool_result_as_structured_content_and_as_text(): void
    {
        $response = $this->handle(
            ['jsonrpc' => '2.0', 'id' => 1, 'method' => 'tools/call', 'params' => ['name' => 'echo', 'arguments' => ['text' => 'Hi']]],
            ['MCP-Protocol-Version' => '2025-11-25']
        );
        $result = $this->decode($response)['result'];

        $this->assertSame(['text' => 'Hi'], $result['structuredContent']);
        $this->assertSame([['type' => 'text', 'text' => '{"text":"Hi"}']], $result['content']);
        $this->assertFalse($result['isError']);
    }

    #[Test]
    public function returns_a_tool_error_as_a_result_the_agent_can_act_on(): void
    {
        $response = $this->handle(
            ['jsonrpc' => '2.0', 'id' => 1, 'method' => 'tools/call', 'params' => ['name' => 'echo', 'arguments' => []]],
            ['MCP-Protocol-Version' => '2025-11-25']
        );
        $result = $this->decode($response)['result'];

        $this->assertTrue($result['isError']);
        $this->assertSame('Pass a text.', $result['content'][0]['text']);
    }

    #[Test]
    public function returns_a_kirby_exception_as_a_tool_error(): void
    {
        $response = $this->handle(
            ['jsonrpc' => '2.0', 'id' => 1, 'method' => 'tools/call', 'params' => ['name' => 'crash', 'arguments' => ['kind' => 'kirby']]],
            ['MCP-Protocol-Version' => '2025-11-25']
        );
        $result = $this->decode($response)['result'];

        $this->assertTrue($result['isError']);
        $this->assertSame('The page "notes" cannot be found', $result['content'][0]['text']);
    }

    #[Test]
    public function returns_an_unexpected_failure_as_a_tool_error_that_hides_its_message(): void
    {
        ini_set('error_log', '/dev/null');
        $response = $this->handle(
            ['jsonrpc' => '2.0', 'id' => 7, 'method' => 'tools/call', 'params' => ['name' => 'crash', 'arguments' => []]],
            ['MCP-Protocol-Version' => '2025-11-25']
        );
        $result = $this->decode($response)['result'];

        $this->assertTrue($result['isError']);
        $this->assertStringNotContainsString('secret', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_an_argument_the_tool_does_not_take(): void
    {
        $response = $this->handle(
            ['jsonrpc' => '2.0', 'id' => 1, 'method' => 'tools/call', 'params' => ['name' => 'crash', 'arguments' => ['knd' => 'kirby']]],
            ['MCP-Protocol-Version' => '2025-11-25']
        );
        $result = $this->decode($response)['result'];

        $this->assertTrue($result['isError']);
        $this->assertSame('crash has no argument knd. It takes kind.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_a_tool_outside_the_connection_permissions(): void
    {
        $response = $this->handle(
            ['jsonrpc' => '2.0', 'id' => 1, 'method' => 'tools/call', 'params' => ['name' => 'erase', 'arguments' => []]],
            ['MCP-Protocol-Version' => '2025-11-25']
        );
        $result = $this->decode($response)['result'];

        $this->assertTrue($result['isError']);
        $this->assertStringContainsString('content:delete', $result['content'][0]['text']);
    }

    #[Test]
    public function answers_an_unknown_tool_with_invalid_params(): void
    {
        $response = $this->handle(
            ['jsonrpc' => '2.0', 'id' => 1, 'method' => 'tools/call', 'params' => ['name' => 'nope']],
            ['MCP-Protocol-Version' => '2025-11-25']
        );

        $this->assertSame(-32602, $this->decode($response)['error']['code']);
    }

    private function handle(array|string $body, array $headers = []): Response
    {
        $server = [];

        foreach ($headers as $name => $value) {
            $server['HTTP_' . strtoupper(str_replace('-', '_', $name))] = $value;
        }

        $kirby = self::bootApp([
            'site' => ['content' => ['title' => 'Kirby Playground']],
            'server' => $server,
            'request' => [
                'method' => 'POST',
                'body' => is_string($body) ? $body : json_encode($body)
            ]
        ]);

        return (new McpServer(self::tools()))->handle($kirby->request(), self::connection());
    }

    private function decode(Response $response): array
    {
        return json_decode($response->body(), true);
    }

    private function modern(string $method, array $params = []): array
    {
        return ['jsonrpc' => '2.0', 'id' => 1, 'method' => $method, 'params' => [
            ...$params,
            '_meta' => [
                'io.modelcontextprotocol/protocolVersion' => '2026-07-28',
                'io.modelcontextprotocol/clientCapabilities' => (object)[]
            ]
        ]];
    }

    private function modernHeaders(string $method): array
    {
        return ['MCP-Protocol-Version' => '2026-07-28', 'Mcp-Method' => $method];
    }

    private static function connection(): Connection
    {
        return new Connection(
            id: 'c0123456789abcdef',
            userId: 'editor',
            client: new Client('https://claude.ai/oauth/claude-code-client-metadata', 'Claude Code', 'claude.ai', true),
            redirectUri: 'http://localhost/callback',
            resource: 'https://example.com/api/copilot/mcp',
            permissions: [ConnectionPermission::Read],
            createdAt: time(),
            lastUsedAt: null
        );
    }

    /**
     * @return list<Tool>
     */
    private static function tools(): array
    {
        return [
            new Tool(
                name: 'echo',
                title: 'Echo',
                description: 'Returns the text it gets.',
                inputSchema: ['type' => 'object', 'properties' => (object)[]],
                annotations: ['readOnlyHint' => true, 'openWorldHint' => false],
                permission: ConnectionPermission::Read,
                handler: function (array $arguments) {
                    if (!isset($arguments['text'])) {
                        throw new ToolError('Pass a text.');
                    }

                    return ['text' => $arguments['text']];
                }
            ),
            new Tool(
                name: 'crash',
                title: 'Crash',
                description: 'Fails.',
                inputSchema: ['type' => 'object', 'properties' => ['kind' => ['type' => 'string']], 'additionalProperties' => false],
                annotations: ['readOnlyHint' => true],
                permission: ConnectionPermission::Read,
                handler: function (array $arguments) {
                    if (($arguments['kind'] ?? null) === 'kirby') {
                        throw new NotFoundException(key: 'page.notFound', data: ['slug' => 'notes']);
                    }

                    throw new RuntimeException('secret');
                }
            ),
            new Tool(
                name: 'erase',
                title: 'Erase',
                description: 'Erases everything.',
                inputSchema: ['type' => 'object'],
                annotations: ['readOnlyHint' => false, 'destructiveHint' => true],
                permission: ConnectionPermission::Delete,
                handler: fn () => []
            )
        ];
    }
}
