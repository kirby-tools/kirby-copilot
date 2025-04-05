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
        'frameAncestors' => ['https://kirbycopilot.com']
    ],

    'johannschopplich.copilot' => [
        'providers' => [
            'openai' => [
                'model' => 'o3-mini',
                'apiKey' => env('OPENAI_API_KEY', 'YOUR_API_KEY')
            ]
        ]
    ]
];
