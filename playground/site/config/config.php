<?php

return [
    'debug' => env('KIRBY_DEBUG', false),

    'content' => [
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
                'model' => 'gpt-5.4',
                'apiKey' => env('OPENAI_API_KEY', 'YOUR_API_KEY')
            ],
            'google' => [
                'model' => 'gemini-3-flash-preview',
                'apiKey' => env('GOOGLE_API_KEY', 'YOUR_API_KEY')
            ],
            'anthropic' => [
                'apiKey' => env('ANTHROPIC_API_KEY', 'YOUR_API_KEY')
            ]
        ],
        'skills' => [
            [
                'id' => 'brand-voice',
                'label' => 'Brand Voice',
                'instructions' => <<<TXT
                    Write in a casual, direct voice. Use short sentences. Prefer
                    concrete nouns over abstract ones. Avoid marketing jargon
                    ("leverage", "empower", "synergy", "best-in-class"). Address
                    the reader as "you". Contractions are welcome. Do not open
                    with "In today's fast-paced world".
                    TXT
            ],
            [
                'id' => 'brevity',
                'label' => 'Be Brief',
                'instructions' => <<<TXT
                    Be ruthless about length. Prefer one short sentence over
                    two long ones. Cut every adverb and hedge ("really", "very",
                    "somewhat", "I think"). If a sentence works without a word,
                    the word is wrong.
                    TXT
            ],
            [
                'id' => 'de-en-bilingual',
                'label' => [
                    'en' => 'Bilingual Output',
                    'de' => 'Zweisprachige Ausgabe'
                ],
                'instructions' => [
                    'en' => 'Return the result twice: first in German, then in English, separated by a horizontal rule. Match the tone across both languages.',
                    'de' => 'Gib das Ergebnis zweimal aus: zuerst auf Deutsch, dann auf Englisch, getrennt durch eine horizontale Linie. Halte den Ton in beiden Sprachen gleich.'
                ]
            ]
        ]
    ]
];
