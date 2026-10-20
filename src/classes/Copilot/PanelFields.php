<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot;

use Kirby\Toolkit\Str;

final class PanelFields
{
    public static function normalize(array $fields): array
    {
        foreach ($fields as &$field) {
            if (isset($field['type'], $field['placeholder'])) {
                $field['placeholder'] = FieldDigest::placeholder($field);
            }

            if (isset($field['type'])) {
                $field['type'] = FieldDigest::coreType($field['type']);
            }

            if (isset($field['help'])) {
                $field['help'] = trim(Str::unhtml((string)$field['help']));
            }

            if (isset($field['fields']) && is_array($field['fields'])) {
                $field['fields'] = self::normalize($field['fields']);
            }

            foreach (is_array($field['fieldsets'] ?? null) ? $field['fieldsets'] : [] as $type => $fieldset) {
                foreach (is_array($fieldset['tabs'] ?? null) ? $fieldset['tabs'] : [] as $tab => $props) {
                    if (is_array($props['fields'] ?? null)) {
                        $field['fieldsets'][$type]['tabs'][$tab]['fields'] = self::normalize($props['fields']);
                    }
                }
            }
        }

        return $fields;
    }
}
