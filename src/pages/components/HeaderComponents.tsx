/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function HeaderComponents() {
  return (
    <header>
      <HeaderMenu>
        <HeaderMenuContainer>
          <Image
            src="/images/csvhikakun_logo_ver0.2.png"
            width={75}
            height={75}
            alt="csvhikrakunのロゴ"
          />
        </HeaderMenuContainer>
        <HeaderMenuContainer>
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
        </HeaderMenuContainer>
      </HeaderMenu>
    </header>
  );
}

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 4rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const HeaderMenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderMenuLink = styled.a`
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
