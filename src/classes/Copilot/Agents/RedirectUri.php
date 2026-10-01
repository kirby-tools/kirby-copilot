<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

/**
 * The rules for OAuth client redirect URIs: HTTPS, loopback HTTP, and the
 * private-use schemes of native apps (RFC 8252), like `cursor://`.
 */
final class RedirectUri
{
    private const LOOPBACK_HOSTS = ['localhost', '127.0.0.1', '[::1]'];

    private const REFUSED_SCHEMES = ['javascript', 'data', 'file', 'vbscript', 'blob', 'about', 'ws', 'wss'];

    public static function isAllowed(string $uri): bool
    {
        // Browsers read a backslash as a slash and drop tabs and line breaks,
        // so `parse_url()` would see another host than the browser.
        if (preg_match('/[\\\\\x00-\x20\x7f]/', $uri) === 1) {
            return false;
        }

        $parts = parse_url($uri);

        if ($parts === false || isset($parts['fragment']) || isset($parts['user']) || isset($parts['pass']) || !isset($parts['scheme'])) {
            return false;
        }

        $scheme = strtolower($parts['scheme']);

        return match ($scheme) {
            'https' => ($parts['host'] ?? '') !== '',
            'http' => self::isLoopback($uri),
            default => preg_match('/^[a-z][a-z0-9+.-]*$/', $scheme) === 1 && !in_array($scheme, self::REFUSED_SCHEMES, true)
        };
    }

    /**
     * Tells where an allowed redirect URI leads: to a website, or to an app
     * on the user's device through a loopback address or an app scheme.
     *
     * @return 'web'|'local'|'app'
     */
    public static function kind(string $uri): string
    {
        return match (true) {
            self::isLoopback($uri) => 'local',
            strtolower((string)parse_url($uri, PHP_URL_SCHEME)) === 'https' => 'web',
            default => 'app'
        };
    }

    /**
     * Names where an allowed redirect URI leads: its host, or its app
     * scheme.
     */
    public static function label(string $uri): string
    {
        $parts = parse_url($uri);

        return trim($parts['host'] ?? '', '[]') ?: $parts['scheme'];
    }

    /**
     * Compares a requested redirect URI with a registered one. Native apps
     * listen on a random loopback port, so the port of a loopback URI
     * doesn't count (RFC 8252).
     */
    public static function matches(string $registered, string $requested): bool
    {
        if ($registered === $requested) {
            return true;
        }

        if (!self::isLoopback($registered) || !self::isLoopback($requested)) {
            return false;
        }

        $registeredParts = parse_url($registered);
        $requestedParts = parse_url($requested);
        unset($registeredParts['port'], $requestedParts['port']);

        return $registeredParts === $requestedParts;
    }

    /**
     * Appends query parameters by hand, since Kirby's `Uri` drops a
     * private-use scheme like `com.raycast:/oauth`.
     */
    public static function withParameters(string $uri, array $parameters): string
    {
        $separator = str_contains($uri, '?') ? '&' : '?';

        return $uri . $separator . http_build_query($parameters, '', '&', PHP_QUERY_RFC3986);
    }

    private static function isLoopback(string $uri): bool
    {
        $parts = parse_url($uri);

        return is_array($parts) &&
            strtolower($parts['scheme'] ?? '') === 'http' &&
            in_array(strtolower($parts['host'] ?? ''), self::LOOPBACK_HOSTS, true);
    }
}
