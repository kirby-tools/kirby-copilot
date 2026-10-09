<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use JohannSchopplich\Copilot\Agents\ToolResult;
use Kirby\Cms\FileVersion;
use Kirby\Filesystem\F;
use Kirby\Toolkit\Str;

final class ViewImage
{
    /** The formats that agents pass on to their models. */
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
                    'file' => ['type' => 'string', 'description' => Arguments::FILE_DESCRIPTION],
                    'language' => ['type' => 'string', 'description' => Arguments::LANGUAGE_DESCRIPTION]
                ],
                'required' => ['file'],
                'additionalProperties' => false
            ],
            annotations: Tool::READ_ONLY,
            permission: ConnectionPermission::Read,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): ToolResult
    {
        $language = $arguments->language();
        $file = $arguments->file('file');

        if ($file->type() !== 'image' || !in_array(Str::lower($file->extension()), self::FORMATS, true)) {
            throw new ToolError("{$file->filename()} isn't a JPEG, PNG, GIF, or WebP image.");
        }

        // Kirby generates a thumb on its first request, so `save()` creates it before it is read.
        $thumb = $file->thumb(['width' => self::WIDTH]);

        if ($thumb instanceof FileVersion) {
            $thumb->save();
        }

        return new ToolResult(
            data: [
                ...ModelSummary::file($file, $language),
                'width' => $file->width(),
                'height' => $file->height(),
                'etag' => ContentVersion::etag($file, $language)
            ],
            content: [[
                'type' => 'image',
                'data' => base64_encode(F::read($thumb->root())),
                'mimeType' => F::mime($thumb->root())
            ]]
        );
    }
}
