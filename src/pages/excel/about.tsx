import React from "react";
import Link from "next/link";
import styled from "styled-components";
import SeoSettings from "../components/utils/SeoSettings";

const About = () => {
  return (
    <BasicContainer>
      <SeoSettings
        pageTitle={"Excelファイル比較ツールの具体的な使い方"}
        pageDescription={
          "Excelファイルを比較する具体的な使い方・事例などを紹介しています。簡単に差分を抽出し、結果を得ることができます。"
        }
        pagePath={"https://hikakuchan.jp/excel/about"}
        pageImg={"https://hikakuchan.jp/excel/about"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <BasicSubContainer>
        <BasicSubTitle>Excelファイル比較ツールの具体的な使い方</BasicSubTitle>
        <BasicText>
          <BasicButton>
            <Link href={"/excel"}>
              <a>Excel比較ツールに戻る</a>
            </Link>
          </BasicButton>
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【比較したいExcelファイルを準備 01】</BasicSubTitle>
        <BasicText>
          一つ目のファイルは、マスターになるExcelファイルを準備します。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【比較したいファイルを準備 02】</BasicSubTitle>
        <BasicText>
          二つ目のファイルには、比較したいExcelファイルを準備します。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【Excelファイルを操作する 01】</BasicSubTitle>
        <BasicText>
          オリジナルデータを選択にマスターとなるExcelファイルを選択してデータを読み込みます。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【Excelファイルを操作する 02】</BasicSubTitle>
        <BasicText>
          比較したいデータを選択に比較したいExcelファイルを選択してデータを読み込みます。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【結果を確認する 01】</BasicSubTitle>
        <BasicText>
          Excelファイルを比較し、結果を確認したい場合は「Excelを比較した結果をみる」ボタンを押下することで確認ができます。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【結果を確認する 02】</BasicSubTitle>
        <BasicText>
          Excelファイルを比較し、結果をダウンロードしたい場合は「Excelをダウンロードする」ボタンを押下することで取得することができます。
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
  background-color: #eea9a9;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background-color: #ff6f91;
  }
`;
