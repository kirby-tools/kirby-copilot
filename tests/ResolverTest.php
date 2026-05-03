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
    public function accepts_provider_name_case_insensitively(): void
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
    public function api_key_closure_receives_kirby_app(): void
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
    public function treats_empty_api_key_as_unset(): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: ['openai' => ['apiKey' => '']],
        );

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertNull($config->apiKey);
    }

    #[Test]
    public function exposes_typed_model_and_base_url_from_provider_options(): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: ['openai' => [
                'model' => 'gpt-4o-2024-08-06',
                'baseUrl' => 'https://gateway.example.com/openai',
            ]],
        );

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertSame('gpt-4o-2024-08-06', $config->model);
        $this->assertSame('https://gateway.example.com/openai', $config->baseUrl);
    }

    #[Test]
    public function collects_unknown_keys_as_pass_through_options(): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: ['openai' => [
                'apiKey' => 'sk-test',
                'model' => 'gpt-4o',
                'baseUrl' => 'https://api.openai.com/v1',
                'temperature' => 0.2,
                'reasoning_effort' => 'low',
            ]],
        );

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertSame(
            ['temperature' => 0.2, 'reasoning_effort' => 'low'],
            $config->options,
        );
    }

    #[Test]
    public function returns_isolated_config_per_provider(): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: [
                'openai' => ['apiKey' => 'sk-openai', 'model' => 'gpt-4o'],
                'anthropic' => ['apiKey' => 'sk-ant', 'model' => 'claude-sonnet'],
            ],
        );

        $openai = $resolver->forProvider(ProviderName::OpenAI);
        $anthropic = $resolver->forProvider(ProviderName::Anthropic);

        $this->assertSame('sk-openai', $openai->apiKey);
        $this->assertSame('gpt-4o', $openai->model);
        $this->assertSame('sk-ant', $anthropic->apiKey);
        $this->assertSame('claude-sonnet', $anthropic->model);
    }
}
