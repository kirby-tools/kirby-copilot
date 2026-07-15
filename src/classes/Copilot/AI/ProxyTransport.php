<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

/**
 * Streaming transport leg of the AI proxy: carries a fully shaped request
 * upstream and emits the response to the client as it arrives.
 *
 * @internal
 */
interface ProxyTransport
{
    /**
     * @param array<int, mixed> $curlOptions Fully assembled cURL options, including the streaming callbacks
     */
    public function stream(string $targetUrl, array $curlOptions): ProxyTransportResult;
}
