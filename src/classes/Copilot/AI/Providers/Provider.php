<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI\Providers;

use JohannSchopplich\Copilot\AI\Exception\ProviderException;

/**
 * Contract for a single AI provider transport.
 *
 * @internal
 */
interface Provider
{
    /**
     * Generate a JSON object that conforms to the given JSON Schema.
     *
     * @param list<array{role: string, content: string}> $messages
     * @param array<string, mixed> $schema
     * @return array<string, mixed>
     *
     * @throws ProviderException
     */
    public function generateObject(array $messages, array $schema): array;

    /**
     * Generate plain text.
     *
     * @param list<array{role: string, content: string}> $messages
     *
     * @throws ProviderException
     */
    public function generateText(array $messages): string;
}
