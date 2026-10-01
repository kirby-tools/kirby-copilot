<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use JsonException;
use Kirby\Cache\Cache;

/**
 * The resolver of client ids: the HTTPS URL of a metadata document (OAuth
 * Client ID Metadata Document), or a dynamic registration the id itself
 * carries.
 */
final class ClientResolver
{
    private const MIN_CACHE_SECONDS = 5 * 60;
    private const MAX_CACHE_SECONDS = 24 * 3600;
    private const DEFAULT_CACHE_SECONDS = 3600;
    private const MAX_NAME_LENGTH = 100;
    private const REGISTERED_PREFIX = 'dcr.';
    private const MAX_REGISTERED_ID_LENGTH = 2048;

    public function __construct(
        private readonly ClientMetadataFetcher $fetcher,
        private readonly Cache $cache
    ) {
    }

    /**
     * Returns a dynamically registered client (RFC 7591), whose id is the
     * registration. Nothing is stored, and anyone may register, so a
     * signature would prove nothing. Returns `null` for a registration that
     * isn't UTF-8 or is too large for an id.
     *
     * @param list<string> $redirectUris
     */
    public static function registeredClientFor(string|null $name, array $redirectUris): Client|null
    {
        $name = trim($name ?? '');

        try {
            $json = json_encode([
                'name' => mb_substr($name !== '' ? $name : RedirectUri::label($redirectUris[0]), 0, self::MAX_NAME_LENGTH),
                'redirect_uris' => $redirectUris
            ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
        } catch (JsonException) {
            return null;
        }

        return self::registeredClient(self::REGISTERED_PREFIX . Token::base64Url($json));
    }

    public function resolve(string $clientId): Client|null
    {
        if (str_starts_with($clientId, self::REGISTERED_PREFIX)) {
            return self::registeredClient($clientId);
        }

        // A file on the site's own host proves no client, since whoever may
        // upload files can place one there.
        if (!self::isMetadataDocumentUrl($clientId) || self::host($clientId) === self::host(Agents::issuer())) {
            return null;
        }

        $key = 'client.' . hash('sha256', $clientId);
        $document = $this->cache->get($key);

        if (is_array($document)) {
            return self::toClient($clientId, $document);
        }

        $response = $this->fetcher->fetch($clientId);
        $document = $response !== null ? json_decode($response['body'], true) : null;
        $client = is_array($document) ? self::toClient($clientId, $document) : null;

        // Failures aren't cached, so a client can fix its document right away.
        if ($client === null) {
            return null;
        }

        $seconds = max(self::MIN_CACHE_SECONDS, min(self::MAX_CACHE_SECONDS, $response['maxAge'] ?? self::DEFAULT_CACHE_SECONDS));
        $this->cache->set($key, $document, intdiv($seconds, 60));

        return $client;
    }

    private static function isMetadataDocumentUrl(string $clientId): bool
    {
        $parts = parse_url($clientId);

        return is_array($parts) &&
            ($parts['scheme'] ?? null) === 'https' &&
            ($parts['host'] ?? '') !== '' &&
            trim($parts['path'] ?? '', '/') !== '' &&
            !isset($parts['user']) &&
            !isset($parts['fragment']);
    }

    /**
     * Returns the host of a URL as DNS compares it: in any case, with or
     * without the trailing dot.
     */
    private static function host(string $url): string
    {
        return rtrim(strtolower(parse_url($url, PHP_URL_HOST) ?? ''), '.');
    }

    /**
     * Builds a public client whatever authentication method the document
     * declares, since ChatGPT's declares `private_key_jwt` and PKCE protects
     * every code exchange.
     */
    private static function toClient(string $clientId, array $document): Client|null
    {
        if (($document['client_id'] ?? null) !== $clientId || !is_array($document['redirect_uris'] ?? null)) {
            return null;
        }

        $redirectUris = array_values(array_filter(
            $document['redirect_uris'],
            fn ($uri) => is_string($uri) && RedirectUri::isAllowed($uri)
        ));

        if ($redirectUris === []) {
            return null;
        }

        $host = parse_url($clientId, PHP_URL_HOST);
        $name = is_string($document['client_name'] ?? null) ? trim($document['client_name']) : '';

        return new Client(
            id: $clientId,
            name: $name !== '' ? mb_substr($name, 0, self::MAX_NAME_LENGTH) : $host,
            host: $host,
            isVerified: true,
            redirectUris: $redirectUris
        );
    }

    /**
     * Decodes a dynamically registered client and checks its redirect URIs
     * as registration does, since anyone can write such an id by hand.
     */
    private static function registeredClient(string $clientId): Client|null
    {
        $json = strlen($clientId) <= self::MAX_REGISTERED_ID_LENGTH
            ? Token::fromBase64Url(substr($clientId, strlen(self::REGISTERED_PREFIX)))
            : null;
        $data = is_string($json) ? json_decode($json, true) : null;
        $name = $data['name'] ?? null;
        $redirectUris = $data['redirect_uris'] ?? null;

        if (
            !is_string($name) || $name === '' || mb_strlen($name) > self::MAX_NAME_LENGTH ||
            !is_array($redirectUris) || $redirectUris === [] || !array_is_list($redirectUris) ||
            array_filter($redirectUris, fn ($uri) => !is_string($uri) || !RedirectUri::isAllowed($uri)) !== []
        ) {
            return null;
        }

        return new Client(
            id: $clientId,
            name: $name,
            host: null,
            isVerified: false,
            redirectUris: $redirectUris
        );
    }
}
