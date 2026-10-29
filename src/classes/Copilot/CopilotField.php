<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot;

use Kirby\Cms\File;
use Kirby\Exception\InvalidArgumentException;
use Kirby\Form\Field\DisplayField;
use Kirby\Reflection\Attributes\Prop;
use Kirby\Toolkit\Str;

final class CopilotField extends DisplayField
{
    private const LOG_LEVELS = ['error', 'warn', 'info', 'debug'];
    private const THUMB_SIZE = 2048;

    /**
     * Name of the field to generate content for.
     */
    #[Prop(computed: true)]
    protected string|null $field = null;

    #[Prop(computed: true)]
    protected string|null $userPrompt = null;

    #[Prop(computed: true)]
    protected string|null $systemPrompt = null;

    #[Prop]
    protected bool $storage = true;

    #[Prop]
    protected bool $editable = true;

    /**
     * `auto` attaches the file of a file view as context.
     */
    #[Prop]
    protected bool|string $files = true;

    #[Prop]
    protected string $icon = 'sparkling';

    #[Prop]
    protected string|null $theme = null;

    #[Prop]
    protected string|null $size = null;

    #[Prop(computed: true)]
    protected string|null $logLevel = null;

    #[Prop]
    protected bool $open = false;

    #[Prop(computed: true)]
    protected array|null $modelFile = null;

    #[Prop(computed: true)]
    protected string $licenseStatus = 'inactive';

    #[Prop(computed: true)]
    protected string $licenseDialog = '';

    public function label(): string
    {
        // The blueprint normalizer sets the label to `Str::label()` of the key when
        // none is given, so that value counts as unset.
        if ($this->label === null || $this->label === Str::label($this->name ?? '')) {
            return $this->i18n('johannschopplich.copilot.label');
        }

        return parent::label();
    }

    public function props(): array
    {
        // Siblings other than the blueprint's top-level fields mean a nested
        // form – a block, a layout's settings, a structure row, or an object –
        // whose values the Panel field can't reach. `toArray()` turns the
        // throw into an error field.
        if ($this->siblings()->keys() !== array_keys(array_change_key_case($this->model()->blueprint()->fields()))) {
            throw new InvalidArgumentException(message: $this->i18n('johannschopplich.copilot.field.nested'));
        }

        return parent::props();
    }

    public function field(): array|string|null
    {
        if ($this->field === null || $this->field === '') {
            return null;
        }

        $target = $this->siblings()->findByKey($this->field);

        // A Copilot field targeting itself or another one would export them in turn without end.
        if ($target === null || !$target->hasValue()) {
            return $this->field;
        }

        $props = $target->toArray();
        unset($props['value']);

        return $props;
    }

    public function userPrompt(): string|null
    {
        return PromptQuery::resolve($this->model(), $this->userPrompt);
    }

    public function systemPrompt(): string|null
    {
        return PromptQuery::resolve($this->model(), $this->systemPrompt);
    }

    public function logLevel(): string|null
    {
        if ($this->logLevel !== null && !in_array($this->logLevel, self::LOG_LEVELS, true)) {
            throw new InvalidArgumentException(
                message: 'Invalid log level "' . $this->logLevel . '", expected one of: ' . implode(', ', self::LOG_LEVELS)
            );
        }

        return $this->logLevel;
    }

    /**
     * @return array{mime: string, url: string}|null
     */
    public function modelFile(): array|null
    {
        $model = $this->model();

        if (!$model instanceof File || $this->files !== 'auto') {
            return null;
        }

        $mime = $model->mime();
        $url = $model->url();

        // A JPEG thumbnail keeps the image within what the providers accept.
        if (str_starts_with($mime, 'image/')) {
            $options = ['format' => 'jpg', 'quality' => 60];

            if ($model->width() > self::THUMB_SIZE || $model->height() > self::THUMB_SIZE) {
                $options[$model->width() > $model->height() ? 'width' : 'height'] = self::THUMB_SIZE;
            }

            $thumb = $model->thumb($options);
            $mime = $thumb->mime();
            $url = $thumb->url();
        }

        return [
            'mime' => $mime,
            'url' => $url
        ];
    }

    public function licenseStatus(): string
    {
        return Licensing::status();
    }

    public function licenseDialog(): string
    {
        return Licensing::dialog();
    }
}
