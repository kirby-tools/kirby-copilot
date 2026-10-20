<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

/**
 * @internal
 */
final class CurlProxyTransport implements ProxyTransport
{
    public function stream(string $targetUrl, array $curlOptions): ProxyTransportResult
    {
        // Disable output buffering for real-time streaming.
        while (ob_get_level()) {
            ob_end_clean();
        }

        // Sent before the first byte, when the web server decides whether to
        // buffer. `no-transform` keeps CDNs such as Cloudflare from compressing
        // the event stream, which buffers chunks.
        header('Cache-Control: no-store, no-transform');
        // Disable nginx proxy buffering.
        header('X-Accel-Buffering: no');

        $ch = curl_init($targetUrl);
        curl_setopt_array($ch, $curlOptions);
        curl_exec($ch);

        return new ProxyTransportResult(curl_errno($ch), curl_error($ch));
    }
}
