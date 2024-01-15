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

    'routes' => fn (App $kirby) => [
        [
            'pattern' => '(:all)',
            'action' => function () use ($kirby) {
                if ($kirby->user() === null) {
                    $kirby->users()->role('playground')->first()->loginPasswordless();
                }

                go('/panel/site');
                $this->next();
            }
        ]
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
                    'login' => function (\Kirby\Cms\App $kirby) {
                        return [
                            'views' => [
                                // Auto-login for the playground
                                'login' => [
                                    'pattern' => 'login',
                                    'auth' => false,
                                    'action' => function () use ($kirby) {
                                        if ($kirby->user() === null) {
                                            $kirby->users()->role('playground')->first()->loginPasswordless();
                                        }

                                        go('/panel/site');
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
