<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Closure;
use Kirby\Cms\App;
use Kirby\Cms\User;
use Kirby\Filesystem\Dir;

/**
 * Keeps a user's connections in a dotfile in their account folder, so Kirby
 * deletes them together with the user. Tokens are stored as hashes only.
 */
final class ConnectionStore
{
    public const ACCESS_TOKEN_TTL = 3600;
    private const REFRESH_TOKEN_TTL = 30 * 24 * 3600;
    private const CODE_TTL = 60;

    /**
     * How long a replaced refresh token keeps working. Claude Code shares one
     * refresh token across its sessions, which refresh independently, and a
     * client retries with the old token when a token response gets lost.
     */
    public const REFRESH_GRACE_PERIOD = 60;

    /** Least time between the writes that keep "Last active" current, in seconds. */
    private const USED_INTERVAL = 300;

    /** Replaced refresh tokens kept to detect a replay. */
    private const REPLACED_REFRESH_TOKEN_LIMIT = 20;

    private const FILENAME = '.copilot-agents.json';

    /** Replaced in tests to move time forward. */
    public static Closure|null $clock = null;

    private function __construct(
        private readonly User $user
    ) {
    }

    public static function for(User $user): self
    {
        return new self($user);
    }

    /**
     * Returns the store of the user a token names, when that user still
     * exists and may connect agents. The id is looked up, never joined into
     * a path.
     */
    public static function forToken(Token $token): self|null
    {
        $user = App::instance()->users()->find($token->userId);

        return $user !== null && Agents::canConnect($user) ? new self($user) : null;
    }

    /**
     * @return list<Connection>
     */
    public function all(): array
    {
        $connections = [];

        foreach ($this->readRecords() as $id => $record) {
            if ($this->isActive($record)) {
                $connections[] = Connection::fromRecord($id, $this->user->id(), $record);
            }
        }

        return $connections;
    }

    public function find(string $id): Connection|null
    {
        $record = $this->readRecords()[$id] ?? null;

        return $record !== null && $this->isActive($record)
            ? Connection::fromRecord($id, $this->user->id(), $record)
            : null;
    }

    /**
     * Creates a connection that waits for its authorization code to be
     * exchanged, and returns the code.
     *
     * @param list<ConnectionPermission> $permissions
     */
    public function create(
        Client $client,
        string $redirectUri,
        string $resource,
        array $permissions,
        string $codeChallenge
    ): Token {
        $id = Token::newConnectionId();
        $code = Token::issue(Token::CODE, $this->user->id(), $id);
        $now = self::now();

        $this->transaction(function (array &$records) use ($id, $code, $client, $redirectUri, $resource, $permissions, $codeChallenge, $now) {
            $records[$id] = [
                'client' => $client->toArray(),
                'redirectUri' => $redirectUri,
                'resource' => $resource,
                'permissions' => ConnectionPermission::values($permissions),
                'createdAt' => $now,
                'lastUsedAt' => null,
                'code' => [
                    'hash' => $code->hash(),
                    'challenge' => $codeChallenge,
                    'expiresAt' => $now + self::CODE_TTL,
                    'isExchanged' => false
                ],
                'accessTokens' => [],
                'refreshTokens' => []
            ];
        });

        return $code;
    }

    /**
     * Exchanges an authorization code for a token pair once. `$verify`
     * checks the request against the connection and the PKCE challenge. A
     * code that comes back after its exchange revokes the connection.
     *
     * @param Closure(Connection, string): bool $verify
     * @return array{connection: Connection, accessToken: Token, refreshToken: Token}|null
     */
    public function redeemCode(Token $code, Closure $verify): array|null
    {
        return $this->transaction(function (array &$records) use ($code, $verify) {
            $id = $code->connectionId;
            $record = $records[$id] ?? null;

            if ($record === null || !$code->matches($record['code']['hash'])) {
                return null;
            }

            if ($record['code']['isExchanged'] === true) {
                unset($records[$id]);
                return null;
            }

            $connection = Connection::fromRecord($id, $this->user->id(), $record);

            if ($record['code']['expiresAt'] < self::now() || !$verify($connection, $record['code']['challenge'])) {
                return null;
            }

            $records[$id]['code']['isExchanged'] = true;

            return ['connection' => $connection, ...$this->issueTokenPair($records, $id)];
        });
    }

    /**
     * Rotates a refresh token. A replaced token keeps working for the grace
     * period; a replay after it revokes the connection.
     *
     * @return array{connection: Connection, accessToken: Token, refreshToken: Token}|null
     */
    public function refresh(Token $refreshToken): array|null
    {
        return $this->transaction(function (array &$records) use ($refreshToken) {
            $id = $refreshToken->connectionId;
            $record = $records[$id] ?? null;

            if ($record === null || !$this->isActive($record)) {
                return null;
            }

            $now = self::now();

            foreach ($record['refreshTokens'] as $index => $entry) {
                if (!$refreshToken->matches($entry['hash'])) {
                    continue;
                }

                if ($entry['expiresAt'] < $now) {
                    return null;
                }

                if ($entry['replacedAt'] !== null && $now - $entry['replacedAt'] > self::REFRESH_GRACE_PERIOD) {
                    unset($records[$id]);
                    return null;
                }

                $records[$id]['refreshTokens'][$index]['replacedAt'] ??= $now;
                $records[$id]['lastUsedAt'] = $now;

                return [
                    'connection' => Connection::fromRecord($id, $this->user->id(), $records[$id]),
                    ...$this->issueTokenPair($records, $id)
                ];
            }

            return null;
        });
    }

