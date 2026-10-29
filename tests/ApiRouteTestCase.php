<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use Kirby\Filesystem\Dir;
use Kirby\Toolkit\Str;
use PHPUnit\Framework\TestCase;

abstract class ApiRouteTestCase extends TestCase
{
    protected function setUp(): void
    {
        Dir::make(static::indexRoot() . '/content');
    }

    protected function tearDown(): void
    {
        App::destroy();
        Dir::remove(static::indexRoot());
    }

    protected static function bootApp(array $props = []): App
    {
        $app = new App(array_replace_recursive([
            // Outside the site's root, since Kirby writes the session on shutdown, after `tearDown()` removed it.
            'roots' => ['index' => static::indexRoot(), 'sessions' => __DIR__ . '/tmp/sessions'],
            'urls' => ['index' => 'https://example.com']
        ], $props));

        $app->impersonate('kirby');

        return $app;
    }

    protected function callRoute(App $kirby, string $pattern, string $method = 'GET', string ...$arguments): mixed
    {
        $api = require dirname(__DIR__) . '/src/extensions/api.php';
        $routes = $api['routes']($kirby);

        foreach ($routes as $route) {
            if (($route['pattern'] ?? '') === $pattern && ($route['method'] ?? 'GET') === $method) {
                return $route['action']->call($kirby->api(), ...$arguments);
            }
        }

        $this->fail("Route not found: {$method} {$pattern}");
    }

    protected static function indexRoot(): string
    {
        return __DIR__ . '/tmp/' . Str::kebab((new ReflectionClass(static::class))->getShortName());
    }
}
