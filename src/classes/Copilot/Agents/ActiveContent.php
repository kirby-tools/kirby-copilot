<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\Agents;

use Dom\HTMLDocument;
use DOMDocument;
use Generator;
use Kirby\Cms\App;
use Kirby\Form\Field;
use Kirby\Form\Field\BlocksField;
use Kirby\Form\FieldClass;
use Kirby\Form\Fields;
use Kirby\Form\Form;
use RuntimeException;
use Throwable;

/**
 * The markup that runs code when a reviewer previews the changes on the
 * Panel's origin: script-like elements, event attributes, and script URLs.
 * A denylist rather than an HTML allowlist, so images, tables, and embeds
 * an editor placed survive a rewrite.
 *
 * Each scalar leaf of a value counts on its own, as templates and snippets
 * print it: as written, and as `kirbytext()` renders it, which turns Markdown
 * links and KirbyTags into HTML and runs the site's kirbytext hooks and the
 * KirbyTags of its plugins. The leaves also count joined, as a page prints
 * them one after another. PHP's HTML5 parser reads all three forms, or libxml
 * before PHP 8.4.
 *
 * A construct counts as the same when it is the same element with the same
 * serialized content, the same attribute with the same value, or the same
 * text from a quote to an event attribute; only names and that text are
 * lowercased. So an editor's embed survives while a second one, or a changed
 * script, doesn't. A construct counts against those in a field of the same
 * name in blocks of the same type or in structure rows, since a block's
 * snippet or a template decides per field whether it prints markup escaped,
 * as a code sample, or live.
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
     * The event handler attributes an attribute breakout looks for – those of
     * the HTML standard and of other web specs such as CSS, pointer, touch,
     * and SVG animation, engine-only ones like `ongesturestart`, and any
     * vendor-prefixed one – so prose like `"the best" one = two` passes.
     */
    private const EVENT_ATTRIBUTE = 'on(?:abort|afterprint|animation(?:cancel|end|iteration|start)|auxclick|'
        . 'before(?:copy|cut|input|match|paste|print|toggle|unload|xrselect)|begin|blur|cancel|canplay(?:through)?|change|click|close|command|'
        . 'contentvisibilityautostatechange|context(?:lost|menu|restored)|copy|cuechange|cut|dblclick|drag(?:end|enter|leave|over|start)?|drop|durationchange|emptied|'
        . 'end(?:ed)?|error|focus(?:in|out)?|formdata|fullscreen(?:change|error)|gesture(?:change|end|start)|gotpointercapture|hashchange|input|invalid|'
        . 'key(?:down|press|up)|languagechange|load(?:eddata|edmetadata|start)?|lostpointercapture|message(?:error)?|mouse(?:down|enter|leave|move|out|over|up|wheel)|'
        . 'offline|online|page(?:hide|reveal|show|swap)|paste|pause|play(?:ing)?|pointer(?:cancel|down|enter|leave|move|out|over|rawupdate|up)|popstate|progress|'
        . 'ratechange|rejectionhandled|repeat|reset|resize|scroll(?:end|snapchange|snapchanging)?|search|securitypolicyviolation|seek(?:ed|ing)|'
        . 'select(?:ionchange|start)?|slotchange|stalled|storage|submit|suspend|timeupdate|toggle|touch(?:cancel|end|move|start)|transition(?:cancel|end|run|start)|'
        . 'unhandledrejection|unload|volumechange|waiting|wheel|webkit[a-z]+|moz[a-z]+|ms[a-z]+)';

    /**
     * A quote that closes the attribute a template prints the value in, then
     * an event attribute before the tag ends; a browser reads the text between
     * them as attributes.
     */
    private const ATTRIBUTE_BREAKOUT = '/["\'][^>"\']*?(?<=[\s\/"\'])(' . self::EVENT_ATTRIBUTE . ')\s*=/i';

    private const REFUSED = "contains %s, which the site doesn't accept from agents. Write it without.";

    private const UNCHANGED_PASSES = ' What the field already holds passes when you send it unchanged.';

    private const UNCHECKABLE = "contains %s, which the site can't check on this server. Tell the user to edit the field in the Panel.";

    /**
     * What libxml before 2.14, an HTML4 parser, reads differently from a
     * browser: comments, elements whose content is text, and numeric
     * references to no character XML allows, which it drops along with the
     * rest of the attribute.
     */
    private const HTML4_MARKUP = '/<!--|<(?:textarea|title|xmp|noembed|noframes|plaintext)\b|&#(?:x([0-9a-f]*)|(\d*))/i';

    /**
     * Refuses submitted values that bring in active markup their current
     * values don't contain, or a script URL as the whole value of a `url` or
     * `link` field, which templates print into `href` – also one in blocks,
     * layouts, structure rows, and objects, found through the forms Kirby
     * validates them with. Reads Kirby's form values, which are what it
     * stores: blocks sent as JSON decoded, writer values sanitized.
     *
     * @param list<string> $names
     * @param array<string, mixed> $current The form values before the submit
     */
    public static function refuseIntroduced(Fields $fields, array $names, array $current = []): void
    {
        $values = $fields->toFormValues();

        foreach ($names as $name) {
            $field = $fields->get($name);

            if ($field !== null) {
                $heldUrls = self::scriptUrls($field, $current[$name] ?? null);

                foreach (self::scriptUrls($field, $values[$name] ?? null) as $key => [$place, $scheme]) {
                    if (!isset($heldUrls[$key])) {
                        throw new ToolError("{$place} " . sprintf(self::REFUSED, "a `{$scheme}` URL") . (isset($current[$name]) ? self::UNCHANGED_PASSES : ''));
                    }
                }
            }

            $refusal = self::refusal($values[$name] ?? null, $current[$name] ?? null);

            if ($refusal !== null) {
                throw new ToolError("`{$name}` {$refusal}");
            }
        }
    }

    /**
     * Says why the site refuses a value, or returns `null`: for the first
     * active construct the current value doesn't contain as often, or for
     * markup it can't check – a value that can't be rendered or parsed, and
     * markup anywhere in it that libxml before 2.14 reads differently, when
     * PHP parses with that libxml.
     */
    public static function refusal(mixed $value, mixed $current): string|null
    {
        $leaves = self::leaves($value);
        $currentLeaves = self::leaves($current);

        if ($leaves === $currentLeaves) {
            return null;
        }

        try {
            foreach ([
                fn (array $leaves) => $leaves,
                // Rendered without its model as the parent, since script URLs don't depend on which files resolve.
                fn (array $leaves) => array_map(fn (array $leaf) => [$leaf[0], $leaf[1] === '' ? '' : App::instance()->kirbytext($leaf[1])], $leaves),
                fn (array $leaves) => [['', implode("\n", array_column($leaves, 1))]]
            ] as $form) {
                $html = $form($leaves);
                $markup = self::html4Markup(implode("\n", array_column($html, 1)));

                if ($markup !== null) {
                    return sprintf(self::UNCHECKABLE, $markup);
                }

                $currentCounts = self::constructCounts($form($currentLeaves));

                foreach (self::constructCounts($html) as $construct => $count) {
                    if ($count > ($currentCounts[$construct] ?? 0)) {
                        return sprintf(self::REFUSED, strstr($construct, "\0", true)) . ($current === null ? '' : self::UNCHANGED_PASSES);
                    }
                }
            }
        } catch (Throwable) {
            return sprintf(self::UNCHECKABLE, 'markup');
        }

        return null;
    }

    /**
     * Collects the script URLs that make up the whole value of a `url` or
     * `link` field, the field itself or one nested in its value, each keyed
     * by its place and value.
     *
     * @return array<string, array{string, string}> The place to name in a refusal and the scheme
     */
    private static function scriptUrls(Field|FieldClass $field, mixed $value, string|null $parentName = null): array
    {
        $urls = [];
        $scheme = in_array($field->type(), ['url', 'link'], true) && is_string($value)
            ? self::scriptScheme(html_entity_decode($value, ENT_QUOTES | ENT_HTML5, 'UTF-8'))
            : null;

        if ($scheme !== null) {
            $place = $parentName === null ? "`{$field->name()}`" : "`{$field->name()}` in `{$parentName}`";
            $urls[$place . "\0" . $value] = [$place, $scheme];
        }

        foreach (self::nestedForms($field, $value) as $form) {
            foreach ($form->fields() as $nestedField) {
                $urls += self::scriptUrls($nestedField, $nestedField->toFormValue(), $parentName ?? $field->name());
            }
        }

        return $urls;
    }

    /**
     * Yields the forms Kirby validates a blocks, layout, structure, or object
     * value with. Kirby reuses a structure field's form, so each form is read
     * before the next.
     *
     * @return Generator<Form>
     */
    private static function nestedForms(Field|FieldClass $field, mixed $value): Generator
    {
        if (!is_array($value)) {
            return;
        }

        switch ($field->type()) {
            case 'blocks':
                yield from self::blockForms($field, $value);
                break;
            case 'layout':
                foreach ($value as $layout) {
                    yield $field->attrsForm()->fill($layout['attrs'] ?? []);

                    foreach ($layout['columns'] ?? [] as $column) {
                        yield from self::blockForms($field, $column['blocks'] ?? []);
                    }
                }
                break;
            case 'structure':
                foreach ($value as $row) {
                    yield $field->form()->fill(input: $row);
                }
                break;
            case 'object':
                yield $field->form($value);
        }
    }

    /**
     * @return Generator<Form>
     */
    private static function blockForms(BlocksField $field, array $blocks): Generator
    {
        foreach ($blocks as $block) {
            $fieldset = $field->fieldsets()->find($block['type'] ?? '');

            if ($fieldset !== null) {
                yield $field->form($fieldset->fields())->fill($block['content'] ?? []);
            }
        }
    }

    /**
     * Collects each scalar leaf with its place: the type of the block it
     * sits in and the name of its field there. The items of a list, such as
     * blocks or rows, sit under the field of the list.
     *
     * @return list<array{string, string}>
     */
    private static function leaves(mixed $value, string $blockType = '', string $fieldName = ''): array
    {
        if (is_array($value)) {
            if (isset($value['type'], $value['content'])) {
                $blockType = (string)$value['type'];
            }

            return array_merge(...array_map(
                fn (mixed $item, int|string $key) => self::leaves($item, $blockType, is_string($key) ? $key : $fieldName),
                $value,
                array_keys($value)
            ));
        }

        return is_scalar($value) ? [["{$blockType}\0{$fieldName}", (string)$value]] : [];
    }

    /**
     * @param list<array{string, string}> $leaves
     * @return array<string, int>
     */
    private static function constructCounts(array $leaves): array
    {
        $constructs = [];

        foreach ($leaves as [$place, $html]) {
            foreach (self::constructs($html) as $construct) {
                $constructs[] = "{$construct}\0{$place}";
            }
        }

        return array_count_values($constructs);
    }

    /**
     * Returns the first markup that libxml before 2.14 reads differently from
     * a browser, or `null`.
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

    /** @return list<string> The active constructs of the HTML, each as its description and its content, joined by a NUL byte */
    private static function constructs(string $html): array
    {
        if (preg_match_all(self::ATTRIBUTE_BREAKOUT, $html, $matches, PREG_SET_ORDER) === false) {
            throw new RuntimeException(preg_last_error_msg());
        }
        $constructs = array_map(fn (array $match) => 'the event attribute `' . strtolower($match[1]) . "`\0" . strtolower($match[0]), $matches);

        // A parser drops a tag left open at the end, but in a template a later
        // quote can close it, so the quotes and `>` close it here.
        $html .= '"\'>';
        $document = self::parse($html);

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
