<?php

use Kirby\Toolkit\I18n;

return [
    'copilot' => [
        'props' => [
            'label' => fn ($label = null) => I18n::translate($label, $label),
            'field' => fn ($field = null) => $field,
            'userPrompt' => fn ($userPrompt = null) => is_string($userPrompt) ? trim($userPrompt) : $userPrompt,
            'systemPrompt' => fn ($systemPrompt = null) => is_string($systemPrompt) ? trim($systemPrompt) : $systemPrompt,
            'storage' => fn ($storage = true) => $storage,
            'editable' => fn ($editable = true) => $editable,
            'files' => fn ($files = true) => $files
        ],
        'computed' => [
            'supported' => function () {
                $field = $this->model->blueprint()->fields()[$this->field] ?? null;
                $type = $field['type'] ?? null;

                return in_array(
                    $type,
                    ['text', 'textarea', 'blocks'],
                    true
                );
            },
            'config' => function () {
                /** @var \Kirby\Cms\App $kirby */
                $kirby = $this->kirby();
                $config = $kirby->option('johannschopplich.copilot', []);

                $defaultConfig = [
                    'model' => [
                        'default' => 'gpt-4-1106-preview',
                        'vision' => 'gpt-4-vision-preview',
                    ],
                    'temperature' => 0.5,
                    'maxGenerationTokens' => 1024,
                    'systemPrompt' => 'Provide responses in HTML format, including only the content that would go inside the <body> tags. Do not include the <head> section or any other parts of a full HTML document structure.'
                ];

                // Check if `model` is provided as a string
                if (isset($config['model']) && !is_array($config['model'])) {
                    $config['model'] = [
                        'default' => $config['model'],
                        'vision' => $defaultConfig['model']['vision']
                    ];
                }

                // Merge user configuration with defaults
                $config = array_replace_recursive($defaultConfig, $config);

                // Limit the preview throttle interval to a minimum of 50ms,
                // because the HTML to blocks conversion is done via API
                $config['blocksPreviewThrottle'] = max(50, $config['blocksPreviewThrottle'] ?? 250);

                return $config;
            }
        ]
    ]
];
