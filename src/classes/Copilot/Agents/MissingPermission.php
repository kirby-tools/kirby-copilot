<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use RuntimeException;

/**
 * A call that needs a connection permission beyond its tool's, such as an
 * upload outside drafts, refused like a call to a tool beyond the
 * connection's permissions.
 */
final class MissingPermission extends RuntimeException
{
    public function __construct(
        public readonly ConnectionPermission $permission
    ) {
        parent::__construct();
    }
}
