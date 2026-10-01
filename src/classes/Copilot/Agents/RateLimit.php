<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Closure;

/**
 * Request counts per key in fixed one-minute windows. The count isn't
 * atomic, which is close enough for abuse protection.
 */
final class RateLimit
{
    /** Replaced in tests to hold time still. */
    public static Closure|null $clock = null;

    /**
     * Counts a request and returns whether it went over the limit.
     */
    public static function hit(string $key, int $limit): bool
    {
        $cache = Agents::cache();
        $now = self::$clock !== null ? (self::$clock)() : time();
        $cacheKey = 'rate.' . hash('sha256', $key) . '.' . intdiv($now, 60);
        $count = (int)$cache->get($cacheKey, 0) + 1;

        $cache->set($cacheKey, $count, 2);

        return $count > $limit;
    }
}
