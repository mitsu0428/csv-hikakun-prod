import React from "react";
import styled from "styled-components";

function QuestionAnsewer() {
  return (
    <Container>
      <Subtitle>よくある質問</Subtitle>

      <SubContainer>
        <BoldText>Q1. CSVとは??</BoldText>
        <StyledText>Comma Separated Valuesの略称。</StyledText>
        <StyledText>項目と項目の間が区切られたデータを指す。</StyledText>
        <StyledText>hoge.csvという拡張子のファイルになる。</StyledText>
      </SubContainer>

      <SubContainer>
        <BoldText>Q2. csv比較ツール【csvひかくん】について</BoldText>
        <StyledText>
          インデックスとカラムが一致したCSVにおいて、行単位もしくは、列単位でCSVファイルを比較することができます。
        </StyledText>
      </SubContainer>

      <SubContainer>
        <BoldText>Q3. csvファイルの行を比較する</BoldText>
        <StyledText>
          インデックスとカラムの値が一致しているCSVにおいて、
        </StyledText>
        <StyledText>差分が見つかった行を返します。</StyledText>
      </SubContainer>

      <SubContainer>
        <BoldText>Q4. csvファイルの値を比較する</BoldText>
        <StyledText>
          インデックスとカラムの値が一致しているCSVにおいて、
        </StyledText>
        <StyledText>差分が見つかった値のみを返します。</StyledText>
      </SubContainer>

      <SubContainer>
        <BoldText>Q5. csvファイルを比較した差分のみダウンロードする</BoldText>
        <StyledText>・比較し、差分の見つかった行だけ</StyledText>
        <StyledText>・比較し、差分の見つかった値だけ</StyledText>
        <StyledText>の2種類で出力することができます。</StyledText>
      </SubContainer>

      <SubContainer>
        <BoldText>Q6. csvファイルはサーバーに保存されますか？？</BoldText>
        <StyledText>
          完全にブラウザ上で処理を行うため、CSVひかくんにおいてデータベースやサーバーに情報が保存されることはありません。
        </StyledText>
      </SubContainer>
    </Container>
  );
}

export default QuestionAnsewer;

const Container = styled.div`
  width: 100%;
  max-width: 650px;
`;

const SubContainer = styled.div`
  width: 100%;
  max-width: 650px;
  margin-top: 64px;
`;

const Subtitle = styled.h2`
  position: relative;
  font-size: 24px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }

  padding: 8px 16px 8px 16px;
  color: #fff;
  border-radius: 8px;
  background: #eea9a9;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
  :after {
    position: absolute;
    bottom: -9px;
    left: 16px;
    width: 0;
    height: 0;
    border-width: 10px 10px 0 10px;
    border-style: solid;
    border-color: #fe6b8b transparent transparent transparent;
  }
`;

const BoldText = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-left: 24px;
  @media screen and (max-width: 768px) {
    margin-left: 22px;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 20px;
    font-size: 12px;
  }
`;

const StyledText = styled.p`
  font-size: 16px;
  margin-left: 24px;
  @media screen and (max-width: 768px) {
    margin-left: 22px;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 20px;
    font-size: 12px;
  }
`;
