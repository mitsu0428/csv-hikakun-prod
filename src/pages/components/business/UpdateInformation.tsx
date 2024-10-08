import React from "react";
import styled from "styled-components";

function UpdateInformation() {
  return (
    <BasicContainer>
      <BasicSubTitle>アップデート情報</BasicSubTitle>
      <BasicSubContainer>
        <ChildTitle>- 2024.09.05 新デザインの導入をしました。</ChildTitle>
        <BasicText>
          これまでトップページや、それぞれのページにおいてデザインが統一されていませんでした。
        </BasicText>
        <BasicText>
          今回のリリースにより、全画面における使用体験が統一されます。
        </BasicText>
      </BasicSubContainer>

      <BasicSubContainer>
        <ChildTitle>
          - 2023.05.15 テーブルビューで表示することが可能に。
        </ChildTitle>
        <BasicText>
          データを表示するボタンを押下することで、テーブルビューを表示することができるようになりました。
        </BasicText>
        <BasicText>
          比較する前にファイルの中身を確認する用途でご利用ください。
        </BasicText>
      </BasicSubContainer>

      <BasicSubContainer>
        <ChildTitle>- 2023.05.14 よくある質問の追加</ChildTitle>
        <BasicText>本アプリを使用する際に機密情報を使用する方へ</BasicText>
        <BasicText>
          csvひかくんは、ブラウザで動作するアプリケーションのためサーバーにデータを保存することはありません。
        </BasicText>
      </BasicSubContainer>
    </BasicContainer>
  );
}

export default UpdateInformation;

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
  color: #000;
`;

const ChildTitle = styled.h3`
  position: relative;
  font-size: 16px;
  color: #000;
`;

const BasicText = styled.p`
  font-size: 16px;
  color: #000;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
