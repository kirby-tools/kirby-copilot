<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI\Providers;

use JohannSchopplich\Copilot\AI\ProviderName;

/**
 * Google Gemini provider via the OpenAI-compatible endpoint.
 *
 * @see https://ai.google.dev/gemini-api/docs/openai
 *
 * @internal
 */
final class GeminiProvider extends OpenAIProvider
{
    public const DEFAULT_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/openai';
    public const DEFAULT_MODEL = 'gemini-3.1-pro-preview';

    protected function providerName(): ProviderName
    {
        return ProviderName::Google;
    }
}
