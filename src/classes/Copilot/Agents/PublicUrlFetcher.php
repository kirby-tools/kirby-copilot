<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Closure;
use Kirby\Cms\App;

/**
 * Fetches an HTTPS URL outside the server's own network: the host must
 * resolve to public addresses only, and the connection is pinned to the
 * checked address. A redirect passes the same checks, and none is followed
 * by default, since a client metadata document must not be fetched through
 * one (OAuth Client ID Metadata Document).
 *
 * @internal
 */
final class PublicUrlFetcher implements ClientMetadataFetcher
{
    private const CONNECT_TIMEOUT = 5;
    private const REDIRECT_STATUSES = [301, 302, 303, 307, 308];

    /**
     * ASCII labels, the last starting with a letter: curl reads `2130706433`,
     * `0x7f000001`, or `127.1` as an IPv4 address and decodes percent-encoded
     * and international names before it looks up the pinned address, so any
     * other host would miss the pin.
     */
    private const HOST_NAME_PATTERN = '/^(?:[a-z0-9_-]+\.)*[a-z][a-z0-9_-]*\.?$/i';

    /** Special-use ranges that `FILTER_FLAG_GLOBAL_RANGE` lets through. */
    private const NON_PUBLIC_RANGES = [
        '::/96', // Deprecated IPv4-compatible addresses, which some systems route to IPv4.
        '::ffff:0:0:0/96', // IPv4-translated addresses.
        '64:ff9b:1::/48', // NAT64 for local use, which reaches private networks.
        '3fff::/20', // Documentation.
        '5f00::/16', // Segment routing.
        'fec0::/10' // Site-local addresses, which reach private networks.
    ];

    /**
     * @param (Closure(string): list<string>)|null $resolve Returns the addresses of a host name; DNS by default
     * @param int $maxBytes Fails the fetch of a larger response body
     * @param int $timeout Seconds for the transfers, redirects included
     */
    public function __construct(
        private readonly Closure|null $resolve = null,
        private readonly int $maxBytes = 10 * 1024,
        private readonly string $accept = 'application/json',
        private readonly int $timeout = 5,
        private readonly int $maxRedirects = 0
    ) {
    }

    public function fetch(string $url): array|null
    {
        $stream = fopen('php://temp', 'w+');

        try {
            $headers = $this->transfer($url, $stream);

            if (is_string($headers)) {
                return null;
            }

            $maxAge = preg_match('/max-age=(\d+)/', $headers['cache-control'] ?? '', $matches) === 1
                ? (int)$matches[1]
                : null;

            return ['body' => stream_get_contents($stream, offset: 0), 'maxAge' => $maxAge];
        } finally {
            fclose($stream);
        }
    }

    /**
     * Streams the response body into a file. Returns why the fetch failed,
     * or `null` once it succeeded; a failed fetch may leave a partial or an
     * error body in the file.
     */
    public function download(string $url, string $path): string|null
    {
        $stream = fopen($path, 'w+');

        try {
            $headers = $this->transfer($url, $stream);

            return is_string($headers) ? $headers : null;
        } finally {
            fclose($stream);
        }
    }

    /**
     * Returns the first address of the host when all of them are public.
     */
    public function resolvePublicIp(string $host): string|null
    {
        if (filter_var($host, FILTER_VALIDATE_IP) !== false) {
            $ips = [$host];
        } elseif (preg_match(self::HOST_NAME_PATTERN, $host) === 1) {
            $ips = ($this->resolve ?? self::lookUp(...))($host);
        } else {
            return null;
        }

        if ($ips === []) {
            return null;
        }

        foreach ($ips as $ip) {
            if (!is_string($ip) || !self::isPublicIp($ip)) {
                return null;
            }
        }

        return $ips[0];
    }

    /**
     * Writes the body of the final response into the stream and returns its
     * headers, or why the fetch failed when a hop fails a check or the
     * response after at most `$maxRedirects` redirects isn't a 200.
     *
     * @param resource $stream
     * @return array<string, string>|string
     */
    private function transfer(string $url, $stream): array|string
    {
        $deadline = microtime(true) + $this->timeout;

        for ($redirects = 0; ; $redirects++) {
            ftruncate($stream, 0);
            rewind($stream);
            $response = $this->request($url, $stream, $deadline);

            if (is_string($response)) {
                return $response;
            }

            if ($response['status'] === 200) {
                return $response['headers'];
            }

            // `CURLOPT_PROTOCOLS` refuses a redirect to anything but HTTPS.
            if (!in_array($response['status'], self::REDIRECT_STATUSES, true) || $response['location'] === null || $redirects >= $this->maxRedirects) {
                return "it answered with HTTP {$response['status']}";
            }

            $url = $response['location'];
        }
    }

