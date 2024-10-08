import React from "react";
import styled from "styled-components";
import type { NextPage } from "next";
import SeoSettings from "../components/SeoSettings";
import Logo from "../components/elements/Logo";
import BasicTitle from "../components/elements/BasicTitle";
import HeaderCsv from "./layout/layout";

const Home: NextPage = () => {
  const [textValues, setTextValues] = React.useState({
    isFirstText: "",
    isSecondText: "",
    resultText: "",
  });

  const [isShowResult, setIsShowResult] = React.useState(false);

  const handleCompare = () => {
    const firstText = textValues.isFirstText;
    const secondText = textValues.isSecondText;

    // 差分のテキストは、[]で囲んで表示する
    const resultText = firstText
      .split("")
      .map((char, index) => {
        if (char != secondText[index]) {
          return `[${char}]`;
        } else {
          return char;
        }
      })
      .join("");
    setTextValues({ ...textValues, resultText: resultText });
    setIsShowResult(true);
  };

  return (
    <BasicContainer>
      <SeoSettings
        pageTitle={"テキスト比較ツール"}
        pageDescription={
          "テキスト比較ツールでは、入力欄に入れたテキストを比較することができます。"
        }
        pagePath={"https://hikakuchan.jp/text"}
        pageImg={"https://hikakuchan.jp/text"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <HeaderCsv />
      <main id="main">
        <Logo isTextPage={true} />

        <BasicSubContainer>
          <BasicTitle title="テキスト比較ツール(.txt)" />
          <ExtraText>
            テキストファイル比較ツールでは入力欄に入れたテキストを比較することができます。
          </ExtraText>
        </BasicSubContainer>

        <BasicSubContainer>
          <BasicSubTitle>1. 準備をする</BasicSubTitle>
        </BasicSubContainer>

        <TextAreaContainer>
          <BasicSubTitle>1.1. 1つ目のテキストを入力する</BasicSubTitle>
          <TextArea
            value={textValues.isFirstText}
            onChange={(e) =>
              setTextValues({ ...textValues, isFirstText: e.target.value })
            }
          />
        </TextAreaContainer>

        <TextAreaContainer>
          <BasicSubTitle>1.2. 2つ目のテキストを入力する</BasicSubTitle>
          <TextArea
            value={textValues.isSecondText}
            onChange={(e) =>
              setTextValues({ ...textValues, isSecondText: e.target.value })
            }
          />
        </TextAreaContainer>

        <BasicSubContainer>
          <BasicSubTitle>2. 比較をする</BasicSubTitle>
        </BasicSubContainer>

        <BasicButton
          onClick={() => {
            handleCompare();
          }}
        >
          比較する
        </BasicButton>
        <BasicButton
          onClick={() => {
            setIsShowResult(false);
          }}
        >
          非表示にする
        </BasicButton>

        {isShowResult && (
          <TextAreaContainer>
            <BasicSubTitle>3. 比較結果</BasicSubTitle>
            <TextArea value={textValues.resultText} />
          </TextAreaContainer>
        )}
      </main>
      {/* フッター */}
      <BasicFooter>
        <BasicText>©2023 Mitsuhiro Okada</BasicText>
      </BasicFooter>
    </BasicContainer>
  );
};

export default Home;

const BasicContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  margin-top: 1rem; /* Update: Add box-shadow and background-color */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const BasicSubContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 2rem; /* Update: Add border and padding */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
`;

const BasicSubTitle = styled.h2`
  position: relative;
  color: #000;
`;

const BasicText = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  color: #000;
`;

const ExtraText = styled.span`
  font-weight: bold;
  color: #000;
`;

const BasicButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 350px;
  font-size: 1rem;
  height: 3rem;
  margin-top: 2rem;
  text-decoration: none;
  color: #fff;
  background-color: #909090;
  border: none;
  border-radius: 8px;
  transition: 0.4s;

  :hover {
    background-color: #707070;
  }
`;

const BasicFooter = styled.footer`
  ${BasicContainer}
`;

const TextAreaContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  height: 30vh;
  border-radius: 8px;
  padding: 8px;
  border: none;
`;
