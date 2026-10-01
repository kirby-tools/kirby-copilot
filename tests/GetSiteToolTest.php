<?php

declare(strict_types = 1);

use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class GetSiteToolTest extends McpToolTestCase
{
    #[Test]
    public function describes_the_site_the_account_and_the_listable_top_level_pages(): void
    {
        $site = $this->getSite();

        $this->assertSame(['title' => 'Kirby Playground', 'url' => 'https://example.com', 'panelUrl' => 'https://example.com/panel/site'], $site['site']);
        $this->assertSame(['id' => 'ada', 'uuid' => 'user://ada', 'name' => 'Ada', 'role' => 'Editor'], $site['account']);
        $this->assertSame(['content:read', 'content:prepare'], $site['permissions']);
        $this->assertSame([], $site['languages']);
        $this->assertSame(['home', 'notes', 'drafts-only'], array_column($site['pages'], 'id'));
        $this->assertSame(
            [
                'id' => 'notes',
                'uuid' => 'page://notes-uuid',
                'title' => 'Notes',
                'template' => 'notes',
                'status' => 'unlisted',
                'panelUrl' => 'https://example.com/panel/pages/notes'
            ],
            $site['pages'][1]
        );
    }

    #[Test]
    public function names_the_account_by_id_without_uuids(): void
    {
        $site = $this->getSite(['options' => ['content' => ['uuid' => false]]]);

        $this->assertSame(['id' => 'ada', 'uuid' => null], array_intersect_key($site['account'], ['id' => 0, 'uuid' => 0]));
    }

    #[Test]
    public function lists_the_languages_with_the_default_first(): void
    {
        $site = $this->getSite([
            'options' => ['languages' => true],
            'languages' => [
                ['code' => 'de', 'name' => 'Deutsch'],
                ['code' => 'en', 'name' => 'English', 'default' => true]
            ]
        ]);

        $this->assertSame(
            [
                ['code' => 'en', 'name' => 'English', 'isDefault' => true],
                ['code' => 'de', 'name' => 'Deutsch', 'isDefault' => false]
            ],
            $site['languages']
        );
    }

    #[Test]
    public function caps_the_top_level_pages_and_says_more_exist(): void
    {
        $site = $this->getSite([
            'site' => ['children' => array_map(
                fn (int $i) => ['slug' => 'page-' . $i, 'num' => $i, 'template' => 'default'],
                range(1, 101)
            )]
        ]);

        $this->assertCount(100, $site['pages']);
        $this->assertTrue($site['hasMorePages']);
    }

    private function getSite(array $props = []): array
    {
        return $this->callTool('get_site', [], array_replace_recursive([
            'site' => [
                'content' => ['title' => 'Kirby Playground'],
                'children' => [
                    ['slug' => 'home', 'num' => 1, 'template' => 'home', 'content' => ['title' => 'Home', 'uuid' => 'home-uuid']],
                    ['slug' => 'notes', 'template' => 'notes', 'content' => ['title' => 'Notes', 'uuid' => 'notes-uuid']],
                    ['slug' => 'secret', 'num' => 2, 'template' => 'secret', 'content' => ['title' => 'Secret', 'uuid' => 'secret-uuid']]
                ],
                'drafts' => [
                    ['slug' => 'drafts-only', 'template' => 'default', 'content' => ['title' => 'Draft', 'uuid' => 'draft-uuid']]
                ]
            ],
            'blueprints' => [
                'pages/secret' => ['options' => ['list' => false]]
            ]
        ], $props))['structuredContent'];
    }
}
