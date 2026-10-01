<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

/**
 * An opaque token of the form `<prefix><user id>.<connection id>.<secret>`.
 * The ids make a lookup a single file read; only a hash of the secret is
 * stored.
 */
final readonly class Token
{
    public const ACCESS = 'kca_';
    public const REFRESH = 'kcr_';
    public const CODE = 'kcc_';

    /** Kirby's generated user ids are alphanumeric; custom ids may add `-` and `_`. */
    private const USER_ID_PATTERN = '[a-zA-Z0-9_-]+';

    /** The leading letter keeps PHP from turning an all-digit id into an integer array key. */
    private const CONNECTION_ID_PATTERN = 'c[a-f0-9]{16}';

    private function __construct(
        public string $value,
        public string $userId,
        public string $connectionId,
        public string $secret
    ) {
    }

    public static function issue(string $prefix, string $userId, string $connectionId): self
    {
        $secret = self::base64Url(random_bytes(32));

        return new self($prefix . $userId . '.' . $connectionId . '.' . $secret, $userId, $connectionId, $secret);
    }

    public static function parse(string $value, string $prefix): self|null
    {
        $pattern = '/^' . preg_quote($prefix, '/') . '(' . self::USER_ID_PATTERN . ')\.(' . self::CONNECTION_ID_PATTERN . ')\.([A-Za-z0-9_-]{43})$/';

        if (preg_match($pattern, $value, $matches) !== 1) {
            return null;
        }

        return new self($value, $matches[1], $matches[2], $matches[3]);
    }

    public static function newConnectionId(): string
    {
        return 'c' . bin2hex(random_bytes(8));
    }

    /**
     * Encodes bytes as unpadded base64url, the alphabet of tokens and of
     * PKCE challenges.
     */
    public static function base64Url(string $bytes): string
    {
        return rtrim(strtr(base64_encode($bytes), '+/', '-_'), '=');
    }

    public static function fromBase64Url(string $value): string|null
    {
        $bytes = base64_decode(strtr($value, '-_', '+/'), true);

        return $bytes !== false ? $bytes : null;
    }

    public function hash(): string
    {
        return hash('sha256', $this->secret);
    }

    public function matches(string $hash): bool
    {
        return hash_equals($hash, $this->hash());
    }
}
