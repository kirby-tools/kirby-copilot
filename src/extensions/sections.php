<?php

use Kirby\Cms\PluginAsset;
use Kirby\Toolkit\I18n;

return [
    'copilot' => [
        'props' => [
            'label' => fn ($label = null) => I18n::translate($label, $label),
            'field' => fn ($field = null) => $field,
            'userPrompt' => fn ($userPrompt = null) => is_string($userPrompt) ? trim($userPrompt) : $userPrompt,
            'systemPrompt' => fn ($systemPrompt = null) => is_string($systemPrompt) ? trim($systemPrompt) : $systemPrompt,
            'storage' => fn ($storage = true) => $storage !== false,
            'editable' => fn ($editable = true) => $editable,
            'files' => fn ($files = null) => $files ?? true,
            'logLevel' => fn ($logLevel = null) => in_array($logLevel, ['error', 'warn', 'info', 'debug'], true) ? $logLevel : 'warn'
        ],
        'computed' => [
            'supported' => function () {
                $field = $this->model()->blueprint()->fields()[$this->field] ?? null;
                $type = $field['type'] ?? null;

                return in_array(
                    $type,
                    ['blocks', 'text', 'textarea', 'writer'],
                    true
                );
            },
            'config' => function () {
                /** @var \Kirby\Cms\App */
                $kirby = $this->kirby();
                $config = $kirby->option('johannschopplich.copilot', []);

                $defaultConfig = [
                    'provider' => 'openai',
                    'providers' => [
                        'openai' => [
                            'model' => [
                                'default' => 'gpt-4-turbo-preview',
                                'vision' => 'gpt-4-vision-preview'
                            ]
                        ]
                    ],
                    'temperature' => 0.5,
                    'maxGenerationTokens' => 1024,
                    'systemPrompt' => 'Provide responses in HTML format, including only the content that would go inside the <body> tags. Do not include the <head> section or any other parts of a full HTML document structure.',
                    'blocksUpdateThrottle' => 250
                ];

                // Merge user configuration with defaults
                $config = array_replace_recursive($defaultConfig, $config);

                // Lowercase model provider name
                $config['provider'] = strtolower($config['provider']);

                // Lowercase model providers configuration keys
                $config['providers'] = array_change_key_case($config['providers'], CASE_LOWER);

                // Normalize OpenAI model configuration
                if (isset($config['providers']['openai']['model']) && is_string($config['providers']['openai']['model'])) {
                    $config['providers']['openai']['model'] = [
                        'default' => $config['providers']['openai']['model'],
                        'vision' => $defaultConfig['providers']['openai']['model']['vision']
                    ];
                }

                // Require a minimum throttle to avoid spamming the HTML to blocks API
                $config['blocksUpdateThrottle'] = max(50, $config['blocksUpdateThrottle']);

                return $config;
            },
            'assets' => function () {
                /** @var \Kirby\Cms\App */
                $kirby = $this->kirby();
                $plugin = $kirby->plugin('johannschopplich/copilot');

                return $plugin
                    ->assets()
                    ->clone()
                    ->map(fn (PluginAsset $asset) => [
                        'filename' => $asset->filename(),
                        'url' => $asset->url()
                    ])
                    ->values();
            },
            'modelFile' => function () {
                /** @var \Kirby\Cms\File */
                $model = $this->model();

                if ($model::CLASS_ALIAS !== 'file') {
                    return null;
                }

                if ($this->files !== 'auto') {
                    return null;
                }

                $mime = $model->mime();
                $url = $model->url();

                // Ensure the image context is supported by GPT Vision
                if (str_starts_with($mime, 'image/')) {
                    $targetSize = 2048;
                    /** @var \Kirby\Cms\FileVersion|\Kirby\Cms\File|\Kirby\Filesystem\Asset */
                    $thumb = null;
                    $width = $model->width();
                    $height = $model->height();
                    $defaultOptions = [
                        'format' => 'jpg',
                        'quality' => 60
                    ];

                    // Resize images if larger than 2048px
                    if ($width > $targetSize || $height > $targetSize) {
                        if ($width > $height) {
                            $thumb = $model->thumb(array_merge($defaultOptions, ['width' => $targetSize]));
                        } else {
                            $thumb = $model->thumb(array_merge($defaultOptions, ['height' => $targetSize]));
                        }
                    } else {
                        $thumb = $model->thumb($defaultOptions);
                    }

                    $mime = $thumb->mime();
                    $url = $thumb->url();
                }

                return [
                    'mime' => $mime,
                    'url' => $url
                ];
            }
        ]
    ]
];
