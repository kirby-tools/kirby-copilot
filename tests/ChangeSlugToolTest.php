<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ChangeSlugToolTest extends McpToolTestCase
{
    protected array $permissions = [ConnectionPermission::Read, ConnectionPermission::Prepare, ConnectionPermission::Publish];

    protected function setUp(): void
    {
        parent::setUp();

        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
        self::writeContent('notes/1_first/note.txt', ['Title' => 'First note']);
    }

    #[Test]
    public function renames_the_page_folder(): void
    {
        $result = $this->callTool('change_slug', ['page' => 'notes/first', 'slug' => 'Opening Note']);

        $this->assertSame(['id' => 'notes/opening-note', 'url' => 'https://example.com/notes/opening-note'], array_intersect_key($result['structuredContent']['page'], ['id' => 0, 'url' => 0]));
        $this->assertNotNull(self::bootApp()->page('notes/opening-note'));
    }

    #[Test]
    public function changes_only_the_url_of_another_language(): void
    {
        $props = [
            'options' => ['languages' => true],
            'languages' => [
                ['code' => 'de', 'name' => 'Deutsch', 'default' => true],
                ['code' => 'en', 'name' => 'English', 'url' => '/en']
            ]
        ];
        self::writeContent('notes/1_first/note.de.txt', ['Title' => 'Erste Notiz']);

        $result = $this->callTool('change_slug', ['page' => 'notes/first', 'slug' => 'opening-note', 'language' => 'en'], $props);

        $this->assertSame('https://example.com/en/notes/opening-note', $result['structuredContent']['page']['url']);
        $this->assertSame('first', self::bootApp($props)->page('notes/first')->slug('de'));
    }
}
