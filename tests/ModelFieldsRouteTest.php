<?php

declare(strict_types = 1);

use Kirby\Cms\App;
use Kirby\Exception\InvalidArgumentException;
use Kirby\Exception\NotFoundException;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ModelFieldsRouteTest extends ApiRouteTestCase
{
    private function callModelFieldsRoute(array $query = []): mixed
    {
        return $this->callRoute(
            new App(['request' => ['query' => $query]]),
            '__copilot__/model-fields'
        );
    }

    #[Test]
    public function missing_id_throws(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/Missing "id" query parameter/');
        $this->callModelFieldsRoute();
    }

    #[Test]
    public function unresolvable_id_throws(): void
    {
        $this->expectException(NotFoundException::class);
        $this->expectExceptionMessageMatches('/No model found for id: not-a-model/');
        $this->callModelFieldsRoute(['id' => 'not-a-model']);
    }

    #[Test]
    public function resolves_the_fields_of_the_requested_model(): void
    {
        $fields = $this->callRoute(
            new App([
                'request' => ['query' => ['id' => 'site']],
                'site' => ['blueprint' => ['fields' => ['headline' => ['type' => 'text']]]],
            ]),
            '__copilot__/model-fields'
        );

        $this->assertArrayHasKey('headline', $fields);
    }
}
