<?php

use Kirby\Cms\Blocks;
use Kirby\Http\Response;

return [
    'routes' => fn (\Kirby\Cms\App $kirby) => [
        [
            'pattern' => '__copilot__/html2blocks',
            'method' => 'POST',
            'action' => function () use ($kirby) {
                $request = $kirby->request();
                $html = $request->get('html');
                $value = Blocks::parse($html);
                $blocks = Blocks::factory($value);

                return Response::json([
                    'code' => 201,
                    'status' => 'Created',
                    'result' => [
                        'blocks' => $blocks->toArray()
                    ]
                ], 201);
            }
        ]
    ]
];
