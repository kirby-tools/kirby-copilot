<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Dom\HTMLDocument;
use DOMDocument;
use Kirby\Cms\App;
use RuntimeException;
use Throwable;

/**
 * The markup that runs code when a reviewer previews the changes on the
 * Panel's origin: script-like elements, event attributes, and script URLs.
 * A denylist rather than an HTML allowlist, so images, tables, and embeds
 * an editor placed survive a rewrite.
 *
 * A value counts as written, for templates that print it as is, and as
 * `kirbytext()` renders it, which turns Markdown links and KirbyTags into
 * HTML. Rendering runs the site's kirbytext hooks and the KirbyTags of its
 * plugins. PHP's HTML5 parser reads both forms, or libxml before PHP 8.4.
 *
 * A construct counts as the same when it is the same element with the same
 * serialized content, or the same attribute with the same value; only names
 * are lowercased. So an editor's embed survives while a second one, or a
 * changed script, doesn't.
 */
final class ActiveContent
{
    /**
     * Elements that run code or change where the page loads from, and the
     * elements whose content libxml reads differently from a browser.
     */
    private const ELEMENTS = ['script', 'iframe', 'object', 'embed', 'style', 'base', 'noscript', 'svg', 'math', 'template'];

    private const URL_ATTRIBUTES = ['href', 'src', 'srcset', 'action', 'formaction', 'xlink:href', 'data', 'poster'];

    private const SCRIPT_SCHEMES = ['javascript:', 'vbscript:', 'data:text/html'];

    /**
     * What libxml before 2.14, an HTML4 parser, reads differently from a
     * browser: comments, elements whose content is text, and numeric
     * references to no character XML allows, which it drops along with the
     * rest of the attribute.
     */
    private const HTML4_MARKUP = '/<!--|<(?:textarea|title|xmp|noembed|noframes|plaintext)\b|&#(?:x([0-9a-f]*)|(\d*))/i';

    /**
     * Refuses values that bring in active markup their current values don't
     * contain.
     *
     * @param array<string, mixed> $values Values by field name
     * @param array<string, mixed> $current Current values by field name
     */
    public static function refuseIntroduced(array $values, array $current = []): void
    {
        foreach ($values as $name => $value) {
            $markup = self::introducedIn($value, $current[$name] ?? null);

            if ($markup !== null) {
                throw new ToolError("`{$name}` contains {$markup}, which the site doesn't accept from agents. Write it without.");
            }
        }
    }

    /**
     * Describes the first active construct in a value that the current
     * value doesn't contain as often, or returns `null`. A value that can't
     * be rendered or parsed counts as active, and so does markup anywhere in
     * it that libxml before 2.14 reads differently, when PHP parses with that
     * libxml.
     */
    public static function introducedIn(mixed $value, mixed $current): string|null
    {
        $text = self::text($value);
        $currentText = self::text($current);

        if ($text === $currentText) {
            return null;
        }

        try {
            $forms = [
                [$text, $currentText],
                [self::render($text), self::render($currentText)]
            ];

            foreach ($forms as [$html, $currentHtml]) {
                $markup = self::html4Markup($html);

                if ($markup !== null) {
                    return $markup;
                }

                $currentCounts = array_count_values(self::constructs($currentHtml));

                foreach (array_count_values(self::constructs($html)) as $construct => $count) {
                    if ($count > ($currentCounts[$construct] ?? 0)) {
                        return strstr($construct, "\0", true);
                    }
                }
            }
        } catch (Throwable) {
            return "markup that couldn't be checked";
        }

        return null;
    }

    private static function text(mixed $value): string
    {
        if (is_array($value)) {
            return implode("\n", array_map(self::text(...), $value));
        }

        return is_scalar($value) ? (string)$value : '';
    }

    /**
     * Renders a value without its model as the parent; script URLs don't
     * depend on which files resolve.
     */
    private static function render(string $text): string
    {
        return $text === '' ? '' : App::instance()->kirbytext($text);
    }

