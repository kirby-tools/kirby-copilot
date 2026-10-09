<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents\Tools;

use JohannSchopplich\Copilot\Agents\AgentWrites;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ContentVersion;
use JohannSchopplich\Copilot\Agents\Tool;
use JohannSchopplich\Copilot\Agents\ToolError;
use Kirby\Api\Controller\Changes;

final class DiscardChanges
{
    public static function tool(): Tool
    {
        return new Tool(
            name: 'discard_changes',
            title: 'Discard changes',
            description: 'Discards the unsaved changes of a page, a file, or the site in one language, so that the published content applies again. They include changes made in the Panel, whoever made them. Call it only when the user asks. Returns the new etag.',
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

        if (!$model->version('changes')->exists($language)) {
            throw new ToolError('There are no unsaved changes to discard.');
        }

        return AgentWrites::write($model, $language, $etag, function () use ($model, $language) {
            Changes::discard($model);

            return ContentVersion::describe($model, $language);
        });
    }
}
