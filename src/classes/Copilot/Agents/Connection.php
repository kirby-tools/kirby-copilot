<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

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

    public static function fromRecord(string $id, string $userId, array $record): self
    {
        return new self(
            id: $id,
            userId: $userId,
            client: Client::fromArray($record['client']),
            redirectUri: $record['redirectUri'],
            resource: $record['resource'],
            permissions: array_values(array_filter(array_map(ConnectionPermission::tryFrom(...), $record['permissions']))),
            createdAt: $record['createdAt'],
            lastUsedAt: $record['lastUsedAt'] ?? null
        );
    }

    public function hasPermission(ConnectionPermission $permission): bool
    {
        return in_array($permission, $this->permissions, true);
    }
}
