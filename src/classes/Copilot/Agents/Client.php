<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

/**
 * The OAuth client an agent identifies as. A verified client's `host` comes
 * from the URL of its metadata document; an unverified client's name is
 * the one it registered with, or its redirect URI's host or scheme.
 */
final readonly class Client
{
    /**
     * @param list<string> $redirectUris
     */
    public function __construct(
        public string $id,
        public string $name,
        public string|null $host,
        public bool $isVerified,
        public array $redirectUris = []
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            id: $data['id'],
            name: $data['name'],
            host: $data['host'] ?? null,
            isVerified: $data['isVerified'] ?? false
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'host' => $this->host,
            'isVerified' => $this->isVerified
        ];
    }
}
