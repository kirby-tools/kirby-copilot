<?php

return [
    'debug' => true,

    'panel' => [
        'dev' => true
    ],

    'content' => [
        'locking' => false
    ],

    'johannschopplich.copilot' => [
        'providers' => [
            'OpenAI' => [
                'apiKey' => $_ENV['OPENAI_API_KEY']
            ]
        ]
    ]
];
