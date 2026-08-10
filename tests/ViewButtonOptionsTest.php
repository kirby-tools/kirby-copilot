<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\ViewButtonOptions;
use Kirby\Cms\App;
use PHPUnit\Framework\Attributes\PreserveGlobalState;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

#[RunTestsInSeparateProcesses]
#[PreserveGlobalState(false)]
final class ViewButtonOptionsTest extends TestCase
{
    protected function tearDown(): void
    {
        App::destroy();
    }

    private function appWithButtons(array|false|null $buttons = null): App
    {
        $app = new App([
            'roots' => ['index' => __DIR__ . '/tmp'],
            'urls' => ['index' => 'https://example.com'],
            'blueprints' => [
                'pages/article' => [
                    'title' => 'Article',
                    'buttons' => $buttons
                ]
            ],
            'site' => [
                'children' => [
                    [
                        'slug' => 'test',
                        'num' => 1,
                        'template' => 'article',
                        'content' => [
                            'title' => 'Kirby Copilot',
                            'customPrompt' => 'Write a teaser'
                        ]
                    ]
                ]
            ]
        ]);

        $app->impersonate('kirby');

        return $app;
    }

    #[Test]
    public function resolves_the_user_prompt_query(): void
    {
        $page = $this->appWithButtons([
            'copilot' => ['userPrompt' => '{{ page.customPrompt }}']
        ])->page('test');

        $this->assertSame(
            'Write a teaser',
            ViewButtonOptions::resolve($page)['userPrompt']
        );
    }

    #[Test]
    public function resolves_the_system_prompt_query(): void
    {
        $page = $this->appWithButtons([
            'copilot' => ['systemPrompt' => 'You write about {{ page.title }}']
        ])->page('test');

        $this->assertSame(
            'You write about Kirby Copilot',
            ViewButtonOptions::resolve($page)['systemPrompt']
        );
    }

    #[Test]
    public function reads_props_nested_under_props(): void
    {
        $page = $this->appWithButtons([
            'copilot' => [
                'component' => 'k-copilot-view-button',
                'props' => ['userPrompt' => '{{ page.customPrompt }}']
            ]
        ])->page('test');

        $this->assertSame(
            'Write a teaser',
            ViewButtonOptions::resolve($page)['userPrompt']
        );
    }

    #[Test]
    public function prefers_a_top_level_prop_over_the_same_key_under_props(): void
    {
        $page = $this->appWithButtons([
            'copilot' => [
                'userPrompt' => 'Write a headline',
                'props' => ['userPrompt' => '{{ page.customPrompt }}']
            ]
        ])->page('test');

        $this->assertSame(
            'Write a headline',
            ViewButtonOptions::resolve($page)['userPrompt']
        );
    }

    #[Test]
    public function returns_null_for_a_button_listed_without_props(): void
    {
        $page = $this->appWithButtons(['preview', 'copilot'])->page('test');

        $this->assertSame(
            ['userPrompt' => null, 'systemPrompt' => null],
            ViewButtonOptions::resolve($page)
        );
    }

    #[Test]
    public function returns_null_for_a_button_set_to_false(): void
    {
        $page = $this->appWithButtons(['copilot' => false])->page('test');

        $this->assertSame(
            ['userPrompt' => null, 'systemPrompt' => null],
            ViewButtonOptions::resolve($page)
        );
    }

    #[Test]
    public function returns_null_for_a_blueprint_without_buttons(): void
    {
        $page = $this->appWithButtons()->page('test');

        $this->assertSame(
            ['userPrompt' => null, 'systemPrompt' => null],
            ViewButtonOptions::resolve($page)
        );
    }

    #[Test]
    public function returns_null_when_buttons_is_false(): void
    {
        $page = $this->appWithButtons(false)->page('test');

        $this->assertSame(
            ['userPrompt' => null, 'systemPrompt' => null],
            ViewButtonOptions::resolve($page)
        );
    }
}
