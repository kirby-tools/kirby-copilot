<?php

use JohannSchopplich\Copilot\Agents\Agents;
use Kirby\Data\Json;
use Kirby\Http\Response;

return [
    [
        // RFC 8414 puts the issuer's path after the well-known segment, so a
        // subfolder install's domain-root rule passes it along.
        'pattern' => [
            '.well-known/oauth-authorization-server',
            '.well-known/oauth-authorization-server/(:all)'
        ],
        'action' => function (string|null $path = null) {
            if (!Agents::isEnabled() || ($path !== null && '/' . $path !== parse_url(Agents::issuer(), PHP_URL_PATH))) {
                $this->next();
            }

            return Response::json(Json::encode(Agents::authorizationServer()->metadata()));
        }
    ],
    [
        // Clients without the `WWW-Authenticate` hint probe the root too, per the MCP authorization spec's discovery rules.
        'pattern' => [
            '.well-known/oauth-protected-resource',
            '.well-known/oauth-protected-resource/(:all)'
        ],
        'action' => function (string|null $path = null) {
            if (!Agents::isEnabled() || ($path !== null && '/' . $path !== parse_url(Agents::mcpUrl(), PHP_URL_PATH))) {
                $this->next();
            }

            return Response::json(Json::encode(Agents::authorizationServer()->resourceMetadata()));
        }
    ]
];
