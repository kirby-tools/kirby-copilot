<?php

return [
    'debug' => env('KIRBY_DEBUG', false),

    'content' => [
        'locking' => false
    ],

    'panel' => [
        'css' => 'assets/panel.css',
        'js' => 'assets/panel.js',
        'favicon' => 'assets/favicon.ico',
        'frameAncestors' => ['https://kirbycopilot.com']
    ],

    'johannschopplich.copilot' => [
        'providers' => [
            'openai' => [
                'apiKey' => env('OPENAI_API_KEY', 'YOUR_API_KEY')
            ]
        ]
    ]
];
