<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot;

use JohannSchopplich\Copilot\AI\ProviderName;
use Kirby\Cms\App;
use Kirby\Exception\InvalidArgumentException;

final class PanelContext
{
    /**
     * Builds the plugin configuration the Panel receives: shape-checked,
     * filled with defaults and stripped of every API key.
     *
     * The return names every key it emits, so an option never reaches the
     * browser unless the Panel reads it. `systemPrompt` and `excludedBlocks`
     * are listed for that reason alone – nothing else here touches them.
     *
     * @return array<string, mixed>
     */
    public static function config(): array
    {
        $kirby = App::instance();
        $config = $kirby->option('johannschopplich.copilot', []);

        // Normalize provider keys before the defaults merge – a
        // `providers.OpenAI` entry would otherwise shadow the seeded
        // `providers.openai` and lose its model defaults.
        $providers = self::validateType($config['providers'] ?? [], 'providers', ['array'], []);
        foreach ($providers as $name => $providerConfig) {
            $providers[$name] = self::validateType($providerConfig, 'providers.' . $name, ['array'], []);
        }

        // Two spellings of one provider name collapse into a single entry
        // once the keys are lowercased, so the loser is lost without a trace.
        $providerNames = array_count_values(array_map('strtolower', array_keys($providers)));
        $conflictingNames = array_keys(array_filter($providerNames, fn (int $count) => $count > 1));

        if ($conflictingNames !== [] && $kirby->option('debug')) {
            // TODO: Drop K4 compat in v4 – use named arg (message:) once Kirby 5 is the floor
            throw new InvalidArgumentException(
                'Conflicting provider keys: ' . implode(', ', $conflictingNames) .
                ' – provider names are case-insensitive'
            );
        }

        $config['providers'] = ProviderName::normalizeProviders($providers);

        $defaultConfig = [
            'provider' => ProviderName::Google->value,
            'providers' => [],
            'reasoningEffort' => 'low',
            'logLevel' => 'warn'
        ];

        foreach (ProviderName::cases() as $provider) {
            $defaultConfig['providers'][$provider->value] = [
                'model' => $provider->defaultModel()
            ];
        }

        $config = array_replace_recursive($defaultConfig, $config);
        $config['provider'] = strtolower(
            self::validateType($config['provider'], 'provider', ['string'], ProviderName::Google->value)
        );

        self::validateEnum($config, 'provider', array_column(ProviderName::cases(), 'value'), ProviderName::Google->value);

        // The Panel only ever needs to know a key is present, never the key
        $config['providers'] = array_map(
            function (array $provider) use ($kirby) {
                $apiKey = ProviderName::resolveApiKey($provider['apiKey'] ?? null, $kirby);

                return [
                    'hasApiKey' => ProviderName::isUsableApiKey($apiKey)
                ] + array_diff_key($provider, ['apiKey' => true]);
            },
            $config['providers']
        );

        self::validateEnum($config, 'reasoningEffort', ['provider-default', 'none', 'minimal', 'low', 'medium', 'high', 'xhigh'], 'low');
        self::validateEnum($config, 'providers.openai.api', ['chat', 'responses']);
        self::validateEnum($config, 'logLevel', ['error', 'warn', 'info', 'debug'], 'warn');

        $config['completion'] = self::normalizeCompletion($config['completion'] ?? true);

        $language = $kirby->user()?->language() ?? $kirby->defaultLanguage()?->code() ?? 'en';
        $config['promptTemplates'] = self::normalizePromptTemplates(
            self::validateType($config['promptTemplates'] ?? [], 'promptTemplates', ['array'], []),
            $language
        );
        $config['skills'] = self::normalizeSkills(
            self::validateType($config['skills'] ?? [], 'skills', ['array'], []),
            $language
        );

        return [
            'provider' => $config['provider'],
            'providers' => $config['providers'],
            'systemPrompt' => $config['systemPrompt'] ?? null,
            'reasoningEffort' => $config['reasoningEffort'] ?? null,
            'promptTemplates' => $config['promptTemplates'],
            'skills' => $config['skills'],
            'excludedBlocks' => $config['excludedBlocks'] ?? null,
            'completion' => $config['completion'],
            'logLevel' => $config['logLevel']
        ];
    }

