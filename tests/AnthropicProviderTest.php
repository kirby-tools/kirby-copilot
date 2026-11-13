<?php

declare(strict_types = 1);

use Anthropic\Client as AnthropicClient;
use Anthropic\RequestOptions as AnthropicRequestOptions;
use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Handler\MockHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Middleware;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use JohannSchopplich\Copilot\AI\Exception\ProviderException;
use JohannSchopplich\Copilot\AI\ProviderConfig;
use JohannSchopplich\Copilot\AI\ProviderName;
use JohannSchopplich\Copilot\AI\Providers\AnthropicProvider;
use Kirby\Exception\AuthException;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

final class AnthropicProviderTest extends TestCase
{
    /** @var list<array{request: \Psr\Http\Message\RequestInterface, response: mixed, error: mixed, options: array<string, mixed>}> */
    private array $sentRequests = [];

    /**
     * @param list<Response> $responses
     * @param array<string, mixed> $options
     * @return array{0: MockHandler, 1: AnthropicProvider}
     */
    private function fixture(
        array $responses,
        array $options = [],
    ): array {
        $mockHandler = new MockHandler($responses);
        $stack = HandlerStack::create($mockHandler);
        $stack->push(Middleware::history($this->sentRequests));

        $guzzle = new GuzzleClient(['handler' => $stack]);

        $client = new AnthropicClient(
            apiKey: 'sk-ant-test',
            requestOptions: AnthropicRequestOptions::with(transporter: $guzzle, maxRetries: 0),
        );

        $provider = new AnthropicProvider(
            config: new ProviderConfig(apiKey: 'sk-ant-test', options: $options),
            client: $client,
        );

        return [$mockHandler, $provider];
    }

    /** @return array<string, mixed> */
    private function lastRequestBody(): array
    {
        $request = $this->sentRequests[array_key_last($this->sentRequests)]['request'];

        return json_decode((string)$request->getBody(), associative: true);
    }

    private function toolUseResponse(array $input, string $name = 'structured_response'): Response
    {
        return new Response(
            status: 200,
            headers: ['Content-Type' => 'application/json'],
            body: json_encode([
                'id' => 'msg_test',
                'type' => 'message',
                'role' => 'assistant',
                'content' => [
                    [
                        'type' => 'tool_use',
                        'id' => 'tool_test',
                        'name' => $name,
                        'input' => $input,
                    ],
                ],
                'model' => ProviderName::Anthropic->defaultModel(),
                'stop_reason' => 'tool_use',
                'usage' => ['input_tokens' => 0, 'output_tokens' => 0],
            ]),
        );
    }

    private function textOnlyResponse(string $text): Response
    {
        return new Response(
            status: 200,
            headers: ['Content-Type' => 'application/json'],
            body: json_encode([
                'id' => 'msg_test',
                'type' => 'message',
                'role' => 'assistant',
                'content' => [['type' => 'text', 'text' => $text]],
                'model' => ProviderName::Anthropic->defaultModel(),
                'stop_reason' => 'end_turn',
                'usage' => ['input_tokens' => 0, 'output_tokens' => 0],
            ]),
        );
    }

    /**
     * @param list<string> $texts
     */
    private function textBlocksResponse(array $texts): Response
    {
        $blocks = [];

        foreach ($texts as $text) {
            $blocks[] = ['type' => 'text', 'text' => $text];
        }

        return new Response(
            status: 200,
            headers: ['Content-Type' => 'application/json'],
            body: json_encode([
                'id' => 'msg_test',
                'type' => 'message',
                'role' => 'assistant',
                'content' => $blocks,
                'model' => ProviderName::Anthropic->defaultModel(),
                'stop_reason' => 'end_turn',
                'usage' => ['input_tokens' => 0, 'output_tokens' => 0],
            ]),
        );
    }

    private function errorResponse(int $status): Response
    {
        return new Response(
            status: $status,
            headers: ['Content-Type' => 'application/json'],
            body: json_encode([
                'type' => 'error',
                'error' => ['type' => 'error', 'message' => 'error'],
            ]),
        );
    }