    /**
     * Returns the first markup that libxml before 2.14 reads differently
     * from a browser, or `null`, also when PHP's HTML5 parser or a newer
     * libxml reads the value.
     */
    private static function html4Markup(string $html): string|null
    {
        if (!self::isHtml4()) {
            return null;
        }

        preg_match_all(self::HTML4_MARKUP, $html, $matches, PREG_SET_ORDER | PREG_UNMATCHED_AS_NULL);

        foreach ($matches as [$markup, $hex, $decimal]) {
            $codePoint = $hex !== null ? hexdec($hex) : ($decimal !== null ? (int)$decimal : null);

            if ($codePoint === null || !self::isXmlCharacter($codePoint)) {
                return 'the markup `' . strtolower($markup) . '`';
            }
        }

        return null;
    }

    private static function isHtml4(): bool
    {
        return !class_exists(HTMLDocument::class) && LIBXML_VERSION < 21400;
    }

    private static function isXmlCharacter(int|float $codePoint): bool
    {
        return in_array($codePoint, [0x9, 0xA, 0xD], true) ||
            ($codePoint >= 0x20 && $codePoint <= 0xD7FF) ||
            ($codePoint >= 0xE000 && $codePoint <= 0xFFFD) ||
            ($codePoint >= 0x10000 && $codePoint <= 0x10FFFF);
    }

    /**
     * @return list<string> The active constructs of the HTML, each as its description and its content, joined by a NUL byte
     */
    private static function constructs(string $html): array
    {
        if (trim($html) === '') {
            return [];
        }

        // A parser drops a tag left open at the end, but in a template a later
        // quote can close it, so the quotes and `>` close it here.
        $html .= '"\'>';
        $document = self::parse($html);
        $constructs = [];

        foreach ($document->getElementsByTagName('*') as $element) {
            $tag = strtolower($element->tagName);

            if (in_array($tag, self::ELEMENTS, true) || ($tag === 'meta' && $element->hasAttribute('http-equiv'))) {
                $constructs[] = "the element `<{$tag}>`\0" . $document->saveHTML($element);
            }

            foreach ($element->attributes as $attribute) {
                $name = strtolower($attribute->nodeName);

                if (str_starts_with($name, 'on')) {
                    $constructs[] = "the event attribute `{$name}`\0{$attribute->value}";
                } elseif (in_array($name, self::URL_ATTRIBUTES, true)) {
                    foreach ($name === 'srcset' ? explode(',', $attribute->value) : [$attribute->value] as $url) {
                        // libxml before 2.14 leaves HTML5 references like `&colon;` as they are.
                        $scheme = self::scriptScheme(self::isHtml4() ? html_entity_decode($url, ENT_QUOTES | ENT_HTML5, 'UTF-8') : $url);

                        if ($scheme !== null) {
                            $constructs[] = "a `{$scheme}` URL\0{$name}={$url}";
                        }
                    }
                }
            }
        }

        return $constructs;
    }

    private static function parse(string $html): DOMDocument|HTMLDocument
    {
        if (class_exists(HTMLDocument::class)) {
            return HTMLDocument::createFromString($html, LIBXML_NOERROR, 'UTF-8');
        }

        $document = new DOMDocument();

        // The XML declaration makes libxml read UTF-8.
        if (!$document->loadHTML('<?xml encoding="UTF-8">' . $html, LIBXML_NOERROR | LIBXML_NOWARNING | LIBXML_HTML_NODEFDTD | LIBXML_PARSEHUGE | LIBXML_NONET)) {
            throw new RuntimeException('libxml couldn\'t parse the value.');
        }

        return $document;
    }

    /**
     * Returns the script scheme a URL starts with, read as browsers do:
     * after leading control characters and spaces, without tabs and line
     * breaks, in any case.
     */
    private static function scriptScheme(string $url): string|null
    {
        $normalized = strtolower(str_replace(["\t", "\n", "\r"], '', ltrim($url, "\x00..\x20")));

        foreach (self::SCRIPT_SCHEMES as $scheme) {
            if (str_starts_with($normalized, $scheme)) {
                return $scheme;
            }
        }

        return null;
    }
}