    /**
     * Enforces the types a config option is documented to accept. On
     * mismatch: throws in debug mode, else applies `$fallback` so a
     * single mistyped option can't take the whole Panel down.
     *
     * @param list<string> $types
     */
    private static function validateType(mixed $value, string $path, array $types, mixed $fallback): mixed
    {
        if (in_array(get_debug_type($value), $types, true)) {
            return $value;
        }

        if (App::instance()->option('debug')) {
            // TODO: Drop K4 compat in v4 – use named arg (message:) once Kirby 5 is the floor
            throw new InvalidArgumentException(
                'Invalid ' . $path . ': expected ' . implode(' or ', $types) .
                ', got ' . get_debug_type($value)
            );
        }

        return $fallback;
    }

    /**
     * Walks a dot-notated config path and enforces an enum. On mismatch:
     * throws in debug mode, else applies `$fallback` (or unsets when null).
     *
     * @param array<string, mixed> $config
     * @param list<string> $allowed
     */
    private static function validateEnum(array &$config, string $path, array $allowed, mixed $fallback = null): void
    {
        $keys = explode('.', $path);
        $lastKey = array_pop($keys);
        $parent = &$config;

        foreach ($keys as $key) {
            if (!isset($parent[$key]) || !is_array($parent[$key])) {
                return;
            }
            $parent = &$parent[$key];
        }

        if (!array_key_exists($lastKey, $parent) || $parent[$lastKey] === null) {
            return;
        }

        if (in_array($parent[$lastKey], $allowed, true)) {
            return;
        }

        if (App::instance()->option('debug')) {
            $value = $parent[$lastKey];

            // TODO: Drop K4 compat in v4 – use named arg (message:) once Kirby 5 is the floor
            throw new InvalidArgumentException(
                'Invalid ' . $path . ': ' . (is_scalar($value) ? (string)$value : json_encode($value)) .
                '. Must be one of: ' . implode(', ', $allowed)
            );
        }

        if ($fallback === null) {
            unset($parent[$lastKey]);
        } else {
            $parent[$lastKey] = $fallback;
        }
    }

    private static function normalizeCompletion(mixed $completion): array|false
    {
        $defaults = ['debounce' => 1000];
        $completion = self::validateType($completion, 'completion', ['array', 'bool'], true);

        if ($completion === false || $completion === []) {
            return false;
        }

        if ($completion === true) {
            return $defaults;
        }

        $completion = array_replace_recursive($defaults, $completion);
        $completion['debounce'] = max(500, (int)$completion['debounce']);

        return $completion;
    }

    /**
     * @param array<mixed> $templates
     * @return list<array{label: string, prompt: string}>
     */
    private static function normalizePromptTemplates(array $templates, string $language): array
    {
        return array_values(array_filter(array_map(
            function ($template) use ($language) {
                $label = self::resolveMultilang($template['label'] ?? null, $language);
                $prompt = self::resolveMultilang($template['prompt'] ?? null, $language);

                return $label && $prompt ? compact('label', 'prompt') : null;
            },
            $templates
        )));
    }

    /**
     * @param array<mixed> $skills
     * @return list<array{id: string, label: string, instructions: string}>
     */
    private static function normalizeSkills(array $skills, string $language): array
    {
        return array_values(array_filter(array_map(
            function ($skill) use ($language) {
                $id = is_string($skill['id'] ?? null) ? trim($skill['id']) : null;
                $label = self::resolveMultilang($skill['label'] ?? null, $language);
                $instructions = self::resolveMultilang($skill['instructions'] ?? null, $language);

                if (is_string($label)) {
                    $label = trim($label);
                }

                if (is_string($instructions)) {
                    $instructions = trim($instructions);
                }

                if (!$id || !$label || !$instructions) {
                    return null;
                }

                // Editors type `@skill://<id>`, so restrict ids to slug-safe
                // characters and reject anything that wouldn't round-trip.
                if (!preg_match('/^[\w\-]+$/', $id)) {
                    return null;
                }

                return compact('id', 'label', 'instructions');
            },
            $skills
        )));
    }

    private static function resolveMultilang(mixed $value, string $language): string|null
    {
        return match (true) {
            is_string($value) && $value !== '' => $value,
            is_array($value) => $value[$language] ?? $value['en'] ?? current($value) ?: null,
            default => null,
        };
    }
}
