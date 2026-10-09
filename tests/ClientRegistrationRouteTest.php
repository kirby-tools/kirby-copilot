<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\PendingAuthorization;
use Kirby\Cms\App;
use Kirby\Http\Response;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ClientRegistrationRouteTest extends ApiRouteTestCase
{
    private const CHALLENGE = 'E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM';

    /** The registration Cursor sends. */
    private const CURSOR = [
        'client_name' => 'Cursor',
        'redirect_uris' => [
            'cursor://anysphere.cursor-mcp/oauth/callback',
            'https://www.cursor.com/agents/mcp/oauth/callback',
            'http://localhost:8787/callback'
        ],
        'grant_types' => ['authorization_code', 'refresh_token'],
        'response_types' => ['code'],
        'token_endpoint_auth_method' => 'none'
    ];

    #[Test]
    public function advertises_the_registration_endpoint(): void
    {
        $metadata = json_decode(self::bootApp(self::enabled())->call('.well-known/oauth-authorization-server')->body(), true);

        $this->assertSame('https://example.com/api/copilot/oauth/register', $metadata['registration_endpoint']);
    }

    #[Test]
    public function registers_cursor_as_a_public_client(): void
    {
        $response = $this->register(self::CURSOR);
        $client = json_decode($response->body(), true);

        $this->assertSame(201, $response->code());
        $this->assertStringStartsWith('dcr.', $client['client_id']);
        $this->assertLessThanOrEqual(2048, strlen($client['client_id']));
        $this->assertSame('Cursor', $client['client_name']);
        $this->assertSame(self::CURSOR['redirect_uris'], $client['redirect_uris']);
        $this->assertSame('none', $client['token_endpoint_auth_method']);
        $this->assertArrayNotHasKey('client_secret', $client);
        $this->assertSame('no-store', $response->headers()['Cache-Control']);
    }

    #[Test]
    #[DataProvider('redirectUris')]
    public function sends_a_registered_client_to_consent_as_unverified(string $redirectUri): void
    {
        $clientId = json_decode($this->register(self::CURSOR)->body(), true)['client_id'];
        $kirby = null;

        $response = $this->authorize($clientId, $redirectUri, $kirby);

        $this->assertSame(302, $response->code());
        $pending = PendingAuthorization::find($kirby->session(), basename((string)$response->headers()['Location']));
        $this->assertSame(['id' => $clientId, 'name' => 'Cursor', 'host' => null, 'isVerified' => false], $pending->client->toArray());
        $this->assertSame($redirectUri, $pending->redirectUri);
    }

    public static function redirectUris(): iterable
    {
        foreach (self::CURSOR['redirect_uris'] as $uri) {
            yield $uri => [$uri];
        }
    }

    #[Test]
    #[DataProvider('unnamedClients')]
    public function names_a_client_without_a_name_after_its_first_redirect(string $uri, string $name): void
    {
        $client = json_decode($this->register(['redirect_uris' => [$uri]])->body(), true);

        $this->assertSame($name, $client['client_name']);
    }

    public static function unnamedClients(): iterable
    {
        yield 'web host' => ['https://agent.example/callback', 'agent.example'];
        yield 'app scheme' => ['com.example.app:/callback', 'com.example.app'];
        yield 'long host, shortened' => ['https://' . str_repeat('a', 120) . '.example/callback', str_repeat('a', 100)];
    }

    #[Test]
    #[DataProvider('invalidRegistrations')]
    public function refuses_an_invalid_registration(string $error, array $body): void
    {
        $response = $this->register($body);

        $this->assertSame(400, $response->code());
        $this->assertSame($error, json_decode($response->body(), true)['error']);
    }

    public static function invalidRegistrations(): iterable
    {
        yield 'no redirect URIs' => ['invalid_redirect_uri', ['client_name' => 'Agent']];
        yield 'a script redirect' => ['invalid_redirect_uri', ['redirect_uris' => ['https://agent.example/callback', 'javascript:alert(1)']]];
        yield 'a confidential client' => ['invalid_client_metadata', ['redirect_uris' => ['https://agent.example/callback'], 'token_endpoint_auth_method' => 'client_secret_basic']];
        yield 'client credentials' => ['invalid_client_metadata', ['redirect_uris' => ['https://agent.example/callback'], 'grant_types' => ['client_credentials']]];
        yield 'the implicit flow' => ['invalid_client_metadata', ['redirect_uris' => ['https://agent.example/callback'], 'response_types' => ['token']]];
        yield 'nested grant types' => ['invalid_client_metadata', ['redirect_uris' => ['https://agent.example/callback'], 'grant_types' => [['authorization_code']]]];
        yield 'over 2 KB' => ['invalid_client_metadata', ['redirect_uris' => array_map(fn (int $i) => "https://agent.example/callback/{$i}/" . str_repeat('a', 40), range(1, 40))]];
    }

    #[Test]
    public function refuses_a_registration_that_is_not_utf_8(): void
    {
        $kirby = self::bootApp([...self::enabled(), 'request' => ['method' => 'POST', 'body' => 'redirect_uris[]=https%3A%2F%2Fagent.example%2F%FF']]);

        $response = $this->callRoute($kirby, 'copilot/oauth/register', 'POST');

        $this->assertSame(400, $response->code());
        $this->assertSame('invalid_client_metadata', json_decode($response->body(), true)['error']);
    }

    #[Test]
    #[DataProvider('forgedClients')]
    public function refuses_a_forged_client_id(string $name, string $redirectUri): void
    {
        $clientId = 'dcr.' . rtrim(strtr(base64_encode(json_encode(['name' => $name, 'redirect_uris' => [$redirectUri]])), '+/', '-_'), '=');

        $response = $this->authorize($clientId, $redirectUri);

        $this->assertSame(400, $response->code());
        $this->assertArrayNotHasKey('Location', $response->headers());
    }

    public static function forgedClients(): iterable
    {
        yield 'a name over 100 characters' => [str_repeat('a', 101), 'https://agent.example/callback'];
        yield 'a redirect registration would refuse' => ['Claude', 'javascript:alert(1)'];
    }

    private function register(array $body): Response
    {
        $kirby = self::bootApp([...self::enabled(), 'request' => ['method' => 'POST', 'body' => json_encode($body)]]);

        return $this->callRoute($kirby, 'copilot/oauth/register', 'POST');
    }

    private function authorize(string $clientId, string $redirectUri, App|null &$kirby = null): Response
    {
        $kirby = self::bootApp([...self::enabled(), 'request' => ['query' => [
            'response_type' => 'code',
            'client_id' => $clientId,
            'redirect_uri' => $redirectUri,
            'code_challenge' => self::CHALLENGE,
            'code_challenge_method' => 'S256'
        ]]]);

        return $this->callRoute($kirby, 'copilot/oauth/authorize');
    }

    private static function enabled(): array
    {
        return ['options' => ['johannschopplich.copilot' => ['agents' => true]]];
    }
}
