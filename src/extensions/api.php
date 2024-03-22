<?php

use Kirby\Cms\App;
use Kirby\Cms\Blocks;

return [
    'routes' => fn (App $kirby) => [
        [
            'pattern' => '__copilot__/html2blocks',
            'method' => 'POST',
            'action' => function () use ($kirby) {
                $request = $kirby->request();
                $html = $request->get('html');
                $value = Blocks::parse($html);
                $blocks = Blocks::factory($value);

                return [
                    'blocks' => $blocks->toArray()
                ];
            }
        ]
    ]
];
