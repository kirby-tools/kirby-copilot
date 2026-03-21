<?php

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
                    'provider' => 'google',
                    'providers' => [
                        'openai' => [
                            'model' => 'gpt-5.4',
                            'completionModel' => 'gpt-5-nano'
                        ],
                        'google' => [
                            'model' => 'gemini-3.1-pro-preview',
                            'completionModel' => 'gemini-3-flash-preview'
                        ],
                        'anthropic' => [
                            'model' => 'claude-sonnet-4-6',
                            'completionModel' => 'claude-haiku-4-5-20251001'
                        ],
                        'mistral' => [
                            'model' => 'mistral-large-latest',
                            'completionModel' => 'mistral-small-latest'
                        ]
                    ],
                    'reasoningEffort' => 'low',
                    'logLevel' => 'warn'
                ];

                // Merge user configuration with defaults
                $config = array_replace_recursive($defaultConfig, $config);

                // Lowercase model provider name
                $config['provider'] = strtolower($config['provider']);

                // Validate provider
                $validProviders = ['openai', 'google', 'anthropic', 'mistral'];
                if (!in_array($config['provider'], $validProviders, true)) {
                    if ($kirby->option('debug')) {
                        throw new InvalidArgumentException(
                            'Invalid provider: ' . $config['provider'] .
                            '. Must be one of: ' . implode(', ', $validProviders)
                        );
                    }
                    $config['provider'] = 'google';
                }

                // Lowercase model providers configuration keys
                $config['providers'] = array_change_key_case($config['providers'], CASE_LOWER);

                // Convert API keys to boolean flags (frontend validation without exposing secrets)
                $config['providers'] = array_map(
                    function ($provider) use ($kirby) {
                        $apiKey = $provider['apiKey'] ?? null;
                        // Resolve closure if provided
                        if ($apiKey instanceof Closure) {
                            $apiKey = $apiKey($kirby);
                        }
                        return ['hasApiKey' => !empty($apiKey)] + array_diff_key($provider, ['apiKey' => true]);
                    },
                    $config['providers']
                );

                // Validate reasoning effort
                $validReasoningEfforts = ['none', 'low', 'medium', 'high'];
                if (!in_array($config['reasoningEffort'], $validReasoningEfforts, true)) {
                    if ($kirby->option('debug')) {
                        throw new InvalidArgumentException(
                            'Invalid reasoningEffort: ' . $config['reasoningEffort'] .
                            '. Must be one of: ' . implode(', ', $validReasoningEfforts)
                        );
                    }
                    $config['reasoningEffort'] = 'low';
                }

                // Validate and normalize completion config
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

                // Process config templates with multilang support
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
                // Ensure PHP doesn't timeout during long AI generations
                @set_time_limit(0);
                @ini_set('zlib.output_compression', '0');
                @ob_implicit_flush(true);

                $providerParam = $kirby->request()->query()->get('provider');
                $provider = match ($providerParam) {
                    'openai', 'google', 'anthropic', 'mistral' => $providerParam,
                    default => throw new InvalidArgumentException('Invalid provider: ' . $providerParam),
                };

                $config = $kirby->option('johannschopplich.copilot', []);
                $apiKey = $config['providers'][$provider]['apiKey'] ?? null;

                if ($apiKey instanceof Closure) {
                    $apiKey = $apiKey($kirby);
                }

                if (!$apiKey) {
                    throw new InvalidArgumentException('Missing API key for provider: ' . $provider);
                }

                $targetUrl = $kirby->request()->header('X-Proxy-Target');

                if (!$targetUrl) {
                    throw new InvalidArgumentException('Missing X-Proxy-Target header');
                }

                $body = file_get_contents('php://input');

                $curlHeaders = [];
                $skipHeaders = [
                    'Host',
                    'Content-Type',     // Handled explicitly below (not always in Kirby's headers())
                    'Content-Length',   // cURL calculates from CURLOPT_POSTFIELDS
                    'Connection',       // Hop-by-hop, connection-specific
                    'Transfer-Encoding', // Hop-by-hop, handled by cURL
                    'X-Proxy-Target',
                    'X-Csrf'
                ];

                foreach ($kirby->request()->headers() as $name => $value) {
                    if (in_array($name, $skipHeaders, true)) {
                        continue;
                    }

                    // Replace marker with real API key
                    if (str_contains($value, '__KIRBY_COPILOT_PROXY__')) {
                        $value = str_replace('__KIRBY_COPILOT_PROXY__', $apiKey, $value);
                    }

                    $curlHeaders[] = "{$name}: {$value}";
                }

                // Content-Type isn't prefixed with `HTTP_` in `$_SERVER`, so Kirby's
                // `headers()` excludes it. Forward it to prevent body misinterpretation.
                $contentType = $_SERVER['CONTENT_TYPE'] ?? $_SERVER['HTTP_CONTENT_TYPE'] ?? null;
                if ($contentType) {
                    $curlHeaders[] = "Content-Type: {$contentType}";
                } elseif (is_string($body) && preg_match('/^\s*[\[{]/', $body)) {
                    $curlHeaders[] = 'Content-Type: application/json';
                }

                // Disable output buffering for real-time streaming
                while (ob_get_level()) {
                    ob_end_clean();
                }

                // SSE headers
                header('Content-Type: text/event-stream');
                header('Cache-Control: no-store');
                header('Connection: keep-alive');
                // Disable nginx proxy buffering
                header('X-Accel-Buffering: no');
                // Avoid downstream/proxy content encoding that could buffer or
                // delay streaming chunks.
                header('Content-Encoding: identity');

                $httpCode = 200;
                $ch = curl_init($targetUrl);

                $curlOptions = [
                    // Request options
                    CURLOPT_POST => true,
                    CURLOPT_POSTFIELDS => $body,
                    CURLOPT_HTTPHEADER => $curlHeaders,
                    // Forward error status codes and relevant headers from upstream
                    CURLOPT_HEADERFUNCTION => function ($ch, $header) use (&$httpCode) {
                        // Parse HTTP status line (`HTTP/1.1 200 OK`, `HTTP/2 200`, etc.)
                        if (preg_match('/^HTTP\/\S+\s+(\d+)/', $header, $matches)) {
                            $httpCode = (int)$matches[1];
                            if ($httpCode >= 400) {
                                http_response_code($httpCode);
                            }
                        }

                        // Forward relevant headers on errors
                        if ($httpCode >= 400) {
                            $headerLower = strtolower($header);
                            if (str_starts_with($headerLower, 'content-type:') ||
                                str_starts_with($headerLower, 'retry-after:')) {
                                header(trim($header));
                            }
                        }

                        return strlen($header);
                    },
                    // Streaming
                    CURLOPT_RETURNTRANSFER => false,
                    CURLOPT_WRITEFUNCTION => function ($ch, $chunk) {
                        echo $chunk;
                        @ob_flush();
                        flush();
                        return strlen($chunk);
                    },
                    // Timeouts
                    CURLOPT_CONNECTTIMEOUT => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_LOW_SPEED_LIMIT => 1,
                    // Some providers pause briefly while generating long outputs.
                    // Keep the stream alive longer to avoid truncating JSON.
                    CURLOPT_LOW_SPEED_TIME => 240,
                    // SSL/TLS
                    CURLOPT_SSL_VERIFYPEER => true,
                    // Accept all supported content encodings (gzip, deflate, br)
                    CURLOPT_ENCODING => '',
                ];

                // Use bundled CA certificate if system doesn't have one configured
                $systemCaInfo = ini_get('curl.cainfo');
                if (empty($systemCaInfo) || !@is_file($systemCaInfo)) {
                    $curlOptions[CURLOPT_CAINFO] = $kirby->root('kirby') . '/cacert.pem';
                }

                curl_setopt_array($ch, $curlOptions);
                curl_exec($ch);

                // Log cURL errors for debugging (response already streamed to client)
                if ($errorCode = curl_errno($ch)) {
                    error_log("Kirby Copilot proxy cURL error ({$errorCode}): " . curl_error($ch));
                }

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

                // Collect all block blueprints from the extension registry
                // (includes core blocks and plugin-registered blocks)
                $blockBlueprints = [];

                foreach ($kirby->extensions('blueprints') as $name => $blueprint) {
                    if (str_starts_with($name, 'blocks/')) {
                        $blockType = substr($name, 7);
                        $blockBlueprints[$blockType] = $name;
                    }
                }

                // Discover project-specific blocks from `site/blueprints/blocks`
                // (these override registry entries following Kirby's priority)
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

                        // Extract fields from blueprint props (tabs or direct fields)
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

                        $normalizeFieldOptions = static function (array $fields) use (&$normalizeFieldOptions): array {
                            foreach ($fields as &$field) {
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

                                // Recurse into nested fields (structure, object)
                                if (isset($field['fields']) && is_array($field['fields'])) {
                                    $field['fields'] = $normalizeFieldOptions($field['fields']);
                                }
                            }

                            return $fields;
                        };

                        $result[] = [
                            'name' => $name,
                            'type' => $blockType,
                            'description' => $props['description'] ?? null,
                            'fields' => FieldNormalizer::normalizeFields($normalizeFieldOptions($fields)),
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
