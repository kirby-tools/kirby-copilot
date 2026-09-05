<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

use GuzzleHttp\Client as GuzzleClient;

/**
 * Resolved per-provider configuration.
 *
 * @internal
 */
final readonly class ProviderConfig
{
    public const DEFAULT_TIMEOUT = 120;

    /**
     * @param array<string, mixed> $options Provider-specific pass-through options merged into the request payload
     */
    public function __construct(
        public string|null $apiKey = null,
        public string|null $model = null,
        public string|null $baseUrl = null,
        public array $options = [],
        public int $timeout = self::DEFAULT_TIMEOUT,
    ) {
    }

    /**
     * Builds the HTTP client both provider SDKs talk through. Left to
     * discovery, both SDKs take an unconfigured client, and a stalled socket
     * then blocks forever.
     */
    public function httpClient(): GuzzleClient
    {
        return new GuzzleClient([
            'timeout' => $this->timeout,
            // Fixed, so an unreachable host fails as one and not as a slow one.
            'connect_timeout' => 10,
        ]);
    }
}
