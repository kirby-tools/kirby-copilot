<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

/**
 * @internal
 */
interface ClientMetadataFetcher
{
    /**
     * Returns the response body and its `max-age` in seconds, or `null` when
     * the document can't be fetched safely.
     *
     * @return array{body: string, maxAge: int|null}|null
     */
    public function fetch(string $url): array|null;
}
