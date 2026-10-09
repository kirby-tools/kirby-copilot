<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\PublicUrlFetcher;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

final class PublicUrlFetcherTest extends TestCase
{
    #[Test]
    #[DataProvider('addresses')]
    public function resolves_a_host_only_to_a_public_address(string $ip, bool $isPublic): void
    {
        $fetcher = new PublicUrlFetcher(fn () => [$ip]);

        $this->assertSame($isPublic ? $ip : null, $fetcher->resolvePublicIp('client.example'));
    }

    public static function addresses(): iterable
    {
        yield 'public IPv4' => ['93.184.215.14', true];
        yield 'public IPv6' => ['2606:2800:21f:cb07:6820:80da:af6b:8b2c', true];
        yield 'loopback' => ['127.0.0.1', false];
        yield 'private' => ['10.0.0.1', false];
        yield 'link-local metadata service' => ['169.254.169.254', false];
        yield 'shared address space' => ['100.100.100.200', false];
        yield 'IETF protocol assignments' => ['192.0.0.1', false];
        yield 'benchmarking' => ['198.18.0.1', false];
        yield 'IPv6 loopback' => ['::1', false];
        yield 'unique local IPv6' => ['fd00::1', false];
        yield 'site-local IPv6' => ['fec0::1', false];
        yield 'IPv4-mapped loopback' => ['::ffff:127.0.0.1', false];
        yield 'IPv4-mapped public' => ['::ffff:93.184.215.14', true];
        yield 'NAT64 private' => ['64:ff9b::a00:1', false];
        yield 'NAT64 public' => ['64:ff9b::5db8:d70e', true];
        yield 'NAT64 local use' => ['64:ff9b:1::5db8:d70e', false];
        yield '6to4 private' => ['2002:a00:1::1', false];
        yield '6to4 public' => ['2002:5db8:d70e::1', true];
    }

    #[Test]
    public function fetch_asks_the_resolver_for_the_url_host(): void
    {
        $hosts = [];
        $fetcher = new PublicUrlFetcher(function (string $host) use (&$hosts) {
            $hosts[] = $host;
            return ['10.0.0.1'];
        });

        $this->assertNull($fetcher->fetch('https://intranet.example/photo.jpg'));
        $this->assertSame(['intranet.example'], $hosts);
    }

    #[Test]
    public function refuses_a_host_name_with_one_private_address_among_public_ones(): void
    {
        $fetcher = new PublicUrlFetcher(fn () => ['93.184.215.14', '10.0.0.1']);

        $this->assertNull($fetcher->resolvePublicIp('client.example'));
    }

    #[Test]
    public function refuses_a_host_name_without_addresses(): void
    {
        $fetcher = new PublicUrlFetcher(fn () => []);

        $this->assertNull($fetcher->resolvePublicIp('client.example'));
    }

    #[Test]
    public function refuses_a_private_ip_literal_without_resolving_it(): void
    {
        $fetcher = new PublicUrlFetcher(fn () => ['93.184.215.14']);

        $this->assertNull($fetcher->resolvePublicIp('10.0.0.1'));
    }
}
