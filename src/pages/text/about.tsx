import React from "react";
import Link from "next/link";
import styled from "styled-components";
import SeoSettings from "../components/SeoSettings";

const About = () => {
  return (
    <BasicContainer>
      <SeoSettings
        pageTitle={"テキストファイル比較ツールの具体的な使い方"}
        pageDescription={
          "テキストファイルを比較する具体的な使い方・事例などを紹介しています。簡単に差分を抽出し、結果を得ることができます。"
        }
        pagePath={"https://hikakuchan.jp/text/about"}
        pageImg={"https://hikakuchan.jp/text/about"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <BasicSubContainer>
        <BasicSubTitle>
          テキストファイル比較ツールの具体的な使い方
        </BasicSubTitle>
        <BasicText>
          <BasicButton>
            <Link href={"/text"}>
              <a>テキスト比較ツールに戻る</a>
            </Link>
          </BasicButton>
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【比較したいテキストを準備 01】</BasicSubTitle>
        <BasicText>マスターになるテキストを準備します。</BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【比較したいテキストを準備 02】</BasicSubTitle>
        <BasicText>比較したいテキストを準備します。</BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【結果を確認する 01】</BasicSubTitle>
        <BasicText>
          テキストを比較し、結果を確認したい場合は「比較する」ボタンを押下することで確認ができます。
        </BasicText>
      </BasicSubContainer>
    </BasicContainer>
  );
};

export default About;

const BasicContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BasicSubContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BasicSubTitle = styled.h2`
  position: relative;
`;

const BasicText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: #333;
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
  background-color: #909090;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background-color: #707070;
  }
`;
