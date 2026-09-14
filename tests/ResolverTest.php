<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\AI\ProviderConfig;
use JohannSchopplich\Copilot\AI\ProviderName;
use JohannSchopplich\Copilot\AI\Resolver;
use Kirby\Cms\App;
use Kirby\Exception\InvalidArgumentException;
use PHPUnit\Framework\Attributes\DataProvider;
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
    public function from_kirby_options_throws_without_a_provider_option(): void
    {
        new App(['options' => ['johannschopplich.copilot' => []]]);

        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Missing required option "johannschopplich.copilot.provider"');

        Resolver::fromKirbyOptions();
    }

    #[Test]
    public function from_kirby_options_throws_for_an_unknown_provider(): void
    {
        new App(['options' => ['johannschopplich.copilot' => ['provider' => 'bogus']]]);

        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Unknown provider "bogus"');

        Resolver::fromKirbyOptions();
    }

    #[Test]
    public function from_kirby_options_matches_the_provider_case_insensitively(): void
    {
        new App(['options' => ['johannschopplich.copilot' => ['provider' => 'OpenAI']]]);

        $resolver = Resolver::fromKirbyOptions();

        $this->assertSame(ProviderName::OpenAI, $resolver->defaultProvider);
    }

    #[Test]
    public function for_provider_returns_the_defaults_for_an_unconfigured_provider(): void
    {
        $resolver = new Resolver(defaultProvider: ProviderName::OpenAI, providers: []);

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertNull($config->apiKey);
        $this->assertNull($config->model);
        $this->assertNull($config->baseUrl);
        $this->assertSame([], $config->options);
        $this->assertSame(ProviderConfig::DEFAULT_TIMEOUT, $config->timeout);
    }

    #[Test]
    public function for_provider_casts_a_numeric_string_timeout_to_an_integer(): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: ['openai' => ['timeout' => '30']],
        );

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertSame(30, $config->timeout);
    }

    public static function unusableTimeouts(): array
    {
        return [
            'not a number' => ['thirty'],
            'zero' => [0],
            'negative' => [-5],
        ];
    }

    #[Test]
    #[DataProvider('unusableTimeouts')]
    public function for_provider_falls_back_to_the_default_timeout_when_timeout_is_not_a_positive_number(mixed $timeout): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: ['openai' => ['timeout' => $timeout]],
        );

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertSame(ProviderConfig::DEFAULT_TIMEOUT, $config->timeout);
    }

    #[Test]
    public function for_provider_calls_an_api_key_closure_with_the_app(): void
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
    public function for_provider_resolves_an_empty_api_key_to_null(): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: ['openai' => ['apiKey' => '']],
        );

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertNull($config->apiKey);
    }

    #[Test]
    public function for_provider_reads_model_and_base_url(): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: ['openai' => [
                'model' => 'gpt-5.4',
                'baseUrl' => 'https://gateway.example.com/openai',
            ]],
        );

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertSame('gpt-5.4', $config->model);
        $this->assertSame('https://gateway.example.com/openai', $config->baseUrl);
    }

    #[Test]
    public function for_provider_passes_only_unknown_keys_through_as_options(): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: ['openai' => [
                'apiKey' => 'sk-test',
                'model' => 'gpt-5.4',
                'baseUrl' => 'https://api.openai.com/v1',
                // Keys the plugin reads itself, never a vendor request parameter.
                'completionModel' => 'gpt-5.4-nano',
                'api' => 'responses',
                'timeout' => 30,
                'options' => ['reasoningEffort' => 'high'],
                'reasoning_effort' => 'low',
            ]],
        );

        $config = $resolver->forProvider(ProviderName::OpenAI);

        $this->assertSame(
            ['reasoning_effort' => 'low'],
            $config->options,
        );
    }

    #[Test]
    public function for_provider_returns_each_provider_its_own_config(): void
    {
        $resolver = new Resolver(
            defaultProvider: ProviderName::OpenAI,
            providers: [
                'openai' => ['apiKey' => 'sk-openai', 'model' => 'gpt-5.4'],
                'anthropic' => ['apiKey' => 'sk-ant', 'model' => 'claude-sonnet'],
            ],
        );

        $openai = $resolver->forProvider(ProviderName::OpenAI);
        $anthropic = $resolver->forProvider(ProviderName::Anthropic);

        $this->assertSame('sk-openai', $openai->apiKey);
        $this->assertSame('gpt-5.4', $openai->model);
        $this->assertSame('sk-ant', $anthropic->apiKey);
        $this->assertSame('claude-sonnet', $anthropic->model);
    }
}
