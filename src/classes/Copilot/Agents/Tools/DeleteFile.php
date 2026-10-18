<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\Tool;
use Kirby\Content\LockedContentException;

final class DeleteFile
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'delete_file',
            title: 'Delete file',
            description: 'Deletes a file with its content, such as its alt text, and its unsaved changes, for good. Call it only when the user asks. Fields that reference the file keep the reference.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'file' => ['type' => 'string', 'description' => Arguments::FILE_DESCRIPTION]
                ],
                'required' => ['file'],
                'additionalProperties' => false
            ],
            annotations: Tool::DESTRUCTIVE,
            permission: ConnectionPermission::Delete,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): array
    {
        $file = $arguments->file('file');

        return AgentWrites::lock(function () use ($file) {
            // As the Panel's delete button, since Kirby deletes a file another user edits.
            if ($file->lock()->isLocked()) {
                throw new LockedContentException($file->lock());
            }

            $file->delete();

            return ['deleted' => $file->id()];
        });
    }
}
