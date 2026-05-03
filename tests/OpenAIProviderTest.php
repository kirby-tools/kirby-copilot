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
    #[DataProvider('openAIFamilyVendors')]
    public function missing_api_key_error_names_vendor_specific_config_path(
        string $providerClass,
        string $expectedConfigKey,
        string $expectedModel,
        string $expectedBaseUrl,
        ProviderName $expectedProviderName,
    ): void {
        $provider = new $providerClass(
            config: new ProviderConfig(apiKey: null),
        );

        $this->expectException(AuthException::class);
        $this->expectExceptionMessage('Missing API key in "johannschopplich.copilot.providers.' . $expectedConfigKey . '.apiKey"');

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );
    }

    #[Test]
    #[DataProvider('openAIFamilyVendors')]
    public function uses_vendor_default_model_when_config_model_is_null(
        string $providerClass,
        string $expectedConfigKey,
        string $expectedModel,
        string $expectedBaseUrl,
        ProviderName $expectedProviderName,
    ): void {
        [$client, $provider] = $this->fixture(providerClass: $providerClass);

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $client->assertSent(Chat::class, function (string $method, array $parameters) use ($expectedModel): bool {
            return $method === 'create' && $parameters['model'] === $expectedModel;
        });
    }

    #[Test]
    #[DataProvider('openAIFamilyVendors')]
    public function exposes_vendor_default_base_url(
        string $providerClass,
        string $expectedConfigKey,
        string $expectedModel,
        string $expectedBaseUrl,
        ProviderName $expectedProviderName,
    ): void {
        $this->assertSame($expectedBaseUrl, $providerClass::DEFAULT_BASE_URL);
    }

    #[Test]
    #[DataProvider('openAIFamilyVendors')]
    public function provider_exception_carries_vendor_provider_name(
        string $providerClass,
        string $expectedConfigKey,
        string $expectedModel,
        string $expectedBaseUrl,
        ProviderName $expectedProviderName,
    ): void {
        [, $provider] = $this->fixture(providerClass: $providerClass, content: 'not valid json');

        try {
            $provider->generateObject(
                messages: [['role' => 'user', 'content' => 'hi']],
                schema: ['type' => 'object'],
            );
            $this->fail('Expected ProviderException');
        } catch (ProviderException $e) {
            $details = $e->getDetails();
            $this->assertSame($expectedProviderName, $details['providerName']);
            $this->assertSame($expectedModel, $details['model']);
            $this->assertSame('not valid json', $details['responseExcerpt']);
        }
    }

    public static function openAIFamilyVendors(): array
    {
        return [
            'OpenAI' => [
                OpenAIProvider::class,
                'openai',
                OpenAIProvider::DEFAULT_MODEL,
                OpenAIProvider::DEFAULT_BASE_URL,
                ProviderName::OpenAI,
            ],
            'Gemini' => [
                GeminiProvider::class,
                'google',
                GeminiProvider::DEFAULT_MODEL,
                GeminiProvider::DEFAULT_BASE_URL,
                ProviderName::Google,
            ],
            'Mistral' => [
                MistralProvider::class,
                'mistral',
                MistralProvider::DEFAULT_MODEL,
                MistralProvider::DEFAULT_BASE_URL,
                ProviderName::Mistral,
            ],
        ];
    }

    #[Test]
    public function uses_provider_config_model_when_set(): void
    {
        [$client, $provider] = $this->fixture(model: 'gpt-5.4');

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $client->assertSent(Chat::class, function (string $method, array $parameters): bool {
            return $method === 'create' && $parameters['model'] === 'gpt-5.4';
        });
    }

    /** @return array<string, array{0: int}> */
    public static function retriableStatusCodes(): array
    {
        return [
            'rate limit (429)' => [429],
            'server error (500)' => [500],
            'server error (503)' => [503],
            'bad gateway (502)' => [502],
        ];
    }

    #[Test]
    #[DataProvider('retriableStatusCodes')]
    public function retries_on_retriable_status_code_then_succeeds(int $statusCode): void
    {
        [$client, $provider] = $this->fixture(
            responses: [
                $this->errorException($statusCode),
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
    public function retries_with_increasing_delay(): void
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

        $this->assertCount(3, $sleeps);
        $this->assertGreaterThan(0, $sleeps[0]);
        $this->assertGreaterThanOrEqual($sleeps[0], $sleeps[1]);
        $this->assertGreaterThanOrEqual($sleeps[1], $sleeps[2]);
    }

    #[Test]
    public function honours_retry_after_header_for_delay(): void
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
    public function constrains_response_to_supplied_json_schema(): void
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
            options: ['reasoning_effort' => 'low'],
        );

        $provider->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );

        $client->assertSent(Chat::class, function (string $method, array $parameters): bool {
            return $method === 'create' &&
                ($parameters['reasoning_effort'] ?? null) === 'low';
        });
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
