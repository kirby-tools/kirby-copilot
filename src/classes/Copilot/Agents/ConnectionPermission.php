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
     * Tells whether the user's role has at least one Kirby permission its
     * tools need. The tools check the permission on each model again.
     */
    public function isAvailableTo(User $user): bool
    {
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
