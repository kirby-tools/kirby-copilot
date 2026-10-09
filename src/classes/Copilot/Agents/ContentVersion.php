<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Kirby\Cms\App;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\ModelWithContent;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Content\Version;

/**
 * The version of a model's content that an agent reads and writes onto:
 * the unsaved changes where they exist, else the published content.
 */
final class ContentVersion
{
    public static function source(ModelWithContent $model, Language $language): Version
    {
        $changes = $model->version('changes');

        return $changes->exists($language) ? $changes : $model->version('latest');
    }

    /**
     * @return array{hasChanges: bool, etag: string, panelUrl: string}
     */
    public static function describe(Site|Page|File $model, Language $language): array
    {
        return [
            'hasChanges' => $model->version('changes')->exists($language),
            'etag' => self::etag($model, $language),
            'panelUrl' => self::panelUrl($model, $language)
        ];
    }

    /**
     * Names the languages with unsaved changes on a multilingual site, as
     * ` in de, en`, since publishing and discarding take one at a time.
     */
    public static function changedLanguages(ModelWithContent $model): string
    {
        $kirby = App::instance();

        if (!$kirby->multilang()) {
            return '';
        }

        return ' in ' . implode(', ', $kirby->languages()->filter(fn (Language $language) => $model->version('changes')->exists($language))->codes());
    }

    /**
     * Identifies what a model's content was when it was read. The version
     * is part of it, so publishing or discarding changes the etag too. Only
     * the fields stored in the language count, so a write in another
     * language leaves it alone.
     */
    public static function etag(ModelWithContent $model, Language $language): string
    {
        $version = self::source($model, $language);
        $fields = $version->read($language) ?? [];
        // `lock` names who holds the changes, not what they say.
        unset($fields['lock']);

        return hash('xxh128', $version->id() . json_encode($fields));
    }

    /**
     * Links the model in the Panel in the language the agent read, and the
     * compare preview where there are changes to compare next to the
     * published content.
     */
    public static function panelUrl(Site|Page|File $model, Language $language): string
    {
        $url = $model->panel()->url();

        if (!$model instanceof File && self::source($model, $language)->id()->is('changes') && $model->previewUrl() !== null) {
            $url .= '/preview/compare';
        }

        if (App::instance()->multilang()) {
            $url .= '?language=' . $language->code();
        }

        return $url;
    }
}
