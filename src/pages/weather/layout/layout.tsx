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
  height: 70px;
  background-color: #808080;
  box-sizing: border-box;
  cursor: pointer;
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
