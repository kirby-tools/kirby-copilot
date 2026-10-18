<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot;

use JohannSchopplich\KirbyTools\FieldNormalizer;
use Kirby\Cms\Language;
use Kirby\Cms\ModelWithContent;
use Kirby\Cms\User;
use Kirby\Cms\UserPicker;
use Kirby\Data\Json;
use Kirby\Form\Fields;
use Kirby\Toolkit\Str;

/**
 * Describes a model's fields for an AI that writes their values: the props
 * the Panel form gets in that language, cut down to what a value needs, plus
 * a format hint per field type.
 */
final class FieldDigest
{
    public const REFERENCE_TYPES = ['files', 'pages', 'users'];

    /** Kirby saves the title and slug through their own actions, and a UUID never changes. */
    private const EXCLUDED_FIELD_NAMES = ['title', 'slug', 'uuid'];

    /** Types whose `options` are values to choose from, unlike the link types a `link` field offers. */
    public const CHOICE_TYPES = ['select', 'radio', 'toggles', 'checkboxes', 'multiselect', 'tags', 'color'];

    private const CONSTRAINT_PROPS = ['min', 'max', 'minlength', 'maxlength'];

    private const USER_OPTION_LIMIT = 50;

    private static array|null $hints = null;

    /** @var array<string, array> */
    private array $fieldsets = [];

    private function __construct(
        private readonly ModelWithContent $model
    ) {
    }

    /**
     * Each blocks and layout field names its fieldsets by key, and
     * `fieldsets` describes each once. A fieldset type that two fields
     * define differently gets a suffixed key, like `text-2`.
     *
     * Nested fields follow Kirby's current language, as in `Fields::for()`,
     * so a caller digesting another language sets it as current first.
     *
     * `unhinted` names the fields that hold a value but whose type, such as
     * a plugin's, has no hint, so an AI can't write them.
     *
     * @return array{fields: list<array>, fieldsets: array<string, array>, unhinted: list<array{name: string, type: string, label: string|null}>}
     */
    public static function for(ModelWithContent $model, Language|string|null $language = null): array
    {
        $props = array_diff_key(Fields::for($model, $language)->toProps(), array_flip(self::EXCLUDED_FIELD_NAMES));
        $digest = new self($model);
        $fields = $digest->digestFields($props);
        $digestedNames = array_column($fields, 'name');
        $unhinted = [];

        foreach ($props as $name => $fieldProps) {
            if (self::isVisibleValueField($fieldProps) && !in_array($name, $digestedNames, true)) {
                $unhinted[] = ['name' => $name, 'type' => FieldNormalizer::resolveBaseType($fieldProps['type']), 'label' => $fieldProps['label'] ?? null];
            }
        }

        return [
            'fields' => $fields,
            'fieldsets' => $digest->fieldsets,
            'unhinted' => $unhinted
        ];
    }

    private function digestFields(array $fields): array
    {
        $digest = [];

        foreach ($fields as $name => $props) {
            $field = $this->digestField($name, $props);

            if ($field !== null) {
                $digest[] = $field;
            }
        }

        return $digest;
    }

