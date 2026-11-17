<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI\Providers;

use Anthropic\Client as AnthropicClient;
use Anthropic\Core\Exceptions\APIException;
use Anthropic\Messages\TextBlock;
use Anthropic\RequestOptions;
use JohannSchopplich\Copilot\AI\Exception\ProviderException;
use JohannSchopplich\Copilot\AI\ProviderConfig;
use JohannSchopplich\Copilot\AI\ProviderName;
use Kirby\Exception\AuthException;
use Throwable;

/**
 * Anthropic provider backed by the official `anthropic-ai/sdk`.
 *
 * Anthropic's wire format differs from OpenAI's, so this provider does not
 * extend {@see OpenAIProvider}. Retry is handled by the SDK.
 *
 * @internal
 */
final class AnthropicProvider implements Provider
{
    public const DEFAULT_BASE_URL = 'https://api.anthropic.com';
    public const DEFAULT_MAX_TOKENS = 32000;

    private const SUPPORTED_STRING_FORMATS = ['date-time', 'time', 'date', 'duration', 'email', 'hostname', 'uri', 'ipv4', 'ipv6', 'uuid'];
    private const DESCRIPTION_CONSTRAINT_KEYS = ['minimum', 'maximum', 'exclusiveMinimum', 'exclusiveMaximum', 'multipleOf', 'minLength', 'maxLength', 'pattern', 'minItems', 'maxItems', 'uniqueItems', 'minProperties', 'maxProperties', 'not'];

    public function __construct(
        private readonly ProviderConfig $config,
        private readonly AnthropicClient|null $client = null,
    ) {
    }

    public function generateObject(array $messages, array $schema): array
    {
        [$chatMessages, $system] = $this->splitSystemPrompt($messages);

        $request = [
            'model' => $this->model(),
            'maxTokens' => self::DEFAULT_MAX_TOKENS,
            'messages' => $chatMessages,
            'system' => $system,
            ...$this->config->options,
            'outputConfig' => [
                ...($this->config->options['outputConfig'] ?? []),
                'format' => ['type' => 'json_schema', 'schema' => self::sanitizeSchema($schema)],
            ],
        ];

        try {
            $message = $this->client()->messages->create(...$request);
        } catch (APIException $e) {
            $this->fail(
                reason: 'request failed: ' . $this->reasonOf($e),
                httpCode: $e->status,
                previous: $e,
            );
        }

        $content = $this->firstTextBlock($message->content);
        $decoded = json_decode($content ?? '', associative: true);

        if (!is_array($decoded) || ($decoded !== [] && array_is_list($decoded))) {
            $this->fail(
                reason: 'response was not a JSON object',
                responseExcerpt: $content,
                responseId: $message->id,
            );
        }

        return $decoded;
    }

    public function generateText(array $messages): string
    {
        [$chatMessages, $system] = $this->splitSystemPrompt($messages);

        $request = [
            'model' => $this->model(),
            'maxTokens' => self::DEFAULT_MAX_TOKENS,
            'messages' => $chatMessages,
            'system' => $system,
            ...$this->config->options,
        ];

        try {
            $message = $this->client()->messages->create(...$request);
        } catch (APIException $e) {
            $this->fail(
                reason: 'request failed: ' . $this->reasonOf($e),
                httpCode: $e->status,
                previous: $e,
            );
        }

        $textParts = [];

        foreach ($message->content as $block) {
            if ($block instanceof TextBlock) {
                $textParts[] = $block->text;
            }
        }

        if ($textParts === []) {
            $this->fail(
                reason: 'response did not contain a text block',
                responseId: $message->id,
            );
        }

        return implode('', $textParts);
    }

