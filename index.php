<?php

use Kirby\Cms\App as Kirby;

@include_once __DIR__ . '/vendor/autoload.php';

$packageName = 'johannschopplich/kirby-copilot';
$pluginConfig = [
    'name' => 'johannschopplich/copilot',
    'extends' => [
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
        'sections' => require __DIR__ . '/src/extensions/sections.php',
        'translations' => require __DIR__ . '/src/extensions/translations.php'
    ]
];

if (class_exists('Kirby\Plugin\License')) {
    $pluginConfig['extends']['areas'] = [
        'system' => fn () => [
            'dialogs' => \JohannSchopplich\Licensing\LicensePanel::dialogs($packageName, 'Kirby Copilot')
        ],
        'copilot-agents' => require __DIR__ . '/src/extensions/areas/agents.php'
    ];
    $pluginConfig['extends']['routes'] = require __DIR__ . '/src/extensions/routes.php';

    Kirby::plugin(
        ...$pluginConfig,
        license: fn ($plugin) => new \JohannSchopplich\Licensing\PluginLicense($plugin, $packageName)
    );
} else {
    Kirby::plugin(...$pluginConfig);
}
