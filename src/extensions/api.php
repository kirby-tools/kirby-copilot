<?php

use JohannSchopplich\Copilot\AI\CurlProxyTransport;
use JohannSchopplich\Copilot\AI\Proxy;
use JohannSchopplich\Copilot\PanelContext;
use JohannSchopplich\KirbyTools\FieldNormalizer;
use JohannSchopplich\KirbyTools\FieldResolver;
use JohannSchopplich\KirbyTools\ModelResolver;
use JohannSchopplich\Licensing\LicensePanel;
use JohannSchopplich\Licensing\Licenses;
use Kirby\Cms\App;
use Kirby\Cms\Blueprint;
use Kirby\Exception\InvalidArgumentException;
use Kirby\Exception\NotFoundException;
use Kirby\Toolkit\I18n;
use Kirby\Toolkit\Str;

return [
    'routes' => fn (App $kirby) => [
        ...LicensePanel::api('johannschopplich/kirby-copilot'),
        [
            'pattern' => '__copilot__/context',
            'method' => 'GET',
            'action' => function () use ($kirby) {
                $licenses = Licenses::read('johannschopplich/kirby-copilot');

                $assets = $kirby
                    ->plugin('johannschopplich/copilot')
                    ->assets()
                    ->clone()
                    ->map(fn ($asset) => [
                        'filename' => $asset->filename(),
                        'url' => $asset->url()
                    ])
                    ->values();

                return [
                    'config' => PanelContext::config(),
                    'assets' => $assets,
                    'licenseStatus' => $licenses->getStatus()
                ];
            }
        ],
        [
            'pattern' => '__copilot__/proxy',
            'method' => 'POST',
            'action' => function () use ($kirby) {
                $response = (new Proxy($kirby, new CurlProxyTransport()))->handle();

                if ($response !== null) {
                    return $response;
                }

                // Bypass Kirby's response pipeline.
                exit;
            }
        ],
        [
            'pattern' => '__copilot__/fieldsets',
            'method' => 'GET',
            'action' => function () use ($kirby) {
                // Use `Blueprint::extend()` + `Blueprint::fieldsProps()` instead of
                // `Fieldsets::factory()`, which internally evaluates computed field
                // properties (e.g. query-based options) and crashes without a model.

                $blockBlueprints = [];

                foreach ($kirby->extensions('blueprints') as $name => $blueprint) {
                    if (str_starts_with($name, 'blocks/')) {
                        $blockType = substr($name, 7);
                        $blockBlueprints[$blockType] = $name;
                    }
                }

                $blocksDir = $kirby->root('blueprints') . '/blocks';

                if (is_dir($blocksDir)) {
                    foreach (glob($blocksDir . '/*.yml') as $blockFile) {
                        $blockType = basename($blockFile, '.yml');
                        $blockBlueprints[$blockType] = 'blocks/' . $blockType;
                    }
                }

                $result = [];

                foreach ($blockBlueprints as $blockType => $blueprintName) {
                    try {
                        $props = Blueprint::extend($blueprintName);
                        $props['type'] ??= $blockType;

                        $fields = [];
                        // A non-array `tabs` value counts as "no tabs" and is resolved
                        // through `fields` instead of being iterated.
                        $tabs = is_array($props['tabs'] ?? null) ? $props['tabs'] : [];

                        if ($tabs === []) {
                            $fields = Blueprint::fieldsProps($props['fields'] ?? []);
                        } else {
                            foreach ($tabs as $tab) {
                                $tab = Blueprint::extend($tab);
                                $tabFields = Blueprint::fieldsProps($tab['fields'] ?? []);
                                $fields = array_merge($fields, $tabFields);
                            }
                        }

                        $name = $props['name'] ?? $props['title'] ?? Str::label($blockType);
                        $name = I18n::translate($name, $name);

                        $normalizeFieldProps = static function (array $fields) use (&$normalizeFieldProps): array {
                            foreach ($fields as &$field) {
                                if (isset($field['label'])) {
                                    $field['label'] = I18n::translate($field['label'], $field['label']);
                                }

                                if (isset($field['options']) && is_array($field['options'])) {
                                    $options = $field['options'];

                                    if (isset($options[0]['value'])) {
                                        // Already in resolved format, nothing to normalize.
                                    } elseif (isset($options['type'])) {
                                        // Query/API definitions can't be resolved without a model.
                                        $field['options'] = [];
                                    } else {
                                        $normalizedData = [];
                                        foreach ($options as $key => $option) {
                                            if (is_array($option)) {
                                                $normalizedData[] = $option;
                                            } elseif (is_string($key)) {
                                                $normalizedData[] = ['text' => (string)$option, 'value' => $key];
                                            } else {
                                                $normalizedData[] = ['text' => (string)$option, 'value' => $option];
                                            }
                                        }
                                        $field['options'] = $normalizedData;
                                    }
                                }

                                if (isset($field['fields']) && is_array($field['fields'])) {
                                    $field['fields'] = $normalizeFieldProps($field['fields']);
                                }
                            }

                            return $fields;
                        };

                        $result[] = [
                            'name' => $name,
                            'type' => $blockType,
                            'description' => $props['description'] ?? null,
                            'fields' => FieldNormalizer::normalizeFields($normalizeFieldProps($fields)),
                        ];
                    } catch (\Throwable) {
                        // Skip blocks with invalid blueprints so one bad
                        // block doesn't break the entire endpoint.
                        continue;
                    }
                }

                return $result;
            }
        ],
        [
            'pattern' => '__copilot__/model-fields',
            'method' => 'GET',
            'action' => function () use ($kirby) {
                $id = $kirby->request()->query()->get('id');

                if (!is_string($id) || $id === '') {
                    // TODO: Drop K4 compat in v4 – use named arg `message:` once Kirby 5 is the floor.
                    throw new InvalidArgumentException('Missing "id" query parameter');
                }

                $model = ModelResolver::resolveFromPath($id);

                if ($model === null) {
                    // TODO: Drop K4 compat in v4 – use named arg `message:` once Kirby 5 is the floor.
                    throw new NotFoundException('No model found for id: ' . $id);
                }

                return FieldNormalizer::normalizeFields(FieldResolver::resolveModelFields($model));
            }
        ]
    ]
];
