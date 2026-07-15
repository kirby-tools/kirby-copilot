<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

/**
 * Outcome of a streamed proxy transport call.
 *
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
