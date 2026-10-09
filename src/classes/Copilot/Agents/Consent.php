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

        return [
            'component' => 'k-copilot-agents-authorize-view',
            'title' => I18n::translate('johannschopplich.copilot.agents.authorize'),
            'props' => [
                'id' => $id,
                'site' => Agents::siteName(),
                'account' => $user->email(),
                'client' => $pending?->client->toArray(),
                'redirect' => $pending !== null ? self::describeRedirect($pending->redirectUri) : null,
                'permissions' => ConnectionPermission::options($user),
                'defaultPermissions' => ConnectionPermission::values(self::defaultPermissions($user))
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

        $pending->remove($session);

        if (!$isApproved) {
            return self::authorizationResponse($pending, ['error' => 'access_denied']);
        }

        $code = ConnectionStore::for($user)->create(
            $pending->client,
            $pending->redirectUri,
            Agents::mcpUrl(),
            ConnectionPermission::chosenBy($user, $permissionValues),
            $pending->codeChallenge
        );

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
     * @return list<ConnectionPermission>
     */
    private static function defaultPermissions(User $user): array
    {
        return array_values(array_filter(
            ConnectionPermission::defaults(),
            fn (ConnectionPermission $permission) => $permission->isAvailableTo($user)
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
