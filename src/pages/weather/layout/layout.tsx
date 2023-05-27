import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function HeaderWeather() {
  return (
    <HeaderNav>
      <Link href="/weather">
        <HeaderMenuLink>天気比較ツール</HeaderMenuLink>
      </Link>
      <Link href="/weather/about">
        <HeaderMenuLink>ツールについて</HeaderMenuLink>
      </Link>
      <Link href="/weather/mail">
        <HeaderMenuLink>ツールに関するお問い合わせ</HeaderMenuLink>
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
