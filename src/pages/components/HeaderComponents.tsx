/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function HeaderComponents() {
  return (
    <HeaderMenu>
      <Link href="/">
        <HeaderMenuLink>Home</HeaderMenuLink>
      </Link>
      <Link href="/about">
        <HeaderMenuLink>About</HeaderMenuLink>
      </Link>
      <Link href="/blog">
        <HeaderMenuLink>Blog</HeaderMenuLink>
      </Link>
      <Link href="/mail">
        <HeaderMenuLink>Mail</HeaderMenuLink>
      </Link>
      <Link href="/privacy">
        <HeaderMenuLink>PrivacyPolicy</HeaderMenuLink>
      </Link>
    </HeaderMenu>
  );
}

const HeaderMenu = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: #fff;
  box-sizing: border-box;
`;

const HeaderMenuLink = styled.a`
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
