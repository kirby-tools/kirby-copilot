<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Kirby\Session\Session;

/**
 * A connection request waiting for the user's consent. It lives in the
 * browser's Kirby session, so a consent link only works in the browser that
 * started the request.
 */
final readonly class PendingAuthorization
{
    private const SESSION_PREFIX = 'johannschopplich.copilot.agents.pending.';
    private const TTL = 600;

    /**
     * @param list<ConnectionPermission>|null $requestedPermissions The OAuth `scope`, or `null` when the agent sent none
     */
    public function __construct(
        public string $id,
        public Client $client,
        public string $redirectUri,
        public string|null $state,
        public string $codeChallenge,
        public array|null $requestedPermissions,
        public int $expiresAt
    ) {
    }

    /**
     * @param list<ConnectionPermission>|null $requestedPermissions
     */
    public static function create(Client $client, string $redirectUri, string|null $state, string $codeChallenge, array|null $requestedPermissions): self
    {
        return new self(bin2hex(random_bytes(16)), $client, $redirectUri, $state, $codeChallenge, $requestedPermissions, time() + self::TTL);
    }

    public static function find(Session $session, string $id): self|null
    {
        $data = $session->get(self::SESSION_PREFIX . $id);

        if (!is_array($data)) {
            return null;
        }

        if ($data['expiresAt'] < time()) {
            $session->remove(self::SESSION_PREFIX . $id);
            return null;
        }

        return new self(
            id: $id,
            client: Client::fromArray($data['client']),
            redirectUri: $data['redirectUri'],
            state: $data['state'],
            codeChallenge: $data['codeChallenge'],
            requestedPermissions: is_array($data['requestedPermissions'] ?? null) ? array_map(ConnectionPermission::from(...), $data['requestedPermissions']) : null,
            expiresAt: $data['expiresAt']
        );
    }

    public function store(Session $session): void
    {
        $session->set(self::SESSION_PREFIX . $this->id, [
            'client' => $this->client->toArray(),
            'redirectUri' => $this->redirectUri,
            'state' => $this->state,
            'codeChallenge' => $this->codeChallenge,
            'requestedPermissions' => $this->requestedPermissions !== null ? ConnectionPermission::values($this->requestedPermissions) : null,
            'expiresAt' => $this->expiresAt
        ]);
    }

    public function remove(Session $session): void
    {
        $session->remove(self::SESSION_PREFIX . $this->id);
    }
}
