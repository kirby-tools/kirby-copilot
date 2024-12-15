<?php

return [
    'debug' => env('KIRBY_DEBUG', false),

    'content' => [
        'locking' => false
    ],

    'panel' => [
        'css' => array_filter([
            'assets/panel.css',
            env('ADMIN') ? null : 'assets/panel-demo.css'
        ]),
        'js' => 'assets/panel.js',
        'favicon' => 'favicon.ico',
        'frameAncestors' => ['https://kirbycopilot.com']
    ],

    'johannschopplich.copilot' => [
        'providers' => [
            'openai' => [
                'model' => 'gpt-4o',
                'apiKey' => env('OPENAI_API_KEY', 'YOUR_API_KEY')
            ]
        ]
    ]
];
