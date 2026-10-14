<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use Kirby\Filesystem\F;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\Attributes\TestWith;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class UploadFileToolTest extends McpToolTestCase
{
    private const PNG = 'iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgQAYAAA4AAbGa6gYAAAAASUVORK5CYII=';

    protected array $permissions = [ConnectionPermission::Read, ConnectionPermission::Prepare, ConnectionPermission::Publish];

    protected function setUp(): void
    {
        parent::setUp();

        self::writeContent('notes/notes.txt', ['Title' => 'Notes']);
    }

    #[Test]
    public function uploads_a_file_to_a_page(): void
    {
        $result = $this->upload(['parent' => 'notes', 'filename' => 'Lake View.png', 'data' => self::PNG, 'template' => 'image']);

        $this->assertSame('notes/lake-view.png', $result['file']['id']);
        $this->assertSame('image', $result['file']['template']);
        $this->assertSame('https://example.com/panel/pages/notes/files/lake-view.png', $result['file']['panelUrl']);
        $this->assertSame(base64_decode(self::PNG), file_get_contents(self::indexRoot() . '/content/notes/lake-view.png'));
        $this->assertSame($this->callTool('get_content', ['model' => 'notes/lake-view.png'])['structuredContent']['etag'], $result['etag']);
    }

    #[Test]
    #[TestWith(['notes/idea'], 'draft')]
    #[TestWith(['notes/idea/sketch'], 'page inside a draft')]
    public function uploads_into_a_draft_with_the_prepare_permission(string $parent): void
    {
        $this->permissions = [ConnectionPermission::Read, ConnectionPermission::Prepare];
        self::writeContent('notes/_drafts/idea/idea.txt', ['Title' => 'Idea']);
        self::writeContent('notes/_drafts/idea/sketch/sketch.txt', ['Title' => 'Sketch']);

        $result = $this->upload(['parent' => $parent, 'filename' => 'a.png', 'data' => self::PNG, 'template' => 'image']);

        $this->assertSame("{$parent}/a.png", $result['file']['id']);
    }

    #[Test]
    public function asks_for_the_publish_permission_to_upload_to_a_published_page(): void
    {
        $this->permissions = [ConnectionPermission::Read, ConnectionPermission::Prepare];

        $response = $this->post('tools/call', ['name' => 'upload_file', 'arguments' => ['parent' => 'notes', 'filename' => 'a.png', 'data' => self::PNG, 'template' => 'image']]);

        $this->assertSame(403, $response->code());
        $this->assertStringContainsString('error="insufficient_scope", scope="content:read content:prepare content:publish"', $response->headers()['WWW-Authenticate']);
        $this->assertFileDoesNotExist(self::indexRoot() . '/content/notes/a.png');
    }

    #[Test]
    public function uploads_to_a_files_section_without_a_template_with_the_default_template(): void
    {
        self::writeContent('gallery/gallery.txt', ['Title' => 'Gallery']);

        $result = $this->upload(['parent' => 'gallery', 'filename' => 'a.png', 'data' => self::PNG]);

        $this->assertSame('default', $result['file']['template']);
    }

    #[Test]
    public function asks_for_the_template_when_the_parent_accepts_several(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png', 'data' => self::PNG]);

        $this->assertTrue($result['isError']);
        $this->assertSame('Notes accepts files with several templates, so pass one as `template`: image, vector.', $result['content'][0]['text']);
    }

    #[Test]
    public function takes_the_upload_template_of_a_files_field(): void
    {
        self::writeContent('article/article.txt', ['Title' => 'Article']);

        $result = $this->upload(['parent' => 'article', 'filename' => 'a.png', 'data' => self::PNG]);

        $this->assertSame('cover', $result['file']['template']);
    }

    #[Test]
    public function skips_files_sections_that_take_no_upload_to_the_parent(): void
    {
        self::writeContent('album/album.txt', ['Title' => 'Album']);
        F::write(self::indexRoot() . '/content/album/existing.png', base64_decode(self::PNG));
        self::writeContent('album/existing.png.txt', ['Template' => 'cover']);

        $result = $this->upload(['parent' => 'album', 'filename' => 'a.png', 'data' => self::PNG]);

        $this->assertSame('image', $result['file']['template']);
    }

    #[Test]
    public function refuses_a_template_the_parent_does_not_accept(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png', 'data' => self::PNG, 'template' => 'document']);

        $this->assertTrue($result['isError']);
        $this->assertSame('Notes accepts files with the templates: image, vector.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_a_file_the_template_does_not_accept(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'readme.txt', 'data' => base64_encode('Hello'), 'template' => 'image']);

        $this->assertTrue($result['isError']);
        $this->assertSame('The extension "txt" is not allowed', $result['content'][0]['text']);
        $this->assertFileDoesNotExist(self::indexRoot() . '/content/notes/readme.txt');
    }

    #[Test]
    public function refuses_an_svg_with_a_script(): void
    {
        $result = $this->uploadResult([
            'parent' => 'notes',
            'filename' => 'icon.svg',
            'data' => base64_encode('<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>'),
            'template' => 'vector'
        ]);

        $this->assertTrue($result['isError']);
        $this->assertSame('The "script" element (line 1) is not allowed', $result['content'][0]['text']);
        $this->assertFileDoesNotExist(self::indexRoot() . '/content/notes/icon.svg');
    }

    #[Test]
    public function refuses_a_parent_that_takes_no_new_files(): void
    {
        self::writeContent('about/plain.txt', ['Title' => 'About']);

        $result = $this->uploadResult(['parent' => 'about', 'filename' => 'a.png', 'data' => self::PNG]);

        $this->assertTrue($result['isError']);
        $this->assertSame('About takes no new files.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_data_that_is_not_base64(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png', 'data' => 'not base64!', 'template' => 'image']);

        $this->assertTrue($result['isError']);
        $this->assertSame('`data` must be the file\'s content in base64.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_base64_data_over_100_kb(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png', 'data' => base64_encode(str_repeat('a', 100 * 1024 + 1)), 'template' => 'image']);

        $this->assertTrue($result['isError']);
        $this->assertSame('The file is larger than 100 KB. Pass a `url` instead.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_a_call_without_url_or_data(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png']);

        $this->assertTrue($result['isError']);
        $this->assertSame('Pass exactly one of `url` and `data`.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_a_url_inside_the_server_network(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png', 'url' => 'https://127.0.0.1/a.png', 'template' => 'image']);

        $this->assertTrue($result['isError']);
        $this->assertStringStartsWith("Couldn't fetch https://127.0.0.1/a.png: the host has no public address.", $result['content'][0]['text']);
    }

    #[Test]
    public function names_the_template_maxsize_when_a_url_upload_fails(): void
    {
        self::writeContent('thumbs/thumbs.txt', ['Title' => 'Thumbs']);

        $result = $this->uploadResult(['parent' => 'thumbs', 'filename' => 'a.png', 'url' => 'https://127.0.0.1/a.png']);

        $this->assertTrue($result['isError']);
        $this->assertStringEndsWith("for a file of at most 2\u{a0}MB.", $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_a_role_without_the_create_permission_before_fetching_the_url(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png', 'url' => 'https://127.0.0.1/a.png', 'template' => 'image'], role: 'reviewer');

        $this->assertTrue($result['isError']);
        $this->assertSame('Kirby refused this for the user\'s account – its role or the blueprint\'s options: The file cannot be created', $result['content'][0]['text']);
        $this->assertFileDoesNotExist(self::indexRoot() . '/content/notes/a.png');
    }

    #[Test]
    public function refuses_a_file_as_the_parent(): void
    {
        $this->upload(['parent' => 'notes', 'filename' => 'a.png', 'data' => self::PNG, 'template' => 'image']);

        $result = $this->uploadResult(['parent' => 'notes/a.png', 'filename' => 'b.png', 'data' => self::PNG]);

        $this->assertTrue($result['isError']);
        $this->assertSame('`parent` must be the site or a page.', $result['content'][0]['text']);
    }

    private function upload(array $arguments): array
    {
        $result = $this->uploadResult($arguments);
        $this->assertFalse($result['isError'], $result['content'][0]['text']);

        return $result['structuredContent'];
    }

    private function uploadResult(array $arguments, string $role = 'editor'): array
    {
        return $this->callTool('upload_file', $arguments, [
            'blueprints' => [
                'pages/default' => [
                    'sections' => [
                        'images' => ['type' => 'files', 'template' => 'image'],
                        'vectors' => ['type' => 'files', 'template' => 'vector']
                    ]
                ],
                'pages/gallery' => ['sections' => ['files' => ['type' => 'files']]],
                'pages/plain' => ['fields' => ['subtitle' => ['type' => 'text']]],
                'pages/thumbs' => ['sections' => ['thumbs' => ['type' => 'files', 'template' => 'thumb']]],
                'pages/article' => ['fields' => ['cover' => ['type' => 'files', 'uploads' => ['template' => 'cover']]]],
                'pages/album' => [
                    'sections' => [
                        'siteCovers' => ['type' => 'files', 'parent' => 'site', 'template' => 'cover'],
                        'documents' => ['type' => 'files', 'template' => 'document', 'create' => false],
                        'covers' => ['type' => 'files', 'template' => 'cover', 'max' => 1],
                        'images' => ['type' => 'files', 'template' => 'image']
                    ]
                ],
                'files/cover' => ['accept' => ['mime' => 'image/png']],
                'files/image' => ['accept' => ['mime' => 'image/png, image/jpeg']],
                'files/vector' => ['accept' => ['extension' => 'svg']],
                'files/thumb' => ['accept' => ['mime' => 'image/png', 'maxsize' => 2 * 1024 * 1024]],
                'files/document' => ['accept' => ['extension' => 'pdf']],
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['files' => ['create' => false]]]
            ],
            'users' => [['role' => $role]]
        ]);
    }
}
