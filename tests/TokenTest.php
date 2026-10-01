<?php

declare(strict_types = 1);

use JohannSchopplich\Copilot\Agents\Token;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

final class TokenTest extends TestCase
{
    #[Test]
    public function parse_rejects_a_user_id_with_path_segments(): void
    {
        $token = Token::issue(Token::ACCESS, 'editor', Token::newConnectionId());

        $this->assertNotNull(Token::parse($token->value, Token::ACCESS));
        $this->assertNull(Token::parse(str_replace('editor', '../editor', $token->value), Token::ACCESS));
    }

    #[Test]
    public function parse_reads_a_long_custom_user_id(): void
    {
        $token = Token::issue(Token::ACCESS, str_repeat('a', 100), Token::newConnectionId());

        $this->assertSame(str_repeat('a', 100), Token::parse($token->value, Token::ACCESS)?->userId);
    }

    #[Test]
    public function parse_rejects_a_token_of_another_kind(): void
    {
        $token = Token::issue(Token::ACCESS, 'editor', Token::newConnectionId());

        $this->assertNull(Token::parse($token->value, Token::REFRESH));
    }
}
