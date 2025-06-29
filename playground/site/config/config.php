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
        'vue' => [
            'compiler' => false
        ],
        'frameAncestors' => ['https://kirby.tools', 'self']
    ],

    'johannschopplich.copilot' => [
        'provider' => 'openai',
        'providers' => [
            'openai' => [
                'model' => 'o4-mini',
                'apiKey' => env('OPENAI_API_KEY', 'YOUR_API_KEY')
            ],
            'google' => [
                'model' => 'gemini-2.5-flash-preview-04-17',
                'apiKey' => env('GOOGLE_API_KEY', 'YOUR_API_KEY')
            ]
        ]
    ]
];
