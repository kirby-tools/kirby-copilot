<?php

declare(strict_types = 1);

use Kirby\Form\Field\StringField;
use Kirby\Form\Field\TextField;

/**
 * A plugin's field type that extends no core field, so it has no format hint.
 */
final class PluginField extends StringField
{
}

final class CustomTextField extends TextField
{
}

final class SourcedTextField extends TextField
{
    public function __construct(public string $source, mixed ...$args)
    {
        parent::__construct(...$args);
    }
}
