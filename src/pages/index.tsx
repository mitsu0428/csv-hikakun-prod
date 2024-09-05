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
        <BasicSubTitle>比較ちゃん [hikakuchan]</BasicSubTitle>
        <BoldBasicText>
          「なんか比較したいなぁ」は全部このサイトへ。
        </BoldBasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BoldBasicText>具体的なツール例</BoldBasicText>
        <BasicText>CSVファイル同士を比較する</BasicText>
        <BasicText>Excelファイル同士を比較する</BasicText>
        <BasicText>Textファイルや文章同士を比較する</BasicText>
        <BasicText>今日の天気と明日の天気を比較する</BasicText>
        <BasicText>など</BasicText>
        <BasicText>様々なものを簡単に比較できます。</BasicText>
      </BasicSubContainer>
      <ButtonContainer>
        <ButtonItem>
          <Image src="/product-image/CSV.JPG" width={50} height={50} />
          <StyledButton>
            <Link href={"/csv"}>CSVファイル比較ツール</Link>
          </StyledButton>
        </ButtonItem>
        <ButtonItem>
          <Image src="/product-image/EXCEL.JPG" width={50} height={50} />
          <StyledButton>
            <Link href={"/excel"}>Excelファイル比較ツール [Not released]</Link>
          </StyledButton>
        </ButtonItem>
        <ButtonItem>
          <Image src="/product-image/TEXT.JPG" width={50} height={50} />
          <StyledButton>
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
`;

const BasicSubContainer = styled.div`
  width: 100%;
  padding: 16px;
`;

const BasicSubTitle = styled.h2`
  position: relative;
  padding: 16px;
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
  height: 33vh;
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #c3d941;
  transition: 0.2s;
  text-align: center;

  &:hover {
    background-color: #d3e173;
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
