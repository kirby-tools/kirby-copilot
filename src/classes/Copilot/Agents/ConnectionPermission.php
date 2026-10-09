<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Kirby\Cms\User;
use Kirby\Toolkit\I18n;

/**
 * A connection permission, named by its OAuth scope.
 */
enum ConnectionPermission: string
{
    case Read = 'content:read';
    case Prepare = 'content:prepare';
    case Publish = 'content:publish';
    case Delete = 'content:delete';

    public function label(string|null $locale = null): string
    {
        return I18n::translate('johannschopplich.copilot.agents.permission.' . strtolower($this->name), null, $locale);
    }

    public function info(): string
    {
        return I18n::translate('johannschopplich.copilot.agents.permission.' . strtolower($this->name) . '.info');
    }

    /**
     * Tells whether the user's role doesn't withhold the permission from
     * agents and has at least one Kirby permission its tools need. The tools
     * check the permission on each model again.
     */
    public function isAvailableTo(User $user): bool
    {
        if ($this->isWithheldFrom($user)) {
            return false;
        }

        $permissions = $user->role()->permissions();

        $required = match ($this) {
            self::Read => [],
            self::Prepare => [['pages', 'update'], ['site', 'update'], ['files', 'update'], ['pages', 'create']],
            self::Publish => [['pages', 'update'], ['site', 'update'], ['files', 'update'], ['pages', 'changeStatus'], ['files', 'create']],
            self::Delete => [['pages', 'delete'], ['files', 'delete']]
        };

        if ($required === []) {
            return true;
        }

        foreach ($required as [$category, $action]) {
            if ($permissions->for($category, $action) === true) {
                return true;
            }
        }

        return false;
    }

    public function isWithheldFrom(User $user): bool
    {
        $action = match ($this) {
            self::Publish => 'agentsPublish',
            self::Delete => 'agentsDelete',
            default => null
        };

        return $action !== null && !$user->role()->permissions()->for('johannschopplich.copilot', $action);
    }

    /**
     * Returns the checkbox options of the permissions, disabling Read, which
     * every connection has, and those the user's role doesn't make
     * available.
     *
     * @return list<array{value: string, text: string, info: string, disabled: bool}>
     */
    public static function options(User $user): array
    {
        return array_map(fn (self $permission) => [
            'value' => $permission->value,
            'text' => $permission->label(),
            'info' => $permission->info(),
            'disabled' => $permission === self::Read || !$permission->isAvailableTo($user)
        ], self::cases());
    }

    /**
     * Returns Read and each chosen permission the user's role makes
     * available.
     *
     * @param list<string> $values
     * @return list<self>
     */
    public static function chosenBy(User $user, array $values): array
    {
        return array_values(array_filter(
            self::cases(),
            fn (self $permission) => $permission === self::Read || (in_array($permission->value, $values, true) && $permission->isAvailableTo($user))
        ));
    }

    /**
     * @return list<self>
     */
    public static function defaults(): array
    {
        return [self::Read, self::Prepare];
    }

    /**
     * Parses a space-separated OAuth `scope` parameter and returns `null`
     * when it names an unknown scope.
     *
     * @return list<self>|null
     */
    public static function parse(string $scope): array|null
    {
        $permissions = [];

        foreach (preg_split('/\s+/', trim($scope), -1, PREG_SPLIT_NO_EMPTY) as $value) {
            $case = self::tryFrom($value);

            if ($case === null) {
                return null;
            }

            $permissions[] = $case;
        }

        return $permissions;
    }

    /**
     * @param list<self> $permissions
     * @return list<string>
     */
    public static function values(array $permissions): array
    {
        return array_map(fn (self $permission) => $permission->value, $permissions);
    }

    /**
     * @param list<self> $permissions
     */
    public static function join(array $permissions): string
    {
        return implode(' ', self::values($permissions));
    }
}
