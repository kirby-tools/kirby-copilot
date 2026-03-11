<?php

declare(strict_types=1);

namespace JohannSchopplich\Copilot;

use Kirby\Form\Field;

/**
 * Resolves custom Kirby field types to their standard base types
 * by following the `extends` chain in field definitions.
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
     * Resolves a custom field type to its standard base type by following
     * the `extends` chain. Stops at the first known type.
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
     * Normalizes field types in a fields array by resolving custom types
     * to their standard base types. Recurses into nested fields.
     */
    public static function normalizeFields(array $fields): array
    {
        foreach ($fields as &$field) {
            if (isset($field['type'])) {
                $field['type'] = static::resolveBaseType($field['type']);
            }

            if (isset($field['fields']) && is_array($field['fields'])) {
                $field['fields'] = static::normalizeFields($field['fields']);
            }
        }

        return $fields;
    }
}
