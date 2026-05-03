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
    public function defaults_fill_in_missing_config(): void
    {
        $response = $this->callContextRoute([
            'johannschopplich.copilot' => [],
        ]);

        $this->assertSame('google', $response['config']['provider']);
        $this->assertSame('low', $response['config']['reasoningEffort']);
        $this->assertSame('warn', $response['config']['logLevel']);
        $this->assertSame([
            'openai'    => ['hasApiKey' => false, 'model' => 'gpt-5.4', 'completionModel' => 'gpt-5.4-nano'],
            'google'    => ['hasApiKey' => false, 'model' => 'gemini-3.1-pro-preview', 'completionModel' => 'gemini-3-flash-preview'],
            'anthropic' => ['hasApiKey' => false, 'model' => 'claude-sonnet-4-6', 'completionModel' => 'claude-haiku-4-5'],
            'mistral'   => ['hasApiKey' => false, 'model' => 'mistral-small-latest', 'completionModel' => 'mistral-small-latest'],
        ], $response['config']['providers']);
    }

    /** @return array<string, array{0: array<string, mixed>}> */
    public static function invalidSkillEntries(): array
    {
        return [
            'missing id'           => [['label' => 'x', 'instructions' => 'y']],
            'missing label'        => [['id' => 'a', 'instructions' => 'y']],
            'missing instructions' => [['id' => 'a', 'label' => 'x']],
            'blank id'             => [['id' => '   ', 'label' => 'x', 'instructions' => 'y']],
            'blank label'          => [['id' => 'a', 'label' => '   ', 'instructions' => 'y']],
            'blank instructions'   => [['id' => 'a', 'label' => 'x', 'instructions' => '   ']],
            'id with spaces'       => [['id' => 'foo bar', 'label' => 'x', 'instructions' => 'y']],
            'id with slash'        => [['id' => 'foo/bar', 'label' => 'x', 'instructions' => 'y']],
            'id with colon'        => [['id' => 'foo:bar', 'label' => 'x', 'instructions' => 'y']],
        ];
    }

    #[Test]
    #[DataProvider('invalidSkillEntries')]
    public function invalid_skill_entries_are_dropped(array $entry): void
    {
        $response = $this->callContextRoute([
            'johannschopplich.copilot' => [
                'providers' => ['openai' => ['apiKey' => 'test-key']],
                'skills'    => [$entry],
            ],
        ]);

        $this->assertSame([], $response['config']['skills']);
    }

    #[Test]
    public function skills_resolve_multilang_fields_for_user_language(): void
    {
        $response = $this->callContextRoute([
            'languages' => true,
            'johannschopplich.copilot' => [
                'providers' => ['openai' => ['apiKey' => 'test-key']],
                'skills' => [
                    [
                        'id' => 'bilingual',
                        'label' => ['en' => 'Bilingual', 'de' => 'Zweisprachig'],
                        'instructions' => ['en' => 'Write bilingual.', 'de' => 'Zweisprachig.'],
                    ],
                ],
            ],
        ]);

        // Default language resolution falls back to `en` when no languages configured
        $this->assertSame('Bilingual', $response['config']['skills'][0]['label']);
        $this->assertSame('Write bilingual.', $response['config']['skills'][0]['instructions']);
    }

    #[Test]
    public function prompt_templates_are_normalized_and_kept_when_both_fields_are_set(): void
    {
        $response = $this->callContextRoute([
            'johannschopplich.copilot' => [
                'providers' => ['openai' => ['apiKey' => 'test-key']],
                'promptTemplates' => [
                    ['label' => 'Summarize', 'prompt' => 'Summarize this page.'],
                    ['label' => 'Translate', 'prompt' => 'Translate to DE.'],
                ],
            ],
        ]);

        $this->assertSame([
            ['label' => 'Summarize', 'prompt' => 'Summarize this page.'],
            ['label' => 'Translate', 'prompt' => 'Translate to DE.'],
        ], $response['config']['promptTemplates']);
    }

    /** @return array<string, array{0: array<string, mixed>}> */
    public static function invalidPromptTemplateEntries(): array
    {
        return [
            'missing label'  => [['prompt' => 'p']],
            'missing prompt' => [['label' => 'L']],
            'blank label'    => [['label' => '',  'prompt' => 'p']],
            'blank prompt'   => [['label' => 'L', 'prompt' => '']],
            'null label'     => [['label' => null, 'prompt' => 'p']],
        ];
    }

    #[Test]
    #[DataProvider('invalidPromptTemplateEntries')]
    public function invalid_prompt_templates_are_dropped(array $entry): void
    {
        $response = $this->callContextRoute([
            'johannschopplich.copilot' => [
                'providers' => ['openai' => ['apiKey' => 'test-key']],
                'promptTemplates' => [$entry],
            ],
        ]);

        $this->assertSame([], $response['config']['promptTemplates']);
    }

    #[Test]
    public function prompt_templates_resolve_multilang_fields_for_user_language(): void
    {
        $response = $this->callContextRoute([
            'languages' => true,
            'johannschopplich.copilot' => [
                'providers' => ['openai' => ['apiKey' => 'test-key']],
                'promptTemplates' => [
                    [
                        'label'  => ['en' => 'Summarize', 'de' => 'Zusammenfassen'],
                        'prompt' => ['en' => 'Summarize this.', 'de' => 'Fasse dies zusammen.'],
                    ],
                ],
            ],
        ]);

        // Default language resolution falls back to `en` when no languages configured
        $this->assertSame('Summarize', $response['config']['promptTemplates'][0]['label']);
        $this->assertSame('Summarize this.', $response['config']['promptTemplates'][0]['prompt']);
    }

    /** @return array<string, array{0: mixed, 1: mixed}> */
    public static function completionValues(): array
    {
        return [
            'false stays false'                    => [false, false],
            'true expands to default debounce'     => [true, ['debounce' => 1000]],
            'empty array disables feature'         => [[], false],
            'debounce honors minimum of 500ms'     => [['debounce' => 100], ['debounce' => 500]],
            'debounce passes values above minimum' => [['debounce' => 2500], ['debounce' => 2500]],
        ];
    }

    #[Test]
    #[DataProvider('completionValues')]
    public function completion_value_is_normalised(mixed $input, mixed $expected): void
    {
        $response = $this->callContextRoute([
            'johannschopplich.copilot' => [
                'providers'  => ['openai' => ['apiKey' => 'test-key']],
                'completion' => $input,
            ],
        ]);

        $this->assertSame($expected, $response['config']['completion']);
    }

    #[Test]
    public function api_key_closures_are_resolved_to_boolean_flags(): void
    {
        $response = $this->callContextRoute([
            'johannschopplich.copilot' => [
                'providers' => [
                    'openai' => ['apiKey' => fn () => 'resolved-key'],
                    'google' => ['apiKey' => fn () => null],
                ],
            ],
        ]);

        $this->assertTrue($response['config']['providers']['openai']['hasApiKey']);
        $this->assertFalse($response['config']['providers']['google']['hasApiKey']);
        $this->assertArrayNotHasKey('apiKey', $response['config']['providers']['openai']);
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
