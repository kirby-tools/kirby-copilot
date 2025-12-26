<?php

use JohannSchopplich\Licensing\Licenses;
use Kirby\Cms\App;
use Kirby\Cms\Fieldset;
use Kirby\Cms\Fieldsets;
use Kirby\Cms\Find;
use Kirby\Exception\InvalidArgumentException;
use Kirby\Form\Form;

return [
    'routes' => fn (App $kirby) => [
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
                            'model' => 'gpt-5.2',
                            'completionModel' => 'gpt-5-nano'
                        ],
                        'google' => [
                            'model' => 'gemini-3-flash-preview',
                            'completionModel' => 'gemini-3-flash-preview'
                        ],
                        'anthropic' => [
                            'model' => 'claude-sonnet-4-5-20250929',
                            'completionModel' => 'claude-haiku-4-5-20251001'
                        ],
                        'mistral' => [
                            'completionModel' => 'mistral-small-latest'
                        ]
                    ],
                    'logLevel' => 'warn',
                    'reasoningEffort' => 'low',
                    'excludedBlocks' => []
                ];

                // Merge user configuration with defaults
                $config = array_replace_recursive($defaultConfig, $config);

                // Lowercase model provider name
                $config['provider'] = strtolower($config['provider']);

                // Lowercase model providers configuration keys
                $config['providers'] = array_change_key_case($config['providers'], CASE_LOWER);

                // Validate reasoning effort
                if (!in_array($config['reasoningEffort'], ['none', 'low', 'medium', 'high'], true)) {
                    $config['reasoningEffort'] = 'low';
                }

                // Convert API keys to boolean flags (frontend validation without exposing secrets)
                $config['providers'] = array_map(
                    fn ($provider) => ['hasApiKey' => !empty($provider['apiKey'])] + array_diff_key($provider, ['apiKey' => true]),
                    $config['providers']
                );

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
                $providerParam = $kirby->request()->query()->get('provider');
                $provider = match ($providerParam) {
                    'openai', 'google', 'anthropic', 'mistral' => $providerParam,
                    default => throw new InvalidArgumentException('Invalid provider: ' . $providerParam),
                };

                $config = $kirby->option('johannschopplich.copilot', []);
                $apiKey = $config['providers'][$provider]['apiKey'] ?? null;

                if (!$apiKey) {
                    throw new InvalidArgumentException('Missing API key for provider: ' . $provider);
                }

                $targetUrl = $kirby->request()->header('X-Proxy-Target');

                if (!$targetUrl) {
                    throw new InvalidArgumentException('Missing X-Proxy-Target header');
                }

                $body = file_get_contents('php://input');

                // Build headers, replacing marker with real key
                $curlHeaders = [];
                $skipHeaders = ['Host', 'Content-Length', 'X-Proxy-Target', 'X-Csrf'];

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

                // Determine CA certificate
                $systemCaInfo = ini_get('curl.cainfo');
                $hasSystemCa = !empty($systemCaInfo) && @is_file($systemCaInfo);
                $internalCaFile = $kirby->root('kirby') . '/cacert.pem';

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

                $httpCode = 200;
                $ch = curl_init($targetUrl);
                curl_setopt_array($ch, [
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
                        flush();
                        return strlen($chunk);
                    },
                    // Timeouts
                    CURLOPT_CONNECTTIMEOUT => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_LOW_SPEED_LIMIT => 1,
                    CURLOPT_LOW_SPEED_TIME => 120,
                    // SSL/TLS
                    CURLOPT_SSL_VERIFYPEER => true,
                    ...($hasSystemCa ? [] : [CURLOPT_CAINFO => $internalCaFile]),
                    // Accept all supported content encodings (gzip, deflate, br)
                    CURLOPT_ENCODING => '',
                ]);

                curl_exec($ch);
                curl_close($ch);
                exit;
            }
        ],
        [
            'pattern' => '__copilot__/model-fields',
            'method' => 'GET',
            'action' => function () use ($kirby) {
                $id = $kirby->request()->query()->get('id');

                // Decode encoded Panel view path
                $model = match (true) {
                    // See `filePattern` in Kirby's `config/api/routes/files.php`
                    preg_match('!(account|pages\/[^\/]+|site|users\/[^\/]+)\/files\/(.+)!', $id, $matches) => Find::file(
                        match (true) {
                            str_starts_with($matches[1], 'pages/') => substr($matches[1], 6),
                            str_starts_with($matches[1], 'users/') => substr($matches[1], 6),
                            default => $matches[1]
                        },
                        $matches[2]
                    ),
                    str_starts_with($id, 'pages/') => Find::page(substr($id, 6)),
                    $id === 'site' => $kirby->site(),
                    default => null
                };

                $fields = $model->blueprint()->fields();
                $content = $model->content()->toArray();
                $form = new Form([
                    'fields' => $fields,
                    'values' => $content,
                    'model' => $model,
                    'strict' => true
                ]);

                $fields = $form->fields()->toArray();
                unset($fields['title'], $fields['slug']);

                foreach ($fields as $index => $props) {
                    unset($fields[$index]['value']);
                }

                return $fields;
            }
        ],
        [
            'pattern' => '__copilot__/fieldsets',
            'method' => 'GET',
            'action' => function () use ($kirby) {
                // Start with Kirby's default block fieldsets configuration
                $blockBlueprints = $kirby->option('blocks.fieldsets', [
                    'code'     => 'blocks/code',
                    'gallery'  => 'blocks/gallery',
                    'heading'  => 'blocks/heading',
                    'image'    => 'blocks/image',
                    'line'     => 'blocks/line',
                    'list'     => 'blocks/list',
                    'markdown' => 'blocks/markdown',
                    'quote'    => 'blocks/quote',
                    'text'     => 'blocks/text',
                    'video'    => 'blocks/video',
                ]);

                // Add blocks from extensions (plugins)
                foreach ($kirby->extensions('blueprints') as $name => $blueprint) {
                    if (dirname($name) === 'blocks') {
                        $blockType = basename($name);

                        if (!isset($blockBlueprints[$blockType])) {
                            $blockBlueprints[$blockType] = 'blocks/' . $blockType;
                        }
                    }
                }

                // Discover custom blocks from `site/blueprints/blocks` directory
                $blocksDir = $kirby->root('blueprints') . '/blocks';

                if (is_dir($blocksDir)) {
                    $customBlocks = glob($blocksDir . '/*.yml');
                    foreach ($customBlocks as $blockFile) {
                        $blockType = basename($blockFile, '.yml');

                        if (!isset($blockBlueprints[$blockType])) {
                            $blockBlueprints[$blockType] = 'blocks/' . $blockType;
                        }
                    }
                }

                // Create fieldsets with all discovered blocks
                $fieldsets = Fieldsets::factory($blockBlueprints);

                return $fieldsets->values(fn (Fieldset $fieldset) => [
                    'name' => $fieldset->name(),
                    'type' => $fieldset->type(),
                    'fields' => $fieldset->fields(),
                ]);
            }
        ],
        [
            'pattern' => '__copilot__/activate',
            'method' => 'POST',
            'action' => function () {
                $licenses = Licenses::read('johannschopplich/kirby-copilot');
                return $licenses->activateFromRequest();
            }
        ]
    ]
];
