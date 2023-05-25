import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <BasicContainer>
      <BasicSubTitle>比較ちゃん [hikakuchan]</BasicSubTitle>
      <BasicSubContainer>
        <BasicText>・CSVファイル同士を比較したい</BasicText>
        <BasicText>・Excelファイル同士を比較したい</BasicText>
        <BasicText>・Textファイルや文章同士を比較したい</BasicText>
        <BasicText>など</BasicText>
        <BasicText>様々なファイルを比較することができるツールです。</BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicText>
          <BasicButton>
            <Link href={"/csv"}>CSV比較 [Now released]</Link>
          </BasicButton>
        </BasicText>
        <BasicText>
          <BasicButton>
            <Link href={"/excel"}>Excel比較 [coming soon...]</Link>
          </BasicButton>
        </BasicText>
        <BasicText>
          <BasicButton>
            <Link href={"/text"}>Text比較 [coming soon...]</Link>
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
  padding: 0 1rem;
  margin-top: 32px;
`;

const BasicSubTitle = styled.h2`
  position: relative;
  padding: 1.5rem 1rem;
  font-size: 20px;

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
`;

const BasicText = styled.p`
  font-size: 16px;

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
  background-color: #3c5e8b;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background-color: #557ea7;
  }
`;
