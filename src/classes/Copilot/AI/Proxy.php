<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI;

use Closure;
use Kirby\Cms\App;
use Kirby\Cms\Response;
use Kirby\Exception\InvalidArgumentException;

/**
 * Server-side pass-through that forwards Panel AI requests to the configured
 * provider, guarding the API key and the allowed upstream hosts.
 *
 * @internal
 */
final class Proxy
{
    public function __construct(
        private readonly App $kirby,
        private readonly ProxyTransport $transport,
    ) {
    }

    /**
     * Validates and forwards the current request to the upstream provider.
     *
     * Returns a 502 JSON response when the transport fails before any output
     * reached the client, `null` otherwise (the transport has already
     * streamed the response).
     *
     * @throws InvalidArgumentException
     */
    public function handle(): Response|null
    {
        $kirby = $this->kirby;

        // Ensure PHP doesn't timeout during long AI generations
        @set_time_limit(0);

        $providerParam = $kirby->request()->query()->get('provider');
        $provider = match ($providerParam) {
            'openai', 'google', 'anthropic', 'mistral' => $providerParam,
            default => throw new InvalidArgumentException('Invalid provider: ' . $providerParam),
        };

        $config = $kirby->option('johannschopplich.copilot', []);
        $apiKey = $config['providers'][$provider]['apiKey'] ?? null;

        if ($apiKey instanceof Closure) {
            $apiKey = $apiKey($kirby);
        }

        if (!$apiKey) {
            throw new InvalidArgumentException('Missing API key for provider: ' . $provider);
        }

        $targetUrl = $kirby->request()->header('X-Proxy-Target');

        if (!$targetUrl) {
            throw new InvalidArgumentException('Missing X-Proxy-Target header');
        }

        // Restrict proxy target to known AI SDK default hosts plus the
        // host of any configured `providers.<provider>.baseUrl`. Prevents
        // SSRF and API-key exfiltration via attacker-supplied targets.
        $parsedTarget = parse_url($targetUrl);
        $targetScheme = strtolower($parsedTarget['scheme'] ?? '');
        $targetHost = strtolower($parsedTarget['host'] ?? '');

        if (!in_array($targetScheme, ['http', 'https'], true) || $targetHost === '') {
            throw new InvalidArgumentException('Invalid proxy target URL');
        }

        $allowedHosts = [
            'api.openai.com',
            'api.anthropic.com',
            'generativelanguage.googleapis.com',
            'api.mistral.ai',
        ];

        $configuredBaseUrl = $config['providers'][$provider]['baseUrl'] ?? null;
        if (is_string($configuredBaseUrl)) {
            $configuredHost = parse_url($configuredBaseUrl, PHP_URL_HOST);
            if (is_string($configuredHost) && $configuredHost !== '') {
                $allowedHosts[] = strtolower($configuredHost);
            }
        }

        if (!in_array($targetHost, $allowedHosts, true)) {
            throw new InvalidArgumentException('Proxy target host not allowed: ' . $targetHost);
        }

        $body = file_get_contents('php://input');

        // Upstream headers that the Vercel AI SDK provider packages actually send
        $allowedUpstreamHeaders = [
            'user-agent',
            'authorization',                              // OpenAI, Mistral (Bearer)
            'x-api-key',                                  // Anthropic
            'x-goog-api-key',                             // Google
            'openai-organization',
            'openai-project',
            'anthropic-version',
            'anthropic-beta',
            'anthropic-dangerous-direct-browser-access',
        ];

        // Restrict marker substitution to the actual header names,
        // so an attacker-injected marker in any other header cannot
        // exfiltrate the real API key to upstream.
        $markerAuthHeaders = ['authorization', 'x-api-key', 'x-goog-api-key'];

        $curlHeaders = [];
        foreach ($kirby->request()->headers() as $name => $value) {
            $nameLower = strtolower($name);
            if (!in_array($nameLower, $allowedUpstreamHeaders, true)) {
                continue;
            }

            if (str_contains($value, '__KIRBY_COPILOT_PROXY__')) {
                if (!in_array($nameLower, $markerAuthHeaders, true)) {
                    continue;
                }
                $value = str_replace('__KIRBY_COPILOT_PROXY__', $apiKey, $value);
            }

            $curlHeaders[] = "{$name}: {$value}";
        }

        // Content-Type isn't prefixed with `HTTP_` in `$_SERVER`, so Kirby's
        // `headers()` excludes it. Forward it to prevent body misinterpretation.
        $contentType = $_SERVER['CONTENT_TYPE'] ?? $_SERVER['HTTP_CONTENT_TYPE'] ?? null;
        if ($contentType) {
            $curlHeaders[] = "Content-Type: {$contentType}";
        } elseif (is_string($body) && preg_match('/^\s*[\[{]/', $body)) {
            $curlHeaders[] = 'Content-Type: application/json';
        }

        $contentTypeSet = false;
        $lastStatus = 0;

        $curlOptions = [
            // Request body + headers
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_HTTPHEADER => $curlHeaders,
            // Forward upstream status + Content-Type so upstream errors
            // (e.g. Gateway 404 JSON) surface to the client correctly.
            CURLOPT_HEADERFUNCTION => function ($ch, $header) use (&$contentTypeSet, &$lastStatus) {
                if (preg_match('/^HTTP\/\S+\s+(\d+)/', $header, $matches)) {
                    $statusCode = (int)$matches[1];
                    // 1xx responses (100 Continue, 103 Early Hints) precede
                    // the final status line; skip them so the real 2xx-5xx wins.
                    if ($statusCode < 200) {
                        return strlen($header);
                    }
                    $lastStatus = $statusCode;
                    if (!headers_sent()) {
                        http_response_code($statusCode);
                    }
                    $contentTypeSet = false;
                    return strlen($header);
                }

                if (!$contentTypeSet && !headers_sent() &&
                    preg_match('/^Content-Type:\s*(.+?)\s*$/i', $header, $matches)) {
                    header('Content-Type: ' . trim($matches[1]));
                    $contentTypeSet = true;
                }

                // Forward Retry-After and similar variants on error responses so
                // the AI SDK retry middleware honors provider backoff.
                if ($lastStatus >= 400 && !headers_sent() &&
                    preg_match('/^(Retry-After(?:-Ms)?):\s*(.+?)\s*$/i', $header, $matches)) {
                    header($matches[1] . ': ' . $matches[2]);
                }

                return strlen($header);
            },
            // Stream response chunk-by-chunk to stdout
            CURLOPT_WRITEFUNCTION => function ($ch, $chunk) {
                echo $chunk;
                flush();
                return strlen($chunk);
            },
            // Timeouts
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_LOW_SPEED_LIMIT => 1,
            // Reasoning-heavy models stall silently before the first
            // token; 4 minutes covers typical first-token latency.
            CURLOPT_LOW_SPEED_TIME => 240,
            // SSL/TLS
            CURLOPT_SSL_VERIFYPEER => true,
            // Transparently decompress gzip/deflate/br responses so
            // WRITEFUNCTION always sees plain bytes.
            CURLOPT_ENCODING => '',
        ];

        // Use bundled CA certificate if system doesn't have one configured
        $systemCaInfo = ini_get('curl.cainfo');
        if (empty($systemCaInfo) || !@is_file($systemCaInfo)) {
            $curlOptions[CURLOPT_CAINFO] = $kirby->root('kirby') . '/cacert.pem';
        }

        $result = $this->transport->stream($targetUrl, $curlOptions);

        if ($result->errorCode !== 0) {
            // Surface transport failures as 502 JSON so the Panel shows
            // an error instead of a silent empty stream.
            error_log("Kirby Copilot proxy cURL error ({$result->errorCode}): " . $result->errorMessage);

            if (!headers_sent()) {
                return Response::json([
                    'error' => [
                        'message' => 'Upstream request failed: ' . $result->errorMessage,
                        'code'    => $result->errorCode,
                    ],
                ], 502);
            }
        }

        return null;
    }
}
