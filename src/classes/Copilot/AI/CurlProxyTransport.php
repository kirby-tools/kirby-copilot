<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

/**
 * Streams the upstream response to the client via cURL.
 *
 * @internal
 */
final class CurlProxyTransport implements ProxyTransport
{
    public function stream(string $targetUrl, array $curlOptions): ProxyTransportResult
    {
        // Disable output buffering for real-time streaming
        while (ob_get_level()) {
            ob_end_clean();
        }

        // Pre-emit infra/transport hints that are deterministic and needed
        // by the web server to disable buffering before the first byte.
        // Status and Content-Type are emitted later from the upstream
        // response so error JSON (e.g. Gateway 404) surfaces correctly.
        // `no-transform` prevents CDNs (e.g. Cloudflare) from auto-
        // compressing text/event-stream responses, which buffers chunks.
        header('Cache-Control: no-store, no-transform');
        // Disable nginx proxy buffering
        header('X-Accel-Buffering: no');

        $ch = curl_init($targetUrl);
        curl_setopt_array($ch, $curlOptions);
        curl_exec($ch);

        return new ProxyTransportResult(curl_errno($ch), curl_error($ch));
    }
}
