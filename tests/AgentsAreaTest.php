<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\Client;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ConnectionStore;
use Kirby\Cms\App;
use Kirby\Exception\PermissionException;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class AgentsAreaTest extends ApiRouteTestCase
{
    #[Test]
    public function shows_the_mcp_url_and_the_license_status(): void
    {
        $kirby = $this->app();
        $kirby->impersonate('editor');

        $props = $this->area($kirby)['views'][0]['action']()['props'];

        $this->assertSame('https://example.com/api/copilot/mcp', $props['mcpUrl']);
        $this->assertSame('inactive', $props['licenseStatus']);
    }

    #[Test]
    public function shows_an_editor_only_their_own_connections_and_their_agents(): void
    {
        $kirby = $this->app();
        $this->connect($kirby, 'editor', [ConnectionPermission::Read, ConnectionPermission::Prepare]);
        $this->connect($kirby, 'admin', [ConnectionPermission::Read]);
        $kirby->impersonate('editor');

        $props = $this->area($kirby)['views'][0]['action']()['props'];

        $this->assertFalse($props['isAdmin']);
        $this->assertCount(1, $props['connections']);
        $this->assertSame(['id' => 'https://claude.ai/oauth/claude-code-client-metadata', 'name' => 'Claude Code', 'host' => 'claude.ai', 'isVerified' => true, 'isLocal' => true], $props['connections'][0]['agent']);
        $this->assertSame(['Read content', 'Prepare changes'], $props['connections'][0]['permissions']);
        $this->assertArrayNotHasKey('account', $props['connections'][0]);
    }

    #[Test]
    public function does_not_mark_an_agent_with_a_web_redirect_as_local(): void
    {
        $kirby = $this->app();
        $this->connect($kirby, 'editor', [ConnectionPermission::Read], new Client('https://chatgpt.com/oauth/client.json', 'ChatGPT', 'chatgpt.com', true), 'https://chatgpt.com/connector/oauth/callback');
        $kirby->impersonate('editor');

        $props = $this->area($kirby)['views'][0]['action']()['props'];

        $this->assertFalse($props['connections'][0]['agent']['isLocal']);
    }

    #[Test]
    public function shows_an_admin_every_connection_with_its_account(): void
    {
        $kirby = $this->app();
        $this->connect($kirby, 'editor', [ConnectionPermission::Read]);
        $this->connect($kirby, 'admin', [ConnectionPermission::Read]);
        $kirby->impersonate('admin');

        $props = $this->area($kirby)['views'][0]['action']()['props'];

        $this->assertTrue($props['isAdmin']);
        $this->assertEqualsCanonicalizing(['admin@example.com', 'editor@example.com'], array_column($props['connections'], 'account'));
    }

    #[Test]
    public function lets_the_owner_revoke_a_connection(): void
    {
        $kirby = $this->app();
        $id = $this->connect($kirby, 'editor', [ConnectionPermission::Read]);
        $kirby->impersonate('editor');

        $this->assertTrue($this->revokeDialog($kirby)['submit']('editor', $id));
        $this->assertSame([], ConnectionStore::for($kirby->user('editor'))->all());
    }

    #[Test]
    public function lets_an_admin_revoke_any_connection(): void
    {
        $kirby = $this->app();
        $id = $this->connect($kirby, 'editor', [ConnectionPermission::Read]);
        $kirby->impersonate('admin');

        $this->revokeDialog($kirby)['submit']('editor', $id);

        $this->assertSame([], ConnectionStore::for($kirby->user('editor'))->all());
    }

    #[Test]
    public function keeps_editors_from_revoking_each_other(): void
    {
        $kirby = $this->app();
        $id = $this->connect($kirby, 'author', [ConnectionPermission::Read]);
        $kirby->impersonate('editor');

        try {
            $this->revokeDialog($kirby)['submit']('author', $id);
            $this->fail('An editor revoked another editor’s connection.');
        } catch (PermissionException) {
        }

        $this->assertCount(1, ConnectionStore::for($kirby->user('author'))->all());
    }

    #[Test]
    public function hides_the_area_while_agents_are_off(): void
    {
        $kirby = self::bootApp();

        $this->assertSame([], $this->area($kirby));
    }

    private function app(): App
    {
        return self::bootApp([
            'options' => ['johannschopplich.copilot' => ['agents' => true]],
            'blueprints' => ['users/editor' => ['name' => 'editor']],
            'users' => [
                ['id' => 'admin', 'email' => 'admin@example.com', 'role' => 'admin'],
                ['id' => 'editor', 'email' => 'editor@example.com', 'role' => 'editor'],
                ['id' => 'author', 'email' => 'author@example.com', 'role' => 'editor']
            ]
        ]);
    }

    /**
     * @param list<ConnectionPermission> $permissions
     */
    private function connect(App $kirby, string $userId, array $permissions, Client|null $client = null, string $redirectUri = 'http://localhost:4242/callback'): string
    {
        $store = ConnectionStore::for($kirby->user($userId));
        $code = $store->create(
            $client ?? new Client('https://claude.ai/oauth/claude-code-client-metadata', 'Claude Code', 'claude.ai', true),
            $redirectUri,
            'https://example.com/api/copilot/mcp',
            $permissions,
            'challenge'
        );

        return $store->redeemCode($code, fn () => true)['connection']->id;
    }

    private function area(App $kirby): array
    {
        return $kirby->extensions('areas')['copilot-agents'][0]($kirby);
    }

    private function revokeDialog(App $kirby): array
    {
        return $this->area($kirby)['dialogs']['copilot-agents/(:any)/(:any)/revoke'];
    }
}
