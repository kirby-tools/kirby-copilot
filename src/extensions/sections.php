<?php

use JohannSchopplich\Licensing\Licenses;
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
            'size' => fn ($size = null) => in_array($size, ['xs', 'sm', 'md', 'lg'], true) ? $size : 'sm',
            'logLevel' => fn ($logLevel = null) => in_array($logLevel, ['error', 'warn', 'info', 'debug'], true) ? $logLevel : 'warn'
        ],
        'computed' => [
            'userPrompt' => function () {
                return $this->tryResolveQuery($this->userPrompt);
            },
            'systemPrompt' => function () {
                return $this->tryResolveQuery($this->systemPrompt);
            },
            'supported' => function () {
                $field = $this->model()->blueprint()->fields()[$this->field] ?? null;
                $type = $field['type'] ?? null;

                return in_array(
                    $type,
                    ['blocks', 'text', 'textarea', 'writer'],
                    true
                );
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
        ],
        'methods' => [
            'tryResolveQuery' => function ($value, $fallback = null) {
                if (is_string($value)) {
                    // Replace all matches of KQL parts with the query results
                    $value = preg_replace_callback('!\{\{(.+?)\}\}!', function ($matches) {
                        $result = $this->model()->query(trim($matches[1]));
                        return $result ?? '';
                    }, $value);
                }

                return $value ?? $fallback;
            }
        ]
    ]
];
