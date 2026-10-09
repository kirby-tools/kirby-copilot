<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ToolError;
use Kirby\Cms\App;
use Kirby\Cms\File;
use Kirby\Cms\Find;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Exception\NotFoundException;
use Kirby\Uuid\Uuid;

/**
 * Reads the arguments of a tool call, which a client may send in any shape,
 * and resolves the models and the language they name.
 */
final class Arguments
{
    public const MODEL_DESCRIPTION = '`site`, or the `id` or `uuid` of a page or file as other tools return them, like `blog/my-post` or `blog/my-post/photo.jpg`.';
    public const PARENT_DESCRIPTION = '`site`, or the `id` or `uuid` of a page as other tools return them, like `blog/my-post`.';
    public const PAGE_DESCRIPTION = 'The `id` or `uuid` of a page as other tools return them, like `blog/my-post`.';
    public const FILE_DESCRIPTION = 'The `id` or `uuid` of a file as other tools return them, like `blog/my-post/photo.jpg`.';
    public const LANGUAGE_DESCRIPTION = 'A language code from get_site, on multilingual sites only. Defaults to the default language.';
    public const ETAG_DESCRIPTION = 'The latest etag of this content in this language, from get_content or from the last tool that returned one for it.';
    public const PAGE_STATUSES = ['listed', 'unlisted', 'draft'];

    public function __construct(private readonly array $arguments)
    {
    }

    public function string(string $name): string|null
    {
        $value = $this->arguments[$name] ?? null;

        if ($value !== null && (!is_string($value) || $value === '')) {
            throw new ToolError("`{$name}` must be a non-empty string.");
        }

        return $value;
    }

    public function requiredString(string $name, string $hint = ''): string
    {
        return $this->string($name) ?? throw new ToolError(trim("`{$name}` is required. {$hint}"));
    }

    public function etag(): string
    {
        return $this->requiredString('etag', 'Read the content with get_content first.');
    }

    public function boolean(string $name): bool|null
    {
        $value = $this->arguments[$name] ?? null;

        if ($value !== null && !is_bool($value)) {
            throw new ToolError("`{$name}` must be a boolean.");
        }

        return $value;
    }

    /**
     * @param list<string> $values
     */
    public function oneOf(string $name, array $values): string|null
    {
        $value = $this->string($name);

        if ($value !== null && !in_array($value, $values, true)) {
            throw new ToolError("`{$name}` must be one of: " . implode(', ', $values) . '.');
        }

        return $value;
    }

    /**
     * @return list<string>|null
     */
    public function strings(string $name): array|null
    {
        $value = $this->arguments[$name] ?? null;

        if ($value !== null && (!is_array($value) || !array_is_list($value) || array_filter($value, fn (mixed $item) => !is_string($item)) !== [])) {
            throw new ToolError("`{$name}` must be a list of strings.");
        }

        return $value;
    }

    /**
     * @return array<string, mixed>|null
     */
    public function object(string $name): array|null
    {
        $value = $this->arguments[$name] ?? null;

        if ($value !== null && (!is_array($value) || ($value !== [] && array_is_list($value)))) {
            throw new ToolError("`{$name}` must be an object.");
        }

        return $value;
    }

    public function integer(string $name, int|null $default, int $min, int $max = PHP_INT_MAX): int|null
    {
        $value = $this->arguments[$name] ?? $default;

        if ($value === null) {
            return null;
        }

        if (!is_int($value) || $value < $min || $value > $max) {
            throw new ToolError($max === PHP_INT_MAX
                ? "`{$name}` must be an integer of at least {$min}."
                : "`{$name}` must be an integer from {$min} to {$max}.");
        }

        return $value;
    }

    /**
     * Resolves an address in any form `MODEL_DESCRIPTION` lists, through
     * Kirby's `Find`, which treats a model the account may not access as
     * missing.
     */
    public function model(string $name): Site|Page|File
    {
        $address = $this->requiredString($name);

        if ($address === 'site') {
            return Find::site();
        }

        try {
            if (Uuid::is($address, 'file')) {
                $file = Find::file('', $address);

                // Without a parent path, `Find` doesn't check the parent's access.
                Find::parent($file->parent()->panel()->path());

                return $file;
            }

            if (Uuid::is($address, 'page') || App::instance()->page($address, null, true) !== null) {
                return Find::page($address);
            }

            $parent = dirname($address);

            return Find::file($parent === '.' ? 'site' : 'pages/' . str_replace('/', '+', $parent), basename($address));
        } catch (NotFoundException) {
            throw new ToolError("Found no page or file \"{$address}\" the account may access. find_pages finds a page's ID; get_content lists a page's files.");
        }
    }

    public function parent(string $name): Site|Page
    {
        $parent = $this->model($name);

        if ($parent instanceof File) {
            throw new ToolError("`{$name}` must be the site or a page.");
        }

        return $parent;
    }

    public function page(string $name): Page
    {
        $page = $this->model($name);

        if (!$page instanceof Page) {
            throw new ToolError("`{$name}` must be a page.");
        }

        return $page;
    }

    public function file(string $name): File
    {
        $file = $this->model($name);

        if (!$file instanceof File) {
            throw new ToolError("`{$name}` must be a file.");
        }

        return $file;
    }

    /**
     * Makes the requested language, or the default one, Kirby's current
     * language, which nested fields and page URLs follow.
     */
    public function language(): Language
    {
        $kirby = App::instance();
        $code = $this->string('language');

        if (!$kirby->multilang()) {
            if ($code !== null) {
                throw new ToolError('The site has a single language. Leave out `language`.');
            }

            return Language::ensure('default');
        }

        $language = $code === null ? $kirby->defaultLanguage() : $kirby->language($code);

        if ($language === null) {
            throw new ToolError("Unknown language \"{$code}\". The site's languages are: " . implode(', ', $kirby->languages()->codes()) . '.');
        }

        $kirby->setCurrentLanguage($language->code());

        return $language;
    }
}
