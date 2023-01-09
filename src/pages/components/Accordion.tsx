import React from "react";
import styled from "styled-components";

function Accordion() {
  return (
    <QuestionAndAnswerContainer>
      <QuestionAndAnswerSubTitle>Q&A</QuestionAndAnswerSubTitle>
      <QuestionAndAnswerSubContainer>
        <QuestionAndAnswerSubTitle>CSVとは??</QuestionAndAnswerSubTitle>
        <QuestionAndAnswerText>
          Comma Separated Valuesの略称。
        </QuestionAndAnswerText>
        <QuestionAndAnswerText>
          項目と項目の間が区切られたデータを指す。
        </QuestionAndAnswerText>
        <QuestionAndAnswerText>
          hoge.csvという拡張子のファイルになる。
        </QuestionAndAnswerText>
      </QuestionAndAnswerSubContainer>
      <QuestionAndAnswerSubContainer>
        <QuestionAndAnswerSubTitle>
          csv比較ツール【csvひかくん】について
        </QuestionAndAnswerSubTitle>

        <QuestionAndAnswerText>
          インデックスとカラムが一致したCSVにおいて、行単位もしくは、列単位でCSVファイルを比較することができます。
        </QuestionAndAnswerText>
      </QuestionAndAnswerSubContainer>
      <QuestionAndAnswerSubContainer>
        <QuestionAndAnswerSubTitle>
          csvファイルの行を比較する
        </QuestionAndAnswerSubTitle>
        <QuestionAndAnswerText>
          インデックスとカラムの値が一致しているCSVにおいて、
        </QuestionAndAnswerText>
        <QuestionAndAnswerText>
          差分が見つかった行を返します。
        </QuestionAndAnswerText>
      </QuestionAndAnswerSubContainer>

      <QuestionAndAnswerSubContainer>
        <QuestionAndAnswerSubTitle>
          csvファイルの値を比較する
        </QuestionAndAnswerSubTitle>
        <QuestionAndAnswerText>
          インデックスとカラムの値が一致しているCSVにおいて、
        </QuestionAndAnswerText>
        <QuestionAndAnswerText>
          差分が見つかった値のみを返します。
        </QuestionAndAnswerText>
      </QuestionAndAnswerSubContainer>

      <QuestionAndAnswerSubContainer>
        <QuestionAndAnswerSubTitle>
          csvファイルを比較した差分のみダウンロードする
        </QuestionAndAnswerSubTitle>
        <QuestionAndAnswerText>
          ・比較し、差分の見つかった行だけ
        </QuestionAndAnswerText>
        <QuestionAndAnswerText>
          ・比較し、差分の見つかった値だけ
        </QuestionAndAnswerText>
        <QuestionAndAnswerText>
          の2種類で出力することができます。
        </QuestionAndAnswerText>
      </QuestionAndAnswerSubContainer>

      <QuestionAndAnswerSubContainer>
        <QuestionAndAnswerSubTitle>
          csvファイルはサーバーに保存されますか？？
        </QuestionAndAnswerSubTitle>
        <QuestionAndAnswerText>
          完全にブラウザ上で処理を行うため、CSVひかくんにおいてデータベースやサーバーに情報が保存されることはありません。
        </QuestionAndAnswerText>
      </QuestionAndAnswerSubContainer>
    </QuestionAndAnswerContainer>
  );
}

export default Accordion;

const QuestionAndAnswerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const QuestionAndAnswerSubContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const QuestionAndAnswerSubTitle = styled.h2`
  position: relative;

  font-size: 24px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  padding: 1.5rem 2rem;
  color: #fff;
  border-radius: 10px;
  background: #eea9a9;
  opacity: 0.8;

  :after {
    position: absolute;
    bottom: -9px;
    left: 1em;
    width: 0;
    height: 0;
    content: "";
    border-width: 10px 10px 0 10px;
    border-style: solid;
    border-color: #eea9a9 transparent transparent transparent;
  }
`;

const QuestionAndAnswerText = styled.p`
  font-size: 16px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
