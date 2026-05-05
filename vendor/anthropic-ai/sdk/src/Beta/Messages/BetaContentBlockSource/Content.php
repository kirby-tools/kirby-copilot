<?php

declare(strict_types=1);

namespace Anthropic\Beta\Messages\BetaContentBlockSource;

use Anthropic\Beta\Messages\BetaContentBlockSourceContent;
use Anthropic\Beta\Messages\BetaImageBlockParam;
use Anthropic\Beta\Messages\BetaTextBlockParam;
use Anthropic\Core\Concerns\SdkUnion;
use Anthropic\Core\Conversion\Contracts\Converter;
use Anthropic\Core\Conversion\Contracts\ConverterSource;
use Anthropic\Core\Conversion\ListOf;

/**
 * @phpstan-import-type BetaContentBlockSourceContentShape from \Anthropic\Beta\Messages\BetaContentBlockSourceContent
 *
 * @phpstan-type ContentVariants = string|list<BetaTextBlockParam|BetaImageBlockParam>
 * @phpstan-type ContentShape = ContentVariants|list<BetaContentBlockSourceContentShape>
 */
final class Content implements ConverterSource
{
    use SdkUnion;

    /**
     * @return list<string|Converter|ConverterSource>|array<string,string|Converter|ConverterSource>
     */
    public static function variants(): array
    {
        return ['string', new ListOf(BetaContentBlockSourceContent::class)];
    }
}
