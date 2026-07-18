<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\AI\Proxy;
use JohannSchopplich\Copilot\AI\ProxyTransport;
use JohannSchopplich\Copilot\AI\ProxyTransportResult;
use Kirby\Cms\App;
use Kirby\Cms\Response;
use Kirby\Exception\InvalidArgumentException;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ProxyTest extends TestCase
{
    protected function tearDown(): void
    {
        App::destroy();
    }

    private function createProxy(
        FakeProxyTransport $transport,
        array $server = [],
        array $providerConfig = ['apiKey' => 'test-key'],
        string $providerConfigKey = 'openai',
        array $query = ['provider' => 'openai'],
    ): Proxy {
        $kirby = new App([
            'options' => [
                'johannschopplich.copilot' => [
                    'providers' => [$providerConfigKey => $providerConfig],
                ],
            ],
            'request' => ['query' => $query],
            'server' => [
                'HTTP_X_PROXY_TARGET' => 'https://api.openai.com/v1/responses',
                ...$server,
            ],
        ]);

        return new Proxy($kirby, $transport);
    }

    #[Test]
    public function streams_to_the_validated_target_and_returns_null_on_success(): void
    {
        $transport = new FakeProxyTransport();

        $response = $this->createProxy($transport)->handle();

        $this->assertNull($response);
        $this->assertSame('https://api.openai.com/v1/responses', $transport->targetUrl);
    }

    #[Test]
    public function rejects_an_unknown_provider(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Invalid provider: foobar');

        $this->createProxy(
            new FakeProxyTransport(),
            query: ['provider' => 'foobar'],
        )->handle();
    }

    #[Test]
    public function rejects_a_target_host_outside_the_allow_list(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Proxy target host not allowed: evil.example.com');

        $this->createProxy(
            new FakeProxyTransport(),
            ['HTTP_X_PROXY_TARGET' => 'https://evil.example.com/v1/responses'],
        )->handle();
    }

    #[Test]
    public function allows_the_host_of_a_configured_base_url(): void
    {
        $transport = new FakeProxyTransport();

        $response = $this->createProxy(
            $transport,
            ['HTTP_X_PROXY_TARGET' => 'https://gateway.example.com/v1/responses'],
            ['apiKey' => 'test-key', 'baseUrl' => 'https://gateway.example.com/v1'],
        )->handle();

        $this->assertNull($response);
        $this->assertSame('https://gateway.example.com/v1/responses', $transport->targetUrl);
    }

    #[Test]
    public function substitutes_the_api_key_marker_only_in_auth_headers(): void
    {
        $transport = new FakeProxyTransport();

        $this->createProxy($transport, [
            'HTTP_AUTHORIZATION' => 'Bearer __KIRBY_COPILOT_PROXY__',
            // Marker in an allow-listed non-auth header must drop the whole
            // header, never forward it unsubstituted
            'HTTP_ANTHROPIC_BETA' => '__KIRBY_COPILOT_PROXY__',
            'HTTP_USER_AGENT' => 'ai-sdk/6.0',
            'HTTP_COOKIE' => 'kirby_session=secret',
        ])->handle();

        $forwardedHeaders = $transport->curlOptions[CURLOPT_HTTPHEADER];

        $this->assertContains('Authorization: Bearer test-key', $forwardedHeaders);
        $this->assertContains('User-Agent: ai-sdk/6.0', $forwardedHeaders);

        $forwardedNames = array_map(
            fn (string $header) => strtolower(explode(':', $header, 2)[0]),
            $forwardedHeaders,
        );
        $this->assertNotContains('anthropic-beta', $forwardedNames);
        $this->assertNotContains('cookie', $forwardedNames);
    }

    #[Test]
    public function resolves_a_closure_api_key_before_substituting_the_marker(): void
    {
        $transport = new FakeProxyTransport();

        $this->createProxy(
            $transport,
            ['HTTP_AUTHORIZATION' => 'Bearer __KIRBY_COPILOT_PROXY__'],
            ['apiKey' => fn () => 'closure-key'],
        )->handle();

        $this->assertContains(
            'Authorization: Bearer closure-key',
            $transport->curlOptions[CURLOPT_HTTPHEADER],
        );
    }

    #[Test]
    public function resolves_provider_config_keys_case_insensitively(): void
    {
        $transport = new FakeProxyTransport();

        $this->createProxy(
            $transport,
            ['HTTP_AUTHORIZATION' => 'Bearer __KIRBY_COPILOT_PROXY__'],
            providerConfigKey: 'OpenAI',
        )->handle();

        $this->assertContains(
            'Authorization: Bearer test-key',
            $transport->curlOptions[CURLOPT_HTTPHEADER],
        );
    }

    #[Test]
    public function forwards_the_request_content_type(): void
    {
        $transport = new FakeProxyTransport();

        // The proxy reads the raw superglobal (Kirby's `headers()` drops
        // Content-Type); safe to mutate under process isolation
        $_SERVER['CONTENT_TYPE'] = 'application/json';

        $this->createProxy($transport)->handle();

        $this->assertContains(
            'Content-Type: application/json',
            $transport->curlOptions[CURLOPT_HTTPHEADER],
        );
    }

    #[Test]
    public function builds_the_streaming_curl_options(): void
    {
        $transport = new FakeProxyTransport();

        $this->createProxy($transport)->handle();

        $curlOptions = $transport->curlOptions;

        $this->assertTrue($curlOptions[CURLOPT_POST]);
        $this->assertIsCallable($curlOptions[CURLOPT_HEADERFUNCTION]);
        $this->assertIsCallable($curlOptions[CURLOPT_WRITEFUNCTION]);
        $this->assertSame(10, $curlOptions[CURLOPT_CONNECTTIMEOUT]);
        $this->assertSame(0, $curlOptions[CURLOPT_TIMEOUT]);
        $this->assertSame(1, $curlOptions[CURLOPT_LOW_SPEED_LIMIT]);
        $this->assertSame(240, $curlOptions[CURLOPT_LOW_SPEED_TIME]);
        $this->assertTrue($curlOptions[CURLOPT_SSL_VERIFYPEER]);
        $this->assertSame('', $curlOptions[CURLOPT_ENCODING]);

        // The bundled CA certificate kicks in when the system has none configured
        if (empty(ini_get('curl.cainfo'))) {
            $this->assertStringEndsWith('/cacert.pem', $curlOptions[CURLOPT_CAINFO]);
        }
    }

    #[Test]
    public function returns_502_json_when_the_transport_fails_before_output(): void
    {
        $transport = new FakeProxyTransport(
            new ProxyTransportResult(7, 'Failed to connect'),
        );

        $response = $this->createProxy($transport)->handle();

        $this->assertInstanceOf(Response::class, $response);
        $this->assertSame(502, $response->code());

        $body = json_decode($response->body(), true);
        $this->assertSame(7, $body['error']['code']);
        $this->assertStringContainsString('Failed to connect', $body['error']['message']);
    }

    #[Test]
    public function header_callback_skips_1xx_and_forwards_the_final_status(): void
    {
        $transport = new FakeProxyTransport();
        $this->createProxy($transport)->handle();

        $headerCallback = $transport->curlOptions[CURLOPT_HEADERFUNCTION];
        $statusCodeBefore = http_response_code();

        $earlyHints = "HTTP/1.1 103 Early Hints\r\n";
        $this->assertSame(strlen($earlyHints), $headerCallback(null, $earlyHints));
        $this->assertSame($statusCodeBefore, http_response_code());

        $rateLimited = "HTTP/1.1 429 Too Many Requests\r\n";
        $this->assertSame(strlen($rateLimited), $headerCallback(null, $rateLimited));
        $this->assertSame(429, http_response_code());

        // Every branch must report the consumed length or cURL aborts the stream
        $retryAfter = "Retry-After: 30\r\n";
        $this->assertSame(strlen($retryAfter), $headerCallback(null, $retryAfter));

        $contentType = "Content-Type: application/json\r\n";
        $this->assertSame(strlen($contentType), $headerCallback(null, $contentType));
    }

    #[Test]
    public function write_callback_echoes_the_chunk_and_reports_its_length(): void
    {
        $transport = new FakeProxyTransport();
        $this->createProxy($transport)->handle();

        $writeCallback = $transport->curlOptions[CURLOPT_WRITEFUNCTION];

        $this->expectOutputString('data: {"delta":"Hi"}');
        $this->assertSame(20, $writeCallback(null, 'data: {"delta":"Hi"}'));
    }
}

final class FakeProxyTransport implements ProxyTransport
{
    public string|null $targetUrl = null;
    /** @var array<int, mixed> */
    public array $curlOptions = [];

    public function __construct(
        private readonly ProxyTransportResult $result = new ProxyTransportResult(0, ''),
    ) {
    }

    public function stream(string $targetUrl, array $curlOptions): ProxyTransportResult
    {
        $this->targetUrl = $targetUrl;
        $this->curlOptions = $curlOptions;
        return $this->result;
    }
}
