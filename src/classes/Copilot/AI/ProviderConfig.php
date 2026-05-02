<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

/**
 * Resolved per-provider configuration.
 *
 * @internal
 */
final readonly class ProviderConfig
{
    /**
     * @param array<string, mixed> $options Provider-specific pass-through options merged into the request payload
     */
    public function __construct(
        public string|null $apiKey = null,
        public string|null $model = null,
        public string|null $baseUrl = null,
        public array $options = [],
    ) {
    }
}
