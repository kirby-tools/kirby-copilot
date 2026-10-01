<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Closure;

/**
 * An MCP tool. The handler gets the call's arguments and returns the
 * structured result, or throws a `ToolError` the agent can act on.
 */
final readonly class Tool
{
    /**
     * @param array<string, mixed> $inputSchema
     * @param array<string, bool> $annotations
     * @param Closure(array<string, mixed>, Connection): array<string, mixed> $handler
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
