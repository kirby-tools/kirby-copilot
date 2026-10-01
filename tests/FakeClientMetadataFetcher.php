<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ClientMetadataFetcher;

final class FakeClientMetadataFetcher implements ClientMetadataFetcher
{
    /** @var list<string> */
    public array $requests = [];

    /**
     * @param array<string, array> $responses
     */
    public function __construct(
        public array $responses
    ) {
    }

    public function fetch(string $url): array|null
    {
        $this->requests[] = $url;

        return isset($this->responses[$url])
            ? ['body' => json_encode($this->responses[$url]), 'maxAge' => null]
            : null;
    }
}
