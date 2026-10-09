<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ChangeStatusToolTest extends McpToolTestCase
{
    protected array $permissions = [ConnectionPermission::Read, ConnectionPermission::Prepare, ConnectionPermission::Publish];

    protected function setUp(): void
    {
        parent::setUp();

        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
        self::writeContent('notes/1_first/note.txt', ['Title' => 'First note', 'Intro' => 'Hello']);
        self::writeContent('notes/2_second/note.txt', ['Title' => 'Second note', 'Intro' => 'Hello']);
        self::writeContent('notes/_drafts/idea/note.txt', ['Title' => 'Idea', 'Intro' => 'Hello']);
    }

    #[Test]
    public function lists_a_draft_at_a_position(): void
    {
        $result = $this->callTool('change_status', ['page' => 'notes/idea', 'status' => 'listed', 'position' => 1], $this->props());

        $this->assertFalse($result['isError'], $result['content'][0]['text']);
        $this->assertSame(['status' => 'listed', 'url' => 'https://example.com/notes/idea', 'position' => 1], array_intersect_key($result['structuredContent']['page'], ['status' => 0, 'url' => 0, 'position' => 0]));
        $this->assertArrayNotHasKey('notices', $result['structuredContent']);
        $this->assertSame(['notes/idea', 'notes/first', 'notes/second'], self::bootApp($this->props())->page('notes')->children()->listed()->keys());
    }

    #[Test]
    public function lists_a_page_at_the_end_by_default(): void
    {
        $result = $this->callTool('change_status', ['page' => 'notes/idea', 'status' => 'listed'], $this->props());

        $this->assertSame(3, $result['structuredContent']['page']['position']);
        $this->assertSame(['notes/first', 'notes/second', 'notes/idea'], self::bootApp($this->props())->page('notes')->children()->listed()->keys());
    }

    #[Test]
    public function keeps_a_listed_page_at_its_position(): void
    {
        $result = $this->callTool('change_status', ['page' => 'notes/first', 'status' => 'listed'], $this->props());

        $this->assertSame(1, $result['structuredContent']['page']['position']);
        $this->assertSame(['notes/first', 'notes/second'], self::bootApp($this->props())->page('notes')->children()->listed()->keys());
    }

    #[Test]
    public function unlists_a_page(): void
    {
        $result = $this->callTool('change_status', ['page' => 'notes/first', 'status' => 'unlisted'], $this->props());

        $this->assertNull($result['structuredContent']['page']['position']);
        $this->assertSame('unlisted', self::bootApp($this->props())->page('notes/first')->status());
    }

    #[Test]
    public function refuses_to_publish_a_draft_with_validation_errors_and_names_them(): void
    {
        self::writeContent('notes/_drafts/idea/note.txt', ['Title' => 'Idea', 'Intro' => '']);
        $props = $this->props(['blueprints' => ['pages/note' => ['fields' => ['intro' => ['type' => 'text', 'required' => true]]]]]);

        $result = $this->callTool('change_status', ['page' => 'notes/idea', 'status' => 'unlisted'], $props);

        $this->assertTrue($result['isError']);
        $this->assertStringStartsWith('The page has validation errors, so it stays a draft. Fix them with prepare_changes and publish_changes: intro: ', $result['content'][0]['text']);
        $this->assertSame('draft', self::bootApp($props)->page('notes/idea')->status());
    }

    #[Test]
    public function refuses_a_position_for_another_status(): void
    {
        $result = $this->callTool('change_status', ['page' => 'notes/idea', 'status' => 'unlisted', 'position' => 1], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('`position` applies only to `listed`.', $result['content'][0]['text']);
    }

    #[Test]
    public function says_that_unsaved_changes_stay_unsaved(): void
    {
        self::writeContent('notes/1_first/_changes/note.txt', ['Title' => 'First note', 'Intro' => 'Hello, agent', 'Lock' => 'ada']);

        $result = $this->callTool('change_status', ['page' => 'notes/first', 'status' => 'unlisted'], $this->props());

        $this->assertSame(['The page has unsaved changes, which stay unsaved. publish_changes publishes them.'], $result['structuredContent']['notices']);
    }

    #[Test]
    public function refuses_to_publish_a_draft_with_unsaved_changes(): void
    {
        self::writeContent('notes/_drafts/idea/_changes/note.txt', ['Title' => 'Idea', 'Intro' => 'Hello, agent', 'Lock' => 'ada']);

        $result = $this->callTool('change_status', ['page' => 'notes/idea', 'status' => 'unlisted'], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('The draft has unsaved changes, so it stays a draft. Publish them with publish_changes first.', $result['content'][0]['text']);
        $this->assertSame('draft', self::bootApp($this->props())->page('notes/idea')->status());
    }

    #[Test]
    public function names_the_languages_of_a_drafts_unsaved_changes(): void
    {
        self::writeContent('notes/_drafts/idea/_changes/note.de.txt', ['Title' => 'Idee', 'Intro' => 'Hallo, Agent', 'Lock' => 'ada']);
        $props = $this->props([
            'options' => ['languages' => true],
            'languages' => [
                ['code' => 'en', 'name' => 'English', 'default' => true],
                ['code' => 'de', 'name' => 'Deutsch']
            ]
        ]);

        $result = $this->callTool('change_status', ['page' => 'notes/idea', 'status' => 'unlisted'], $props);

        $this->assertSame('The draft has unsaved changes in de, so it stays a draft. Publish them with publish_changes first.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_an_account_that_may_not_change_the_status(): void
    {
        $result = $this->callTool('change_status', ['page' => 'notes/idea', 'status' => 'listed'], $this->props(['users' => [['role' => 'reviewer']]]));

        $this->assertTrue($result['isError']);
        $this->assertSame('The status for this page cannot be changed', $result['content'][0]['text']);
        $this->assertSame('draft', self::bootApp($this->props())->page('notes/idea')->status());
    }

    private function props(array $props = []): array
    {
        return array_replace_recursive([
            'blueprints' => [
                'pages/note' => ['fields' => ['intro' => ['type' => 'text']]],
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['pages' => ['changeStatus' => false]]]
            ]
        ], $props);
    }
}
