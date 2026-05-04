<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

use JohannSchopplich\Copilot\AI\Exception\ProviderException;
use JohannSchopplich\Copilot\AI\Providers\AnthropicProvider;
use JohannSchopplich\Copilot\AI\Providers\GeminiProvider;
use JohannSchopplich\Copilot\AI\Providers\MistralProvider;
use JohannSchopplich\Copilot\AI\Providers\OpenAIProvider;
use JohannSchopplich\Copilot\AI\Providers\Provider;
use Kirby\Exception\AuthException;

/**
 * Public PHP entry point for AI generation in Copilot.
 *
 * Resolves the configured provider from `johannschopplich.copilot`
 * options and dispatches structured-output requests to it.
 */
final class Client
{
    private static Client|null $instance = null;
    private readonly Resolver $resolver;

    public function __construct(
        Resolver|null $resolver = null,
        private readonly Provider|null $providerOverride = null,
    ) {
        $this->resolver = $resolver ?? Resolver::fromKirbyOptions();
    }

    public static function instance(): self
    {
        return self::$instance ??= new self();
    }

    public static function reset(): void
    {
        self::$instance = null;
    }

    /**
     * Generate a JSON object that conforms to the given JSON Schema.
     *
     * @param list<array{role: string, content: string}> $messages
     * @param array<string, mixed> $schema
     * @return array<string, mixed>
     *
     * @throws ProviderException
     */
    public function generateObject(array $messages, array $schema): array
    {
        return $this->provider()->generateObject($messages, $schema);
    }

    /**
     * Generate plain text.
     *
     * @param list<array{role: string, content: string}> $messages
     *
     * @throws ProviderException
     */
    public function generateText(array $messages): string
    {
        return $this->provider()->generateText($messages);
    }

    /**
     * Assert the active provider has an API key configured.
     *
     * @throws AuthException
     */
    public function requireApiKey(): void
    {
        if ($this->providerOverride !== null) {
            return;
        }

        $name = $this->resolver->defaultProvider;
        $config = $this->resolver->forProvider($name);

        if ($config->apiKey === null) {
            // TODO: Drop K4 compat in v4 – use named arg (message:) once Kirby 5 is the floor
            throw new AuthException(
                'Missing API key in "johannschopplich.copilot.providers.' . $name->value . '.apiKey"'
            );
        }
    }

    private function provider(): Provider
    {
        if ($this->providerOverride !== null) {
            return $this->providerOverride;
        }

        $name = $this->resolver->defaultProvider;
        $config = $this->resolver->forProvider($name);

        return match ($name) {
            ProviderName::OpenAI => new OpenAIProvider($config),
            ProviderName::Anthropic => new AnthropicProvider($config),
            ProviderName::Google => new GeminiProvider($config),
            ProviderName::Mistral => new MistralProvider($config),
        };
    }
}
