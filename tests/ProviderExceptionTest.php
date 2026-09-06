<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\AI\Exception\ProviderException;
use JohannSchopplich\Copilot\AI\ProviderName;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

final class ProviderExceptionTest extends TestCase
{
    #[Test]
    public function keeps_braces_in_the_message(): void
    {
        $exception = new ProviderException(
            providerName: ProviderName::OpenAI,
            reason: 'request failed',
            responseExcerpt: '{"error":{"message":"Rate limit exceeded"}}',
        );

        $this->assertSame(
            'openai provider error: request failed (response: {"error":{"message":"Rate limit exceeded"}})',
            $exception->getMessage(),
        );
    }
}
