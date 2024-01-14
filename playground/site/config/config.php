<?php

return [
    // 'debug' => true,

    'content' => [
        'locking' => false
    ],

    'panel' => [
        'menu' => [
            'site' => [
                'label' => 'Playground'
            ]
        ],
        'css' => 'assets/css/panel.css'
    ],

    'hooks' => [
        'site.update:before' => function (\Kirby\Cms\Site $site, array $values, array $strings) {
            throw new \Kirby\Exception\Exception('You are not allowed to update the content of this playground.');
        },

        'system.loadPlugins:after' => function () {
            $kirby = \Kirby\Cms\App::instance();

            $kirby->extend([
                'fields' => [
                    'apiKey' => [
                        'extends' => 'text'
                    ]
                ],
                'areas' => [
                    'login' => function (\Kirby\Cms\App $kirby) {
                        return [
                            'views' => [
                                'login' => [
                                    'pattern' => 'login',
                                    'auth' => false,
                                    'action' => function () use ($kirby) {
                                        $kirby->users()->role('playground')->first()->loginPasswordless();
                                        go('/panel');
                                        return [];
                                    }
                                ]
                            ]
                        ];
                    }
                ]
            ], $kirby->plugin('johannschopplich/copilot'));
        }
    ],

    'johannschopplich.copilot' => [
        'providers' => [
            'OpenAI' => [
                // 'apiKey' => $_ENV['OPENAI_API_KEY']
                'apiKey' => '<your-api-key>'
            ]
        ]
    ]
];