    /**
     * @param resource $stream
     * @return array{status: int, headers: array<string, string>, location: string|null}|string
     */
    private function request(string $url, $stream, float $deadline): array|string
    {
        $host = parse_url($url, PHP_URL_HOST);
        $port = parse_url($url, PHP_URL_PORT) ?? 443;
        $timeoutMs = (int)(($deadline - microtime(true)) * 1000);

        if ($timeoutMs <= 0) {
            return 'the connection failed';
        }

        $ip = is_string($host) ? $this->resolvePublicIp(trim($host, '[]')) : null;

        if ($ip === null) {
            return 'the host has no public address';
        }

        $headers = [];
        $bytes = 0;
        $handle = curl_init($url);

        curl_setopt_array($handle, [
            CURLOPT_RESOLVE => ["{$host}:{$port}:" . (str_contains($ip, ':') ? "[{$ip}]" : $ip)],
            // A proxy from the environment would connect past the checked address.
            CURLOPT_PROXY => '',
            CURLOPT_PROTOCOLS => CURLPROTO_HTTPS,
            CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_CONNECTTIMEOUT => self::CONNECT_TIMEOUT,
            CURLOPT_TIMEOUT_MS => $timeoutMs,
            CURLOPT_HTTPHEADER => ["Accept: {$this->accept}"],
            // Some hosts, like Wikimedia's, refuse a request without one.
            CURLOPT_USERAGENT => 'Kirby Copilot (+' . App::instance()->site()->url() . ')',
            CURLOPT_HEADERFUNCTION => function ($handle, string $header) use (&$headers) {
                $parts = explode(':', $header, 2);

                if (count($parts) === 2) {
                    $headers[strtolower(trim($parts[0]))] = trim($parts[1]);
                }

                return strlen($header);
            },
            // Returning less than the chunk length aborts the transfer.
            CURLOPT_WRITEFUNCTION => function ($handle, string $chunk) use ($stream, &$bytes) {
                $bytes += strlen($chunk);

                return $bytes > $this->maxBytes ? 0 : (int)fwrite($stream, $chunk);
            }
        ]);

        // PHP builds without a default CA bundle fail TLS verification unless `curl.cainfo` names one.
        $systemCaInfo = ini_get('curl.cainfo');

        if ($systemCaInfo === false || $systemCaInfo === '' || !@is_file($systemCaInfo)) {
            curl_setopt($handle, CURLOPT_CAINFO, App::instance()->root('kirby') . '/cacert.pem');
        }

        if (curl_exec($handle) === false) {
            return $bytes > $this->maxBytes ? 'the file is larger than the limit' : 'the connection failed';
        }

        // The `Location` header, resolved against the URL as a client following it would.
        $location = curl_getinfo($handle, CURLINFO_REDIRECT_URL);

        return [
            'status' => curl_getinfo($handle, CURLINFO_RESPONSE_CODE),
            'headers' => $headers,
            'location' => is_string($location) && $location !== '' ? $location : null
        ];
    }

    /**
     * @return list<string>
     */
    private static function lookUp(string $host): array
    {
        $ips = [];

        foreach (@dns_get_record($host, DNS_A | DNS_AAAA) ?: [] as $record) {
            $ips[] = $record['ip'] ?? $record['ipv6'] ?? null;
        }

        return array_values(array_filter($ips, 'is_string'));
    }

    private static function isPublicIp(string $ip): bool
    {
        $packed = @inet_pton($ip);

        if ($packed === false) {
            return false;
        }

        $ipv4 = strlen($packed) === 16 ? self::embeddedIpv4($packed) : null;

        if ($ipv4 !== null) {
            return self::isPublicIp(inet_ntop($ipv4));
        }

        foreach (self::NON_PUBLIC_RANGES as $range) {
            if (self::isInRange($packed, $range)) {
                return false;
            }
        }

        return filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_GLOBAL_RANGE) !== false;
    }

    /**
     * Returns the IPv4 address an IPv6 address reaches: IPv4-mapped
     * (::ffff:0:0/96), NAT64 (64:ff9b::/96), or 6to4 (2002::/16).
     */
    private static function embeddedIpv4(string $packed): string|null
    {
        return match (true) {
            str_starts_with($packed, str_repeat("\0", 10) . "\xff\xff"),
            str_starts_with($packed, "\x00\x64\xff\x9b" . str_repeat("\0", 8)) => substr($packed, 12),
            str_starts_with($packed, "\x20\x02") => substr($packed, 2, 4),
            default => null
        };
    }

    private static function isInRange(string $packed, string $range): bool
    {
        [$network, $bits] = explode('/', $range);
        $packedNetwork = inet_pton($network);

        if (strlen($packedNetwork) !== strlen($packed)) {
            return false;
        }

        $prefixBytes = intdiv((int)$bits, 8);
        $mask = (0xff << (8 - (int)$bits % 8)) & 0xff;

        return strncmp($packed, $packedNetwork, $prefixBytes) === 0 &&
            ($mask === 0 || (ord($packed[$prefixBytes]) & $mask) === (ord($packedNetwork[$prefixBytes]) & $mask));
    }
}
