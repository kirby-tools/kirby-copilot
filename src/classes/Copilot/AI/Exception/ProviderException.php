<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI\Exception;

use JohannSchopplich\Copilot\AI\ProviderName;
use Kirby\Exception\Exception;
use Kirby\Toolkit\Str;
use Throwable;

/**
 * Thrown when an upstream AI provider call fails.
 */
final class ProviderException extends Exception
{
    protected static string $defaultKey = 'copilot.ai.provider';
    protected static string $defaultFallback = 'AI provider request failed';
    protected static int $defaultHttpCode = 502;

    public function __construct(
        ProviderName $providerName,
        string $reason,
        string|null $model = null,
        string|null $responseId = null,
        string|null $responseExcerpt = null,
        int|null $httpCode = null,
        Throwable|null $previous = null,
    ) {
        $excerpt = $responseExcerpt !== null ? self::shorten($responseExcerpt) : null;

        $context = [];
        if ($model !== null) {
            $context[] = 'model: ' . $model;
        }
        if ($responseId !== null) {
            $context[] = 'request: ' . $responseId;
        }
        if ($excerpt !== null) {
            $context[] = 'response: ' . $excerpt;
        }

        $message = $providerName->value . ' provider error: ' . $reason;
        if ($context !== []) {
            $message .= ' (' . implode(', ', $context) . ')';
        }

        // TODO: Drop K4 compat in v4 – use named args `details:`, `httpCode:` and `previous:` once Kirby 5 is the floor.
        parent::__construct([
            'details' => [
                'providerName' => $providerName,
                'model' => $model,
                'responseId' => $responseId,
                'responseExcerpt' => $excerpt,
            ],
            'httpCode' => $httpCode,
            'previous' => $previous,
        ]);

        // Kirby templates `{…}` placeholders out of the message it is handed and
        // evaluates each as a query, which strips a JSON excerpt down to `-` and
        // constructs an `App` on the way, so the message never passes through.
        $this->message = $message;
    }

    private static function shorten(string $value): string
    {
        $singleLine = trim((string)preg_replace('/\s+/', ' ', $value));

        return Str::short($singleLine, 200);
    }
}
