<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

use Closure;
use Kirby\Cms\App;
use Kirby\Exception\InvalidArgumentException;

/**
 * Resolves the `johannschopplich.copilot` options into a normalised
 * shape for {@see Client} and the provider classes.
 *
 * @internal
 */
final readonly class Resolver
{
    /**
     * @param array<string, array<string, mixed>> $providers Per-provider config keyed by lowercase provider name
     */
    public function __construct(
        public ProviderName $defaultProvider,
        public array $providers,
    ) {
    }

    public static function fromKirbyOptions(): self
    {
        $kirby = App::instance();
        $config = $kirby->option('johannschopplich.copilot', []);

        if (!isset($config['provider'])) {
            // TODO: Drop K4 compat in v4 – use named arg (message:) once Kirby 5 is the floor
            throw new InvalidArgumentException(
                'Missing required option "johannschopplich.copilot.provider"'
            );
        }

        $providerName = strtolower((string)$config['provider']);
        $defaultProvider = ProviderName::tryFrom($providerName);

        if ($defaultProvider === null) {
            // TODO: Drop K4 compat in v4 – use named arg (message:) once Kirby 5 is the floor
            throw new InvalidArgumentException(
                'Unknown provider "' . $providerName . '" – set "johannschopplich.copilot.provider" to one of: openai, anthropic, google, mistral'
            );
        }

        $providers = array_change_key_case((array)($config['providers'] ?? []), CASE_LOWER);

        return new self(
            defaultProvider: $defaultProvider,
            providers: $providers,
        );
    }

    public function forProvider(ProviderName $name): ProviderConfig
    {
        $config = $this->providers[$name->value] ?? [];

        $apiKey = $config['apiKey'] ?? null;
        if ($apiKey instanceof Closure) {
            $apiKey = $apiKey(App::instance());
        }

        return new ProviderConfig(
            apiKey: is_string($apiKey) && $apiKey !== '' ? $apiKey : null,
            model: isset($config['model']) ? (string)$config['model'] : null,
            baseUrl: isset($config['baseUrl']) ? (string)$config['baseUrl'] : null,
            options: array_diff_key($config, ['apiKey' => true, 'model' => true, 'baseUrl' => true]),
        );
    }
}
