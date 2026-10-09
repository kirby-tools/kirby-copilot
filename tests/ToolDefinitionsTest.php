<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ToolDefinitionsTest extends McpToolTestCase
{
    #[Test]
    #[DataProvider('permissions')]
    public function refuses_a_connection_without_the_permission_of_a_tool(string $name, ConnectionPermission $permission, string $label): void
    {
        $this->permissions = array_values(array_filter(ConnectionPermission::cases(), fn (ConnectionPermission $case) => $case !== $permission));

        $result = $this->callTool($name);

        $this->assertTrue($result['isError']);
        $this->assertSame("This connection lacks the permission \"{$label}\" ({$permission->value}) that {$name} needs. The user can reconnect the agent and allow it.", $result['content'][0]['text']);
    }

    #[Test]
    public function names_the_permission_in_english_on_a_german_site(): void
    {
        $this->permissions = [ConnectionPermission::Read];

        $result = $this->callTool('publish_changes', [], [
            'options' => ['languages' => true],
            'languages' => [['code' => 'de', 'name' => 'Deutsch', 'default' => true]],
            'users' => [['language' => 'de']]
        ]);

        $this->assertStringContainsString('lacks the permission "Publish changes"', $result['content'][0]['text']);
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
        yield ['upload_file', ConnectionPermission::Publish, 'Publish changes'];
        yield ['publish_changes', ConnectionPermission::Publish, 'Publish changes'];
        yield ['change_status', ConnectionPermission::Publish, 'Publish changes'];
        yield ['delete_page', ConnectionPermission::Delete, 'Delete content'];
        yield ['delete_file', ConnectionPermission::Delete, 'Delete content'];
    }
}
