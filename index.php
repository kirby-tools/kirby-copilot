<?php

use JohannSchopplich\Copilot\CopilotField;
use JohannSchopplich\Copilot\Licensing;
use Kirby\Cms\App as Kirby;
use Kirby\Exception\LogicException;
use KirbyTools\Licensing\LicensePanel;
use KirbyTools\Licensing\PluginLicense;

if (version_compare(Kirby::version() ?? '0', '6.0.0-beta', '<')) {
    throw new LogicException('Kirby Copilot requires Kirby 6');
}

@include_once __DIR__ . '/vendor/autoload.php';

Kirby::plugin(
    name: 'johannschopplich/copilot',
    extends: [
        'options' => [
            'agents' => false,
            // On, unlike Kirby's plugin caches, since `RateLimit` and `AgentWrites` don't work without it.
            'cache.agents' => true
        ],
        // Role blueprints set these to `false` to withhold a connection permission from agents.
        'permissions' => [
            'agentsPublish' => true,
            'agentsDelete' => true
        ],
        'api' => require __DIR__ . '/src/extensions/api.php',
        'areas' => [
            'system' => fn () => [
                'dialogs' => LicensePanel::dialogs(Licensing::PACKAGE_NAME, 'Kirby Copilot')
            ],
            'copilot-agents' => require __DIR__ . '/src/extensions/areas/agents.php'
        ],
        'fields' => [
            'copilot' => CopilotField::class
        ],
        'routes' => require __DIR__ . '/src/extensions/routes.php',
        'translations' => require __DIR__ . '/src/extensions/translations.php'
    ],
    license: fn ($plugin) => new PluginLicense($plugin, Licensing::PACKAGE_NAME)
);
