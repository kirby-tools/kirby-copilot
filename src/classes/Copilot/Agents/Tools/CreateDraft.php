<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ActiveContent;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Form\Field\PageListField;
use Kirby\Form\Fields;
use Kirby\Panel\Controller\Dialog\PageCreateDialogController;

final class CreateDraft
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'create_draft',
            title: 'Create draft',
            description: 'Creates a page as a draft below the site or a page, in the default language; it stays hidden from visitors until change_status makes it public. Read a page with the same template with get_content to see its fields, or create the draft with just a title and read it; send values in the shape get_content returns; fields you leave out get their defaults. Write other languages with prepare_changes afterwards. Refuses values a field doesn\'t take, such as an unknown option, and names its options. Returns the draft, ignored fields with the reason, validation errors, and its etag.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'parent' => ['type' => 'string', 'description' => Arguments::PARENT_DESCRIPTION],
                    'template' => ['type' => 'string', 'description' => 'A template the parent allows for new pages. A wrong one fails with the list of allowed templates.'],
                    'title' => ['type' => 'string', 'description' => 'Required, unless the template\'s blueprint makes the title from other fields.'],
                    'slug' => ['type' => 'string', 'description' => 'The URL slug. Defaults to one made from the title, or by the template\'s blueprint.'],
                    'fields' => ['type' => 'object', 'description' => 'Field values by field name.']
                ],
                'required' => ['parent', 'template'],
                'additionalProperties' => false
            ],
            annotations: [...Tool::WRITE, 'idempotentHint' => false],
            permission: ConnectionPermission::Prepare,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): array
    {
        $language = Language::ensure('default');
        $parent = $arguments->parent('parent');
        $template = $arguments->requiredString('template');
        $templates = self::templates($parent);

        if (!in_array($template, $templates, true)) {
            throw new ToolError($templates === []
                ? "{$parent->title()->value()} takes no new pages."
                : "{$parent->title()->value()} takes new pages with the templates: " . implode(', ', $templates) . '.');
        }

        // Kirby's own page create dialog, for its model in memory and the title and slug its blueprint makes.
        $dialog = new PageCreateDialogController(parent: $parent, blueprints: [['name' => $template]]);
        $draft = $dialog->model();
        $createOptions = $draft->blueprint()->create();

        $input = array_change_key_case($arguments->object('fields') ?? []);
        $ignored = [];

        foreach (['title', 'slug'] as $name) {
            if (isset($input[$name])) {
                $ignored[] = ['name' => $name, 'reason' => "Send the {$name} as `{$name}`."];
                unset($input[$name]);
            }

            if (is_string($createOptions[$name] ?? null) && $arguments->string($name) !== null) {
                $ignored[] = ['name' => $name, 'reason' => "The blueprint makes the {$name} from other fields."];
            }
        }

        $digest = new ContentDigest($draft, $language);
        [$values, $fieldIgnored] = FieldInput::split($digest, $digest->mapFields($digest->fields, $input, FieldInput::paragraph(...)));

        $fields = Fields::for($draft, $language);
        $fields->fill([...$fields->defaults(), ...$values]);
        $resolvedInput = $dialog->resolveFieldTemplates([...$fields->toStoredValues(), 'title' => $arguments->string('title') ?? '', 'slug' => $arguments->string('slug')], ['title', 'slug']);
        $title = trim($resolvedInput['title']);

        if ($title === '') {
            throw new ToolError(is_string($createOptions['title'] ?? null)
                ? 'The blueprint makes the title from other fields, which are empty. Send them in `fields`.'
                : '`title` must be a non-empty string.');
        }

        $fields->fill(['title' => $title]);
        ActiveContent::refuseIntroduced($fields, [...array_keys($values), 'title']);
        FieldInput::refuseDropped($fields, $values, $digest->fields);

        $page = $parent->createChild([
            'slug' => $resolvedInput['slug'] ?: $title,
            'template' => $template,
            'draft' => true,
            'content' => $fields->toStoredValues()
        ]);

        return [
            'page' => ModelSummary::page($page),
            'ignored' => [...$fieldIgnored, ...$ignored],
            'warnings' => FieldInput::warnings($fields, $language),
            'etag' => ContentVersion::etag($page, $language)
        ];
    }

    /**
     * Collects the templates of the page lists that list the parent's
     * drafts and let the Panel add pages: the parent's own, and those on
     * the views of its ancestors and the site whose `parent` is the parent.
     *
     * @return list<string>
     */
    private static function templates(Site|Page $parent): array
    {
        $templates = [];

        foreach ($parent instanceof Site ? [$parent] : [$parent, ...$parent->parents()->values(), $parent->site()] as $view) {
            foreach (Fields::for($view) as $field) {
                if (!$field instanceof PageListField || $field->add() === false || !in_array($field->status(), ['draft', 'all'], true) || !$field->parentModel()->is($parent)) {
                    continue;
                }

                foreach ($field->blueprints() as $blueprint) {
                    $templates[] = $blueprint['name'];
                }
            }
        }

        return array_values(array_unique($templates));
    }
}
