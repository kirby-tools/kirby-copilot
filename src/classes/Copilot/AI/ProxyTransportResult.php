<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

/**
 * @internal
 */
final readonly class ProxyTransportResult
{
    public function __construct(
        public int $errorCode,
        public string $errorMessage,
    ) {
    }
}
