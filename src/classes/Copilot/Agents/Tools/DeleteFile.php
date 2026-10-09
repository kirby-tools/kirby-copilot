<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;

final class DeleteFile
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'delete_file',
            title: 'Delete file',
            description: 'Deletes a file with its content, such as its alt text, for good. Call it only when the user asks. Fields that reference the file keep the reference. A file with unsaved changes can\'t be deleted: ask the user before you discard them.',
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

        return AgentWrites::lock($file, function () use ($file) {
            if ($file->version('changes')->exists('*')) {
                throw new ToolError('The file has unsaved changes' . ContentVersion::changedLanguages($file) . ', which someone may still be working on. Ask the user whether to discard them, then try again.');
            }

            $file->delete();

            return ['deleted' => $file->id()];
        });
    }
}