    /**
     * @param list<array{role: string, content: string}> $messages
     * @return array{0: list<array{role: string, content: string}>, 1: string|null}
     */
    private function splitSystemPrompt(array $messages): array
    {
        $systemParts = [];
        $chatMessages = [];

        foreach ($messages as $message) {
            if (($message['role'] ?? null) === 'system') {
                $systemParts[] = $message['content'];
            } else {
                $chatMessages[] = $message;
            }
        }

        return [
            $chatMessages,
            $systemParts !== [] ? implode("\n\n", $systemParts) : null,
        ];
    }

    /**
     * Moves the constraint keywords Anthropic's structured output rejects into
     * the description and closes objects, after the AI SDK's Anthropic provider.
     */
    private static function sanitizeSchema(array $schema): array
    {
        $constraints = [];

        foreach (self::DESCRIPTION_CONSTRAINT_KEYS as $key) {
            if (isset($schema[$key]) && $schema[$key] !== false) {
                $value = is_string($schema[$key]) ? $schema[$key] : json_encode($schema[$key]);
                $constraints[] = strtolower(preg_replace('#[A-Z]#', ' $0', $key)) . ': ' . $value;
                unset($schema[$key]);
            }
        }

        if (isset($schema['format']) && !in_array($schema['format'], self::SUPPORTED_STRING_FORMATS, true)) {
            $constraints[] = 'format: ' . $schema['format'];
            unset($schema['format']);
        }

        if ($constraints !== []) {
            $text = implode('; ', $constraints) . '.';
            $schema['description'] = isset($schema['description']) ? $schema['description'] . "\n" . $text : $text;
        }

        if (($schema['type'] ?? null) === 'object' || isset($schema['properties'])) {
            $schema['additionalProperties'] = false;
        }

        if (isset($schema['oneOf'])) {
            $schema['anyOf'] ??= $schema['oneOf'];
            unset($schema['oneOf']);
        }

        foreach (['properties', '$defs', 'definitions', 'anyOf', 'allOf'] as $key) {
            if (isset($schema[$key]) && is_array($schema[$key])) {
                $schema[$key] = array_map(fn ($definition) => is_array($definition) ? self::sanitizeSchema($definition) : $definition, $schema[$key]);
            }
        }

        if (isset($schema['items']) && is_array($schema['items'])) {
            $schema['items'] = self::sanitizeSchema($schema['items']);
        }

        return $schema;
    }

    private function client(): AnthropicClient
    {
        return $this->client ?? new AnthropicClient(
            apiKey: $this->apiKey(),
            baseUrl: $this->baseUrl(),
            requestOptions: RequestOptions::with(transporter: $this->config->httpClient()),
        );
    }

    private function model(): string
    {
        return $this->config->model ?? $this->providerName()->defaultModel();
    }

    /**
     * @throws ProviderException Always; this is the single exit for provider failures.
     */
    private function fail(
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
     * Collapses the SDK's message to one line and appends the cause, which a
     * connection failure carries only in `previous` – its own message is the
     * bare class banner.
     */
    private function reasonOf(APIException $e): string
    {
        $reason = $e->getMessage();
        $cause = $e->getPrevious()?->getMessage();

        if ($cause !== null && $cause !== '') {
            $reason = rtrim($reason) . ': ' . $cause;
        }

        return trim((string)preg_replace('/\s+/', ' ', $reason));
    }

    /**
     * @param array<int, mixed> $blocks
     */
    private function firstTextBlock(array $blocks): string|null
    {
        foreach ($blocks as $block) {
            if ($block instanceof TextBlock) {
                return $block->text;
            }
        }

        return null;
    }

    private function baseUrl(): string
    {
        return $this->config->baseUrl ?? self::DEFAULT_BASE_URL;
    }

    /**
     * @throws AuthException When the provider has no API key configured
     */
    private function apiKey(): string
    {
        if ($this->config->apiKey === null) {
            throw new AuthException(
                message: 'Missing API key in "johannschopplich.copilot.providers.' . $this->providerName()->value . '.apiKey"'
            );
        }

        return $this->config->apiKey;
    }

    private function providerName(): ProviderName
    {
        return ProviderName::Anthropic;
    }
}
