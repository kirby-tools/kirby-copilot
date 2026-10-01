<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Closure;
use Kirby\Cms\App;

/**
 * Fetches an HTTPS URL outside the server's own network: the host must
 * resolve to public addresses only, the connection is pinned to the checked
 * address, and redirects aren't followed.
 *
 * @internal
 */
final class PublicUrlFetcher implements ClientMetadataFetcher
{
    private const TIMEOUT = 5;

    /** IPv4 ranges that `FILTER_FLAG_NO_PRIV_RANGE` and `FILTER_FLAG_NO_RES_RANGE` let through. */
    private const NON_PUBLIC_IPV4_RANGES = [
        '100.64.0.0/10', // Shared address space, used inside cloud networks.
        '192.0.0.0/24', // IETF protocol assignments.
        '198.18.0.0/15' // Benchmarking.
    ];

    /**
     * @param (Closure(string): list<string>)|null $resolve Returns the addresses of a host name; DNS by default
     * @param int $maxBytes Fails the fetch of a larger response body
     */
    public function __construct(
        private readonly Closure|null $resolve = null,
        private readonly int $maxBytes = 10 * 1024,
        private readonly string $accept = 'application/json'
    ) {
    }

    public function fetch(string $url): array|null
    {
        $host = parse_url($url, PHP_URL_HOST);
        $port = parse_url($url, PHP_URL_PORT) ?? 443;

        if (!is_string($host)) {
            return null;
        }

        $ip = $this->resolvePublicIp(trim($host, '[]'));

        if ($ip === null) {
            return null;
        }

        $body = '';
        $headers = [];
        $handle = curl_init($url);

        curl_setopt_array($handle, [
            CURLOPT_RESOLVE => ["{$host}:{$port}:" . (str_contains($ip, ':') ? "[{$ip}]" : $ip)],
            // A proxy from the environment would connect past the checked address.
            CURLOPT_PROXY => '',
            CURLOPT_PROTOCOLS => CURLPROTO_HTTPS,
            CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_CONNECTTIMEOUT => self::TIMEOUT,
            CURLOPT_TIMEOUT => self::TIMEOUT,
            CURLOPT_HTTPHEADER => ["Accept: {$this->accept}"],
            CURLOPT_HEADERFUNCTION => function ($handle, string $header) use (&$headers) {
                $parts = explode(':', $header, 2);

                if (count($parts) === 2) {
                    $headers[strtolower(trim($parts[0]))] = trim($parts[1]);
                }

                return strlen($header);
            },
            // Returning less than the chunk length aborts the transfer.
            CURLOPT_WRITEFUNCTION => function ($handle, string $chunk) use (&$body) {
                $body .= $chunk;

                return strlen($body) > $this->maxBytes ? 0 : strlen($chunk);
            }
        ]);

        // PHP builds without a default CA bundle fail TLS verification unless `curl.cainfo` names one.
        $systemCaInfo = ini_get('curl.cainfo');

        if ($systemCaInfo === false || $systemCaInfo === '' || !@is_file($systemCaInfo)) {
            curl_setopt($handle, CURLOPT_CAINFO, App::instance()->root('kirby') . '/cacert.pem');
        }

        $isSuccess = curl_exec($handle) !== false && curl_getinfo($handle, CURLINFO_RESPONSE_CODE) === 200;

        if (!$isSuccess) {
            return null;
        }

        $maxAge = preg_match('/max-age=(\d+)/', $headers['cache-control'] ?? '', $matches) === 1
            ? (int)$matches[1]
            : null;

        return ['body' => $body, 'maxAge' => $maxAge];
    }

    /**
     * Returns the first address of the host when all of them are public.
     */
    public function resolvePublicIp(string $host): string|null
    {
        $ips = filter_var($host, FILTER_VALIDATE_IP) !== false
            ? [$host]
            : ($this->resolve ?? self::lookUp(...))($host);

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

        if (strlen($packed) === 16) {
            $ipv4 = self::embeddedIpv4($packed);

            if ($ipv4 !== null) {
                return self::isPublicIp(inet_ntop($ipv4));
            }

            // NAT64 for local use (64:ff9b:1::/48) and site-local addresses (fec0::/10) reach private networks.
            if (str_starts_with($packed, "\x00\x64\xff\x9b\x00\x01") || (ord($packed[0]) === 0xfe && (ord($packed[1]) & 0xc0) === 0xc0)) {
                return false;
            }
        }

        if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false) {
            return false;
        }

        if (strlen($packed) === 4) {
            foreach (self::NON_PUBLIC_IPV4_RANGES as $range) {
                if (self::isInIpv4Range($packed, $range)) {
                    return false;
                }
            }
        }

        return true;
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

    private static function isInIpv4Range(string $packed, string $range): bool
    {
        [$network, $bits] = explode('/', $range);
        $mask = -1 << (32 - (int)$bits);

        return (unpack('N', $packed)[1] & $mask) === (ip2long($network) & $mask);
    }
}
