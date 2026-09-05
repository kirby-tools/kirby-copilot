<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\AI\ProviderConfig;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

final class ProviderConfigTest extends TestCase
{
    #[Test]
    public function bounds_a_request_by_the_configured_timeout(): void
    {
        $client = (new ProviderConfig(timeout: 7))->httpClient();

        $this->assertSame(7, $client->getConfig('timeout'));
    }

    #[Test]
    public function defaults_the_timeout_to_120_seconds(): void
    {
        $client = (new ProviderConfig())->httpClient();

        $this->assertSame(120, $client->getConfig('timeout'));
    }

    #[Test]
    public function caps_the_connection_phase_at_10_seconds(): void
    {
        $client = (new ProviderConfig())->httpClient();

        $this->assertSame(10, $client->getConfig('connect_timeout'));
    }
}
