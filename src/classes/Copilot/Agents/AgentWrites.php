<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Closure;
use Kirby\Cms\App;
use Kirby\Cms\File;
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
     * records it, unless the content changed since the agent's etag.
     *
     * @template T
     * @param Closure(): T $write
     * @return T
     */
    public static function write(ModelWithContent $model, Language $language, string $etag, Closure $write): mixed
    {
        return self::lock($model, function () use ($model, $language, $etag, $write) {
            if ($etag !== ContentVersion::etag($model, $language)) {
                throw new ToolError('The content changed since your etag. Read it again with get_content and base the call on what it holds now.');
            }

            $result = $write();
            self::record($model, $language);

            return $result;
        });
    }

    /**
     * Runs a closure while no other agent request writes to or deletes the
     * model, so two requests can't both pass their checks. A file shares
     * the lock of its parent, since deleting a page deletes its files.
     *
     * @template T
     * @param Closure(): T $run
     * @return T
     */
    public static function lock(ModelWithContent $model, Closure $run): mixed
    {
        $root = App::instance()->root('cache') . '/johannschopplich/copilot-agents';
        $file = $root . '/' . hash('xxh128', self::id($model instanceof File ? $model->parent() : $model)) . '.lock';
        Dir::make($root);

        // A request that waited for the lock retries when the one before it removed the file.
        do {
            $handle = fopen($file, 'c');
            flock($handle, LOCK_EX);
            $isCurrent = fstat($handle)['ino'] === (@stat($file)['ino'] ?? null);

            if (!$isCurrent) {
                fclose($handle);
            }
        } while (!$isCurrent);

        try {
            return $run();
        } finally {
            // Windows can't remove an open file, so the file stays for the next request.
            @unlink($file);
            flock($handle, LOCK_UN);
            fclose($handle);
        }
    }

    /**
     * Returns when an agent last wrote the model's changes in the language,
     * as a Unix timestamp in milliseconds.
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
