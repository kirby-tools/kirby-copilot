<?php

use Kirby\Cms\App as Kirby;
use Composer\Semver\Semver;

// Validate Kirby version
if (!Semver::satisfies(Kirby::version() ?? '0.0.0', '~4.0')) {
    throw new Exception('Kirby Copilot requires Kirby 4');
}

Kirby::plugin('johannschopplich/copilot', [
    'api' => require __DIR__ . '/src/extensions/api.php',
    'sections' => require __DIR__ . '/src/extensions/sections.php',
    'translations' => require __DIR__ . '/src/extensions/translations.php'
]);
