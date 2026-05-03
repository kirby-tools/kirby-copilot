<?php

declare(strict_types = 1);

use Anthropic\Client as AnthropicClient;
use Anthropic\RequestOptions as AnthropicRequestOptions;
use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Handler\MockHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Middleware;
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

    #[Test]
    public function returns_tool_use_input_as_decoded_object(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->toolUseResponse(input: ['greeting' => 'hello'])],
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
            responses: [$this->toolUseResponse(input: ['ok' => true])],
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
    public function forces_structured_output_via_tool_choice_with_input_schema(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->toolUseResponse(input: ['ok' => true])],
        );

        $schema = [
            'type' => 'object',
            'properties' => ['ok' => ['type' => 'boolean']],
            'required' => ['ok'],
        ];

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: $schema,
        );

        $body = $this->lastRequestBody();
        $this->assertSame('tool', $body['tool_choice']['type'] ?? null);
        $this->assertSame('structured_response', $body['tool_choice']['name'] ?? null);
        $this->assertSame('structured_response', $body['tools'][0]['name'] ?? null);
        $this->assertSame($schema, $body['tools'][0]['input_schema'] ?? null);
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
            $this->assertSame(AnthropicProvider::DEFAULT_MODEL, $details['model']);
            $this->assertSame('msg_test', $details['responseId']);
            $this->assertSame('I cannot help with that.', $details['responseExcerpt']);
        }
    }

    #[Test]
    public function applies_default_max_tokens_when_options_omit_it(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->toolUseResponse(input: ['ok' => true])],
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
    public function passes_config_options_through_to_request(): void
    {
        [, $provider] = $this->fixture(
            responses: [$this->toolUseResponse(input: ['ok' => true])],
            options: ['maxTokens' => 8000],
        );

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $body = $this->lastRequestBody();
        $this->assertSame(8000, $body['max_tokens'] ?? null);
    }

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
                'model' => AnthropicProvider::DEFAULT_MODEL,
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
                'model' => AnthropicProvider::DEFAULT_MODEL,
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
}
