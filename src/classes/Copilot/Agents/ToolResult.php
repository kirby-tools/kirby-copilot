<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

/**
 * A tool result that carries content blocks besides its structured data,
 * like an image the agent looks at.
 */
final readonly class ToolResult
{
    /**
     * @param array<string, mixed> $data
     * @param list<array<string, mixed>> $content MCP content blocks, sent before the data's JSON
     */
    public function __construct(
        public array $data,
        public array $content
    ) {
    }
}
