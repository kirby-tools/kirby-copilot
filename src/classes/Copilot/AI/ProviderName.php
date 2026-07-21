<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

use Closure;
use Kirby\Cms\App;

/**
 * Registry for the AI providers Copilot supports out of the box: the
 * provider name set, per-provider defaults, and API key resolution.
 *
 * @internal
 */
enum ProviderName: string
{
    case OpenAI = 'openai';
    case Google = 'google';
    case Anthropic = 'anthropic';
    case Mistral = 'mistral';

    public function defaultModel(): string
    {
        return match ($this) {
            self::OpenAI => 'gpt-5.6-terra',
            self::Anthropic => 'claude-sonnet-5',
            self::Google => 'gemini-3.1-pro-preview',
            self::Mistral => 'mistral-medium-latest',
        };
    }

    public function defaultCompletionModel(): string
    {
        return match ($this) {
            self::OpenAI => 'gpt-5.4-nano',
            self::Anthropic => 'claude-haiku-4-5',
            self::Google => 'gemini-3.5-flash',
            self::Mistral => 'mistral-small-latest',
        };
    }

    /**
     * Host of the provider's AI SDK default base URL, used for the proxy
     * target allow-list.
     */
    public function defaultHost(): string
    {
        return match ($this) {
            self::OpenAI => 'api.openai.com',
            self::Anthropic => 'api.anthropic.com',
            self::Google => 'generativelanguage.googleapis.com',
            self::Mistral => 'api.mistral.ai',
        };
    }

    /**
     * Case-lowered providers map from the plugin config, so
     * `providers.OpenAI` and `providers.openai` resolve identically.
     */
    public static function providers(App $kirby): array
    {
        $config = $kirby->option('johannschopplich.copilot', []);

        return array_change_key_case($config['providers'] ?? [], CASE_LOWER);
    }

    /**
     * Resolves a configured `apiKey` value, which may be a Closure
     * receiving the app instance.
     */
    public static function resolveApiKey(mixed $apiKey, App $kirby): mixed
    {
        return $apiKey instanceof Closure ? $apiKey($kirby) : $apiKey;
    }

    public function apiKey(App $kirby): string|null
    {
        $apiKey = self::resolveApiKey(
            self::providers($kirby)[$this->value]['apiKey'] ?? null,
            $kirby,
        );

        return is_string($apiKey) && $apiKey !== '' ? $apiKey : null;
    }
}
