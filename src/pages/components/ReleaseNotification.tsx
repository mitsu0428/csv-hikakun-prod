import React from "react";
import styled from "styled-components";

function ReleaseNotification() {
  return (
    <BasicContainer>
      <BasicSubTitle>具体的な利用事例</BasicSubTitle>
      <BasicHr />
      <BasicSubContainer>
        <BasicText>Google Spread Sheetを比較</BasicText>
        <BasicText>
          スプレッドシート（Google Spread
          Sheet）において、2つのシートを比較して差分を知りたい時に利用することができます。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicText>CSVファイルを比較</BasicText>
        <BasicText>
          2つのCSVファイルにおける差分を確認したり、比較をしたい時に簡単に調べることができるツールです。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicText>CSVファイルでダブルチェックをする</BasicText>
        <BasicText>
          AとBのファイルを用意して、前後で異なる値を準備できているかどうかを調べることができます。
        </BasicText>
      </BasicSubContainer>
    </BasicContainer>
  );
}

export default ReleaseNotification;

const BasicContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BasicSubContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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
  font-size: 1rem;
`;

const BasicHr = styled.hr`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;
