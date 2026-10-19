<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Closure;
use Kirby\Cms\App;
use Kirby\Cms\Language;
use Kirby\Cms\ModelWithContent;
use Kirby\Filesystem\Dir;

/**
 * The agents' last writes to a model's unsaved changes, per language, which
 * tell an open Panel view to reload.
 */
final class AgentWrites
{
    /** How long a write is remembered, in minutes. */
    private const TTL = 1440;

    /**
     * Runs an agent's write to the changes of a model in a language and
     * records it, unless the agent's etag is from another language or the
     * content changed since. An etag never picks the language, since an
     * agent holding etags of two languages would write into the wrong one.
     *
     * @template T
     * @param Closure(): T $write
     * @return T
     */
    public static function write(ModelWithContent $model, Language $language, string $etag, Closure $write): mixed
    {
        $etagLanguage = strstr($etag, '.', true);

        if ($etagLanguage !== false && $etagLanguage !== $language->code()) {
            throw new ToolError("The etag is from the \"{$etagLanguage}\" content, but the call writes \"{$language->code()}\". Set `language` to the language you mean to write, with an etag from that language.");
        }

        return self::lock(function () use ($model, $language, $etag, $write) {
            if ($etag !== ContentVersion::etag($model, $language)) {
                $read = App::instance()->multilang() ? "get_content with `language` \"{$language->code()}\"" : 'get_content';
                throw new ToolError("The content changed since your etag. Read it again with {$read} and base the call on what it holds now.");
            }

            $result = $write();
            self::record($model, $language);

            return $result;
        });
    }

    /**
     * Runs a closure while no other agent request writes, moves, or deletes
     * content, so two requests can't both pass their checks.
     *
     * @template T
     * @param Closure(): T $run
     * @return T
     */
    public static function lock(Closure $run): mixed
    {
        $root = App::instance()->root('cache') . '/johannschopplich/copilot-agents';
        Dir::make($root);

        $handle = fopen($root . '/writes.lock', 'c');
        flock($handle, LOCK_EX);

        try {
            return $run();
        } finally {
            flock($handle, LOCK_UN);
            fclose($handle);
        }
    }

    /**
     * @return int|null Unix timestamp in milliseconds
     */
    public static function lastWrittenAt(ModelWithContent $model, Language $language): int|null
    {
        return Agents::cache()->get(self::key($model, $language));
    }

    private static function record(ModelWithContent $model, Language $language): void
    {
        Agents::cache()->set(self::key($model, $language), (int)(microtime(true) * 1000), self::TTL);
    }

    private static function key(ModelWithContent $model, Language $language): string
    {
        return 'written.' . hash('xxh128', self::id($model) . '/' . $language->code());
    }

    /**
     * Identifies the model by its stored UUID where it has one, so a record
     * survives a slug change or a move. Generating a UUID would change the
     * content.
     */
    private static function id(ModelWithContent $model): string
    {
        return $model::CLASS_ALIAS . '/' . ($model->content('default')->get('uuid')->value() ?? $model->id());
    }
}
