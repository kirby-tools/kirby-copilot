<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\PublicUrlFetcher;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use Kirby\Cms\File;
use Kirby\Cms\Language;
use Kirby\Cms\Page;
use Kirby\Cms\Site;
use Kirby\Filesystem\Dir;
use Kirby\Filesystem\F;

/**
 * Kirby checks the template's `accept` rules and the file's contents, as for
 * a Panel upload.
 */
final class UploadFile
{
    /** The largest file a URL upload takes for a file template without its own `accept.maxsize`. */
    private const MAX_SIZE = 20 * 1024 * 1024;
    private const MAX_SIZE_TEXT = self::MAX_SIZE / 1024 / 1024 . ' MB';
    private const MAX_REDIRECTS = 5;
    private const DOWNLOAD_TIMEOUT = 60;

    /** A model writes base64 out token by token, so only a small file fits in a call. */
    private const MAX_DATA_SIZE = 100 * 1024;
    private const MAX_DATA_SIZE_TEXT = self::MAX_DATA_SIZE / 1024 . ' KB';

    public static function tool(): Tool
    {
        return new Tool(
            name: 'upload_file',
            title: 'Upload file',
            description: 'Uploads a file to the site or a page: from a public HTTPS URL, up to ' . self::MAX_SIZE_TEXT . ' unless the file template sets its own maximum, or as base64 for a small file, up to ' . self::MAX_DATA_SIZE_TEXT . '. The file is live at once; only its fields, like the alt text, wait for review – view_image shows an image to describe, prepare_changes writes the fields. Returns the file and its etag.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'parent' => ['type' => 'string', 'description' => Arguments::PARENT_DESCRIPTION],
                    'filename' => ['type' => 'string', 'description' => 'The filename with its extension.'],
                    'url' => ['type' => 'string', 'description' => 'A public HTTPS URL that answers with the file itself, directly or after up to ' . self::MAX_REDIRECTS . ' redirects.'],
                    'data' => ['type' => 'string', 'description' => 'The file\'s content in base64, instead of `url`.'],
                    'template' => ['type' => 'string', 'description' => 'A file template the parent accepts. Required when it accepts several.']
                ],
                'required' => ['parent', 'filename'],
                'additionalProperties' => false
            ],
            annotations: [...Tool::DESTRUCTIVE, 'idempotentHint' => false, 'openWorldHint' => true],
            permission: ConnectionPermission::Publish,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): array
    {
        $parent = $arguments->parent('parent');
        $filename = F::safeName($arguments->requiredString('filename'));
        $url = $arguments->string('url');
        $data = $arguments->string('data');
        $template = $arguments->string('template');
        $templates = self::templates($parent);

        if (($url === null) === ($data === null)) {
            throw new ToolError('Pass exactly one of `url` and `data`.');
        }

        if ($templates === []) {
            throw new ToolError("{$parent->title()->value()} takes no new files.");
        }

        if ($template === null && count($templates) > 1) {
            throw new ToolError("{$parent->title()->value()} accepts files with several templates, so pass one as `template`: " . implode(', ', $templates) . '.');
        }

        $template ??= $templates[0];

        if (!in_array($template, $templates, true)) {
            throw new ToolError("{$parent->title()->value()} accepts files with the templates: " . implode(', ', $templates) . '.');
        }

        $root = sys_get_temp_dir() . '/copilot-upload-' . bin2hex(random_bytes(8));
        $source = $root . '/' . $filename;

        try {
            if ($url !== null) {
                Dir::make($root);
                self::download($url, $source, self::maxSize($parent, $filename, $template));
            } else {
                F::write($source, self::decode($data));
            }

            $file = $parent->createFile([
                'source' => $source,
                'filename' => $filename,
                'template' => $template
            ]);
        } finally {
            Dir::remove($root);
        }

        $language = Language::ensure('default');

        return [
            'file' => [
                ...ModelSummary::file($file, $language),
                'url' => $file->url()
            ],
            'etag' => ContentVersion::etag($file, $language)
        ];
    }

    private static function download(string $url, string $path, int $maxSize): void
    {
        $fetcher = new PublicUrlFetcher(
            maxBytes: $maxSize,
            accept: '*/*',
            timeout: self::DOWNLOAD_TIMEOUT,
            maxRedirects: self::MAX_REDIRECTS
        );

        if (!$fetcher->download($url, $path)) {
            throw new ToolError("Couldn't fetch {$url}. Pass a public HTTPS URL that answers with the file itself, directly or after up to " . self::MAX_REDIRECTS . ' redirects, for a file of at most ' . F::niceSize($maxSize, false) . '.');
        }
    }

    private static function maxSize(Site|Page $parent, string $filename, string $template): int
    {
        return (int)((new File(['filename' => $filename, 'parent' => $parent, 'template' => $template]))->blueprint()->accept()['maxsize'] ?? self::MAX_SIZE);
    }

    private static function decode(string $data): string
    {
        // Rejects base64 longer than `MAX_DATA_SIZE` encodes to, before decoding it.
        if (strlen($data) > (int)ceil(self::MAX_DATA_SIZE / 3) * 4 + 4) {
            throw new ToolError('The file is larger than ' . self::MAX_DATA_SIZE_TEXT . '. Pass a `url` instead.');
        }

        $content = base64_decode($data, true);

        if ($content === false) {
            throw new ToolError('`data` must be the file\'s content in base64.');
        }

        if (strlen($content) > self::MAX_DATA_SIZE) {
            throw new ToolError('The file is larger than ' . self::MAX_DATA_SIZE_TEXT . '. Pass a `url` instead.');
        }

        return $content;
    }

    /**
     * Lists the templates a Panel upload to the parent takes, in section
     * order: a files section's own template, or `default` without one, and
     * the upload templates of the fields. A files section that lists
     * another parent's files or is full doesn't count.
     *
     * @return list<string>
     */
    private static function templates(Site|Page $parent): array
    {
        $blueprint = $parent->blueprint();
        $templates = [];

        foreach ($blueprint->sections() as $section) {
            if ($section->type() === 'files' && ($section->isFull() || !$section->parent()->is($parent))) {
                continue;
            }

            $templates = [...$templates, ...match ($section->type()) {
                'files' => [$section->template() ?: 'default'],
                default => $blueprint->acceptedFileTemplates($section->name())
            }];
        }

        return array_values(array_unique($templates));
    }
}