    /**
     * Returns the connection an unexpired access token belongs to, and
     * records it as used.
     */
    public function authenticate(Token $accessToken): Connection|null
    {
        $id = $accessToken->connectionId;
        $record = $this->readRecords()[$id] ?? null;

        if ($record === null || !$this->isActive($record)) {
            return null;
        }

        $now = self::now();
        $isValid = false;

        foreach ($record['accessTokens'] as $entry) {
            if ($accessToken->matches($entry['hash']) && $entry['expiresAt'] >= $now) {
                $isValid = true;
                break;
            }
        }

        if (!$isValid) {
            return null;
        }

        if ($record['lastUsedAt'] === null || $now - $record['lastUsedAt'] >= self::USED_INTERVAL) {
            $this->transaction(function (array &$records) use ($id, $now) {
                if (isset($records[$id])) {
                    $records[$id]['lastUsedAt'] = $now;
                }
            });
            $record['lastUsedAt'] = $now;
        }

        return Connection::fromRecord($id, $this->user->id(), $record);
    }

    public function revoke(string $id): bool
    {
        return $this->transaction(function (array &$records) use ($id) {
            if (!isset($records[$id])) {
                return false;
            }

            unset($records[$id]);
            return true;
        });
    }

    /**
     * @return array{accessToken: Token, refreshToken: Token}
     */
    private function issueTokenPair(array &$records, string $id): array
    {
        $now = self::now();
        $accessToken = Token::issue(Token::ACCESS, $this->user->id(), $id);
        $refreshToken = Token::issue(Token::REFRESH, $this->user->id(), $id);

        $records[$id]['accessTokens'][] = [
            'hash' => $accessToken->hash(),
            'expiresAt' => $now + self::ACCESS_TOKEN_TTL
        ];
        $records[$id]['refreshTokens'][] = [
            'hash' => $refreshToken->hash(),
            'expiresAt' => $now + self::REFRESH_TOKEN_TTL,
            'replacedAt' => null
        ];

        return ['accessToken' => $accessToken, 'refreshToken' => $refreshToken];
    }

    /**
     * Tells whether the code was exchanged, a refresh token is still live,
     * and the user's password hasn't changed since, mirroring how Kirby ends
     * older sessions on a password change.
     */
    private function isActive(array $record): bool
    {
        if ($record['code']['isExchanged'] !== true) {
            return false;
        }

        $now = self::now();

        if (array_filter($record['refreshTokens'], fn (array $entry) => $entry['expiresAt'] >= $now) === []) {
            return false;
        }

        $passwordTimestamp = $this->user->passwordTimestamp();

        return $passwordTimestamp === null || $passwordTimestamp <= $record['createdAt'];
    }

    private function readRecords(): array
    {
        $file = $this->file();

        if (!is_file($file)) {
            return [];
        }

        $handle = fopen($file, 'r');
        flock($handle, LOCK_SH);

        try {
            return json_decode(stream_get_contents($handle) ?: '[]', true) ?? [];
        } finally {
            flock($handle, LOCK_UN);
            fclose($handle);
        }
    }

    /**
     * Runs a read-modify-write of all records under an exclusive lock, so
     * concurrent requests of the same user don't lose a token.
     *
     * @param Closure(array &$records): mixed $callback
     */
    private function transaction(Closure $callback): mixed
    {
        $file = $this->file();
        Dir::make(dirname($file));

        $handle = fopen($file, 'c+');
        flock($handle, LOCK_EX);

        try {
            $stored = json_decode(stream_get_contents($handle) ?: '[]', true) ?? [];
            $records = $stored;
            $result = $callback($records);
            $records = $this->prune($records);

            // A request that changes nothing, like one with a forged code, writes nothing.
            if ($records !== $stored) {
                // Encoded before truncating, so a failure leaves the file intact.
                $payload = $records === [] ? '{}' : json_encode($records, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);

                ftruncate($handle, 0);
                rewind($handle);
                fwrite($handle, $payload);
                fflush($handle);
            }

            return $result;
        } finally {
            flock($handle, LOCK_UN);
            fclose($handle);
        }
    }

    /**
     * Drops what can never authenticate again – unexchanged connections past
     * their code, connections from before a password change or without a
     * live refresh token, and expired tokens – and the oldest replaced
     * refresh tokens past the replay limit.
     */
    private function prune(array $records): array
    {
        $now = self::now();
        $passwordTimestamp = $this->user->passwordTimestamp();

        foreach ($records as $id => $record) {
            $isExpiredCode = $record['code']['isExchanged'] !== true && $record['code']['expiresAt'] < $now;

            if ($isExpiredCode || ($passwordTimestamp !== null && $passwordTimestamp > $record['createdAt'])) {
                unset($records[$id]);
                continue;
            }

            $records[$id]['accessTokens'] = array_values(array_filter(
                $record['accessTokens'],
                fn (array $entry) => $entry['expiresAt'] >= $now
            ));

            $refreshTokens = array_filter($record['refreshTokens'], fn (array $entry) => $entry['expiresAt'] >= $now);

            if ($record['code']['isExchanged'] === true && $refreshTokens === []) {
                unset($records[$id]);
                continue;
            }

            $replacedTokens = array_filter($refreshTokens, fn (array $entry) => $entry['replacedAt'] !== null);
            $forgottenTokens = array_slice($replacedTokens, 0, -self::REPLACED_REFRESH_TOKEN_LIMIT, true);
            $records[$id]['refreshTokens'] = array_values(array_diff_key($refreshTokens, $forgottenTokens));
        }

        return $records;
    }

    private function file(): string
    {
        return $this->user->root() . '/' . self::FILENAME;
    }

    private static function now(): int
    {
        return self::$clock !== null ? (self::$clock)() : time();
    }
}
