<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use Kirby\Cms\File;
use Kirby\Cms\Files;
use Kirby\Cms\PageRules;
use Kirby\Content\LockedContentException;

final class DeletePage
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'delete_page',
            title: 'Delete page',
            description: 'Deletes a page or a draft with its files and unsaved changes, for good. Call it only when the user asks. A page with subpages can\'t be deleted: ask the user before you delete the subpages.',
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

        return AgentWrites::lock(function () use ($page) {
            PageRules::delete($page);

            // Kirby deletes the page's files one by one, so a file it refuses to delete would stop the deletion after others are gone.
            $protectedFiles = $page->files()->filter(fn (File $file) => $file->permissions()->can('delete') !== true);

            if ($protectedFiles->count() > 0) {
                throw new ToolError('The account may not delete these files of the page, which deleting it would delete too: ' . self::fileList($protectedFiles) . '.');
            }

            // As the Panel's delete button, since Kirby deletes a page another user edits.
            if ($page->lock()->isLocked()) {
                throw new LockedContentException($page->lock());
            }

            $page->delete();

            return ['deleted' => $page->id()];
        });
    }

    private static function fileList(Files $files): string
    {
        $names = $files->filter(fn (File $file) => $file->isAccessible())->pluck('filename');
        $hiddenCount = $files->count() - count($names);

        if ($hiddenCount > 0) {
            $names[] = $hiddenCount === 1 ? 'a file the account may not access' : "{$hiddenCount} files the account may not access";
        }

        return implode(', ', $names);
    }
}
