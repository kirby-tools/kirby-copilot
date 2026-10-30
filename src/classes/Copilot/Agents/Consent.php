<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Kirby\Cms\App;
use Kirby\Cms\User;
use Kirby\Exception\NotFoundException;
use Kirby\Exception\PermissionException;
use Kirby\Toolkit\I18n;

/**
 * The Panel step of a connection request: the user sees who asks for which
 * permissions and decides once.
 */
final class Consent
{
    public static function view(App $kirby, string $id): array
    {
        $user = $kirby->user();
        $pending = PendingAuthorization::find($kirby->session(), $id);
        $carriedPermissions = $pending !== null ? self::latestPermissionsOf($user, $pending->client) : null;
        $requestedValues = ConnectionPermission::values(self::requestedBeyond(
            $pending?->requestedPermissions ?? [],
            $carriedPermissions ?? ConnectionPermission::defaults()
        ));
        $options = array_map(
            fn (array $option) => in_array($option['value'], $requestedValues, true)
                ? [...$option, 'text' => I18n::template('johannschopplich.copilot.agents.authorize.requested', ['permission' => $option['text']])]
                : $option,
            ConnectionPermission::options($user)
        );

        return [
            'component' => 'k-copilot-consent-view',
            'title' => I18n::translate('johannschopplich.copilot.agents.authorize'),
            'props' => [
                'id' => $id,
                'site' => Agents::siteName(),
                'account' => $user->email(),
                'client' => $pending?->client->toArray(),
                'redirect' => $pending !== null ? self::describeRedirect($pending->redirectUri) : null,
                'permissions' => $options,
                'defaultPermissions' => ConnectionPermission::values($carriedPermissions ?? self::defaultPermissions($user, $pending?->requestedPermissions))
            ]
        ];
    }

    /**
     * Records the user's decision and returns where the browser goes next:
     * back to the client, with a code or with `access_denied`.
     *
     * @param list<string> $permissionValues
     */
    public static function decide(App $kirby, string $id, bool $isApproved, array $permissionValues): string
    {
        $user = $kirby->user();

        if ($user === null || !Agents::canConnect($user)) {
            throw new PermissionException(message: 'You may not connect agents.');
        }

        $session = $kirby->session();
        $pending = PendingAuthorization::find($session, $id);

        if ($pending === null) {
            throw new NotFoundException(message: I18n::translate('johannschopplich.copilot.agents.authorize.expired'));
        }

        if (!$isApproved) {
            $pending->remove($session);
            return self::authorizationResponse($pending, ['error' => 'access_denied']);
        }

        $code = ConnectionStore::for($user)->create(
            $pending->client,
            $pending->redirectUri,
            Agents::mcpUrl(),
            ConnectionPermission::chosenBy($user, $permissionValues),
            $pending->codeChallenge
        );
        $pending->remove($session);

        return self::authorizationResponse($pending, ['code' => $code->value]);
    }

    /**
     * Builds the client's redirect URI with the result, the client's
     * `state`, and the issuer (RFC 9207).
     */
    private static function authorizationResponse(PendingAuthorization $pending, array $parameters): string
    {
        return RedirectUri::withParameters($pending->redirectUri, array_filter(
            [...$parameters, 'state' => $pending->state, 'iss' => Agents::issuer()],
            fn (string|null $value) => $value !== null
        ));
    }

    /**
     * Returns Read and each default the agent requested – each default when
     * it sent no scope – that the user's role makes available.
     *
     * @param list<ConnectionPermission>|null $requestedPermissions
     * @return list<ConnectionPermission>
     */
    private static function defaultPermissions(User $user, array|null $requestedPermissions): array
    {
        return array_values(array_filter(
            ConnectionPermission::defaults(),
            fn (ConnectionPermission $permission) =>
                $permission === ConnectionPermission::Read ||
                (in_array($permission, $requestedPermissions ?? ConnectionPermission::defaults(), true) && $permission->isAvailableTo($user))
        ));
    }

    /**
     * @return list<ConnectionPermission>|null
     */
    private static function latestPermissionsOf(User $user, Client $client): array|null
    {
        if (!$client->isVerified) {
            return null;
        }

        $connections = array_filter(
            ConnectionStore::for($user)->all(),
            fn (Connection $connection) => $connection->client->id === $client->id
        );
        usort($connections, fn (Connection $a, Connection $b) => ($b->lastUsedAt ?? $b->createdAt) <=> ($a->lastUsedAt ?? $a->createdAt));

        return $connections[0]->permissions ?? null;
    }

    /**
     * @param list<ConnectionPermission> $requestedPermissions
     * @param list<ConnectionPermission> $preselectedPermissions
     * @return list<ConnectionPermission>
     */
    private static function requestedBeyond(array $requestedPermissions, array $preselectedPermissions): array
    {
        return array_values(array_filter(
            $requestedPermissions,
            fn (ConnectionPermission $permission) => !in_array($permission, $preselectedPermissions, true)
        ));
    }

    /**
     * Describes where the browser returns to. A local address or an app
     * scheme can belong to any app on the device, unlike a web address.
     *
     * @return array{type: 'web'|'local'|'app', label: string}
     */
    private static function describeRedirect(string $redirectUri): array
    {
        return ['type' => RedirectUri::kind($redirectUri), 'label' => RedirectUri::label($redirectUri)];
    }
}
