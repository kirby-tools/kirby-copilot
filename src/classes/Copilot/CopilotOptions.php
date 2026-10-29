<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot;

use Kirby\Blueprint\Blueprint;
use Kirby\Cms\App;
use Kirby\Cms\Fieldsets;

/**
 * Kirby exports only the props a field class declares, so the `copilot`
 * options of a field come from its blueprint definition.
 */
final class CopilotOptions
{
    /**
     * Merges the `copilot` options of the blueprint fields into their
     * exported props, down through structure, object, block and layout
     * fields and the settings of a layout.
     *
     * @param array<string, array> $fields Exported props keyed by lowercased name
     * @param array<string|int, mixed> $definitions
     * @return array<string, array>
     */
    public static function merge(array $fields, array $definitions): array
    {
        foreach (Blueprint::fieldsProps($definitions) as $name => $definition) {
            $name = strtolower((string)$name);

            if (!isset($fields[$name]) || !is_array($definition)) {
                continue;
            }

            if (isset($definition['copilot'])) {
                $fields[$name]['copilot'] = $definition['copilot'];
            }

            if (is_array($fields[$name]['fields'] ?? null) && is_array($definition['fields'] ?? null)) {
                $fields[$name]['fields'] = self::merge($fields[$name]['fields'], $definition['fields']);
            }

            if (is_array($fields[$name]['fieldsets'] ?? null)) {
                $fields[$name]['fieldsets'] = self::mergeFieldsets(
                    $fields[$name]['fieldsets'],
                    $definition['fieldsets'] ?? App::instance()->option('blocks.fieldsets', Fieldsets::DEFAULT)
                );
            }

            if (is_array($fields[$name]['settings']['tabs'] ?? null) && isset($definition['settings'])) {
                $fields[$name]['settings']['tabs'] = self::mergeTabs(
                    $fields[$name]['settings']['tabs'],
                    Blueprint::extend($definition['settings'])
                );
            }
        }

        return $fields;
    }

    /**
     * Resolves the fieldset definitions as `Fieldsets::createFieldsets()`
     * does, which Kirby keeps protected.
     */
    private static function mergeFieldsets(array $fieldsets, mixed $definitions): array
    {
        if (!is_array($definitions)) {
            return $fieldsets;
        }

        foreach ($definitions as $type => $definition) {
            if (is_int($type) && is_string($definition)) {
                $type = $definition;
                $definition = 'blocks/' . $type;
            }

            if ($definition === false) {
                continue;
            }

            if ($definition === true) {
                $definition = 'blocks/' . $type;
            }

            $definition = Blueprint::extend($definition);
            $type = $definition['type'] ?? $type;

            if ($type === 'group') {
                $fieldsets = self::mergeFieldsets($fieldsets, $definition['fieldsets'] ?? []);
                continue;
            }

            if (is_array($fieldsets[$type]['tabs'] ?? null)) {
                $fieldsets[$type]['tabs'] = self::mergeTabs($fieldsets[$type]['tabs'], $definition);
            }
        }

        return $fieldsets;
    }

    private static function mergeTabs(array $tabs, array $definition): array
    {
        // Mirrors `Fieldset::createTabs()`, which builds a single `content` tab from
        // `fields` when `tabs` is empty.
        $definitionTabs = empty($definition['tabs']) ? ['content' => ['fields' => $definition['fields'] ?? []]] : $definition['tabs'];

        foreach ($definitionTabs as $tabName => $tab) {
            if ($tab === false || !is_array($tabs[$tabName]['fields'] ?? null)) {
                continue;
            }

            $tabs[$tabName]['fields'] = self::merge($tabs[$tabName]['fields'], Blueprint::extend($tab)['fields'] ?? []);
        }

        return $tabs;
    }
}
