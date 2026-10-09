<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use RuntimeException;

/**
 * A failure the agent can correct, returned as a tool result with
 * `isError: true` instead of a protocol error.
 */
final class ToolError extends RuntimeException
{
}
