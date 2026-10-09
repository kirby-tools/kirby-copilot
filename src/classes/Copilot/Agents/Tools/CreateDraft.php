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
use Kirby\Content\MemoryStorage;
use Kirby\Form\Fields;
use Kirby\Toolkit\Str;

final class CreateDraft
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'create_draft',
            title: 'Create draft',
            description: 'Creates a page as a draft below the site or a page, in the default language; it stays hidden from visitors until change_status makes it public. Read a page with the same template with get_content to see its fields, or create the draft with just a title and read it; send values in the shape get_content returns; fields you leave out get their defaults. Write other languages with prepare_changes afterwards. Returns the draft, ignored fields with the reason, validation errors, and its etag.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'parent' => ['type' => 'string', 'description' => Arguments::PARENT_DESCRIPTION],
                    'template' => ['type' => 'string', 'description' => 'A template the parent allows for new pages. A wrong one fails with the list of allowed templates.'],
                    'title' => ['type' => 'string'],
                    'slug' => ['type' => 'string', 'description' => 'The URL slug. Defaults to one made from the title.'],
                    'fields' => ['type' => 'object', 'description' => 'Field values by field name.']
                ],
                'required' => ['parent', 'template', 'title'],
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
        $title = trim($arguments->requiredString('title'));

        if ($title === '') {
            throw new ToolError('`title` must be a non-empty string.');
        }

        $slug = Str::slug($arguments->string('slug') ?? $title);

        $templates = self::templates($parent);

        if (!in_array($template, $templates, true)) {
            throw new ToolError($templates === []
                ? "{$parent->title()->value()} takes no new pages."
                : "{$parent->title()->value()} takes new pages with the templates: " . implode(', ', $templates) . '.');
        }

        // A model in memory, as in Kirby's own page create dialog.
        $draft = Page::factory([
            'slug' => $slug,
            'template' => $template,
            'model' => $template,
            'parent' => $parent instanceof Page ? $parent : null,
            'content' => ['title' => $title]
        ]);
        $draft->changeStorage(MemoryStorage::class);

        $input = $arguments->object('fields') ?? [];
        $ignored = [];

        foreach (['title', 'slug'] as $name) {
            if (isset($input[$name])) {
                $ignored[] = ['name' => $name, 'reason' => "Send the {$name} as `{$name}`."];
                unset($input[$name]);
            }
        }

        [$values, $fieldIgnored] = FieldInput::split($draft, $language, $input);
        ActiveContent::refuseIntroduced([...$values, 'title' => $title]);

        $fields = Fields::for($draft, $language);
        $page = $parent->createChild([
            'slug' => $slug,
            'template' => $template,
            'draft' => true,
            'content' => [
                ...$fields->fill([...$fields->defaults(), ...$values])->toStoredValues(),
                'title' => $title
            ]
        ]);

        return [
            'page' => ModelSummary::page($page),
            'ignored' => [...$fieldIgnored, ...$ignored],
            'warnings' => FieldInput::warnings($page, $language, $page->version()->content($language)->toArray()),
            'etag' => ContentVersion::etag($page, $language)
        ];
    }

    /**
     * Collects the templates of the parent's pages sections that list the
     * parent's own children and let the Panel add pages.
     *
     * @return list<string>
     */
    private static function templates(Site|Page $parent): array
    {
        $templates = [];

        foreach ($parent->blueprint()->sections() as $section) {
            if ($section->type() !== 'pages' || $section->create() === false || $section->isFull() || !$section->parent()->is($parent)) {
                continue;
            }

            foreach ($section->blueprints() as $blueprint) {
                $templates[] = $blueprint['name'];
            }
        }

        return array_values(array_unique($templates));
    }
}
