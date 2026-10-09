<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Closure;
use Kirby\Cms\App;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\ModelWithContent;
use Kirby\Content\Lock;
use Kirby\Filesystem\Dir;

/**
 * The agents' last writes to a model's unsaved changes, per language. They
 * tell an agent's write apart from a Panel edit: a Panel tab holds the
 * content it loaded and saves all of it again with the next keystroke, so
 * an agent must not write while an editor edits.
 */
final class AgentWrites
{
    /** How long a write is remembered, in minutes. */
    private const TTL = 1440;

    /**
     * Runs an agent's write to the changes of a model in a language and
     * records it, unless the content changed since the agent's etag or
     * holds a recent Panel edit the agent didn't make. Kirby's lock can't
     * tell an agent's write from the user's own Panel edit, since the agent
     * writes as the same user.
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

            $refusal = self::panelEditRefusal($model, $language);

            if ($refusal !== null) {
                throw new ToolError($refusal);
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
        return Agents::cache()->get(self::key($model, $language))['at'] ?? null;
    }

    /**
     * Describes a Panel edit of the changes within Kirby's lock window that
     * an agent didn't make, or returns `null`. The Panel releases its
     * user's lock when they leave the model's view; without content
     * locking, only time tells.
     */
    private static function panelEditRefusal(ModelWithContent $model, Language $language): string|null
    {
        $lock = Lock::for($model->version('changes'), $language);

        if (!$lock->isActive() || $lock->modified() === (Agents::cache()->get(self::key($model, $language))['modified'] ?? null)) {
            return null;
        }

        if (!Lock::isEnabled()) {
            return 'Someone edited this content in the Panel in the last 10 minutes and may still be editing it. Try again once 10 minutes have passed since the last edit.';
        }

        $editor = $lock->user();

        if ($editor === null) {
            return null;
        }

        return "{$editor->username()} edited this content in the Panel in the last 10 minutes and may still be editing it. Ask them to leave its view in the Panel, then try again.";
    }

    private static function record(ModelWithContent $model, Language $language): void
    {
        Agents::cache()->set(self::key($model, $language), [
            'modified' => Lock::for($model->version('changes'), $language)->modified(),
            'at' => (int)(microtime(true) * 1000)
        ], self::TTL);
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
