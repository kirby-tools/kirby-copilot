<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use Kirby\Exception\InvalidArgumentException;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ContextRouteTest extends TestCase
{
    protected function tearDown(): void
    {
        App::destroy();
    }

    private function callContextRoute(array $options): mixed
    {
        $kirby = new App([
            'options' => $options,
        ]);

        $api = require dirname(__DIR__) . '/src/extensions/api.php';
        $routes = $api['routes']($kirby);

        $action = null;
        foreach ($routes as $route) {
            if (($route['pattern'] ?? '') === '__copilot__/context') {
                $action = $route['action'];
                break;
            }
        }

        $this->assertNotNull($action, 'Context route not found');

        return $action();
    }

    #[Test]
    public function invalid_openai_api_throws_in_debug_mode(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/providers\.openai\.api/');

        $this->callContextRoute([
            'debug' => true,
            'johannschopplich.copilot' => [
                'providers' => [
                    'openai' => [
                        'apiKey' => 'test-key',
                        'api' => 'bogus',
                    ],
                ],
            ],
        ]);
    }
}
