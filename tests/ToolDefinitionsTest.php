<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\Attributes\TestWith;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ToolDefinitionsTest extends McpToolTestCase
{
    #[Test]
    #[DataProvider('permissions')]
    public function challenges_a_connection_without_the_permission_of_a_tool_with_insufficient_scope(string $name, ConnectionPermission $permission, string $label): void
    {
        $this->permissions = [ConnectionPermission::Read];

        $response = $this->post('tools/call', ['name' => $name, 'arguments' => (object)[]]);

        $this->assertSame(403, $response->code());
        $this->assertSame(
            "Bearer error=\"insufficient_scope\", scope=\"content:read {$permission->value}\", resource_metadata=\"https://example.com/.well-known/oauth-protected-resource/api/copilot/mcp\", error_description=\"This connection lacks the {$label} permission ({$permission->value}) that {$name} needs. The user can allow it for this connection in the Panel's Agents view.\"",
            $response->headers()['WWW-Authenticate']
        );
    }

    #[Test]
    public function refuses_a_permission_the_role_withholds_from_agents_with_a_tool_error(): void
    {
        $this->permissions = ConnectionPermission::cases();

        $result = $this->callTool('delete_page', [], [
            'blueprints' => ['users/editor' => ['permissions' => ['johannschopplich.copilot' => ['agentsDelete' => false]]]]
        ]);

        $this->assertTrue($result['isError']);
        $this->assertSame('This connection lacks the Delete content permission (content:delete) that delete_page needs, and the user\'s role doesn\'t make it available to agents.', $result['content'][0]['text']);
    }

    #[Test]
    public function names_the_permission_in_english_on_a_german_site(): void
    {
        $this->permissions = ConnectionPermission::cases();

        $result = $this->callTool('publish_changes', [], [
            'options' => ['languages' => true],
            'languages' => [['code' => 'de', 'name' => 'Deutsch', 'default' => true]],
            'blueprints' => ['users/editor' => ['permissions' => ['johannschopplich.copilot' => ['agentsPublish' => false]]]],
            'users' => [['language' => 'de']]
        ]);

        $this->assertStringContainsString('lacks the Publish changes permission', $result['content'][0]['text']);
    }

    #[Test]
    public function drops_the_tools_of_a_permission_the_role_can_no_longer_use(): void
    {
        $this->permissions = ConnectionPermission::cases();

        $tools = $this->rpc('tools/list', [], [
            'blueprints' => ['users/editor' => ['permissions' => ['pages' => ['delete' => false], 'files' => ['delete' => false]]]]
        ])['result']['tools'];

        $this->assertNotContains('delete_page', array_column($tools, 'name'));
    }

    #[Test]
    #[TestWith(['change_slug', ['slug' => 'opening-note']])]
    #[TestWith(['change_status', ['status' => 'unlisted']])]
    #[TestWith(['move_page', ['parent' => 'archive']])]
    public function refuses_while_another_user_edits_the_page_in_the_panel(string $name, array $arguments): void
    {
        $this->permissions = ConnectionPermission::cases();
        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
        self::writeContent('notes/1_first/note.txt', ['Title' => 'First note']);
        self::writeContent('notes/1_first/_changes/note.txt', ['Title' => 'First note', 'Lock' => 'grace']);
        self::writeContent('archive/archive.txt', ['Title' => 'Archive']);

        $result = $this->callTool($name, ['page' => 'notes/first', ...$arguments], [
            'users' => [1 => ['id' => 'grace', 'email' => 'grace@example.com', 'role' => 'editor']]
        ]);

        $this->assertSame('grace@example.com is editing this content in the Panel. Try again once they leave its view, or 10 minutes after their last edit.', $result['content'][0]['text']);
    }

    #[Test]
    public function marks_which_tools_change_or_destroy_content(): void
    {
        $this->permissions = ConnectionPermission::cases();

        $annotations = array_column($this->rpc('tools/list')['result']['tools'], 'annotations', 'name');

        $this->assertTrue($annotations['get_site']['readOnlyHint']);
        $this->assertFalse($annotations['prepare_changes']['readOnlyHint']);
        $this->assertFalse($annotations['prepare_changes']['destructiveHint']);
        $this->assertTrue($annotations['delete_page']['destructiveHint']);
        $this->assertTrue($annotations['upload_file']['destructiveHint']);
        $this->assertFalse($annotations['upload_file']['idempotentHint']);
    }

    public static function permissions(): iterable
    {
        yield ['prepare_changes', ConnectionPermission::Prepare, 'Prepare changes'];
        yield ['discard_changes', ConnectionPermission::Publish, 'Publish changes'];
        yield ['create_draft', ConnectionPermission::Prepare, 'Prepare changes'];
        yield ['upload_file', ConnectionPermission::Prepare, 'Prepare changes'];
        yield ['publish_changes', ConnectionPermission::Publish, 'Publish changes'];
        yield ['change_status', ConnectionPermission::Publish, 'Publish changes'];
        yield ['change_slug', ConnectionPermission::Publish, 'Publish changes'];
        yield ['move_page', ConnectionPermission::Publish, 'Publish changes'];
        yield ['delete_page', ConnectionPermission::Delete, 'Delete content'];
        yield ['delete_file', ConnectionPermission::Delete, 'Delete content'];
    }
}
