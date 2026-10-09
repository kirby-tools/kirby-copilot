<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class MovePageToolTest extends McpToolTestCase
{
    protected array $permissions = [ConnectionPermission::Read, ConnectionPermission::Prepare, ConnectionPermission::Publish];

    protected function setUp(): void
    {
        parent::setUp();

        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
        self::writeContent('notes/1_first/note.txt', ['Title' => 'First note']);
        self::writeContent('archive/archive.txt', ['Title' => 'Archive']);
    }

    #[Test]
    public function moves_a_page_below_another_parent(): void
    {
        $result = $this->callTool('move_page', ['page' => 'notes/first', 'parent' => 'archive'], $this->props());

        $this->assertSame(['id' => 'archive/first', 'url' => 'https://example.com/archive/first'], array_intersect_key($result['structuredContent']['page'], ['id' => 0, 'url' => 0]));
        $this->assertNotNull(self::bootApp($this->props())->page('archive/first'));
    }

    private function props(): array
    {
        return [
            'blueprints' => [
                'pages/archive' => ['sections' => ['notes' => ['type' => 'pages', 'templates' => ['note']]]],
                'site' => ['sections' => ['pages' => ['type' => 'pages', 'templates' => ['notes', 'archive']]]]
            ]
        ];
    }
}
