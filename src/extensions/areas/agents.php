<?php

use JohannSchopplich\Copilot\Agents\Agents;
use JohannSchopplich\Copilot\Agents\AgentsView;
use JohannSchopplich\Copilot\Agents\Consent;
use Kirby\Cms\App;
use Kirby\Toolkit\I18n;

// Registering the area creates the `access.copilot-agents` permission,
// which decides who may connect agents.
return fn (App $kirby) => Agents::isEnabled() ? [
    'label' => I18n::translate('johannschopplich.copilot.agents'),
    'icon' => 'ai',
    'menu' => true,
    'link' => 'copilot-agents',
    'views' => [
        [
            'pattern' => 'copilot-agents',
            'action' => fn () => AgentsView::view($kirby)
        ],
        [
            'pattern' => 'copilot-agents/authorize/(:any)',
            'action' => fn (string $id) => Consent::view($kirby, $id)
        ]
    ],
    'dialogs' => [
        'copilot-agents/(:any)/(:any)/revoke' => [
            'load' => fn (string $userId, string $id) => AgentsView::revokeDialog($kirby, $userId, $id),
            'submit' => fn (string $userId, string $id) => AgentsView::revoke($kirby, $userId, $id)
        ],
        'copilot-agents/(:any)/(:any)/permissions' => [
            'load' => fn (string $userId, string $id) => AgentsView::permissionsDialog($kirby, $userId, $id),
            'submit' => fn (string $userId, string $id) => AgentsView::changePermissions($kirby, $userId, $id)
        ]
    ]
] : [];
