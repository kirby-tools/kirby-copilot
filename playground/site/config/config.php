<?php

return [
    'debug' => env('KIRBY_DEBUG', false),

    'content' => [
        'changes' => false,
        'locking' => false
    ],

    'panel' => [
        'css' => array_filter([
            'assets/panel.css',
            env('PLAYGROUND') !== false ? 'assets/panel-demo.css' : null
        ]),
        'js' => 'assets/panel.js',
        'favicon' => 'favicon.ico',
        'vue' => [
            'compiler' => false
        ]
    ],

    'johannschopplich.copilot' => [
        'provider' => 'google',
        'providers' => [
            'openai' => [
                'model' => 'gpt-5.2',
                'apiKey' => env('OPENAI_API_KEY', 'YOUR_API_KEY')
            ],
            'google' => [
                'model' => 'gemini-3-flash-preview',
                'apiKey' => env('GOOGLE_API_KEY', 'YOUR_API_KEY')
            ],
            'anthropic' => [
                'apiKey' => env('ANTHROPIC_API_KEY', 'YOUR_API_KEY')
            ]
        ]
    ]
];
