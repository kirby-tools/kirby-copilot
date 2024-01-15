<?php

$base = dirname(__DIR__);
$root = dirname($base);

require $root . '/vendor/autoload.php';

if (class_exists(\Dotenv\Dotenv::class)) {
    $dotenv = \Dotenv\Dotenv::createImmutable($root);
    $dotenv->safeLoad();
}

$kirby = new \Kirby\Cms\App([
    'roots' => [
        'index'    => __DIR__,
        'base'     => $base,
        'site'     => $base . '/site',
        'storage'  => $storage = $base . '/storage',
        'content'  => $storage . '/content',
        'accounts' => $storage . '/accounts',
        'cache'    => $storage . '/cache',
        'logs'     => $storage . '/logs',
        'sessions' => $storage . '/sessions'
    ]
]);
