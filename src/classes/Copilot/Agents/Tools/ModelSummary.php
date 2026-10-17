<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ContentVersion;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Content\Version;

/**
 * Describes a model in a tool result. Tools add their own keys.
 */
final class ModelSummary
{
    /**
     * Reads the title from `$version`, the version whose fields the tool returns.
     */
    public static function model(Site|Page|File $model, Version $version, Language $language): array
    {
        return match (true) {
            $model instanceof Page => [
                'type' => 'page',
                'id' => $model->id(),
                'uuid' => $model->uuid()?->toString(),
                'title' => self::title($model, $version, $language),
                'template' => $model->intendedTemplate()->name(),
                'status' => $model->status(),
                'url' => $model->isDraft() ? null : $model->url()
            ],
            $model instanceof Site => [
                'type' => 'site',
                'id' => 'site',
                'uuid' => $model->uuid()?->toString(),
                'title' => $version->content($language)->get('title')->value(),
                'url' => $model->url()
            ],
            default => [
                'type' => 'file',
                'id' => $model->id(),
                'uuid' => $model->uuid()?->toString(),
                'filename' => $model->filename(),
                'template' => $model->template(),
                'url' => $model->url()
            ]
        };
    }

    /**
     * Reads the title in the current language from the unsaved changes where
     * they exist, as `get_content` does.
     */
    public static function page(Page $page): array
    {
        $language = Language::ensure();

        return [
            'id' => $page->id(),
            'uuid' => $page->uuid()?->toString(),
            'title' => self::title($page, ContentVersion::source($page, $language), $language),
            'template' => $page->intendedTemplate()->name(),
            'status' => $page->status(),
            'url' => $page->isDraft() ? null : $page->url(),
            'panelUrl' => $page->panel()->url()
        ];
    }

    /**
     * The alt text is the one `get_content` returns for the file: its unsaved
     * changes where they exist.
     */
    public static function file(File $file, Language $language): array
    {
        return [
            'id' => $file->id(),
            'uuid' => $file->uuid()?->toString(),
            'filename' => $file->filename(),
            'template' => $file->template(),
            'alt' => ContentVersion::source($file, $language)->content($language)->get('alt')->or(null)->value(),
            'url' => $file->url(),
            'panelUrl' => ContentVersion::panelUrl($file, $language)
        ];
    }

    /**
     * Falls back to the slug, as Kirby's `Page::title()` does.
     */
    private static function title(Page $page, Version $version, Language $language): string
    {
        return $version->content($language)->get('title')->or($page->slug())->value();
    }
}
