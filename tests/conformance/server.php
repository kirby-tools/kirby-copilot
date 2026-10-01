<?php

/**
 * Serves the MCP URL to the MCP conformance suite, which can't log in: every
 * request gets the access token of a stored connection with all permissions.
 * One run per protocol era; the suite's `draft` covers 2026-07-28. Scenarios
 * for prompts, resources, logging, completion, and the suite's own test tools
 * don't apply.
 *
 *   php -S localhost:8002 tests/conformance/server.php
 *   npx @modelcontextprotocol/conformance server --url http://localhost:8002/api/copilot/mcp --spec-version 2025-11-25
 *   npx @modelcontextprotocol/conformance server --url http://localhost:8002/api/copilot/mcp --spec-version draft
 */

use JohannSchopplich\Copilot\Agents\Client;
use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use JohannSchopplich\Copilot\Agents\ConnectionStore;
use JohannSchopplich\Copilot\Agents\McpGuard;
use JohannSchopplich\Copilot\Agents\Token;
use Kirby\Cms\App;

require dirname(__DIR__, 2) . '/vendor/autoload.php';
require dirname(__DIR__, 2) . '/index.php';

$root = sys_get_temp_dir() . '/kirby-copilot-conformance';
$tokenFile = $root . '/token';

$props = [
    'roots' => ['index' => $root],
    'urls' => ['index' => 'http://localhost:8002'],
    'options' => ['johannschopplich.copilot' => ['agents' => true]],
    'site' => ['content' => ['title' => 'Conformance']],
    'users' => [['id' => 'conformance', 'email' => 'conformance@example.com', 'role' => 'admin']]
];

$kirby = new App($props);
$token = is_file($tokenFile) ? Token::parse(file_get_contents($tokenFile), Token::ACCESS) : null;

// An access token expires, so a later run connects again.
if ($token === null || ConnectionStore::forToken($token)?->authenticate($token) === null) {
    $store = ConnectionStore::for($kirby->user('conformance'));
    $code = $store->create(
        new Client('https://conformance.example/client.json', 'Conformance', 'conformance.example', true),
        'http://localhost/callback',
        'http://localhost:8002/api/copilot/mcp',
        ConnectionPermission::cases(),
        'challenge'
    );
    file_put_contents($tokenFile, $store->redeemCode($code, fn () => true)['accessToken']->value);
}

$kirby = new App([...$props, 'server' => [...$_SERVER, 'HTTP_AUTHORIZATION' => 'Bearer ' . file_get_contents($tokenFile)]]);

echo (new McpGuard($kirby))->handle($kirby->request())->send();
