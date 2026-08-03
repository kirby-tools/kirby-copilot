<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\AI\Client;
use JohannSchopplich\Copilot\AI\Exception\ProviderException;
use JohannSchopplich\Copilot\AI\ProviderName;
use JohannSchopplich\Copilot\AI\Providers\Provider;
use JohannSchopplich\Copilot\AI\Resolver;
use Kirby\Exception\AuthException;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

final class ClientTest extends TestCase
{
    #[Test]
    public function forwards_messages_and_schema_and_returns_the_provider_object_unchanged(): void
    {
        $messages = [['role' => 'user', 'content' => 'hi']];
        $schema = ['type' => 'object', 'properties' => ['x' => ['type' => 'string']]];

        $mock = $this->createMock(Provider::class);
        $mock->expects($this->once())
            ->method('generateObject')
            ->with($messages, $schema)
            ->willReturn(['hello' => 'world']);

        $client = new Client(
            resolver: new Resolver(defaultProvider: ProviderName::OpenAI, providers: []),
            providerOverride: $mock,
        );

        $this->assertSame(
            ['hello' => 'world'],
            $client->generateObject(messages: $messages, schema: $schema),
        );
    }

    #[Test]
    public function throws_the_provider_exception_with_its_reason_unchanged(): void
    {
        $stub = $this->createStub(Provider::class);
        $stub->method('generateObject')->willThrowException(new ProviderException(
            providerName: ProviderName::OpenAI,
            reason: 'upstream failure',
        ));

        $client = new Client(
            resolver: new Resolver(defaultProvider: ProviderName::OpenAI, providers: []),
            providerOverride: $stub,
        );

        $this->expectException(ProviderException::class);
        $this->expectExceptionMessage('upstream failure');
        $client->generateObject(
            messages: [['role' => 'user', 'content' => 'hi']],
            schema: ['type' => 'object'],
        );
    }

    #[Test]
    public function returns_provider_text_unchanged(): void
    {
        $stub = $this->createStub(Provider::class);
        $stub->method('generateText')->willReturn('hello world');

        $client = new Client(
            resolver: new Resolver(defaultProvider: ProviderName::OpenAI, providers: []),
            providerOverride: $stub,
        );

        $result = $client->generateText(
            messages: [['role' => 'user', 'content' => 'hi']],
        );

        $this->assertSame('hello world', $result);
    }

    #[Test]
    public function require_api_key_throws_when_default_provider_lacks_key(): void
    {
        $client = new Client(
            resolver: new Resolver(defaultProvider: ProviderName::OpenAI, providers: []),
        );

        $this->expectException(AuthException::class);
        $this->expectExceptionMessage('Missing API key in "johannschopplich.copilot.providers.openai.apiKey"');

        $client->requireApiKey();
    }

    #[Test]
    public function require_api_key_passes_when_default_provider_has_key(): void
    {
        $client = new Client(
            resolver: new Resolver(
                defaultProvider: ProviderName::OpenAI,
                providers: ['openai' => ['apiKey' => 'sk-test']],
            ),
        );

        $this->expectNotToPerformAssertions();
        $client->requireApiKey();
    }

    #[Test]
    public function require_api_key_skips_validation_when_provider_override_is_set(): void
    {
        $client = new Client(
            resolver: new Resolver(defaultProvider: ProviderName::OpenAI, providers: []),
            providerOverride: $this->createStub(Provider::class),
        );

        $this->expectNotToPerformAssertions();
        $client->requireApiKey();
    }
}
