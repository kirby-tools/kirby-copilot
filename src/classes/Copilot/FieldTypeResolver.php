<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot;

use Kirby\Form\Field;

/**
 * Normalizes Kirby field definitions: resolves custom types to their
 * standard base types and converts blueprint-level options
 * to the Panel's sequential format.
 */
final class FieldTypeResolver
{
    private const SUPPORTED_TYPES = [
        'blocks', 'checkboxes', 'color', 'date', 'email', 'entries', 'files',
        'gap', 'headline', 'hidden', 'info', 'layout', 'line', 'link', 'list',
        'markdown', 'multiselect', 'number', 'object', 'pages', 'password',
        'radio', 'range', 'select', 'slug', 'stats', 'structure', 'tags', 'tel', 'text',
        'textarea', 'time', 'toggle', 'toggles', 'url', 'users', 'writer',
    ];

    private const MAX_DEPTH = 10;

    private static array|null $supportedTypesMap = null;

    /**
     * Resolves a custom field type to its standard base type
     * by following the `extends` chain.
     */
    public static function resolveBaseType(string $type, int $depth = 0): string
    {
        static::$supportedTypesMap ??= array_flip(static::SUPPORTED_TYPES);

        if (isset(static::$supportedTypesMap[$type]) || $depth >= static::MAX_DEPTH) {
            return $type;
        }

        try {
            $definition = Field::load($type);
        } catch (\Throwable) {
            return $type;
        }

        $extends = $definition['extends'] ?? null;

        if (!is_string($extends) || $extends === '' || $extends === $type) {
            return $type;
        }

        return static::resolveBaseType($extends, $depth + 1);
    }

    /**
     * Normalizes a fields array by resolving custom types and
     * converting blueprint-level options. Recurses into nested `fields`.
     */
    public static function normalizeFields(array $fields): array
    {
        foreach ($fields as &$field) {
            if (isset($field['type'])) {
                $field['type'] = static::resolveBaseType($field['type']);
            }

            if (isset($field['options']) && is_array($field['options'])) {
                $field['options'] = static::normalizeOptions($field['options']);
            }

            if (isset($field['fields']) && is_array($field['fields'])) {
                $field['fields'] = static::normalizeFields($field['fields']);
            }
        }

        return $fields;
    }

    /**
     * Converts blueprint-level options (`['key' => 'label']`) to the sequential
     * `[['value' => …, 'text' => …]]` format the Panel expects.
     */
    private static function normalizeOptions(array $options): array
    {
        // Already in resolved format
        if (isset($options[0]['value'])) {
            return $options;
        }

        // Query/API definitions can't be resolved without a model
        if (isset($options['type'])) {
            return [];
        }

        $normalizedOptions = [];

        foreach ($options as $key => $option) {
            if (is_array($option)) {
                $normalizedOptions[] = $option;
            } elseif (is_string($key)) {
                $normalizedOptions[] = [
                    'text' => (string)$option,
                    'value' => $key,
                ];
            } else {
                $normalizedOptions[] = [
                    'text' => (string)$option,
                    'value' => $option,
                ];
            }
        }

        return $normalizedOptions;
    }
}
