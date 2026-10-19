<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot;

use Closure;
use JohannSchopplich\KirbyTools\FieldNormalizer;
use Kirby\Cms\App;
use Kirby\Cms\Language;
use Kirby\Cms\ModelWithContent;
use Kirby\Cms\User;
use Kirby\Cms\UserPicker;
use Kirby\Data\Json;
use Kirby\Form\Field;
use Kirby\Form\Fields;
use Kirby\Toolkit\Str;
use Throwable;

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
     * `info` holds the texts of the info fields and the visible info sections
     * of all tabs, which editors read as guidance. Fieldsets, structure and
     * object fields, and layout fields for their settings carry their own.
     *
     * @return array{fields: list<array>, info: list<array{label?: string, text: string, when?: array}>, fieldsets: array<string, array>, unhinted: list<array{name: string, type: string, label: string|null}>}
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
                $unhinted[] = ['name' => $name, 'type' => self::coreType($fieldProps['type']), 'label' => $fieldProps['label'] ?? null];
            }
        }

        return [
            'fields' => $fields,
            'info' => [...self::infoOf($props), ...$digest->sectionInfo()],
            'fieldsets' => $digest->fieldsets,
            'unhinted' => $unhinted
        ];
    }

    /**
     * @return array<string, string> The format hints by key
     */
    public static function hints(): array
    {
        return self::$hints ??= Json::read(dirname(__DIR__, 2) . '/field-hints.json');
    }

    /**
     * Resolves a field type to the core type Copilot writes its value as. A
     * plugin maps its own field types under `johannschopplich.copilot.fieldTypes`
     * in its extends; any other type resolves through the type it extends.
     */
    public static function coreType(string $type): string
    {
        foreach (App::instance()->plugins() as $plugin) {
            $mappedType = $plugin->extends()['johannschopplich.copilot']['fieldTypes'][$type] ?? null;

            if (is_string($mappedType)) {
                return $mappedType;
            }
        }

        return FieldNormalizer::resolveBaseType($type);
    }

    /**
     * Returns the field's placeholder unless it is the one Kirby fills in
     * for the field type, like a select's `—`, which says nothing about the
     * site.
     */
    public static function placeholder(array $props): string|null
    {
        $placeholder = $props['placeholder'] ?? null;

        if ($placeholder === null || !isset(Field::$types[$props['type']])) {
            return $placeholder;
        }

        try {
            $default = Field::setup($props['type'])['props']['placeholder'] ?? null;
            $isDefault = $default instanceof Closure && $default() === $placeholder;
        } catch (Throwable) {
            // A class-based field type has no definition to read, and a
            // plugin's default may need its field or an argument.
            return $placeholder;
        }

        return $isDefault ? null : $placeholder;
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

    private function digestField(string $name, array $props): array|null
    {
        if (!self::isVisibleValueField($props)) {
            return null;
        }

        $type = self::coreType($props['type']);
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
            'when' => self::when($props),
            'hint' => $hint,
            'placeholder' => self::placeholder($props),
            'before' => $props['before'] ?? null,
            'after' => $props['after'] ?? null,
            'pattern' => $type === 'text' ? $props['pattern'] ?? null : null
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

        if ($type === 'writer' && ($props['inline'] ?? false) === true) {
            $field['inline'] = true;
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
            $field['info'] = self::infoOf($props['fields'] ?? []) ?: null;
        }

        if (in_array($type, ['blocks', 'layout'], true)) {
            $field['fieldsets'] = $this->digestFieldsets($props['fieldsets'] ?? []);
        }

        if ($type === 'layout') {
            $field['layouts'] = $props['layouts'];

            if (isset($props['settings'])) {
                $settings = self::mergeTabFields($props['settings']['tabs'] ?? []);
                $field['settings'] = $this->digestFields($settings);
                $field['info'] = self::infoOf($settings) ?: null;
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
            $fields = self::mergeTabFields($fieldset['tabs'] ?? []);
            $keys[] = $this->addFieldset(array_filter([
                'type' => $type,
                'name' => $fieldset['name'],
                'fields' => $this->digestFields($fields),
                'info' => self::infoOf($fields) ?: null
            ], fn (mixed $value) => $value !== null));
        }

        return $keys;
    }

    /**
     * Collects the info sections of the blueprint that the Panel shows,
     * whatever tab they sit in.
     */
    private function sectionInfo(): array
    {
        $blueprint = $this->model->blueprint();
        $info = [];

        foreach ($blueprint->tabs() as $tab) {
            foreach ($tab['columns'] as $column) {
                foreach ($column['sections'] as $section) {
                    if ($section['type'] === 'info' && ($section['hidden'] ?? false) !== true) {
                        $info[] = self::infoEntry([...$blueprint->section($section['name'])->toArray(), 'when' => $section['when'] ?? null]);
                    }
                }
            }
        }

        return array_values(array_filter($info));
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

    /**
     * @param array<string, array> $fields Props of fields, as the Panel form gets them
     */
    private static function infoOf(array $fields): array
    {
        $info = [];

        foreach ($fields as $props) {
            if ($props['type'] === 'info') {
                $info[] = self::infoEntry($props);
            }
        }

        return array_values(array_filter($info));
    }

    private static function infoEntry(array $props): array|null
    {
        $text = trim(Str::unhtml((string)($props['text'] ?? '')));

        return $text === '' ? null : array_filter([
            'label' => $props['label'] ?? null,
            'text' => $text,
            'when' => self::when($props)
        ], fn (mixed $value) => $value !== null);
    }

    /**
     * Kirby matches `when` against field names case-insensitively, and digest
     * names are lowercase.
     */
    private static function when(array $props): array|null
    {
        return isset($props['when']) ? array_change_key_case($props['when']) : null;
    }

    private static function isVisibleValueField(array $props): bool
    {
        return ($props['saveable'] ?? false) === true && ($props['hidden'] ?? false) !== true;
    }

    private static function hint(string $type, array $props): string|null
    {
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

        $hint = self::hints()[$key] ?? null;

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