    /**
     * Returns `null` for a field that holds no value, that the editor never
     * sees, or whose type has no hint.
     */
    private function digestField(string $name, array $props): array|null
    {
        if (!self::isVisibleValueField($props)) {
            return null;
        }

        $type = FieldNormalizer::resolveBaseType($props['type']);
        $hint = self::hint($type, $props);

        if ($hint === null) {
            return null;
        }

        $field = [
            'name' => $name,
            'type' => $type,
            'label' => $props['label'] ?? null,
            'help' => isset($props['help']) ? trim(Str::unhtml((string)$props['help'])) : null,
            'required' => $props['required'] ?? false,
            'translate' => $props['translate'] ?? true,
            'disabled' => $props['disabled'] ?? false,
            'hint' => $hint
        ];

        if (in_array($type, self::CHOICE_TYPES, true) && !empty($props['options'])) {
            $field['options'] = array_map(
                fn (array $option) => ['value' => $option['value'], 'text' => $option['text']],
                $props['options']
            );
        }

        foreach (self::CONSTRAINT_PROPS as $constraint) {
            $field[$constraint] = $props[$constraint] ?? null;
        }

        // Kirby stores what the Panel's editor would refuse, so the field
        // names the marks and nodes its blueprint narrows to.
        if (in_array($type, ['writer', 'list'], true)) {
            foreach (['marks', 'nodes', 'headings'] as $prop) {
                $value = $props[$prop] ?? null;

                if ($value === false || (is_array($value) && $value !== range(1, 6))) {
                    $field[$prop] = $value;
                }
            }
        }

        if (in_array($type, ['pages', 'files'], true)) {
            $field['query'] = $props['query'] ?? null;
        }

        if ($type === 'users') {
            $field['options'] = $this->userOptions($props['query'] ?? null);
        }

        if (in_array($type, self::REFERENCE_TYPES, true) && ($props['multiple'] ?? true) === false) {
            $field['max'] = 1;
        }

        if (in_array($type, ['structure', 'object'], true)) {
            $field['fields'] = $this->digestFields($props['fields'] ?? []);
        }

        if (in_array($type, ['blocks', 'layout'], true)) {
            $field['fieldsets'] = $this->digestFieldsets($props['fieldsets'] ?? []);
        }

        if ($type === 'layout') {
            $field['layouts'] = $props['layouts'];

            if (isset($props['settings'])) {
                $field['settings'] = $this->digestFields(self::mergeTabFields($props['settings']['tabs'] ?? []));
            }
        }

        return array_filter($field, fn ($value) => $value !== null);
    }

    /**
     * Lists the users the Panel's picker offers, which no other tool names.
     */
    private function userOptions(string|null $query): array
    {
        $users = (new UserPicker(['model' => $this->model, 'query' => $query, 'limit' => self::USER_OPTION_LIMIT]))->items();

        return $users->values(fn (User $user) => ['value' => $user->uuid()?->toString() ?? $user->id(), 'text' => $user->username()]);
    }

    /**
     * @return list<string> The keys of the fieldsets in `$this->fieldsets`
     */
    private function digestFieldsets(array $fieldsets): array
    {
        $keys = [];

        foreach ($fieldsets as $type => $fieldset) {
            $keys[] = $this->addFieldset([
                'type' => $type,
                'name' => $fieldset['name'],
                'fields' => $this->digestFields(self::mergeTabFields($fieldset['tabs'] ?? []))
            ]);
        }

        return $keys;
    }

    private function addFieldset(array $fieldset): string
    {
        $key = $fieldset['type'];
        $suffix = 1;

        while (isset($this->fieldsets[$key]) && $this->fieldsets[$key] !== $fieldset) {
            $key = $fieldset['type'] . '-' . ++$suffix;
        }

        $this->fieldsets[$key] = $fieldset;

        return $key;
    }

    private static function mergeTabFields(array $tabs): array
    {
        return array_merge(...array_values(array_map(
            fn (array $tab) => $tab['fields'] ?? [],
            $tabs
        )));
    }

    private static function isVisibleValueField(array $props): bool
    {
        return ($props['saveable'] ?? false) === true && ($props['hidden'] ?? false) !== true;
    }

    private static function hint(string $type, array $props): string|null
    {
        self::$hints ??= Json::read(dirname(__DIR__, 2) . '/field-hints.json');

        $isBounded = isset($props['min']) || isset($props['max']);

        $key = match ($type) {
            'writer' => ($props['inline'] ?? false) === true ? 'inlineWriter' : 'writer',
            'number', 'range' => $isBounded ? 'boundedNumber' : 'number',
            'select', 'radio', 'toggles' => self::hasPredefinedOptions($props) ? 'predefinedSingleSelection' : 'singleSelection',
            'checkboxes', 'multiselect', 'tags' => self::hasPredefinedOptions($props) ? 'predefinedMultipleSelection' : 'multipleSelection',
            'date' => empty($props['time']) ? 'date' : 'dateWithTime',
            'structure', 'object' => empty($props['fields']) ? $type : $type . 'WithFields',
            'entries' => $isBounded ? 'boundedEntries' : 'entries',
            default => $type
        };

        $hint = self::$hints[$key] ?? null;

        return $type === 'entries'
            ? str_replace('{type}', $props['field']['type'], $hint)
            : $hint;
    }

    private static function hasPredefinedOptions(array $props): bool
    {
        foreach ($props['options'] ?? [] as $option) {
            if (is_string($option['value'] ?? null) && $option['value'] !== '') {
                return true;
            }
        }

        return false;
    }
}
