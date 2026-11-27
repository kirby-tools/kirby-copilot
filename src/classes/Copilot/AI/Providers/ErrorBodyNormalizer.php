<?php

declare(strict_types = 1);

namespace JohannSchopplich\Copilot\AI\Providers;

use GuzzleHttp\Psr7\Utils;
use Psr\Http\Client\ClientInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

/**
 * PSR-18 client that hands `openai-php/client` a failed body it throws on; the
 * SDK parses Mistral's `{"object": "error", …}` or `{"detail": …}` as a
 * completion.
 *
 * @internal
 */
final readonly class ErrorBodyNormalizer implements ClientInterface
{
    public function __construct(
        private ClientInterface $client,
    ) {
    }

    public function sendRequest(RequestInterface $request): ResponseInterface
    {
        $response = $this->client->sendRequest($request);

        if ($response->getStatusCode() < 400) {
            return $response;
        }

        $body = (string)$response->getBody();
        $data = json_decode($body, associative: true);

        if (is_array($data) && !isset($data['error']) && !isset($data[0]['error'])) {
            $message = $data['message'] ?? $data['detail'] ?? $body;
            $body = json_encode([
                'error' => [
                    'message' => is_string($message) ? $message : json_encode($message),
                    'type' => $data['type'] ?? null,
                    'code' => $data['code'] ?? null,
                ],
            ]);
        }

        return $response->withBody(Utils::streamFor($body));
    }
}
