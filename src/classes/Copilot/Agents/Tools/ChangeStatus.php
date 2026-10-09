<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;

final class ChangeStatus
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'change_status',
            title: 'Change status',
            description: 'Changes a page\'s status: `listed` makes it public and lists it in its parent\'s navigation, `unlisted` makes it public without, `draft` hides it from visitors; `position` also reorders a listed page. Call it only when the user asks. A draft with validation errors or unsaved changes stays a draft. A published page\'s unsaved changes stay unsaved. Returns the page\'s status, its position among the listed pages, and its URL unless it is a draft.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'page' => ['type' => 'string', 'description' => Arguments::PAGE_DESCRIPTION],
                    'status' => ['type' => 'string', 'enum' => Arguments::PAGE_STATUSES],
                    'position' => ['type' => 'integer', 'minimum' => 1, 'description' => 'For `listed`: the position among the listed pages, from 1. Defaults to the end, or the page\'s current position if it is listed. Templates that sort by date or another field ignore it.']
                ],
                'required' => ['page', 'status'],
                'additionalProperties' => false
            ],
            annotations: Tool::DESTRUCTIVE,
            permission: ConnectionPermission::Publish,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): array
    {
        $page = $arguments->page('page');
        $status = $arguments->oneOf('status', Arguments::PAGE_STATUSES) ?? throw new ToolError('`status` is required.');
        $position = $arguments->integer('position', null, 1);

        if ($position !== null && $status !== 'listed') {
            throw new ToolError('`position` applies only to `listed`.');
        }

        $page = AgentWrites::lock($page, function () use ($page, $status, $position) {
            // Kirby's own error names the fields only in its details, which a tool
            // error leaves out.
            if ($page->isDraft() && $status !== 'draft' && $page->errors() !== []) {
                throw new ToolError('The page has validation errors, so it stays a draft. Fix them with prepare_changes and publish_changes: ' . FieldInput::describeErrors($page->errors()));
            }

            // A draft would go live without its unsaved changes, since only published content is public.
            if ($page->isDraft() && $status !== 'draft' && $page->version('changes')->exists('*')) {
                throw new ToolError('The draft has unsaved changes' . ContentVersion::changedLanguages($page) . ', so it stays a draft. Publish them with publish_changes first.');
            }

            // Kirby moves a listed page without a position to the end.
            if ($status === 'listed' && $position === null && $page->isListed()) {
                $position = $page->siblings()->listed()->indexOf($page) + 1;
            }

            return $page->changeStatus($status, $position);
        });

        $result = [
            'page' => [
                ...ModelSummary::page($page),
                'url' => ModelSummary::model($page)['url'],
                'position' => $page->isListed() ? $page->siblings()->listed()->indexOf($page) + 1 : null
            ]
        ];

        if ($page->version('changes')->exists('*')) {
            $result['notices'] = ['The page has unsaved changes' . ContentVersion::changedLanguages($page) . ', which stay unsaved. publish_changes publishes them.'];
        }

        return $result;
    }
}
