<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot;

use Kirby\Cms\ModelWithContent;
use Kirby\Cms\Site;
use Kirby\Toolkit\Str;

/**
 * Resolves the `{{ … }}` queries of a blueprint prompt against its model.
 * `ModelWithContent::toString()` also reads `{…}` as a query, which would
 * erase the `{field}` placeholders the Panel fills in when the prompt is
 * sent, and any JSON the prompt holds.
 */
final class PromptQuery
{
    public static function resolve(ModelWithContent $model, string|null $prompt): string|null
    {
        if ($prompt === null) {
            return null;
        }

        $prompt = trim($prompt);

        if ($prompt === '') {
            return $prompt;
        }

        // The data `ModelWithContent::toString()` resolves against.
        return Str::template($prompt, [
            'kirby' => $model->kirby(),
            'site' => $model instanceof Site ? $model : $model->site(),
            'model' => $model,
            $model::CLASS_ALIAS => $model
        ], [
            'start' => '{{',
            'end' => '}}',
            'fallback' => ''
        ]);
    }
}
