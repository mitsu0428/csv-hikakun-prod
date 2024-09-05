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
        {/* ロゴ */}
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

const BasicSubContainerComponent = styled.div`
  ${BasicContainer}
  display: flex;
  flex-direction: row;
`;

const BasicCard = styled.div`
  ${BasicContainer} display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff; /* Update: Add margin and padding */
  margin: 2rem 0;
  padding: 2rem;
`;

const BasicSubTitle = styled.h2`
  position: relative;
  padding: 1.5rem 1rem;

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

const BasicText = styled.span`
  font-size: 1rem;
  line-height: 1.5;
`;

const ExtraText = styled.span`
  font-weight: bold;
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
  color: #ffffff;
  background-color: #eea9a9;
  border: none;
  border-radius: 8px;
  transition: 0.4s;

  :hover {
    background-color: #ff6f91;
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
