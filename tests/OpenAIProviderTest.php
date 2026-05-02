<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\AI\Exception\ProviderException;
use JohannSchopplich\Copilot\AI\ProviderConfig;
use JohannSchopplich\Copilot\AI\ProviderName;
use JohannSchopplich\Copilot\AI\Providers\GeminiProvider;
use JohannSchopplich\Copilot\AI\Providers\MistralProvider;
use JohannSchopplich\Copilot\AI\Providers\OpenAIProvider;
use Kirby\Exception\AuthException;
use OpenAI\Exceptions\ErrorException;
use OpenAI\Exceptions\TransporterException;
use OpenAI\Exceptions\UnserializableResponse;
use OpenAI\Resources\Chat;
use OpenAI\Responses\Chat\CreateResponse;
use OpenAI\Testing\ClientFake;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Psr\Http\Client\ClientExceptionInterface;
use Psr\Http\Message\ResponseInterface;

final class OpenAIProviderTest extends TestCase
{
    #[Test]
    public function returns_decoded_json_object_from_chat_completion_content(): void
    {
        [, $provider] = $this->fixture(content: '{"greeting": "hello"}');

        $result = $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $this->assertSame(['greeting' => 'hello'], $result);
    }

    #[Test]
    #[DataProvider('invalidJsonObjectPayloads')]
    public function throws_provider_exception_when_response_is_not_a_json_object(string $content): void
    {
        [, $provider] = $this->fixture(content: $content);

        $this->expectException(ProviderException::class);
        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );
    }

    public static function invalidJsonObjectPayloads(): array
    {
        return [
            'malformed' => ['not valid json {{{'],
            'list' => ['[1, 2, 3]'],
        ];
    }

    #[Test]
    public function throws_auth_exception_when_api_key_is_missing(): void
    {
        $provider = new OpenAIProvider(
            config: new ProviderConfig(apiKey: null),
        );

        $this->expectException(AuthException::class);
        $this->expectExceptionMessage('Missing API key: johannschopplich.copilot.providers.openai.apiKey');

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );
    }

    #[Test]
    #[DataProvider('openAIFamilyDefaults')]
    public function uses_default_model_when_config_model_is_null(string $providerClass, string $expectedModel): void
    {
        [$client, $provider] = $this->fixture(providerClass: $providerClass);

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $client->assertSent(Chat::class, function (string $method, array $parameters) use ($expectedModel): bool {
            return $method === 'create' && $parameters['model'] === $expectedModel;
        });
    }

    public static function openAIFamilyDefaults(): array
    {
        return [
            'OpenAI' => [OpenAIProvider::class, OpenAIProvider::DEFAULT_MODEL],
            'Gemini' => [GeminiProvider::class, GeminiProvider::DEFAULT_MODEL],
            'Mistral' => [MistralProvider::class, MistralProvider::DEFAULT_MODEL],
        ];
    }

    #[Test]
    public function uses_provider_config_model_when_set(): void
    {
        [$client, $provider] = $this->fixture(model: 'gpt-4o-2024-08-06');

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $client->assertSent(Chat::class, function (string $method, array $parameters): bool {
            return $method === 'create' && $parameters['model'] === 'gpt-4o-2024-08-06';
        });
    }

    #[Test]
    public function retries_on_rate_limit_error_then_succeeds(): void
    {
        [$client, $provider] = $this->fixture(
            responses: [
                $this->errorException(429),
                $this->successResponse('{"ok": true}'),
            ],
            sleep: static fn () => null,
        );

        $result = $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $this->assertSame(['ok' => true], $result);
        $client->assertSent(Chat::class, 2);
    }

    #[Test]
    public function retries_on_server_error_then_succeeds(): void
    {
        [$client, $provider] = $this->fixture(
            responses: [
                $this->errorException(503),
                $this->successResponse('{"ok": true}'),
            ],
            sleep: static fn () => null,
        );

        $result = $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $this->assertSame(['ok' => true], $result);
        $client->assertSent(Chat::class, 2);
    }

    #[Test]
    public function does_not_retry_on_4xx_other_than_rate_limit(): void
    {
        [$client, $provider] = $this->fixture(
            responses: [$this->errorException(401)],
            sleep: static fn () => null,
        );

        try {
            $provider->generateObject(
                messages: [['role' => 'user', 'content' => 'hi']],
                schema: ['type' => 'object'],
            );
            $this->fail('Expected ProviderException');
        } catch (ProviderException) {
            $client->assertSent(Chat::class, 1);
        }
    }

    #[Test]
    public function throws_provider_exception_after_max_retries_exhausted(): void
    {
        [$client, $provider] = $this->fixture(
            responses: [
                $this->errorException(429),
                $this->errorException(429),
                $this->errorException(429),
                $this->errorException(429),
            ],
            sleep: static fn () => null,
        );

        try {
            $provider->generateObject(
                messages: [['role' => 'user', 'content' => 'hi']],
                schema: ['type' => 'object'],
            );
            $this->fail('Expected ProviderException');
        } catch (ProviderException) {
            $client->assertSent(Chat::class, 4);
        }
    }

    #[Test]
    public function applies_exponential_backoff_between_attempts(): void
    {
        $sleeps = [];
        $sleep = static function (int $seconds) use (&$sleeps): void {
            $sleeps[] = $seconds;
        };

        [, $provider] = $this->fixture(
            responses: [
                $this->errorException(429),
                $this->errorException(429),
                $this->errorException(429),
                $this->successResponse('{"ok": true}'),
            ],
            sleep: $sleep,
        );

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $this->assertSame([1, 2, 4], $sleeps);
    }

    #[Test]
    public function applies_retry_after_delay_when_header_present(): void
    {
        $sleeps = [];
        $sleep = static function (int $seconds) use (&$sleeps): void {
            $sleeps[] = $seconds;
        };

        [, $provider] = $this->fixture(
            responses: [
                $this->errorException(429, retryAfter: '7'),
                $this->successResponse('{"ok": true}'),
            ],
            sleep: $sleep,
        );

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $this->assertSame([7], $sleeps);
    }

    #[Test]
    public function sends_response_format_with_json_schema_to_openai(): void
    {
        [$client, $provider] = $this->fixture();

        $schema = [
            'type' => 'object',
            'properties' => ['greeting' => ['type' => 'string']],
            'required' => ['greeting'],
            'additionalProperties' => false,
        ];

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: $schema,
        );

        $client->assertSent(Chat::class, function (string $method, array $parameters) use ($schema): bool {
            return $method === 'create' &&
                ($parameters['response_format']['type'] ?? null) === 'json_schema' &&
                ($parameters['response_format']['json_schema']['schema'] ?? null) === $schema;
        });
    }

    #[Test]
    public function retries_on_transporter_exception_then_succeeds(): void
    {
        [$client, $provider] = $this->fixture(
            responses: [
                new TransporterException($this->createStub(ClientExceptionInterface::class)),
                $this->successResponse('{"ok": true}'),
            ],
            sleep: static fn () => null,
        );

        $result = $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $this->assertSame(['ok' => true], $result);
        $client->assertSent(Chat::class, 2);
    }

    #[Test]
    public function does_not_retry_on_unserializable_response(): void
    {
        $response = $this->createStub(ResponseInterface::class);
        $response->method('getStatusCode')->willReturn(500);

        [$client, $provider] = $this->fixture(
            responses: [new UnserializableResponse(new \JsonException('bad json'), $response)],
            sleep: static fn () => null,
        );

        try {
            $provider->generateObject(
                messages: [['role' => 'user', 'content' => 'hi']],
                schema: ['type' => 'object'],
            );
            $this->fail('Expected ProviderException');
        } catch (ProviderException) {
            $client->assertSent(Chat::class, 1);
        }
    }

    #[Test]
    public function passes_config_options_through_to_request(): void
    {
        [$client, $provider] = $this->fixture(
            options: ['reasoning_effort' => 'low', 'temperature' => 0.2],
        );

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $client->assertSent(Chat::class, function (string $method, array $parameters): bool {
            return $method === 'create' &&
                ($parameters['reasoning_effort'] ?? null) === 'low' &&
                ($parameters['temperature'] ?? null) === 0.2;
        });
    }

    #[Test]
    public function provider_exception_carries_provider_name_model_and_response_excerpt(): void
    {
        [, $provider] = $this->fixture(content: 'not valid json');

        try {
            $provider->generateObject(
                messages: [['role' => 'user', 'content' => 'hi']],
                schema: ['type' => 'object'],
            );
            $this->fail('Expected ProviderException');
        } catch (ProviderException $e) {
            $details = $e->getDetails();
            $this->assertSame(ProviderName::OpenAI, $details['providerName']);
            $this->assertSame(OpenAIProvider::DEFAULT_MODEL, $details['model']);
            $this->assertSame('not valid json', $details['responseExcerpt']);
        }
    }

    /**
     * @param class-string<OpenAIProvider> $providerClass
     * @param list<mixed>|null $responses
     * @param array<string, mixed> $options
     * @return array{0: ClientFake, 1: OpenAIProvider}
     */
    private function fixture(
        string $content = '{}',
        string|null $model = null,
        string $providerClass = OpenAIProvider::class,
        array|null $responses = null,
        Closure|null $sleep = null,
        array $options = [],
    ): array {
        $client = new ClientFake($responses ?? [$this->successResponse($content)]);

        $provider = new $providerClass(
            config: new ProviderConfig(apiKey: 'sk-test', model: $model, options: $options),
            client: $client,
            sleep: $sleep,
        );

        return [$client, $provider];
    }

    private function successResponse(string $content = '{}'): CreateResponse
    {
        return CreateResponse::fake([
            'choices' => [
                [
                    'index' => 0,
                    'message' => ['role' => 'assistant', 'content' => $content],
                    'finish_reason' => 'stop',
                ],
            ],
        ]);
    }

    private function errorException(int $statusCode, string $retryAfter = ''): ErrorException
    {
        $response = $this->createStub(ResponseInterface::class);
        $response->method('getStatusCode')->willReturn($statusCode);
        $response->method('getHeaderLine')->willReturnMap([
            ['Retry-After', $retryAfter],
        ]);

        return new ErrorException(
            contents: ['message' => 'error', 'type' => 'error'],
            response: $response,
        );
    }
}
