<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ConnectionPermission;
use Kirby\Filesystem\F;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

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
        $result = $this->upload(['parent' => 'notes', 'filename' => 'Lake View.png', 'data' => self::PNG]);

        $this->assertSame('notes/lake-view.png', $result['file']['id']);
        $this->assertSame('image', $result['file']['template']);
        $this->assertSame('https://example.com/panel/pages/notes/files/lake-view.png', $result['file']['panelUrl']);
        $this->assertSame(base64_decode(self::PNG), file_get_contents(self::indexRoot() . '/content/notes/lake-view.png'));
        $this->assertSame($this->callTool('get_content', ['model' => 'notes/lake-view.png'])['structuredContent']['etag'], $result['etag']);
    }

    #[Test]
    public function uploads_to_a_files_section_without_a_template_with_the_default_template(): void
    {
        self::writeContent('gallery/gallery.txt', ['Title' => 'Gallery']);

        $result = $this->upload(['parent' => 'gallery', 'filename' => 'a.png', 'data' => self::PNG]);

        $this->assertSame('default', $result['file']['template']);
    }

    #[Test]
    public function takes_the_template_of_the_first_accepting_files_section(): void
    {
        self::writeContent('twin/twin.txt', ['Title' => 'Twin']);

        $result = $this->upload(['parent' => 'twin', 'filename' => 'a.png', 'data' => self::PNG]);

        $this->assertSame('cover', $result['file']['template']);
    }

    #[Test]
    public function skips_a_template_whose_image_dimensions_the_file_misses(): void
    {
        self::writeContent('poster/poster.txt', ['Title' => 'Poster']);

        $result = $this->upload(['parent' => 'poster', 'filename' => 'a.png', 'data' => self::PNG]);

        $this->assertSame('image', $result['file']['template']);
    }

    #[Test]
    public function takes_the_upload_template_of_a_files_field(): void
    {
        self::writeContent('article/article.txt', ['Title' => 'Article']);

        $result = $this->upload(['parent' => 'article', 'filename' => 'a.png', 'data' => self::PNG]);

        $this->assertSame('cover', $result['file']['template']);
    }

    #[Test]
    public function skips_files_sections_of_another_parent_and_full_ones(): void
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
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'readme.txt', 'data' => base64_encode('Hello')]);

        $this->assertTrue($result['isError']);
        $this->assertSame('None of the file templates Notes accepts takes readme.txt: image, vector.', $result['content'][0]['text']);
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
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png', 'data' => 'not base64!']);

        $this->assertTrue($result['isError']);
        $this->assertSame('`data` must be the file\'s content in base64.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_base64_data_over_100_kb(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png', 'data' => base64_encode(str_repeat('a', 100 * 1024 + 1))]);

        $this->assertTrue($result['isError']);
        $this->assertSame('The file is larger than 100 KB. Pass a `url` instead.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_a_call_without_url_or_data(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png']);

        $this->assertTrue($result['isError']);
        $this->assertSame('Pass either `url` or `data`.', $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_a_url_inside_the_server_network(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png', 'url' => 'https://127.0.0.1/a.png']);

        $this->assertTrue($result['isError']);
        $this->assertStringStartsWith("Couldn't fetch https://127.0.0.1/a.png.", $result['content'][0]['text']);
    }

    #[Test]
    public function refuses_a_role_without_the_create_permission(): void
    {
        $result = $this->uploadResult(['parent' => 'notes', 'filename' => 'a.png', 'data' => self::PNG], role: 'reviewer');

        $this->assertTrue($result['isError']);
        $this->assertSame('The file cannot be created', $result['content'][0]['text']);
        $this->assertFileDoesNotExist(self::indexRoot() . '/content/notes/a.png');
    }

    #[Test]
    public function refuses_a_file_as_the_parent(): void
    {
        $this->upload(['parent' => 'notes', 'filename' => 'a.png', 'data' => self::PNG]);

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
                'pages/twin' => [
                    'sections' => [
                        'covers' => ['type' => 'files', 'template' => 'cover'],
                        'images' => ['type' => 'files', 'template' => 'image']
                    ]
                ],
                'pages/poster' => [
                    'sections' => [
                        'banners' => ['type' => 'files', 'template' => 'banner'],
                        'images' => ['type' => 'files', 'template' => 'image']
                    ]
                ],
                'pages/article' => ['fields' => ['cover' => ['type' => 'files', 'uploads' => ['template' => 'cover']]]],
                'pages/album' => [
                    'sections' => [
                        'siteCovers' => ['type' => 'files', 'parent' => 'site', 'template' => 'cover'],
                        'covers' => ['type' => 'files', 'template' => 'cover', 'max' => 1],
                        'images' => ['type' => 'files', 'template' => 'image']
                    ]
                ],
                'files/cover' => ['accept' => ['mime' => 'image/png']],
                'files/banner' => ['accept' => ['mime' => 'image/png', 'minwidth' => 100]],
                'files/image' => ['accept' => ['mime' => 'image/png, image/jpeg']],
                'files/vector' => ['accept' => ['extension' => 'svg']],
                'files/document' => ['accept' => ['extension' => 'pdf']],
                'users/reviewer' => ['name' => 'reviewer', 'permissions' => ['files' => ['create' => false]]]
            ],
            'users' => [['role' => $role]]
        ]);
    }
}
