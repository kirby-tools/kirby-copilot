<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Closure;
use JohannSchopplich\Copilot\Agents\Tools\Arguments;

/**
 * An MCP tool. The handler gets the call's arguments and returns the
 * structured result or a `ToolResult` with more content, or throws a
 * `ToolError` the agent can act on.
 */
final readonly class Tool
{
    public const READ_ONLY = ['readOnlyHint' => true, 'destructiveHint' => false, 'idempotentHint' => true, 'openWorldHint' => false];
    public const WRITE = ['readOnlyHint' => false, 'destructiveHint' => false, 'idempotentHint' => true, 'openWorldHint' => false];
    public const DESTRUCTIVE = ['readOnlyHint' => false, 'destructiveHint' => true, 'idempotentHint' => true, 'openWorldHint' => false];

    /**
     * @param array<string, mixed> $inputSchema
     * @param array<string, bool> $annotations
     * @param Closure(Arguments, Connection): (array<string, mixed>|ToolResult) $handler
     */
    public function __construct(
        public string $name,
        public string $title,
        public string $description,
        public array $inputSchema,
        public array $annotations,
        public ConnectionPermission $permission,
        public Closure $handler
    ) {
    }

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'title' => $this->title,
            'description' => $this->description,
            'inputSchema' => $this->inputSchema,
            'annotations' => $this->annotations
        ];
    }
}
