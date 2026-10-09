<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use JohannSchopplich\Licensing\Licenses;
use Kirby\Cms\App;
use Kirby\Cms\User;
use Kirby\Exception\NotFoundException;
use Kirby\Exception\PermissionException;
use Kirby\Toolkit\Escape;
use Kirby\Toolkit\I18n;

/**
 * The Agents view: the MCP URL and the connections the user may see.
 * Admins see and revoke every user's connections, but only a connection's
 * own user changes its permissions.
 */
final class AgentsView
{
    public static function view(App $kirby): array
    {
        $user = $kirby->user();
        $isAdmin = $user->isAdmin();
        $rows = [];

        foreach ($isAdmin ? $kirby->users() : [$user] as $owner) {
            foreach (ConnectionStore::for($owner)->all() as $connection) {
                $rows[] = self::row($connection, $owner, $user);
            }
        }

        usort($rows, fn (array $a, array $b) => ($b['lastUsedAt'] ?? 0) <=> ($a['lastUsedAt'] ?? 0));

        return [
            'component' => 'k-copilot-agents-view',
            'title' => I18n::translate('johannschopplich.copilot.agents'),
            'props' => [
                'mcpUrl' => Agents::mcpUrl(),
                'isAdmin' => $isAdmin,
                'connections' => $rows,
                'licenseStatus' => Licenses::read('johannschopplich/kirby-copilot')->getStatus()
            ]
        ];
    }

    public static function revokeDialog(App $kirby, string $userId, string $id): array
    {
        $connection = self::findConnection($kirby, $userId, $id);

        return [
            'component' => 'k-remove-dialog',
            'props' => [
                'text' => I18n::template('johannschopplich.copilot.agents.revoke.confirm', [
                    'agent' => Escape::html($connection->client->name)
                ]),
                'submitButton' => [
                    'icon' => 'trash',
                    'text' => I18n::translate('johannschopplich.copilot.agents.revoke'),
                    'theme' => 'negative'
                ]
            ]
        ];
    }

    public static function revoke(App $kirby, string $userId, string $id): bool
    {
        self::findConnection($kirby, $userId, $id);

        return ConnectionStore::for($kirby->user($userId))->revoke($id);
    }

    public static function permissionsDialog(App $kirby, string $userId, string $id): array
    {
        $connection = self::findOwnConnection($kirby, $userId, $id);

        return [
            'component' => 'k-form-dialog',
            'props' => [
                'fields' => [
                    'permissions' => [
                        'label' => I18n::translate('johannschopplich.copilot.agents.permissions'),
                        'type' => 'checkboxes',
                        'options' => ConnectionPermission::options($kirby->user())
                    ]
                ],
                'value' => ['permissions' => ConnectionPermission::values($connection->permissions)],
                'submitButton' => [
                    'icon' => 'check',
                    'text' => I18n::translate('johannschopplich.copilot.agents.permissions.change'),
                    'theme' => 'positive'
                ]
            ]
        ];
    }

    public static function changePermissions(App $kirby, string $userId, string $id): bool
    {
        self::findOwnConnection($kirby, $userId, $id);

        $user = $kirby->user();
        $values = $kirby->request()->get('permissions');

        return ConnectionStore::for($user)->changePermissions($id, ConnectionPermission::chosenBy(
            $user,
            is_array($values) ? array_values(array_filter($values, 'is_string')) : []
        ));
    }

    private static function row(Connection $connection, User $owner, User $user): array
    {
        $row = [
            'id' => $connection->id,
            'agent' => [
                ...$connection->client->toArray(),
                // A loopback or app redirect means the agent runs on the user's device.
                'isLocal' => RedirectUri::kind($connection->redirectUri) !== 'web'
            ],
            'permissions' => array_map(fn (ConnectionPermission $permission) => $permission->label(), $connection->permissions),
            'lastUsedAt' => $connection->lastUsedAt,
            'revokeDialog' => 'copilot-agents/' . $owner->id() . '/' . $connection->id . '/revoke'
        ];

        if ($owner->is($user)) {
            $row['permissionsDialog'] = 'copilot-agents/' . $owner->id() . '/' . $connection->id . '/permissions';
        }

        if ($user->isAdmin()) {
            $row['account'] = $owner->email();
        }

        return $row;
    }

    private static function findOwnConnection(App $kirby, string $userId, string $id): Connection
    {
        if ($kirby->user()->id() !== $userId) {
            throw new PermissionException(message: 'You may only change your own connections.');
        }

        return self::findConnection($kirby, $userId, $id);
    }

    private static function findConnection(App $kirby, string $userId, string $id): Connection
    {
        $user = $kirby->user();

        if (!$user->isAdmin() && $user->id() !== $userId) {
            throw new PermissionException(message: 'You may only revoke your own connections.');
        }

        $owner = $kirby->user($userId);
        $connection = $owner instanceof User ? ConnectionStore::for($owner)->find($id) : null;

        if ($connection === null) {
            throw new NotFoundException(message: 'The agent connection doesn’t exist.');
        }

        return $connection;
    }
}
