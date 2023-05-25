import React from "react";
import styled from "styled-components";
import ShareButton from "../elements/ShareButton";

function HowToUseDescription() {
  return (
    <BasicContainer>
      <BasicSubTitle>具体的な利用事例</BasicSubTitle>
      <ShareButton
        text="csvファイルを比較するサイト「csvひかくん」"
        url="https://hikakuchan.jp/csv"
      />
      <BasicSubContainer>
        <ChildTitle>
          - スプレッドシートにおいて異なるシートとの差分を知りたい。
        </ChildTitle>
        <BasicText>
          スプレッドシート （Google
          SpreadSheet）において、2つのシートを比較して差分を知りたい時に利用することができます。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <ChildTitle>- 異なるCSVファイル間の差分を知りたい</ChildTitle>
        <BasicText>
          2つのCSVファイルにおける差分を確認したり、比較をしたい時に簡単に調べることができるツールです。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <ChildTitle>- CSVファイルでダブルチェックをする</ChildTitle>
        <BasicText>
          AとBのファイルを用意して、前後で異なる値を準備できているかどうかを調べることができます。
        </BasicText>
      </BasicSubContainer>
    </BasicContainer>
  );
}

export default HowToUseDescription;

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

const ChildTitle = styled.h3`
  position: relative;
  font-size: 16px;
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
