<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use JohannSchopplich\Copilot\Agents\ToolResult;
use Kirby\Cms\File;
use Kirby\Cms\FileVersion;
use Kirby\Filesystem\F;
use Kirby\Toolkit\Str;

final class ViewImage
{
    /** The formats that MCP clients pass on to their models */
    private const FORMATS = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

    private const WIDTH = 1024;

    public static function tool(): Tool
    {
        return new Tool(
            name: 'view_image',
            title: 'View image',
            description: 'Returns an image file of the site, scaled to at most ' . self::WIDTH . ' pixels wide, with its alt text, original size, and the etag for writing the alt text. Works for JPEG, PNG, GIF, and WebP images.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'file' => ['type' => 'string', 'description' => 'A `file://` UUID, or `<page ID>/<filename>`.'],
                    'language' => ['type' => 'string', 'description' => 'The language code of the alt text. Defaults to the default language.']
                ],
                'required' => ['file'],
                'additionalProperties' => false
            ],
            annotations: ['readOnlyHint' => true, 'destructiveHint' => false, 'idempotentHint' => true, 'openWorldHint' => false],
            permission: ConnectionPermission::Read,
            handler: fn (array $arguments) => self::run(new Arguments($arguments))
        );
    }

    private static function run(Arguments $arguments): ToolResult
    {
        $arguments->language();
        $file = $arguments->model('file');

        if (!$file instanceof File) {
            throw new ToolError('`file` must be a file.');
        }

        if ($file->type() !== 'image' || !in_array(Str::lower($file->extension()), self::FORMATS, true)) {
            throw new ToolError("{$file->filename()} isn't a JPEG, PNG, GIF, or WebP image.");
        }

        // A thumb is generated lazily, on its first request (critique L5)
        $thumb = $file->thumb(['width' => self::WIDTH]);

        if ($thumb instanceof FileVersion) {
            $thumb->save();
        }

        return new ToolResult(
            data: [
                'id' => $file->id(),
                'uuid' => $file->uuid()?->toString(),
                'filename' => $file->filename(),
                'alt' => $file->content()->get('alt')->or(null)->value(),
                'width' => $file->width(),
                'height' => $file->height(),
                'panelUrl' => $file->panel()->url()
            ],
            content: [[
                'type' => 'image',
                'data' => base64_encode(F::read($thumb->root())),
                'mimeType' => F::mime($thumb->root())
            ]]
        );
    }
}
