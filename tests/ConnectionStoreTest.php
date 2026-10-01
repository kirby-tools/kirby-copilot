<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\Client;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ConnectionStore;
use JohannSchopplich\Copilot\Agents\Token;
use Kirby\Cms\User;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ConnectionStoreTest extends ApiRouteTestCase
{
    private int $now = 1_800_000_000;

    protected function setUp(): void
    {
        parent::setUp();

        ConnectionStore::$clock = fn () => $this->now;
    }

    #[Test]
    public function redeem_code_returns_tokens_that_authenticate_the_connection(): void
    {
        $store = ConnectionStore::for($this->user());
        $code = $this->createConnection($store);

        $tokens = $store->redeemCode($code, fn () => true);

        $this->assertNotNull($tokens);
        $this->assertSame($code->connectionId, $store->authenticate($tokens['accessToken'])?->id);
        $this->assertSame([ConnectionPermission::Read, ConnectionPermission::Prepare], $store->find($code->connectionId)->permissions);
    }

    #[Test]
    public function redeem_code_revokes_the_connection_when_its_code_comes_back(): void
    {
        $store = ConnectionStore::for($this->user());
        $code = $this->createConnection($store);
        $tokens = $store->redeemCode($code, fn () => true);

        $this->assertNull($store->redeemCode($code, fn () => true));
        $this->assertNull($store->authenticate($tokens['accessToken']));
        $this->assertSame([], $store->all());
    }

    #[Test]
    public function redeem_code_rejects_an_expired_code(): void
    {
        $store = ConnectionStore::for($this->user());
        $code = $this->createConnection($store);

        $this->now += 61;

        $this->assertNull($store->redeemCode($code, fn () => true));
    }

    #[Test]
    public function redeem_code_rejects_a_code_that_fails_verification_without_spending_it(): void
    {
        $store = ConnectionStore::for($this->user());
        $code = $this->createConnection($store);

        $this->assertNull($store->redeemCode($code, fn () => false));
        $this->assertNotNull($store->redeemCode($code, fn () => true));
    }

    #[Test]
    public function refresh_keeps_the_earlier_access_token_valid(): void
    {
        $store = ConnectionStore::for($this->user());
        $first = $store->redeemCode($this->createConnection($store), fn () => true);

        $second = $store->refresh($first['refreshToken']);

        $this->assertNotNull($store->authenticate($first['accessToken']));
        $this->assertNotNull($store->authenticate($second['accessToken']));
    }

    #[Test]
    public function refresh_accepts_a_replaced_refresh_token_within_the_grace_period(): void
    {
        $store = ConnectionStore::for($this->user());
        $tokens = $store->redeemCode($this->createConnection($store), fn () => true);
        $rotated = $store->refresh($tokens['refreshToken']);

        $this->now += ConnectionStore::REFRESH_GRACE_PERIOD;

        $this->assertNotNull($store->refresh($tokens['refreshToken']));
        $this->assertNotNull($store->refresh($rotated['refreshToken']));
    }

    #[Test]
    public function refresh_revokes_the_connection_when_a_replaced_refresh_token_returns_after_the_grace_period(): void
    {
        $store = ConnectionStore::for($this->user());
        $tokens = $store->redeemCode($this->createConnection($store), fn () => true);
        $rotated = $store->refresh($tokens['refreshToken']);

        $this->now += ConnectionStore::REFRESH_GRACE_PERIOD + 1;

        $this->assertNull($store->refresh($tokens['refreshToken']));
        $this->assertNull($store->refresh($rotated['refreshToken']));
        $this->assertSame([], $store->all());
    }

    #[Test]
    public function refresh_forgets_the_oldest_replaced_refresh_tokens_past_the_limit(): void
    {
        $store = ConnectionStore::for($this->user());
        $tokens = $store->redeemCode($this->createConnection($store), fn () => true);
        $replaced = [];

        for ($i = 0; $i < 21; $i++) {
            $replaced[] = $tokens['refreshToken'];
            $tokens = $store->refresh($tokens['refreshToken']);
        }

        $this->now += ConnectionStore::REFRESH_GRACE_PERIOD + 1;

        // The forgotten token is no longer detected as a replay.
        $this->assertNull($store->refresh($replaced[0]));
        $this->assertNotNull($store->find($tokens['connection']->id));

        $this->assertNull($store->refresh($replaced[1]));
        $this->assertNull($store->find($tokens['connection']->id));
    }

    #[Test]
    public function ends_a_connection_whose_refresh_token_expired(): void
    {
        $store = ConnectionStore::for($this->user());
        $tokens = $store->redeemCode($this->createConnection($store), fn () => true);

        $this->now += 30 * 24 * 3600 + 1;

        $this->assertSame([], $store->all());
        $this->assertNull($store->refresh($tokens['refreshToken']));
    }

    #[Test]
    public function refresh_rejects_an_expired_refresh_token_without_revoking_the_connection(): void
    {
        $store = ConnectionStore::for($this->user());
        $tokens = $store->redeemCode($this->createConnection($store), fn () => true);
        $this->now += 10;
        $store->refresh($tokens['refreshToken']);

        $this->now += 30 * 24 * 3600 - 10 + 1;

        $this->assertNull($store->refresh($tokens['refreshToken']));
        $this->assertCount(1, $store->all());
    }

    #[Test]
    public function authenticate_rejects_an_expired_access_token(): void
    {
        $store = ConnectionStore::for($this->user());
        $tokens = $store->redeemCode($this->createConnection($store), fn () => true);

        $this->now += ConnectionStore::ACCESS_TOKEN_TTL + 1;

        $this->assertNull($store->authenticate($tokens['accessToken']));
    }

    #[Test]
    public function ends_a_connection_created_before_a_password_change(): void
    {
        $user = $this->user();
        $store = ConnectionStore::for($user);
        $tokens = $store->redeemCode($this->createConnection($store), fn () => true);

        touch($user->root() . '/.htpasswd', $this->now + 10);

        $this->assertNull($store->authenticate($tokens['accessToken']));
        $this->assertNull($store->refresh($tokens['refreshToken']));
        $this->assertSame([], $store->all());
    }

    #[Test]
    public function revoke_removes_the_connection(): void
    {
        $store = ConnectionStore::for($this->user());
        $tokens = $store->redeemCode($this->createConnection($store), fn () => true);

        $this->assertTrue($store->revoke($tokens['connection']->id));
        $this->assertNull($store->authenticate($tokens['accessToken']));
        $this->assertFalse($store->revoke($tokens['connection']->id));
    }

    #[Test]
    public function authenticate_records_the_last_use_at_most_once_per_interval(): void
    {
        $store = ConnectionStore::for($this->user());
        $tokens = $store->redeemCode($this->createConnection($store), fn () => true);

        $store->authenticate($tokens['accessToken']);
        $usedAt = $this->now;
        $this->now += 120;
        $store->authenticate($tokens['accessToken']);

        $this->assertSame($usedAt, $store->find($tokens['connection']->id)->lastUsedAt);

        $this->now += 180;
        $store->authenticate($tokens['accessToken']);

        $this->assertSame($this->now, $store->find($tokens['connection']->id)->lastUsedAt);
    }

    private function user(): User
    {
        return self::bootApp([
            'users' => [
                ['id' => 'editor', 'email' => 'editor@example.com', 'role' => 'admin']
            ]
        ])->user('editor');
    }

    private function createConnection(ConnectionStore $store): Token
    {
        return $store->create(
            new Client('https://claude.ai/oauth/claude-code-client-metadata', 'Claude Code', 'claude.ai', true),
            'http://localhost:4242/callback',
            'https://example.com/api/copilot/mcp',
            [ConnectionPermission::Read, ConnectionPermission::Prepare],
            'challenge'
        );
    }
}
