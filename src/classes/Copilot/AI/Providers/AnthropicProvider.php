<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI\Providers;

use Anthropic\Client as AnthropicClient;
use Anthropic\Core\Exceptions\APIException;
use Anthropic\Messages\TextBlock;
use Anthropic\Messages\ToolUseBlock;
use JohannSchopplich\Copilot\AI\Exception\ProviderException;
use JohannSchopplich\Copilot\AI\ProviderConfig;
use JohannSchopplich\Copilot\AI\ProviderName;
use Kirby\Exception\AuthException;
use Throwable;

/**
 * Anthropic provider backed by the official `anthropic-ai/sdk`.
 *
 * Anthropic's wire format differs from OpenAI's (system prompt is a
 * top-level field; structured output is delivered via a forced tool
 * call), so this provider does not extend {@see OpenAIProvider}. Retry
 * is handled by the SDK.
 *
 * @internal
 */
final class AnthropicProvider implements Provider
{
    public const DEFAULT_BASE_URL = 'https://api.anthropic.com';
    public const DEFAULT_MODEL = 'claude-sonnet-4-6';
    public const DEFAULT_MAX_TOKENS = 32000;

    public function __construct(
        private readonly ProviderConfig $config,
        private readonly AnthropicClient|null $client = null,
    ) {
    }

    public function generateObject(array $messages, array $schema): array
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

        $request = [
            'model' => $this->model(),
            'maxTokens' => self::DEFAULT_MAX_TOKENS,
            'messages' => $chatMessages,
            'system' => $systemParts !== [] ? implode("\n\n", $systemParts) : null,
            'tools' => [
                [
                    'name' => 'structured_response',
                    'input_schema' => $schema,
                ],
            ],
            'toolChoice' => ['type' => 'tool', 'name' => 'structured_response'],
            ...$this->config->options,
        ];

        try {
            $message = $this->client()->messages->create(...$request);
        } catch (APIException $e) {
            $this->fail(
                reason: 'request failed: ' . $e->getMessage(),
                httpCode: $e->status,
                previous: $e,
            );
        }

        foreach ($message->content as $block) {
            if ($block instanceof ToolUseBlock) {
                return $block->input;
            }
        }

        $this->fail(
            reason: 'response did not contain a tool_use block',
            responseExcerpt: $this->firstTextBlock($message->content),
            responseId: $message->id,
        );
    }

    private function providerName(): ProviderName
    {
        return ProviderName::Anthropic;
    }

    private function client(): AnthropicClient
    {
        return $this->client ?? new AnthropicClient(
            apiKey: $this->apiKey(),
            baseUrl: $this->baseUrl(),
        );
    }

    private function baseUrl(): string
    {
        return $this->config->baseUrl ?? self::DEFAULT_BASE_URL;
    }

    private function model(): string
    {
        return $this->config->model ?? self::DEFAULT_MODEL;
    }

    /**
     * @throws AuthException
     */
    private function apiKey(): string
    {
        if ($this->config->apiKey === null) {
            throw new AuthException(
                'Missing API key: johannschopplich.copilot.providers.' . $this->providerName()->value . '.apiKey'
            );
        }

        return $this->config->apiKey;
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

    /**
     * @throws ProviderException
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
}
