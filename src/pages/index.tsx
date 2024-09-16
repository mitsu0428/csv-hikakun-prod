import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Logo from "./components/elements/Logo";
import SeoSettings from "./components/SeoSettings";
import Image from "next/image";

export default function Home() {
  return (
    <BasicContainer>
      <Logo isTopPage={true} />
      <SeoSettings />
      <BasicSubContainer>
        <BasicSubTitle>比較ちゃん | hikakuchan</BasicSubTitle>
        <BoldBasicText>
          「なんか比較したいなぁ」は全部このサイトへ。
        </BoldBasicText>
      </BasicSubContainer>

      <BasicSubContainer>
        <BoldBasicText>具体的なツール例</BoldBasicText>
        <BasicText>・CSVファイル同士を比較する</BasicText>
        <BasicText>・Textファイルや文章同士を比較する</BasicText>
        <BasicText>様々なものを簡単に比較できます。</BasicText>
      </BasicSubContainer>

      <ButtonContainer>
        <ButtonItem>
          <StyledButton>
            <Image src="/product-image/CSV.JPG" width={50} height={50} />
            <Link href={"/csv"}>CSVファイル比較ツール</Link>
          </StyledButton>
        </ButtonItem>

        <ButtonItem>
          <StyledButton>
            <Image src="/product-image/TEXT.JPG" width={50} height={50} />
            <Link href={"/text"}>Text比較ツール</Link>
          </StyledButton>
        </ButtonItem>

        <ButtonItem>
          <StyledButton>
            <Link href={"/mail"}>機能追加のお問い合わせ</Link>
          </StyledButton>
        </ButtonItem>
      </ButtonContainer>
    </BasicContainer>
  );
}

const BasicContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem;
`;

const BasicSubContainer = styled.div`
  width: 100%;
  padding: 16px;
`;

const BasicSubTitle = styled.h2`
  position: relative;
  font-size: 32px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const BasicText = styled.p`
  font-size: 16px;
  color: #fff;
  margin-left: 8px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const BoldBasicText = styled.p`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonItem = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 36px;
  border-radius: 8px;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  padding: 1rem;
  text-decoration: none;
  background-color: #909090;
  text-align: center;
  border-radius: 8px;

  &:hover {
    background-color: #707070;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
