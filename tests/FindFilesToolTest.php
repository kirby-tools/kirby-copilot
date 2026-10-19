<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class FindFilesToolTest extends McpToolTestCase
{
    #[Test]
    public function finds_the_listable_files_missing_alt_across_the_site(): void
    {
        $result = $this->findFiles(['missing' => 'alt']);

        $this->assertSame(['logo.png', 'notes/first/blank.jpg'], array_column($result['files'], 'id'));
        $this->assertSame(2, $result['total']);
        $this->assertSame([false, false], array_column($result['files'], 'hasChanges'));
    }

    #[Test]
    public function filters_by_parent_type_and_query(): void
    {
        $this->assertSame(['notes/first/blank.jpg', 'notes/first/photo.jpg'], array_column($this->findFiles(['parent' => 'notes/first', 'type' => 'image'])['files'], 'id'));
        $this->assertSame(['notes/first/photo.jpg'], array_column($this->findFiles(['query' => 'lake'])['files'], 'id'));
    }

    #[Test]
    public function reads_missing_and_has_changes_from_the_unsaved_changes(): void
    {
        $prepare = fn (App $kirby) => $kirby->file('notes/first/blank.jpg')->version('changes')->save(['alt' => 'A blank page']);

        $this->assertSame(['logo.png'], array_column($this->findFiles(['missing' => 'alt'], $prepare)['files'], 'id'));
        $this->assertSame(['notes/first/blank.jpg'], array_column($this->findFiles(['hasChanges' => true], $prepare)['files'], 'id'));
    }

    #[Test]
    public function finds_the_files_not_yet_translated_into_a_language(): void
    {
        $props = [
            'options' => ['languages' => true],
            'languages' => [
                ['code' => 'en', 'name' => 'English', 'default' => true],
                ['code' => 'de', 'name' => 'Deutsch']
            ],
            'site' => [
                'files' => [
                    ['filename' => 'logo.png', 'translations' => [['code' => 'en', 'content' => ['alt' => 'Logo']], ['code' => 'de', 'content' => ['alt' => 'Logo']]]],
                    ['filename' => 'team.jpg', 'translations' => [['code' => 'en', 'content' => ['alt' => 'The team']]]]
                ]
            ]
        ];

        $find = fn (array $arguments) => array_column($this->callTool('find_files', $arguments, $props)['structuredContent']['files'], 'id');

        $this->assertSame(['team.jpg'], $find(['language' => 'de', 'hasTranslation' => false]));
        $this->assertSame(['logo.png'], $find(['language' => 'de', 'hasTranslation' => true]));

        $files = $this->callTool('find_files', [], $props, fn (App $kirby) => $kirby->site()->file('logo.png')->version('changes')->save(['alt' => 'Das Logo'], 'de'))['structuredContent']['files'];
        $this->assertSame([['de'], []], array_column($files, 'changesIn'));
    }

    #[Test]
    public function refuses_a_missing_field_no_file_has(): void
    {
        $result = $this->callTool('find_files', ['parent' => 'notes/first', 'missing' => 'description'], $this->props());

        $this->assertTrue($result['isError']);
        $this->assertSame('No file here has the field description. Their fields: alt, caption.', $result['content'][0]['text']);
    }

    private function findFiles(array $arguments, Closure|null $prepare = null): array
    {
        $result = $this->callTool('find_files', $arguments, $this->props(), $prepare);
        $this->assertFalse($result['isError'], $result['content'][0]['text']);

        return $result['structuredContent'];
    }

    private function props(): array
    {
        return [
            'options' => ['johannschopplich.copilot' => ['agents' => true]],
            'blueprints' => [
                'files/image' => ['fields' => ['alt' => ['type' => 'text']]],
                'files/document' => ['fields' => ['caption' => ['type' => 'text']]],
                'files/hidden' => ['options' => ['list' => false], 'fields' => ['alt' => ['type' => 'text']]],
                'pages/secret' => ['options' => ['access' => false]]
            ],
            'site' => [
                'files' => [['filename' => 'logo.png', 'template' => 'image', 'content' => ['uuid' => 'logo-uuid']]],
                'children' => [
                    [
                        'slug' => 'notes',
                        'content' => ['title' => 'Notes'],
                        'children' => [
                            [
                                'slug' => 'first',
                                'content' => ['title' => 'First note'],
                                'files' => [
                                    ['filename' => 'blank.jpg', 'template' => 'image', 'content' => ['uuid' => 'blank-uuid']],
                                    ['filename' => 'menu.pdf', 'template' => 'document', 'content' => ['uuid' => 'menu-uuid']],
                                    ['filename' => 'photo.jpg', 'template' => 'image', 'content' => ['alt' => 'A lake', 'uuid' => 'photo-uuid']],
                                    ['filename' => 'icon.png', 'template' => 'hidden', 'content' => ['uuid' => 'icon-uuid']]
                                ]
                            ]
                        ]
                    ],
                    [
                        'slug' => 'secret',
                        'template' => 'secret',
                        'content' => ['title' => 'Secret'],
                        'files' => [['filename' => 'plan.jpg', 'template' => 'image', 'content' => ['uuid' => 'plan-uuid']]]
                    ]
                ]
            ]
        ];
    }
}
