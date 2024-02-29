<?php

use Kirby\Cms\App as Kirby;

Kirby::plugin('johannschopplich/playground', [
    'fields' => [
        'playground-api-key' => [
            'extends' => 'text'
        ]
    ]
]);
