<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use Kirby\Cms\Page;

final class PublishChanges
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'publish_changes',
            title: 'Publish changes',
            description: 'Publishes the unsaved changes of a page, a file, or the site in one language, so they replace the published content. They include changes made in the Panel, whoever made them. A draft stays hidden after publishing; change_status makes it public. Call it only when the user asks. Returns the new etag.',
            inputSchema: [
                'type' => 'object',
                'properties' => [
                    'model' => ['type' => 'string', 'description' => Arguments::MODEL_DESCRIPTION],
                    'language' => ['type' => 'string', 'description' => Arguments::LANGUAGE_DESCRIPTION],
                    'etag' => ['type' => 'string', 'description' => Arguments::ETAG_DESCRIPTION]
                ],
                'required' => ['model', 'etag'],
                'additionalProperties' => false
            ],
            annotations: Tool::DESTRUCTIVE,
            permission: ConnectionPermission::Publish,
            handler: self::run(...)
        );
    }

    private static function run(Arguments $arguments): array
    {
        $language = $arguments->language();
        $model = $arguments->model('model');
        $etag = $arguments->etag();
        $changes = $model->version('changes');

        // Kirby publishes a draft's changes without validating them, and
        // validates a draft when it changes status.
        $isDraft = $model instanceof Page && $model->isDraft();

        if (!$changes->exists($language)) {
            throw new ToolError('There are no unsaved changes to publish.' . ($isDraft ? ' change_status makes the draft public.' : ''));
        }

        return AgentWrites::write($model, $language, $etag, function () use ($changes, $language, $isDraft) {
            $errors = $isDraft ? [] : $changes->errors($language);

            if ($errors !== []) {
                throw new ToolError('The changes have validation errors, so they stay unpublished. Fix them with prepare_changes: ' . FieldInput::describeErrors($errors));
            }

            $changes->publish($language);
            $model = $changes->model();

            $result = ContentVersion::describe($model, $language);

            if ($isDraft) {
                $result['notices'] = ['The page is a draft, so it stays hidden from visitors. change_status makes it public.'];
            }

            return $result;
        });
    }
}
