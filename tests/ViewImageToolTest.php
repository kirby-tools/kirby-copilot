<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use Kirby\Filesystem\F;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ViewImageToolTest extends McpToolTestCase
{
    #[Test]
    public function returns_the_image_scaled_to_1024_pixels_wide(): void
    {
        $result = $this->viewImage('file://photo-uuid');

        $this->assertFalse($result['isError']);
        $this->assertSame('image', $result['content'][0]['type']);
        $this->assertSame('image/jpeg', $result['content'][0]['mimeType']);
        $this->assertSame([1024, 512], array_slice(getimagesizefromstring(base64_decode($result['content'][0]['data'])), 0, 2));
        $this->assertSame(
            [
                'id' => 'notes/photo.jpg',
                'uuid' => 'file://photo-uuid',
                'filename' => 'photo.jpg',
                'template' => null,
                'alt' => 'A lake at dawn',
                'panelUrl' => 'https://example.com/panel/pages/notes/files/photo.jpg',
                'width' => 2048,
                'height' => 1024,
                'etag' => $this->callWithImages('get_content', ['model' => 'file://photo-uuid'])['structuredContent']['etag']
            ],
            $result['structuredContent']
        );
        $this->assertSame('text', $result['content'][1]['type']);
    }

    #[Test]
    public function returns_the_alt_text_of_unsaved_changes(): void
    {
        $result = $this->viewImage('file://photo-uuid', function (App $kirby) {
            $kirby->file('notes/photo.jpg')->version('changes')->save(['alt' => 'A lake at dusk']);
        });

        $this->assertSame('A lake at dusk', $result['structuredContent']['alt']);
    }

    #[Test]
    public function returns_a_small_image_at_its_size(): void
    {
        $result = $this->viewImage('notes/icon.png');

        $this->assertSame('image/png', $result['content'][0]['mimeType']);
        $this->assertSame([64, 64], array_slice(getimagesizefromstring(base64_decode($result['content'][0]['data'])), 0, 2));
    }

    #[Test]
    public function refuses_a_file_that_is_no_raster_image(): void
    {
        $result = $this->viewImage('notes/logo.svg');

        $this->assertTrue($result['isError']);
        $this->assertSame('logo.svg isn\'t a JPEG, PNG, GIF, or WebP image.', $result['content'][0]['text']);
    }

    private function viewImage(string $file, Closure|null $prepare = null): array
    {
        return $this->callWithImages('view_image', ['file' => $file], $prepare);
    }

    private function callWithImages(string $name, array $arguments, Closure|null $prepare = null): array
    {
        return $this->callTool($name, $arguments, [
            'site' => [
                'children' => [
                    [
                        'slug' => 'notes',
                        'files' => [
                            ['filename' => 'photo.jpg', 'content' => ['uuid' => 'photo-uuid', 'alt' => 'A lake at dawn']],
                            ['filename' => 'icon.png', 'content' => ['uuid' => 'icon-uuid']],
                            ['filename' => 'logo.svg', 'content' => ['uuid' => 'logo-uuid']]
                        ]
                    ]
                ]
            ]
        ], function (App $kirby) use ($prepare) {
            $files = $kirby->page('notes')->files();

            self::writeImage($files->find('photo.jpg')->root(), 2048, 1024, 'imagejpeg');
            self::writeImage($files->find('icon.png')->root(), 64, 64, 'imagepng');
            F::write($files->find('logo.svg')->root(), '<svg xmlns="http://www.w3.org/2000/svg"/>');

            if ($prepare !== null) {
                $prepare($kirby);
            }
        });
    }

    private static function writeImage(string $root, int $width, int $height, callable $encode): void
    {
        F::write($root, '');
        $encode(imagecreatetruecolor($width, $height), $root);
    }
}
