import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function HeaderText() {
  return (
    <HeaderNav>
      <Link href="/">
        <HeaderMenuLink>ホーム</HeaderMenuLink>
      </Link>
      <Link href="/text/about">
        <HeaderMenuLink>ツールについて</HeaderMenuLink>
      </Link>
      <Link href="/blog">
        <HeaderMenuLink>公式ブログ</HeaderMenuLink>
      </Link>
      <Link href="/text/mail">
        <HeaderMenuLink>お問い合わせ</HeaderMenuLink>
      </Link>
      <Link href="/privacy">
        <HeaderMenuLink>プライバシーポリシー</HeaderMenuLink>
      </Link>
    </HeaderNav>
  );
}

const HeaderNav = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background-color: #fff;
  box-sizing: border-box;
`;

const HeaderMenuLink = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
