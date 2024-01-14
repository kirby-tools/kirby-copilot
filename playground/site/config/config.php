<?php

use Kirby\Cms\App;
use Kirby\Cms\Site;
use Kirby\Exception\Exception;

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
        'site.update:before' => function (Site $site, array $values, array $strings) {
            throw new Exception('You are not allowed to update the content of this playground.');
        },

        'system.loadPlugins:after' => function () {
            $kirby = App::instance();

            $kirby->extend([
                'fields' => [
                    'apiKey' => [
                        'extends' => 'text'
                    ]
                ],
                'areas' => [
                    'login' => [
                        'views' => [
                            // Auto-login for the playground
                            'login' => [
                                'pattern' => 'login',
                                'auth' => false,
                                'action' => function () use ($kirby) {
                                    $kirby->users()->role('playground')->first()->loginPasswordless();
                                    go('/panel');
                                }
                            ]
                        ]
                    ]
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
