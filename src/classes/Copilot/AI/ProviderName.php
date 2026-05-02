<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

/**
 * Identifier for the AI providers Copilot supports out of the box.
 *
 * @internal
 */
enum ProviderName: string
{
    case OpenAI = 'openai';
    case Anthropic = 'anthropic';
    case Google = 'google';
    case Mistral = 'mistral';
}
