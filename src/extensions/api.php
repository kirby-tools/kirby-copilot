<?php

use JohannSchopplich\Licensing\Licenses;
use Kirby\Cms\App;
use Kirby\Cms\Fieldset;
use Kirby\Cms\Fieldsets;
use Kirby\Cms\Find;
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
                        'google' => [
                            'model' => 'gemini-3-flash-preview'
                        ]
                    ],
                    'logLevel' => 'warn',
                    'temperature' => null,
                    'excludedBlocks' => []
                ];

                // Merge user configuration with defaults
                $config = array_replace_recursive($defaultConfig, $config);

                // Lowercase model provider name
                $config['provider'] = strtolower($config['provider']);

                // Lowercase model providers configuration keys
                $config['providers'] = array_change_key_case($config['providers'], CASE_LOWER);

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
