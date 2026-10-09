<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ContentVersion;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;

/**
 * Describes a model in a tool result. Tools add their own keys.
 */
final class ModelSummary
{
    public static function model(Site|Page|File $model): array
    {
        return match (true) {
            $model instanceof Page => [
                'type' => 'page',
                'id' => $model->id(),
                'uuid' => $model->uuid()?->toString(),
                'title' => $model->title()->value(),
                'template' => $model->intendedTemplate()->name(),
                'status' => $model->status(),
                'url' => $model->isDraft() ? null : $model->url()
            ],
            $model instanceof Site => [
                'type' => 'site',
                'id' => 'site',
                'uuid' => $model->uuid()?->toString(),
                'title' => $model->title()->value(),
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

    public static function page(Page $page): array
    {
        return [
            'id' => $page->id(),
            'uuid' => $page->uuid()?->toString(),
            'title' => $page->title()->value(),
            'template' => $page->intendedTemplate()->name(),
            'status' => $page->status(),
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
            'panelUrl' => $file->panel()->url()
        ];
    }
}
