<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\AI\ProviderName;
use JohannSchopplich\Copilot\AI\Resolver;
use Kirby\Cms\App;
use Kirby\Exception\InvalidArgumentException;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ResolverTest extends TestCase
{
    protected function tearDown(): void
    {
        App::destroy();
    }

    #[Test]
    public function throws_when_provider_option_is_missing(): void
    {
        new App(['options' => ['johannschopplich.copilot' => []]]);

        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('"johannschopplich.copilot.provider" option is required');

        Resolver::fromKirbyOptions();
    }

    #[Test]
    public function throws_when_provider_option_is_unknown(): void
    {
        new App(['options' => ['johannschopplich.copilot' => ['provider' => 'bogus']]]);

        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Unknown provider "bogus"');

        Resolver::fromKirbyOptions();
    }

    #[Test]
    public function lowercases_provider_name_from_options(): void
    {
        new App(['options' => ['johannschopplich.copilot' => ['provider' => 'OpenAI']]]);

        $resolver = Resolver::fromKirbyOptions();

        $this->assertSame(ProviderName::OpenAI, $resolver->defaultProvider);
    }

    #[Test]
    public function returns_empty_config_when_provider_is_unconfigured(): void
    {
        $resolver = new Resolver(defaultProvider: ProviderName::OpenAI, providers: []);

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertNull($config->apiKey);
        $this->assertNull($config->model);
        $this->assertNull($config->baseUrl);
        $this->assertSame([], $config->options);
    }

    #[Test]
    public function evaluates_closure_api_key_with_kirby_app_instance(): void
    {
        $kirby = new App();
        $received = null;

        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: ['openai' => ['apiKey' => function (App $app) use (&$received): string {
                $received = $app;
                return 'sk-from-closure';
            }]],
        );

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertSame('sk-from-closure', $config->apiKey);
        $this->assertSame($kirby, $received);
    }

    #[Test]
    public function normalises_empty_api_key_to_null(): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: ['openai' => ['apiKey' => '']],
        );

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertNull($config->apiKey);
    }
}
