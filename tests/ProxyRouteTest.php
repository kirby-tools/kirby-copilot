<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use Kirby\Exception\InvalidArgumentException;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ProxyRouteTest extends ApiRouteTestCase
{
    private function callProxy(array $options = [], array $query = [], array $server = []): mixed
    {
        return $this->callRoute(
            new App([
                'options' => $options,
                'request' => ['query' => $query],
                'server'  => $server,
            ]),
            '__copilot__/proxy'
        );
    }

    private static function validConfig(string $provider = 'openai'): array
    {
        return [
            'johannschopplich.copilot' => [
                'providers' => [
                    $provider => ['apiKey' => 'test-key'],
                ],
            ],
        ];
    }

    #[Test]
    public function missing_provider_query_throws(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/Invalid provider/');
        $this->callProxy();
    }

    /** @return array<string, array{0: string}> */
    public static function invalidProviders(): array
    {
        return [
            'bogus string'  => ['bogus'],
            'empty string'  => [''],
            'uppercase'     => ['OPENAI'],
            'partial match' => ['open'],
        ];
    }

    #[Test]
    #[DataProvider('invalidProviders')]
    public function invalid_provider_throws(string $provider): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/Invalid provider/');
        $this->callProxy([], ['provider' => $provider]);
    }

    /** @return array<string, array{0: string}> */
    public static function validProviders(): array
    {
        return [
            'openai'    => ['openai'],
            'google'    => ['google'],
            'anthropic' => ['anthropic'],
            'mistral'   => ['mistral'],
        ];
    }

    #[Test]
    #[DataProvider('validProviders')]
    public function missing_api_key_throws(string $provider): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/Missing API key for provider: ' . $provider . '/');
        $this->callProxy([], ['provider' => $provider]);
    }

    #[Test]
    public function missing_x_proxy_target_header_throws(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/Missing X-Proxy-Target header/');
        $this->callProxy(self::validConfig(), ['provider' => 'openai']);
    }

    /** @return array<string, array{0: string}> */
    public static function invalidTargets(): array
    {
        return [
            'ftp scheme'        => ['ftp://api.openai.com/v1'],
            'file scheme'       => ['file:///etc/passwd'],
            'gopher scheme'     => ['gopher://api.openai.com/'],
            'javascript scheme' => ['javascript:alert(1)'],
            'missing scheme'    => ['api.openai.com/v1'],
            'empty host'        => ['https:///v1'],
        ];
    }

    #[Test]
    #[DataProvider('invalidTargets')]
    public function invalid_scheme_or_host_throws(string $target): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/Invalid proxy target URL/');
        $this->callProxy(
            self::validConfig(),
            ['provider' => 'openai'],
            ['HTTP_X_PROXY_TARGET' => $target],
        );
    }

    /** @return array<string, array{0: string}> */
    public static function disallowedHosts(): array
    {
        return [
            'attacker domain'     => ['https://attacker.com/v1/chat'],
            'localhost'           => ['http://localhost/v1'],
            'loopback ip'         => ['http://127.0.0.1/v1'],
            'metadata service'    => ['http://169.254.169.254/latest/meta-data/'],
            'subdomain confusion' => ['https://api.openai.com.evil.com/v1'],
            'punycode homoglyph'  => ['https://xn--pi-olaa.openai.com/v1'],
            'trailing dot'        => ['https://api.openai.com./v1'],
        ];
    }

    #[Test]
    #[DataProvider('disallowedHosts')]
    public function disallowed_host_throws(string $target): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/Proxy target host not allowed/');
        $this->callProxy(
            self::validConfig(),
            ['provider' => 'openai'],
            ['HTTP_X_PROXY_TARGET' => $target],
        );
    }

    #[Test]
    public function third_party_host_denied_even_with_configured_base_url(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/Proxy target host not allowed: attacker\.com/');

        $this->callProxy(
            [
                'johannschopplich.copilot' => [
                    'providers' => [
                        'openai' => [
                            'apiKey'  => 'test-key',
                            'baseUrl' => 'https://gateway.example.com/v1',
                        ],
                    ],
                ],
            ],
            ['provider' => 'openai'],
            ['HTTP_X_PROXY_TARGET' => 'https://attacker.com/v1/chat'],
        );
    }
}
