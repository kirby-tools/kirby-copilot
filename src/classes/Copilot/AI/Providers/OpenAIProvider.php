<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI\Providers;

use Closure;
use JohannSchopplich\Copilot\AI\Exception\ProviderException;
use JohannSchopplich\Copilot\AI\ProviderConfig;
use JohannSchopplich\Copilot\AI\ProviderName;
use Kirby\Exception\AuthException;
use OpenAI;
use OpenAI\Contracts\ClientContract;
use OpenAI\Exceptions\ErrorException;
use OpenAI\Exceptions\RateLimitException;
use OpenAI\Exceptions\ServerException;
use OpenAI\Exceptions\TransporterException;
use OpenAI\Exceptions\UnserializableResponse;
use Throwable;

/**
 * OpenAI provider backed by `openai-php/client`.
 *
 * Doubles as the transport for any OpenAI-compatible endpoint
 * (Mistral, Gemini's `/v1beta/openai/`, OpenRouter, Azure, Ollama, …).
 * {@see GeminiProvider} and {@see MistralProvider} extend this class
 * and override the base-URL / model constants only.
 *
 * @internal
 */
class OpenAIProvider implements Provider
{
    public const DEFAULT_BASE_URL = 'https://api.openai.com/v1';
    public const DEFAULT_MODEL = 'gpt-5.4';
    private const MAX_RETRIES = 3;

    public function __construct(
        protected readonly ProviderConfig $config,
        protected readonly ClientContract|null $client = null,
        protected readonly Closure|null $sleep = null,
    ) {
    }

    public function generateObject(array $messages, array $schema): array
    {
        $request = [
            'model' => $this->model(),
            'messages' => $messages,
            'response_format' => [
                'type' => 'json_schema',
                'json_schema' => [
                    'name' => 'structured_response',
                    'strict' => true,
                    'schema' => $schema,
                ],
            ],
            ...$this->config->options,
        ];

        $response = $this->withRetry(fn () => $this->client()->chat()->create($request));

        $content = $response->choices[0]->message->content;
        $decoded = json_decode($content, associative: true);

        if (!is_array($decoded) || ($decoded !== [] && array_is_list($decoded))) {
            $this->fail(
                reason: 'response was not a JSON object',
                responseExcerpt: $content,
                responseId: $response->id,
            );
        }

        return $decoded;
    }

    public function generateText(array $messages): string
    {
        $request = [
            'model' => $this->model(),
            'messages' => $messages,
            ...$this->config->options,
        ];

        $response = $this->withRetry(fn () => $this->client()->chat()->create($request));

        $content = $response->choices[0]->message->content;

        if (!is_string($content)) {
            $this->fail(
                reason: 'response did not contain text content',
                responseId: $response->id,
            );
        }

        return $content;
    }

    protected function providerName(): ProviderName
    {
        return ProviderName::OpenAI;
    }

    protected function client(): ClientContract
    {
        return $this->client ?? OpenAI::factory()
            ->withApiKey($this->apiKey())
            ->withBaseUri($this->baseUrl())
            ->make();
    }

    protected function baseUrl(): string
    {
        return $this->config->baseUrl ?? static::DEFAULT_BASE_URL;
    }

    protected function model(): string
    {
        return $this->config->model ?? static::DEFAULT_MODEL;
    }

    /**
     * @throws AuthException
     */
    protected function apiKey(): string
    {
        if ($this->config->apiKey === null) {
            // TODO: Drop K4 compat in v4 – use named arg (message:) once Kirby 5 is the floor
            throw new AuthException(
                'Missing API key in "johannschopplich.copilot.providers.' . $this->providerName()->value . '.apiKey"'
            );
        }

        return $this->config->apiKey;
    }

    /**
     * @throws ProviderException
     */
    protected function fail(
        string $reason,
        string|null $responseExcerpt = null,
        string|null $responseId = null,
        int|null $httpCode = null,
        Throwable|null $previous = null,
    ): never {
        throw new ProviderException(
            providerName: $this->providerName(),
            reason: $reason,
            model: $this->model(),
            responseId: $responseId,
            responseExcerpt: $responseExcerpt,
            httpCode: $httpCode,
            previous: $previous,
        );
    }

    /**
     * @template T
     * @param Closure(): T $operation
     * @return T
     */
    protected function withRetry(Closure $operation): mixed
    {
        $sleep = $this->sleep ?? \sleep(...);

        for ($attempt = 0; ; $attempt++) {
            try {
                return $operation();
            } catch (
                ErrorException
                | RateLimitException
                | ServerException
                | TransporterException
                | UnserializableResponse $e
            ) {
                if (!$this->isRetriable($e) || $attempt >= self::MAX_RETRIES) {
                    $this->fail(
                        reason: 'request failed: ' . $e->getMessage(),
                        responseExcerpt: $this->responseBodyOf($e),
                        httpCode: $this->statusOf($e),
                        previous: $e,
                    );
                }

                $sleep($this->retryDelay($e, $attempt));
            }
        }
    }

    protected function isRetriable(Throwable $e): bool
    {
        return match (true) {
            $e instanceof RateLimitException,
            $e instanceof ServerException,
            $e instanceof TransporterException => true,
            $e instanceof ErrorException => $e->getStatusCode() === 429 || $e->getStatusCode() >= 500,
            default => false,
        };
    }

    protected function statusOf(Throwable $e): int|null
    {
        return match (true) {
            $e instanceof ErrorException => $e->getStatusCode(),
            $e instanceof RateLimitException => 429,
            $e instanceof ServerException,
            $e instanceof UnserializableResponse => $e->response->getStatusCode(),
            default => null,
        };
    }

    protected function responseBodyOf(Throwable $e): string|null
    {
        $response = match (true) {
            $e instanceof ErrorException,
            $e instanceof RateLimitException,
            $e instanceof ServerException,
            $e instanceof UnserializableResponse => $e->response,
            default => null,
        };

        return $response !== null ? (string)$response->getBody() : null;
    }

    protected function retryDelay(Throwable $e, int $attempt): int
    {
        $response = match (true) {
            $e instanceof ErrorException,
            $e instanceof RateLimitException,
            $e instanceof ServerException,
            $e instanceof UnserializableResponse => $e->response,
            default => null,
        };

        $header = $response?->getHeaderLine('Retry-After') ?? '';

        if ($header !== '' && is_numeric($header)) {
            return max(0, (int)$header);
        }

        return 2 ** $attempt;
    }
}
