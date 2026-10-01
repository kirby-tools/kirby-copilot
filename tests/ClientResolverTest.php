<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ClientMetadataFetcher;
use JohannSchopplich\Copilot\Agents\ClientResolver;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ClientResolverTest extends ApiRouteTestCase
{
    private const CLAUDE_CODE = 'https://claude.ai/oauth/claude-code-client-metadata';

    #[Test]
    public function resolves_a_client_from_its_metadata_document(): void
    {
        $fetcher = new FakeClientMetadataFetcher([self::CLAUDE_CODE => self::document()]);

        $client = $this->resolver($fetcher)->resolve(self::CLAUDE_CODE);

        $this->assertSame(self::CLAUDE_CODE, $client->id);
        $this->assertSame('Claude Code', $client->name);
        $this->assertSame('claude.ai', $client->host);
        $this->assertTrue($client->isVerified);
        $this->assertSame(['http://localhost/callback', 'http://127.0.0.1/callback'], $client->redirectUris);
    }

    #[Test]
    public function accepts_a_client_that_declares_private_key_jwt(): void
    {
        $url = 'https://chatgpt.com/oauth/client.json';
        $fetcher = new FakeClientMetadataFetcher([$url => [
            'client_id' => $url,
            'client_name' => 'ChatGPT',
            'redirect_uris' => ['https://chatgpt.com/connector/oauth/callback'],
            'token_endpoint_auth_method' => 'private_key_jwt',
            'jwks_uri' => 'https://chatgpt.com/oauth/jwks.json'
        ]]);

        $this->assertSame('ChatGPT', $this->resolver($fetcher)->resolve($url)?->name);
    }

    #[Test]
    public function drops_refused_redirect_uris_and_keeps_the_rest(): void
    {
        $fetcher = new FakeClientMetadataFetcher([self::CLAUDE_CODE => self::document([
            'redirect_uris' => ['javascript:alert(1)', 'http://localhost/callback']
        ])]);

        $this->assertSame(['http://localhost/callback'], $this->resolver($fetcher)->resolve(self::CLAUDE_CODE)?->redirectUris);
    }

    #[Test]
    public function names_the_client_after_its_host_without_a_client_name(): void
    {
        $fetcher = new FakeClientMetadataFetcher([self::CLAUDE_CODE => self::document(['client_name' => null])]);

        $this->assertSame('claude.ai', $this->resolver($fetcher)->resolve(self::CLAUDE_CODE)?->name);
    }

    #[Test]
    #[DataProvider('invalidDocuments')]
    public function refuses_an_invalid_document(array $overrides): void
    {
        $fetcher = new FakeClientMetadataFetcher([self::CLAUDE_CODE => self::document($overrides)]);

        $this->assertNull($this->resolver($fetcher)->resolve(self::CLAUDE_CODE));
    }

    public static function invalidDocuments(): iterable
    {
        yield 'another client id' => [['client_id' => 'https://evil.example/client.json']];
        yield 'no redirect uri' => [['redirect_uris' => []]];
        yield 'only refused redirect uris' => [['redirect_uris' => ['http://example.com/callback']]];
    }

    #[Test]
    #[DataProvider('invalidClientIds')]
    public function refuses_a_client_id_that_is_no_metadata_document_url_without_fetching(string $clientId): void
    {
        $fetcher = new FakeClientMetadataFetcher([]);

        $this->assertNull($this->resolver($fetcher)->resolve($clientId));
        $this->assertSame([], $fetcher->requests);
    }

    public static function invalidClientIds(): iterable
    {
        yield ['http://claude.ai/oauth/claude-code-client-metadata'];
        yield ['https://claude.ai'];
        yield ['https://claude.ai/'];
        yield ['https://user@claude.ai/client.json'];
        yield ['https://claude.ai/client.json#a'];
        yield ['claude-code'];
    }

    #[Test]
    public function refuses_a_client_id_on_the_site_s_own_host_without_fetching(): void
    {
        $fetcher = new FakeClientMetadataFetcher([]);

        $this->assertNull($this->resolver($fetcher)->resolve('https://EXAMPLE.com./media/client.json'));
        $this->assertSame([], $fetcher->requests);
    }

    #[Test]
    public function caches_a_document_and_never_a_failure(): void
    {
        $fetcher = new FakeClientMetadataFetcher([self::CLAUDE_CODE => self::document(['client_id' => 'https://other.example/client.json'])]);
        $resolver = $this->resolver($fetcher);

        $this->assertNull($resolver->resolve(self::CLAUDE_CODE));

        $fetcher->responses[self::CLAUDE_CODE] = self::document();
        $resolver->resolve(self::CLAUDE_CODE);
        $resolver->resolve(self::CLAUDE_CODE);

        $this->assertCount(2, $fetcher->requests);
    }

    private function resolver(ClientMetadataFetcher $fetcher): ClientResolver
    {
        $kirby = self::bootApp();

        return new ClientResolver($fetcher, $kirby->cache('johannschopplich.copilot.agents'));
    }

    private static function document(array $overrides = []): array
    {
        return array_replace([
            'client_id' => self::CLAUDE_CODE,
            'client_name' => 'Claude Code',
            'redirect_uris' => ['http://localhost/callback', 'http://127.0.0.1/callback'],
            'grant_types' => ['authorization_code', 'refresh_token'],
            'response_types' => ['code'],
            'token_endpoint_auth_method' => 'none'
        ], $overrides);
    }
}
