<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI\Providers;

use JohannSchopplich\Copilot\AI\Exception\ProviderException;

/**
 * @internal
 */
interface Provider
{
    /**
     * Generates a JSON object that conforms to the given JSON Schema.
     *
     * @param list<array{role: string, content: string}> $messages
     * @param array<string, mixed> $schema
     * @return array<string, mixed>
     *
     * @throws ProviderException When the provider request fails or returns an unusable response
     */
    public function generateObject(array $messages, array $schema): array;

    /**
     * @param list<array{role: string, content: string}> $messages
     *
     * @throws ProviderException When the provider request fails or returns an unusable response
     */
    public function generateText(array $messages): string;
}
