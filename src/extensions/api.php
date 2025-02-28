<?php

use JohannSchopplich\Licensing\Licenses;
use Kirby\Cms\App;
use Kirby\Cms\Blocks;

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
                            'model' => 'o3-mini'
                        ]
                    ],
                    'temperature' => 0.7,
                    'blocksUpdateThrottle' => 250
                ];

                // Merge user configuration with defaults
                $config = array_replace_recursive($defaultConfig, $config);

                // Lowercase model provider name
                $config['provider'] = strtolower($config['provider']);

                // Lowercase model providers configuration keys
                $config['providers'] = array_change_key_case($config['providers'], CASE_LOWER);

                // Require a minimum throttle to avoid spamming the HTML to blocks API
                $config['blocksUpdateThrottle'] = max(50, $config['blocksUpdateThrottle']);

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
            'pattern' => '__copilot__/html2blocks',
            'method' => 'POST',
            'action' => function () use ($kirby) {
                $request = $kirby->request();
                $html = $request->get('html');
                $value = Blocks::parse($html);
                $blocks = Blocks::factory($value);

                return [
                    'blocks' => $blocks->toArray()
                ];
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
