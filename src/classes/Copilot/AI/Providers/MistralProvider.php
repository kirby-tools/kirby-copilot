<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI\Providers;

use JohannSchopplich\Copilot\AI\ProviderName;

/**
 * Mistral provider via the OpenAI-compatible API.
 *
 * @see https://docs.mistral.ai/api
 *
 * @internal
 */
final class MistralProvider extends OpenAIProvider
{
    public const DEFAULT_BASE_URL = 'https://api.mistral.ai/v1';
    public const DEFAULT_MODEL = 'mistral-small-latest';

    protected function providerName(): ProviderName
    {
        return ProviderName::Mistral;
    }
}
