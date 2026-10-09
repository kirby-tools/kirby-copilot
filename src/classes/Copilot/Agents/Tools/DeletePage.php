<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use Kirby\Cms\File;

final class DeletePage
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'delete_page',
            title: 'Delete page',
            description: 'Deletes a page or a draft with its files, for good. Call it only when the user asks. A page with subpages, or with unsaved changes to it or its files, can\'t be deleted: ask the user before you delete the subpages or discard the changes.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'page' => ['type' => 'string', 'description' => Arguments::PAGE_DESCRIPTION]
                ],
                'required' => ['page'],
                'additionalProperties' => false
            ],
            annotations: Tool::DESTRUCTIVE,
            permission: ConnectionPermission::Delete,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): array
    {
        $page = $arguments->page('page');

        return AgentWrites::lock($page, function () use ($page) {
            if ($page->version('changes')->exists('*')) {
                throw new ToolError('The page has unsaved changes, which someone may still be working on. Ask the user whether to discard them, then try again.');
            }

            $changedFiles = $page->files()->filter(fn (File $file) => $file->version('changes')->exists('*'));

            if ($changedFiles->count() > 0) {
                throw new ToolError('Files of the page have unsaved changes, which someone may still be working on: ' . implode(', ', $changedFiles->pluck('filename')) . '. Ask the user whether to discard them, then try again.');
            }

            $page->delete();

            return ['deleted' => $page->id()];
        });
    }
}
