<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use Kirby\Exception\InvalidArgumentException;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ContextRouteTest extends ApiRouteTestCase
{
    private function callContextRoute(array $options): mixed
    {
        return $this->callRoute(new App(['options' => $options]), '__copilot__/context');
    }

    /** @return array<string, array{0: string, 1: mixed}> */
    public static function invalidEnumValuesInDebugMode(): array
    {
        return [
            'provider'                      => ['provider',                      'bogus-provider'],
            'reasoningEffort'               => ['reasoningEffort',               'ultra'],
            'providers.openai.api'          => ['providers.openai.api',          'bogus'],
            'logLevel'                      => ['logLevel',                      'trace'],
        ];
    }

    #[Test]
    #[DataProvider('invalidEnumValuesInDebugMode')]
    public function invalid_enum_throws_in_debug_mode(string $path, mixed $value): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/' . preg_quote($path, '/') . '/');

        $this->callContextRoute([
            'debug' => true,
            'johannschopplich.copilot' => self::buildConfigWithOverride($path, $value),
        ]);
    }

    /** @return array<string, array{0: string, 1: mixed, 2: string}> */
    public static function invalidEnumFallbacks(): array
    {
        return [
            'provider falls back to google'       => ['provider',        'bogus', 'google'],
            'reasoningEffort falls back to low'   => ['reasoningEffort', 'ultra', 'low'],
            'logLevel falls back to warn'         => ['logLevel',        'trace', 'warn'],
        ];
    }

    #[Test]
    #[DataProvider('invalidEnumFallbacks')]
    public function invalid_enum_falls_back_without_debug(string $path, mixed $value, string $expected): void
    {
        $response = $this->callContextRoute([
            'johannschopplich.copilot' => self::buildConfigWithOverride($path, $value),
        ]);

        $this->assertSame($expected, self::readConfigPath($response['config'], $path));
    }

    #[Test]
    public function invalid_providers_openai_api_is_unset_without_debug(): void
    {
        $response = $this->callContextRoute([
            'johannschopplich.copilot' => [
                'providers' => [
                    'openai' => [
                        'apiKey' => 'test-key',
                        'api' => 'bogus',
                    ],
                ],
            ],
        ]);

        $this->assertArrayNotHasKey('api', $response['config']['providers']['openai']);
    }

    #[Test]
    public function valid_enum_values_are_preserved(): void
    {
        $response = $this->callContextRoute([
            'johannschopplich.copilot' => [
                'provider' => 'anthropic',
                'reasoningEffort' => 'high',
                'logLevel' => 'debug',
                'providers' => [
                    'openai' => [
                        'apiKey' => 'test-key',
                        'api' => 'chat',
                    ],
                ],
            ],
        ]);

        $this->assertSame('anthropic', $response['config']['provider']);
        $this->assertSame('high', $response['config']['reasoningEffort']);
        $this->assertSame('debug', $response['config']['logLevel']);
        $this->assertSame('chat', $response['config']['providers']['openai']['api']);
    }

    #[Test]
    public function missing_optional_enum_is_not_set(): void
    {
        $response = $this->callContextRoute([
            'johannschopplich.copilot' => [
                'providers' => [
                    'openai' => ['apiKey' => 'test-key'],
                ],
            ],
        ]);

        $this->assertArrayNotHasKey('api', $response['config']['providers']['openai']);
    }

    private static function buildConfigWithOverride(string $path, mixed $value): array
    {
        $keys = explode('.', $path);
        $override = $value;
        foreach (array_reverse($keys) as $key) {
            $override = [$key => $override];
        }

        return array_replace_recursive(
            ['providers' => ['openai' => ['apiKey' => 'test-key']]],
            $override,
        );
    }

    private static function readConfigPath(array $config, string $path): mixed
    {
        foreach (explode('.', $path) as $key) {
            if (!is_array($config) || !array_key_exists($key, $config)) {
                return null;
            }
            $config = $config[$key];
        }
        return $config;
    }
}
