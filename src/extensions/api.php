<?php

use JohannSchopplich\Licensing\Licenses;
use Kirby\Cms\App;
use Kirby\Cms\Fieldset;
use Kirby\Cms\Fieldsets;

return [
    'routes' => fn (App $kirby) => [
        [
            'pattern' => '__copilot__/context',
            'method' => 'GET',
            'action' => function () use ($kirby) {
                $licenses = Licenses::read('johannschopplich/kirby-copilot');
                $config = $kirby->option('johannschopplich.copilot', []);

                $defaultConfig = [
                    'provider' => 'openai',
                    'providers' => [
                        'openai' => [
                            'model' => 'o4-mini'
                        ]
                    ],
                    'temperature' => 0.5
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
                        // Only add if not already defined in configuration
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
                        // Only add if not already defined in configuration
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
