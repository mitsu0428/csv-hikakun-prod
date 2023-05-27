import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function HeaderTop() {
  return (
    <HeaderNav>
      <Link href="/">
        <HeaderMenuLink>Top</HeaderMenuLink>
      </Link>
      <Link href="/blog">
        <HeaderMenuLink>公式ブログ</HeaderMenuLink>
      </Link>
      <Link href="/privacy">
        <HeaderMenuLink>プライバシーポリシー</HeaderMenuLink>
      </Link>
      <Link href="/mail">
        <HeaderMenuLink>お問い合わせ</HeaderMenuLink>
      </Link>
    </HeaderNav>
  );
}

const HeaderNav = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 16px;
  background-color: #fff;
  box-sizing: border-box;
`;

const HeaderMenuLink = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
