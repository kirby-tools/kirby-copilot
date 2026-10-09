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
use Kirby\Exception\Exception as KirbyException;
use Kirby\Filesystem\Dir;
use Kirby\Filesystem\F;

/**
 * Kirby checks the template's `accept` rules and the file's contents, as for
 * a Panel upload.
 */
final class UploadFile
{
    private const MAX_SIZE = 5 * 1024 * 1024;
    private const MAX_SIZE_TEXT = self::MAX_SIZE / 1024 / 1024 . ' MB';

    /** A model writes base64 out token by token, so only a small file fits in a call. */
    private const MAX_DATA_SIZE = 100 * 1024;
    private const MAX_DATA_SIZE_TEXT = self::MAX_DATA_SIZE / 1024 . ' KB';

    public static function tool(): Tool
    {
        return new Tool(
            name: 'upload_file',
            title: 'Upload file',
            description: 'Uploads a file to the site or a page: from a public URL, up to ' . self::MAX_SIZE_TEXT . ', or as base64 for a small file, up to ' . self::MAX_DATA_SIZE_TEXT . '. The file is live at once; only its fields, like the alt text, wait for review – write them with prepare_changes afterwards. Returns the file and its etag.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'parent' => ['type' => 'string', 'description' => Arguments::PARENT_DESCRIPTION],
                    'filename' => ['type' => 'string', 'description' => 'The filename with its extension.'],
                    'url' => ['type' => 'string', 'description' => 'An HTTPS URL that answers with the file itself, without a redirect.'],
                    'data' => ['type' => 'string', 'description' => 'The file\'s content in base64, instead of `url`.'],
                    'template' => ['type' => 'string', 'description' => 'A file template the parent accepts. Defaults to the first one that accepts the file.']
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
            throw new ToolError('Pass either `url` or `data`.');
        }

        if ($templates === []) {
            throw new ToolError("{$parent->title()->value()} takes no new files.");
        }

        $content = $url !== null ? self::download($url) : self::decode($data);
        $root = sys_get_temp_dir() . '/copilot-upload-' . bin2hex(random_bytes(8));
        $source = $root . '/' . $filename;
        F::write($source, $content);

        try {
            $template ??= self::firstAcceptingTemplate($parent, $templates, $source, $filename);

            if (!in_array($template, $templates, true)) {
                throw new ToolError("{$parent->title()->value()} accepts files with the templates: " . implode(', ', $templates) . '.');
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

    private static function download(string $url): string
    {
        $response = (new PublicUrlFetcher(maxBytes: self::MAX_SIZE, accept: '*/*'))->fetch($url);

        return $response['body'] ?? throw new ToolError("Couldn't fetch {$url}. Pass a public HTTPS URL that answers with the file itself, without a redirect, for a file of at most " . self::MAX_SIZE_TEXT . '.');
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

    /**
     * @param list<string> $templates
     */
    private static function firstAcceptingTemplate(Site|Page $parent, array $templates, string $source, string $filename): string
    {
        foreach ($templates as $template) {
            $file = new File(['filename' => $filename, 'parent' => $parent, 'template' => $template]);

            try {
                // `asset()` is an `Image` for an image, whose `match()` also checks the `accept` dimensions.
                $file->asset($source)->match($file->blueprint()->accept());
                return $template;
            } catch (KirbyException) {
                continue;
            }
        }

        throw new ToolError("None of the file templates {$parent->title()->value()} accepts takes {$filename}: " . implode(', ', $templates) . '.');
    }
}
