import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Logo from "./components/elements/Logo";
import SeoSettings from "./components/utils/SeoSettings";

export default function Home() {
  return (
    <BasicContainer>
      <Logo isTopPage={true} />
      <SeoSettings />
      <BasicSubContainer>
        <BasicSubTitle>比較ちゃん [hikakuchan]</BasicSubTitle>
        <BasicText>「なんか比較したいなぁ」は全部このサイトへ。</BasicText>
      <BasicSubContainer />
　　　　<BasicSubContainer>
        <BasicText>具体的なツール例</BasicText>
        <BasicText>・CSVファイル同士を比較する</BasicText>
        <BasicText>・Excelファイル同士を比較する</BasicText>
        <BasicText>・Textファイルや文章同士を比較する</BasicText>
        <BasicText>・今日の天気と明日の天気を比較する</BasicText>
        <BasicText>など</BasicText>
        <BasicText>様々なものを簡単に比較できます。</BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicText>
          <BasicButton>
            <Link href={"/csv"}>CSVファイル比較ツール</Link>
          </BasicButton>
        </BasicText>
        <BasicText>
          <BasicButton>
            <Link href={"/excel"}>Excelファイル比較ツール [Not released]</Link>
          </BasicButton>
        </BasicText>
        <BasicText>
          <BasicButton>
            <Link href={"/text"}>Text比較ツール</Link>
          </BasicButton>
        </BasicText>
        <BasicText>
          <BasicButton>
            <Link href={"/weather"}>天気比較ツール</Link>
          </BasicButton>
        </BasicText>
        <BasicText>
          <BasicButton>
            <Link href={"/mail"}>機能追加のお問い合わせ</Link>
          </BasicButton>
        </BasicText>
      </BasicSubContainer>
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

const BasicSubTitle = styled.h2`
  position: relative;
  padding: 16px;
  font-size: 32px;
  color: #333132;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: 10px;
    content: "";
    background-image: -webkit-repeating-linear-gradient(
      135deg,
      #000,
      #000 1px,
      transparent 2px,
      transparent 5px
    );
    background-image: repeating-linear-gradient(
      -45deg,
      #000,
      #000 1px,
      transparent 2px,
      transparent 5px
    );
    background-size: 7px 7px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const BasicText = styled.p`
  font-size: 16px;
  color: #333132;
  margin-left: 8px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const BasicButton = styled.button`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  height: 3rem;
  margin: 0.5rem 0;
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #c3d941;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background-color: #d3e173;
  }
`;
