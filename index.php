<?php

use Kirby\Cms\App as Kirby;

@include_once __DIR__ . '/vendor/autoload.php';

$pluginConfig = [
    'name' => 'johannschopplich/copilot',
    'extends' => [
        'api' => require __DIR__ . '/src/extensions/api.php',
        'sections' => require __DIR__ . '/src/extensions/sections.php',
        'translations' => require __DIR__ . '/src/extensions/translations.php'
    ]
];

if (class_exists('\Kirby\Plugin\License')) {
    Kirby::plugin(
        ...$pluginConfig,
        license: fn ($plugin) => new \JohannSchopplich\Licensing\PluginLicense(
            plugin: $plugin,
            packageName: 'johannschopplich/kirby-copilot'
        )
    );
} else {
    Kirby::plugin(...$pluginConfig);
}
