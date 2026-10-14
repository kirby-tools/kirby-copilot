<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Closure;
use Kirby\Cms\App;
use Kirby\Cms\User;
use Kirby\Exception\Exception;
use Kirby\Filesystem\Dir;

/**
 * Keeps a user's connections in a dotfile in their account folder, next to
 * its lock file, so Kirby deletes both together with the user. Tokens are
 * stored as hashes only.
 */
final class ConnectionStore
{
    public const ACCESS_TOKEN_TTL = 3600;
    private const REFRESH_TOKEN_TTL = 30 * 24 * 3600;
    private const CODE_TTL = 60;

    /**
     * How long a replaced refresh token keeps working, for Claude Code sessions
     * that share one refresh token and refresh at the same moment, and for a
     * client that retries with the old token when a token response gets lost.
     * A later replay revokes the connection, as RFC 9700 asks.
     */
    public const REFRESH_GRACE_PERIOD = 60;

    /** Least time between the writes that keep "Last active" current, in seconds. */
    private const USED_INTERVAL = 300;

    /** Replaced refresh tokens kept to detect a replay. */
    private const REPLACED_REFRESH_TOKEN_LIMIT = 20;

    private const FILENAME = '.copilot-agents.json';
    private const LOCK_FILENAME = '.copilot-agents.lock';

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
            if ($record['code']['isExchanged'] === true) {
                $connections[] = Connection::fromRecord($id, $this->user, $record);
            }
        }

        return $connections;
    }

    public function find(string $id): Connection|null
    {
        $record = $this->readRecords()[$id] ?? null;

        return $record !== null && $record['code']['isExchanged'] === true
            ? Connection::fromRecord($id, $this->user, $record)
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
     * code that comes back after its exchange in a request that passes
     * `$verify` revokes the connection.
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

            $connection = Connection::fromRecord($id, $this->user, $record);

            if (!$verify($connection, $record['code']['challenge'])) {
                return null;
            }

            if ($record['code']['isExchanged'] === true) {
                unset($records[$id]);
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

            if ($record === null || $record['code']['isExchanged'] !== true) {
                return null;
            }

            $now = self::now();

            foreach ($record['refreshTokens'] as $index => $entry) {
                if (!$refreshToken->matches($entry['hash'])) {
                    continue;
                }

                if ($entry['replacedAt'] !== null && $now - $entry['replacedAt'] > self::REFRESH_GRACE_PERIOD) {
                    unset($records[$id]);
                    return null;
                }

                $records[$id]['refreshTokens'][$index]['replacedAt'] ??= $now;
                $records[$id]['lastUsedAt'] = $now;

                return [
                    'connection' => Connection::fromRecord($id, $this->user, $records[$id]),
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

        if ($record === null || $record['code']['isExchanged'] !== true) {
            return null;
        }

        $now = self::now();
        $isValid = false;

        foreach ($record['accessTokens'] as $entry) {
            if ($accessToken->matches($entry['hash'])) {
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

        return Connection::fromRecord($id, $this->user, $record);
    }

    /**
     * @param list<ConnectionPermission> $permissions
     */
    public function changePermissions(string $id, array $permissions): bool
    {
        return $this->transaction(function (array &$records) use ($id, $permissions) {
            if (!isset($records[$id])) {
                return false;
            }

            $records[$id]['permissions'] = ConnectionPermission::values($permissions);
            return true;
        });
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

    private function readRecords(): array
    {
        $file = $this->file();

        if (!is_file($file)) {
            return [];
        }

        // Writes replace the file in one rename, so a read sees the old or the new store whole.
        return $this->prune(self::decode(file_get_contents($file)) ?? []);
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

        // The lock has a file of its own, since the rename below replaces the store's.
        $handle = fopen($this->user->root() . '/' . self::LOCK_FILENAME, 'c');
        flock($handle, LOCK_EX);

        try {
            $stored = $this->prune(
                self::decode(is_file($file) ? @file_get_contents($file) : '')
                    ?? throw new Exception(message: 'The agent connections of this user can\'t be read, so they aren\'t changed.')
            );
            $records = $stored;
            $result = $callback($records);
            $records = $this->prune($records);

            // A request that changes nothing, like one with a forged code, writes nothing.
            if ($records !== $stored) {
                $payload = $records === [] ? '{}' : json_encode($records, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
                $temporaryFile = $file . '.' . bin2hex(random_bytes(4));

                if (@file_put_contents($temporaryFile, $payload) !== strlen($payload) || !@rename($temporaryFile, $file)) {
                    @unlink($temporaryFile);
                    throw new Exception(message: 'The agent connections of this user couldn\'t be saved.');
                }
            }

            return $result;
        } finally {
            flock($handle, LOCK_UN);
            fclose($handle);
        }
    }

    /**
     * Returns the records of a store file, or `null` when it can't be read or
     * doesn't decode to an array, like a file broken by hand.
     */
    private static function decode(string|false $contents): array|null
    {
        if ($contents === '') {
            return [];
        }

        $records = $contents !== false ? json_decode($contents, true) : null;

        return is_array($records) ? $records : null;
    }

    /**
     * Drops what can never authenticate again – unexchanged connections past
     * their code, connections without a live refresh token or from before a
     * password change, as Kirby ends older sessions on one, and expired
     * tokens – and the oldest replaced refresh tokens past the replay limit.
     * A record that remains is active once its code was exchanged.
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