    #[Test]
    public function generate_object_returns_the_decoded_json_text(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->textOnlyResponse('{"greeting":"hello"}')],
        );

        $result = $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $this->assertSame(['greeting' => 'hello'], $result);
    }

    #[Test]
    public function extracts_system_message_to_top_level_system_field(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->textOnlyResponse('{"ok":true}')],
        );

        $provider->generateObject(
            messages: [
                ['role' => 'system', 'content' => 'You are a helpful assistant.'],
                ['role' => 'user', 'content' => 'hi'],
            ],
            schema: ['type' => 'object'],
        );

        $body = $this->lastRequestBody();
        $this->assertSame('You are a helpful assistant.', $body['system'] ?? null);
        $this->assertCount(1, $body['messages']);
        $this->assertSame('user', $body['messages'][0]['role'] ?? null);
    }

    #[Test]
    public function generate_object_requests_the_schema_as_output_format(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->textOnlyResponse('{"ok":true}')],
        );

        $schema = [
            'type' => 'object',
            'properties' => ['ok' => ['type' => 'boolean']],
            'required' => ['ok'],
            'additionalProperties' => false,
        ];

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: $schema,
        );

        $body = $this->lastRequestBody();
        $this->assertSame(['type' => 'json_schema', 'schema' => $schema], $body['output_config']['format'] ?? null);
        $this->assertArrayNotHasKey('tool_choice', $body);
    }

    #[Test]
    public function generate_object_moves_constraints_anthropic_rejects_into_the_description(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->textOnlyResponse('{"translations":["a","b"]}')],
        );

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: [
                'type' => 'object',
                'properties' => [
                    'translations' => ['type' => 'array', 'minItems' => 2, 'maxItems' => 2, 'items' => ['type' => 'string']],
                    'date' => ['type' => 'string', 'format' => 'date'],
                    'pattern' => ['type' => 'string', 'format' => 'regex'],
                    'value' => ['oneOf' => [['type' => 'string'], ['type' => 'number']]],
                ],
                'required' => ['translations'],
            ],
        );

        $this->assertSame([
            'type' => 'object',
            'properties' => [
                'translations' => ['type' => 'array', 'items' => ['type' => 'string'], 'description' => 'min items: 2; max items: 2.'],
                'date' => ['type' => 'string', 'format' => 'date'],
                'pattern' => ['type' => 'string', 'description' => 'format: regex.'],
                'value' => ['anyOf' => [['type' => 'string'], ['type' => 'number']]],
            ],
            'required' => ['translations'],
            'additionalProperties' => false,
        ], $this->lastRequestBody()['output_config']['format']['schema'] ?? null);
    }

    #[Test]
    public function generate_object_keeps_the_output_format_next_to_an_output_config_option(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->textOnlyResponse('{"ok":true}')],
            options: ['outputConfig' => ['effort' => 'low']],
        );

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $body = $this->lastRequestBody();
        $this->assertSame('low', $body['output_config']['effort'] ?? null);
        $this->assertSame('json_schema', $body['output_config']['format']['type'] ?? null);
    }

    #[Test]
    public function throws_auth_exception_when_api_key_is_missing(): void
    {
        $provider = new AnthropicProvider(
            config: new ProviderConfig(apiKey: null),
        );

        $this->expectException(AuthException::class);
        $this->expectExceptionMessage('Missing API key in "johannschopplich.copilot.providers.anthropic.apiKey"');

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );
    }

    #[Test]
    public function provider_exception_includes_diagnostic_details(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->textOnlyResponse('I cannot help with that.')],
        );

        try {
            $provider->generateObject(
                messages: [['role' => 'user', 'content' => 'hi']],
                schema: ['type' => 'object'],
            );
            $this->fail('Expected ProviderException');
        } catch (ProviderException $e) {
            $details = $e->getDetails();
            $this->assertSame(ProviderName::Anthropic, $details['providerName']);
            $this->assertSame(ProviderName::Anthropic->defaultModel(), $details['model']);
            $this->assertSame('msg_test', $details['responseId']);
            $this->assertSame('I cannot help with that.', $details['responseExcerpt']);
        }
    }

    #[Test]
    public function applies_default_max_tokens_when_options_omit_it(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->textOnlyResponse('{"ok":true}')],
        );

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $body = $this->lastRequestBody();
        $this->assertSame(AnthropicProvider::DEFAULT_MAX_TOKENS, $body['max_tokens'] ?? null);
    }

    #[Test]
    public function throws_provider_exception_when_sdk_raises_api_exception(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->errorResponse(401)],
        );

        $this->expectException(ProviderException::class);
        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );
    }

    #[Test]
    public function names_the_cause_of_a_connection_failure(): void
    {
        [, $provider] = $this->fixture(
            responses: [new ConnectException(
                'cURL error 28: Operation timed out after 120000 milliseconds',
                new Request('POST', 'https://api.anthropic.com/v1/messages'),
            )],
        );

        try {
            $provider->generateObject(
                messages: [['role' => 'user', 'content' => 'hi']],
                schema: ['type' => 'object'],
            );
            $this->fail('Expected ProviderException');
        } catch (ProviderException $e) {
            $this->assertStringContainsString('cURL error 28: Operation timed out', $e->getMessage());
            $this->assertStringNotContainsString("\n", $e->getMessage());
        }
    }

    #[Test]
    public function passes_config_options_through_to_request(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->textOnlyResponse('{"ok":true}')],
            options: ['maxTokens' => 8000],
        );

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $body = $this->lastRequestBody();
        $this->assertSame(8000, $body['max_tokens'] ?? null);
    }

    #[Test]
    public function generate_text_concatenates_the_text_blocks(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->textBlocksResponse(['hello', ' ', 'world'])],
        );

        $result = $provider->generateText(
            messages: [['role' => 'user', 'content' => 'hi']],
        );

        $this->assertSame('hello world', $result);
    }

    #[Test]
    public function generate_text_throws_provider_exception_without_a_text_block(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->toolUseResponse(input: ['ok' => true])],
        );

        $this->expectException(ProviderException::class);
        $provider->generateText(
            messages: [['role' => 'user', 'content' => 'hi']],
        );
    }
}
