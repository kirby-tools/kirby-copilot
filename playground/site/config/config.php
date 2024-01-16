<?php

use Kirby\Cms\App;
use Kirby\Cms\Site;
use Kirby\Exception\Exception;
use Kirby\Panel\Panel;

return [
    'content' => [
        'locking' => false
    ],

    'panel' => [
        'css' => 'assets/css/panel.css',
        'frameAncestors' => ['https://playground.kirbycopilot.com']
    ],

    'routes' => fn (App $kirby) => [
        [
            'pattern' => '(:all)',
            'action' => function () use ($kirby) {
                go($kirby->user() === null ? Panel::url('login') : Panel::url('site'));
            }
        ]
    ],

    'hooks' => [
        'site.update:before' => function (Site $site, array $values, array $strings) {
            throw new Exception('You cannot save changes to the playground content, you can only make local changes as a preview.');
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
                    'login' => function (App $kirby) {
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

                                        go(Panel::url('site'));
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
                'apiKey' => 'YOUR_API_KEY'
            ]
        ]
    ]
];
