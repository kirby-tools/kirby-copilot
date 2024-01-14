<?php

return [
    // 'debug' => true,

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
