<?php

use JohannSchopplich\Copilot\Agents\Agents;
use JohannSchopplich\Copilot\Agents\Consent;
use Kirby\Cms\App;
use Kirby\Toolkit\I18n;

// Registering the area creates the `access.copilot-agents` permission,
// which decides who may connect agents.
return fn (App $kirby) => Agents::isEnabled() ? [
    'label' => I18n::translate('johannschopplich.copilot.agents'),
    'menu' => false,
    'views' => [
        [
            'pattern' => 'copilot-agents/authorize/(:any)',
            'action' => fn (string $id) => Consent::view($kirby, $id)
        ]
    ]
] : [];
