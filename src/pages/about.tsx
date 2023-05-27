/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import SeoSettings from "./components/utils/SeoSettings";

const About = () => {
  return (
    <BasicContainer>
      <SeoSettings
        pageTitle={"比較ちゃんの具体的な使い方"}
        pageDescription={
          "「なんか比較したいなぁ」は全部このサイトへ。さまざまな形式での比較を提供します"
        }
        pagePath={"https://hikakuchan.jp"}
        pageImg={"https://hikakuchan.jp"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <BasicSubContainer>
        <BasicSubTitle>比較ちゃんの具体的な使い方</BasicSubTitle>
        <BasicText>
          <BasicButton>
            <Link href={"/"}>Topに戻る</Link>
          </BasicButton>
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>CSVファイルを比較する</BasicSubTitle>
        <BasicText>2つのCSVファイルを比較することができます。</BasicText>
        <BasicText>
          <BasicButton>
            <Link href={"/csv"}>CSVファイル比較ツール</Link>
          </BasicButton>
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>Excelファイルを比較する</BasicSubTitle>
        <BasicText>
          2つのExcelファイルを比較することができます。Excelファイルを比較する場合は、CSVファイルに変換してから比較してください。
        </BasicText>
        <BasicText>
          <BasicButton>
            <Link href={"/excel"}>Excelファイル比較ツール</Link>
          </BasicButton>
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>Textを比較する</BasicSubTitle>
        <BasicText>
          2つのTextを比較することができます。比較したいTextを入力してください。
        </BasicText>
        <BasicText>
          <BasicButton>
            <Link href={"/text"}>Text比較ツール</Link>
          </BasicButton>
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>今日と明日の天気を比較する</BasicSubTitle>
        <BasicText>今日と明日の天気を比較することができます。</BasicText>
        <BasicText>
          <BasicButton>
            <Link href={"/weather"}>天気比較ツール</Link>
          </BasicButton>
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
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
  font-size: 2rem;
  font-weight: bold;

  ::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 4rem;
    height: 4px;
    background: linear-gradient(to right, #111, #ccc);
  }
`;

const BasicText = styled.span`
  font-size: 1rem;
  line-height: 1.5;
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
