<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Kirby\Cms\User;

final readonly class Connection
{
    /**
     * @param list<ConnectionPermission> $permissions
     */
    public function __construct(
        public string $id,
        public string $userId,
        public Client $client,
        public string $redirectUri,
        public string $resource,
        public array $permissions,
        public int $createdAt,
        public int|null $lastUsedAt
    ) {
    }

    /**
     * Builds the connection without the permissions the user's role
     * withholds from agents, which caps existing connections too.
     */
    public static function fromRecord(string $id, User $user, array $record): self
    {
        return new self(
            id: $id,
            userId: $user->id(),
            client: Client::fromArray($record['client']),
            redirectUri: $record['redirectUri'],
            resource: $record['resource'],
            permissions: array_values(array_filter(
                array_map(ConnectionPermission::tryFrom(...), $record['permissions']),
                fn (ConnectionPermission|null $permission) => $permission !== null && !$permission->isWithheldFrom($user)
            )),
            createdAt: $record['createdAt'],
            lastUsedAt: $record['lastUsedAt'] ?? null
        );
    }

    public function hasPermission(ConnectionPermission $permission): bool
    {
        return in_array($permission, $this->permissions, true);
    }
}
