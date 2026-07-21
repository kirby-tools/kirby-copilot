<?php

use JohannSchopplich\Copilot\AI\CurlProxyTransport;
use JohannSchopplich\Copilot\AI\ProviderName;
use JohannSchopplich\Copilot\AI\Proxy;
use JohannSchopplich\KirbyTools\FieldNormalizer;
use JohannSchopplich\KirbyTools\FieldResolver;
use JohannSchopplich\KirbyTools\ModelResolver;
use JohannSchopplich\Licensing\LicensePanel;
use JohannSchopplich\Licensing\Licenses;
use Kirby\Cms\App;
use Kirby\Cms\Blueprint;
use Kirby\Exception\InvalidArgumentException;
use Kirby\Toolkit\I18n;
use Kirby\Toolkit\Str;

return [
    'routes' => fn (App $kirby) => [
        ...LicensePanel::api('johannschopplich/kirby-copilot'),
        [
            'pattern' => '__copilot__/context',
            'method' => 'GET',
            'action' => function () use ($kirby) {
                $licenses = Licenses::read('johannschopplich/kirby-copilot');
                $config = $kirby->option('johannschopplich.copilot', []);

                $defaultConfig = [
                    'provider' => ProviderName::Google->value,
                    'providers' => [],
                    'reasoningEffort' => 'low',
                    'logLevel' => 'warn'
                ];

                foreach (ProviderName::cases() as $provider) {
                    $defaultConfig['providers'][$provider->value] = [
                        'model' => $provider->defaultModel(),
                        'completionModel' => $provider->defaultCompletionModel()
                    ];
                }

                $config = array_replace_recursive($defaultConfig, $config);
                $config['provider'] = strtolower($config['provider']);

                $invalidValueError = fn (string $field, mixed $value, array $valid): InvalidArgumentException =>
                    new InvalidArgumentException(
                        'Invalid ' . $field . ': ' . (is_scalar($value) ? (string)$value : json_encode($value)) .
                        '. Must be one of: ' . implode(', ', $valid)
                    );

                // Walks a dot-notated config path and enforces an enum. On mismatch:
                // throws in debug mode, else applies `$fallback` (or unsets when null).
                $validateEnum = function (array &$config, string $path, array $allowed, mixed $fallback = null) use ($kirby, $invalidValueError): void {
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

                    if ($kirby->option('debug')) {
                        throw $invalidValueError($path, $parent[$lastKey], $allowed);
                    }

                    if ($fallback === null) {
                        unset($parent[$lastKey]);
                    } else {
                        $parent[$lastKey] = $fallback;
                    }
                };

                $validateEnum($config, 'provider', array_column(ProviderName::cases(), 'value'), ProviderName::Google->value);

                $config['providers'] = array_change_key_case($config['providers'], CASE_LOWER);

                // Convert API keys to boolean flags so the frontend can validate
                // presence without exposing secrets.
                $config['providers'] = array_map(
                    fn (array $provider) => [
                        'hasApiKey' => !empty(ProviderName::resolveApiKey($provider['apiKey'] ?? null, $kirby))
                    ] + array_diff_key($provider, ['apiKey' => true]),
                    $config['providers']
                );

                $validateEnum($config, 'reasoningEffort', ['provider-default', 'none', 'minimal', 'low', 'medium', 'high', 'xhigh'], 'low');
                $validateEnum($config, 'providers.openai.api', ['chat', 'responses']);
                $validateEnum($config, 'logLevel', ['error', 'warn', 'info', 'debug'], 'warn');

                $completionDefaults = ['debounce' => 1000];
                $completion = $config['completion'] ?? true;

                if ($completion === false || $completion === []) {
                    $config['completion'] = false;
                } elseif ($completion === true) {
                    $config['completion'] = $completionDefaults;
                } else {
                    $config['completion'] = array_replace_recursive($completionDefaults, $completion);
                    // Enforce minimum debounce of 500ms
                    $config['completion']['debounce'] = max(500, (int)$config['completion']['debounce']);
                }

                $language = $kirby->user()?->language() ?? $kirby->defaultLanguage()?->code() ?? 'en';
                $resolveMultilang = fn (mixed $value): string|null => match (true) {
                    is_string($value) && $value !== '' => $value,
                    is_array($value) => $value[$language] ?? $value['en'] ?? current($value) ?: null,
                    default => null,
                };

                $config['promptTemplates'] = array_values(array_filter(array_map(
                    function ($template) use ($resolveMultilang) {
                        $label = $resolveMultilang($template['label'] ?? null);
                        $prompt = $resolveMultilang($template['prompt'] ?? null);

                        return $label && $prompt ? compact('label', 'prompt') : null;
                    },
                    $config['promptTemplates'] ?? []
                )));

                $config['skills'] = array_values(array_filter(array_map(
                    function ($skill) use ($resolveMultilang) {
                        $id = is_string($skill['id'] ?? null) ? trim($skill['id']) : null;
                        $label = $resolveMultilang($skill['label'] ?? null);
                        $instructions = $resolveMultilang($skill['instructions'] ?? null);

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
                    $config['skills'] ?? []
                )));

                $assets = $kirby
                    ->plugin('johannschopplich/copilot')
                    ->assets()
                    ->clone()
                    ->map(fn ($asset) => [
                        'filename' => $asset->filename(),
                        'url' => $asset->url()
                    ])
                    ->values();

                return [
                    'config' => $config,
                    'assets' => $assets,
                    'licenseStatus' => $licenses->getStatus()
                ];
            }
        ],
        [
            'pattern' => '__copilot__/proxy',
            'method' => 'POST',
            'action' => function () use ($kirby) {
                $response = (new Proxy($kirby, new CurlProxyTransport()))->handle();

                if ($response !== null) {
                    return $response;
                }

                // Bypass Kirby's response pipeline
                exit;
            }
        ],
        [
            'pattern' => '__copilot__/fieldsets',
            'method' => 'GET',
            'action' => function () use ($kirby) {
                // Use `Blueprint::extend()` + `Blueprint::fieldsProps()` instead of
                // `Fieldsets::factory()`, which internally evaluates computed field
                // properties (e.g. query-based options) and crashes without a model.

                $blockBlueprints = [];

                foreach ($kirby->extensions('blueprints') as $name => $blueprint) {
                    if (str_starts_with($name, 'blocks/')) {
                        $blockType = substr($name, 7);
                        $blockBlueprints[$blockType] = $name;
                    }
                }

                $blocksDir = $kirby->root('blueprints') . '/blocks';

                if (is_dir($blocksDir)) {
                    foreach (glob($blocksDir . '/*.yml') as $blockFile) {
                        $blockType = basename($blockFile, '.yml');
                        $blockBlueprints[$blockType] = 'blocks/' . $blockType;
                    }
                }

                $result = [];

                foreach ($blockBlueprints as $blockType => $blueprintName) {
                    try {
                        $props = Blueprint::extend($blueprintName);
                        $props['type'] ??= $blockType;

                        $fields = [];
                        $tabs = $props['tabs'] ?? [];

                        if (empty($tabs)) {
                            $fields = Blueprint::fieldsProps($props['fields'] ?? []);
                        } else {
                            foreach ($tabs as $tab) {
                                $tab = Blueprint::extend($tab);
                                $tabFields = Blueprint::fieldsProps($tab['fields'] ?? []);
                                $fields = array_merge($fields, $tabFields);
                            }
                        }

                        $name = $props['name'] ?? $props['title'] ?? Str::label($blockType);
                        $name = I18n::translate($name, $name);

                        $normalizeFieldProps = static function (array $fields) use (&$normalizeFieldProps): array {
                            foreach ($fields as &$field) {
                                if (isset($field['label'])) {
                                    $field['label'] = I18n::translate($field['label'], $field['label']);
                                }

                                if (isset($field['options']) && is_array($field['options'])) {
                                    $options = $field['options'];

                                    // Already in resolved format
                                    if (isset($options[0]['value'])) {
                                        // Pass through
                                    } elseif (isset($options['type'])) {
                                        // Query/API definitions can't be resolved without a model
                                        $field['options'] = [];
                                    } else {
                                        $normalizedData = [];
                                        foreach ($options as $key => $option) {
                                            if (is_array($option)) {
                                                $normalizedData[] = $option;
                                            } elseif (is_string($key)) {
                                                $normalizedData[] = ['text' => (string)$option, 'value' => $key];
                                            } else {
                                                $normalizedData[] = ['text' => (string)$option, 'value' => $option];
                                            }
                                        }
                                        $field['options'] = $normalizedData;
                                    }
                                }

                                if (isset($field['fields']) && is_array($field['fields'])) {
                                    $field['fields'] = $normalizeFieldProps($field['fields']);
                                }
                            }

                            return $fields;
                        };

                        $result[] = [
                            'name' => $name,
                            'type' => $blockType,
                            'description' => $props['description'] ?? null,
                            'fields' => FieldNormalizer::normalizeFields($normalizeFieldProps($fields)),
                        ];
                    } catch (\Throwable) {
                        // Skip blocks with invalid blueprints so one bad
                        // block doesn't break the entire endpoint
                        continue;
                    }
                }

                return $result;
            }
        ],
        [
            'pattern' => '__copilot__/model-fields',
            'method' => 'GET',
            'action' => function () use ($kirby) {
                $id = $kirby->request()->query()->get('id');
                $model = ModelResolver::resolveFromPath($id);
                return FieldNormalizer::normalizeFields(FieldResolver::resolveModelFields($model));
            }
        ]
    ]
];
