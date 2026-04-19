<?php

use JohannSchopplich\KirbyTools\FieldNormalizer;
use JohannSchopplich\KirbyTools\FieldResolver;
use JohannSchopplich\KirbyTools\ModelResolver;
use JohannSchopplich\Licensing\LicensePanel;
use JohannSchopplich\Licensing\Licenses;
use Kirby\Cms\App;
use Kirby\Cms\Blueprint;
use Kirby\Cms\Response;
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
                            'completionModel' => 'gpt-5.4-nano'
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
                            'model' => 'mistral-small-latest',
                            'completionModel' => 'mistral-small-latest'
                        ]
                    ],
                    'reasoningEffort' => 'low',
                    'logLevel' => 'warn'
                ];

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

                $validateEnum($config, 'provider', ['openai', 'google', 'anthropic', 'mistral'], 'google');

                $config['providers'] = array_change_key_case($config['providers'], CASE_LOWER);

                // Convert API keys to boolean flags so the frontend can validate
                // presence without exposing secrets.
                $config['providers'] = array_map(
                    function ($provider) use ($kirby) {
                        $apiKey = $provider['apiKey'] ?? null;
                        if ($apiKey instanceof Closure) {
                            $apiKey = $apiKey($kirby);
                        }
                        return ['hasApiKey' => !empty($apiKey)] + array_diff_key($provider, ['apiKey' => true]);
                    },
                    $config['providers']
                );

                $validateEnum($config, 'reasoningEffort', ['none', 'low', 'medium', 'high'], 'low');
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

                // Restrict proxy target to known AI SDK default hosts plus the
                // host of any configured `providers.<provider>.baseUrl`. Prevents
                // SSRF and API-key exfiltration via attacker-supplied targets.
                $parsedTarget = parse_url($targetUrl);
                $targetScheme = strtolower($parsedTarget['scheme'] ?? '');
                $targetHost = strtolower($parsedTarget['host'] ?? '');

                if (!in_array($targetScheme, ['http', 'https'], true) || $targetHost === '') {
                    throw new InvalidArgumentException('Invalid proxy target URL');
                }

                $allowedHosts = [
                    'api.openai.com',
                    'api.anthropic.com',
                    'generativelanguage.googleapis.com',
                    'api.mistral.ai',
                ];

                $configuredBaseUrl = $config['providers'][$provider]['baseUrl'] ?? null;
                if (is_string($configuredBaseUrl)) {
                    $configuredHost = parse_url($configuredBaseUrl, PHP_URL_HOST);
                    if (is_string($configuredHost) && $configuredHost !== '') {
                        $allowedHosts[] = strtolower($configuredHost);
                    }
                }

                if (!in_array($targetHost, $allowedHosts, true)) {
                    throw new InvalidArgumentException('Proxy target host not allowed: ' . $targetHost);
                }

                $body = file_get_contents('php://input');

                // Upstream headers that the Vercel AI SDK provider packages actually send
                $allowedUpstreamHeaders = [
                    'user-agent',
                    'authorization',                              // OpenAI, Mistral (Bearer)
                    'x-api-key',                                  // Anthropic
                    'x-goog-api-key',                             // Google
                    'openai-organization',
                    'openai-project',
                    'anthropic-version',
                    'anthropic-beta',
                    'anthropic-dangerous-direct-browser-access',
                ];

                // Restrict marker substitution to the actual header names,
                // so an attacker-injected marker in any other header cannot
                // exfiltrate the real API key to upstream.
                $markerAuthHeaders = ['authorization', 'x-api-key', 'x-goog-api-key'];

                $curlHeaders = [];
                foreach ($kirby->request()->headers() as $name => $value) {
                    $nameLower = strtolower($name);
                    if (!in_array($nameLower, $allowedUpstreamHeaders, true)) {
                        continue;
                    }

                    if (str_contains($value, '__KIRBY_COPILOT_PROXY__')) {
                        if (!in_array($nameLower, $markerAuthHeaders, true)) {
                            continue;
                        }
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

                // Pre-emit infra/transport hints that are deterministic and needed
                // by the web server to disable buffering before the first byte.
                // Status and Content-Type are emitted later from the upstream
                // response so error JSON (e.g. Gateway 404) surfaces correctly.
                // `no-transform` prevents CDNs (e.g. Cloudflare) from auto-
                // compressing text/event-stream responses, which buffers chunks.
                header('Cache-Control: no-store, no-transform');
                // Disable nginx proxy buffering
                header('X-Accel-Buffering: no');

                $ch = curl_init($targetUrl);
                $contentTypeSet = false;
                $lastStatus = 0;

                $curlOptions = [
                    // Request body + headers
                    CURLOPT_POST => true,
                    CURLOPT_POSTFIELDS => $body,
                    CURLOPT_HTTPHEADER => $curlHeaders,
                    // Forward upstream status + Content-Type so upstream errors
                    // (e.g. Gateway 404 JSON) surface to the client correctly.
                    CURLOPT_HEADERFUNCTION => function ($ch, $header) use (&$contentTypeSet, &$lastStatus) {
                        if (preg_match('/^HTTP\/\S+\s+(\d+)/', $header, $matches)) {
                            $statusCode = (int)$matches[1];
                            // 1xx responses (100 Continue, 103 Early Hints) precede
                            // the final status line; skip them so the real 2xx-5xx wins.
                            if ($statusCode < 200) {
                                return strlen($header);
                            }
                            $lastStatus = $statusCode;
                            if (!headers_sent()) {
                                http_response_code($statusCode);
                            }
                            $contentTypeSet = false;
                            return strlen($header);
                        }

                        if (!$contentTypeSet && !headers_sent() &&
                            preg_match('/^Content-Type:\s*(.+?)\s*$/i', $header, $matches)) {
                            header('Content-Type: ' . trim($matches[1]));
                            $contentTypeSet = true;
                        }

                        // Forward Retry-After and similar variants on error responses so
                        // the AI SDK retry middleware honors provider backoff.
                        if ($lastStatus >= 400 && !headers_sent() &&
                            preg_match('/^(Retry-After(?:-Ms)?):\s*(.+?)\s*$/i', $header, $matches)) {
                            header($matches[1] . ': ' . $matches[2]);
                        }

                        return strlen($header);
                    },
                    // Stream response chunk-by-chunk to stdout
                    CURLOPT_WRITEFUNCTION => function ($ch, $chunk) {
                        echo $chunk;
                        flush();
                        return strlen($chunk);
                    },
                    // Timeouts
                    CURLOPT_CONNECTTIMEOUT => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_LOW_SPEED_LIMIT => 1,
                    // Reasoning-heavy models stall silently before the first
                    // token; 4 minutes covers typical first-token latency.
                    CURLOPT_LOW_SPEED_TIME => 240,
                    // SSL/TLS
                    CURLOPT_SSL_VERIFYPEER => true,
                    // Transparently decompress gzip/deflate/br responses so
                    // WRITEFUNCTION always sees plain bytes.
                    CURLOPT_ENCODING => '',
                ];

                // Use bundled CA certificate if system doesn't have one configured
                $systemCaInfo = ini_get('curl.cainfo');
                if (empty($systemCaInfo) || !@is_file($systemCaInfo)) {
                    $curlOptions[CURLOPT_CAINFO] = $kirby->root('kirby') . '/cacert.pem';
                }

                curl_setopt_array($ch, $curlOptions);
                curl_exec($ch);

                $errorCode = curl_errno($ch);

                if ($errorCode !== 0) {
                    // Surface transport failures as 502 JSON so the Panel shows
                    // an error instead of a silent empty stream.
                    error_log("Kirby Copilot proxy cURL error ({$errorCode}): " . curl_error($ch));

                    if (!headers_sent()) {
                        return Response::json([
                            'error' => [
                                'message' => 'Upstream request failed: ' . curl_error($ch),
                                'code'    => $errorCode,
                            ],
                        ], 502);
                    }
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
