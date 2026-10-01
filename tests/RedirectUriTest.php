<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\RedirectUri;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

final class RedirectUriTest extends TestCase
{
    #[Test]
    #[DataProvider('allowedUris')]
    public function is_allowed_accepts_https_loopback_and_private_use_schemes(string $uri): void
    {
        $this->assertTrue(RedirectUri::isAllowed($uri));
    }

    public static function allowedUris(): iterable
    {
        // Cursor registers these three at once.
        yield ['cursor://anysphere.cursor-mcp/oauth/callback'];
        yield ['https://www.cursor.com/agents/mcp/oauth/callback'];
        yield ['http://localhost:8787/callback'];
        yield ['http://127.0.0.1/callback'];
        yield ['http://[::1]:3000/callback'];
        yield ['com.raycast:/oauth'];
    }

    #[Test]
    #[DataProvider('refusedUris')]
    public function is_allowed_refuses_any_other_uri(string $uri): void
    {
        $this->assertFalse(RedirectUri::isAllowed($uri));
    }

    public static function refusedUris(): iterable
    {
        yield ['javascript:alert(1)'];
        yield ['data:text/html,hi'];
        yield ['file:///etc/passwd'];
        yield ['vbscript:msgbox'];
        yield ['blob:https://example.com/1'];
        yield ['about:blank'];
        yield ['wss://example.com/callback'];
        yield ['http://example.com/callback'];
        yield ['http://localhost.example.com/callback'];
        yield ['https:///callback'];
        yield ['https://example.com/callback#fragment'];
        yield ['/callback'];
        yield ['https://evil.example\\@claude.ai/cb'];
        yield ['http://evil.example\\@localhost/cb'];
        yield ['https://user:pass@agent.example/callback'];
        yield ['https://agent.example/call back'];
    }

    #[Test]
    public function kind_tells_web_local_and_app_redirects_apart(): void
    {
        $this->assertSame('web', RedirectUri::kind('https://claude.ai/api/mcp/auth_callback'));
        $this->assertSame('local', RedirectUri::kind('http://127.0.0.1:53412/callback'));
        $this->assertSame('app', RedirectUri::kind('cursor://anysphere.cursor-mcp/oauth/callback'));
    }

    #[Test]
    public function matches_a_loopback_uri_on_any_port(): void
    {
        $this->assertTrue(RedirectUri::matches('http://localhost/callback', 'http://localhost:53412/callback'));
        $this->assertTrue(RedirectUri::matches('http://127.0.0.1:80/callback', 'http://127.0.0.1:9000/callback'));
        $this->assertFalse(RedirectUri::matches('http://localhost/callback', 'http://localhost:53412/other'));
        $this->assertFalse(RedirectUri::matches('http://localhost/callback', 'http://127.0.0.1:53412/callback'));
    }

    #[Test]
    public function matches_any_other_uri_exactly(): void
    {
        $this->assertTrue(RedirectUri::matches('https://claude.ai/api/mcp/auth_callback', 'https://claude.ai/api/mcp/auth_callback'));
        $this->assertFalse(RedirectUri::matches('https://claude.ai/api/mcp/auth_callback', 'https://claude.ai:8443/api/mcp/auth_callback'));
        $this->assertFalse(RedirectUri::matches('https://claude.ai/api/mcp/auth_callback', 'https://claude.ai/api/mcp/auth_callback/'));
    }

    #[Test]
    public function with_parameters_keeps_a_private_use_scheme(): void
    {
        $this->assertSame(
            'cursor://anysphere.cursor-mcp/oauth/callback?code=kcc_a.b&state=x%20y',
            RedirectUri::withParameters('cursor://anysphere.cursor-mcp/oauth/callback', ['code' => 'kcc_a.b', 'state' => 'x y'])
        );
        $this->assertSame(
            'com.raycast:/oauth?client=1&iss=https%3A%2F%2Fexample.com',
            RedirectUri::withParameters('com.raycast:/oauth?client=1', ['iss' => 'https://example.com'])
        );
    }
}
