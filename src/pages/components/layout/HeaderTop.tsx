import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function HeaderTop() {
  return (
    <HeaderNav>
      <Link href="/">
        <HeaderMenuLink>Top</HeaderMenuLink>
      </Link>
      <Link href="/csv">
        <HeaderMenuLink>CSV比較ツール</HeaderMenuLink>
      </Link>
      <Link href="/excel">
        <HeaderMenuLink>Excel比較ツール</HeaderMenuLink>
      </Link>
      <Link href="/text">
        <HeaderMenuLink>Text比較ツール</HeaderMenuLink>
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