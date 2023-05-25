import React from "react";
import styled from "styled-components";
import Link from "next/link";
import type { NextPage } from "next";
import HowToUseDescription from "../components/business/HowToUseDescription";
import QuestionAnsewer from "../components/business/QuestionAnsewer";
import CsvDownloadComponents from "../components/libs/CsvDownloader";
import SeoSettings from "../components/utils/SeoSettings";
import Logo from "../components/elements/Logo";
import BasicTitle from "../components/elements/BasicTitle";
import UpdateInformation from "../components/business/UpdateInformation";
import ShowDataWithTable from "../components/elements/ShowDataWithTable";
import HeaderCsv from "./layout/layout";
import InputField from "./ui/InputField";

const Home: NextPage = () => {
  const [textValues, setTextValues] = React.useState({
    isMasterFileUploaded: false,
    isCompareFileUploaded: false,
    masterRecords: Array<any>(),
    compareRecords: Array<any>(),
    resultWithIndex: Array<any>(),
    resultWithoutIndex: Array<any>(),
  });

  return (
    <BasicContainer>
      <SeoSettings />
      <HeaderCsv />
      <main id="main">
        {/* ロゴ */}
        <Logo />

        <BasicSubContainer>
          <BasicTitle title="テキスト比較ツール(.txt）" />
          <ExtraText>
            テキストファイル比較ツールでは入力欄に入れたテキストを比較することができます。
          </ExtraText>
        </BasicSubContainer>

        {/* サイトの更新情報 */}
        <BasicCard>
          <UpdateInformation />
        </BasicCard>

        {/* 具体的な使い方 */}
        <BasicCard>
          <HowToUseDescription />
        </BasicCard>

        <BasicSubContainer>
          <BasicSubTitle>1. 準備をする</BasicSubTitle>
        </BasicSubContainer>

        <InputField />
        <InputField />

        <BasicSubContainer>
          <BasicSubTitle>2. 比較をする</BasicSubTitle>
        </BasicSubContainer>

        {/* よくある質問 */}
        <QuestionAnsewer />

        {/* お問い合わせ */}
        <BasicSubContainer>
          <BasicText>
            <BasicButton>
              <Link href={"/text/mail"}>お問い合わせはこちら</Link>
            </BasicButton>
          </BasicText>
          <BasicText>
            <BasicButton>
              <Link href={"/privacy"}>プライバシーポリシーはこちら</Link>
            </BasicButton>
          </BasicText>
        </BasicSubContainer>
      </main>
      {/* フッター */}
      <BasicFooter>
        <BasicText>©2022 Mitsuhiro Okada</BasicText>
      </BasicFooter>
    </BasicContainer>
  );
};

export default Home;

const BasicContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #eea9a9;
  margin-bottom: 1.5rem;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: 10px;
    content: "";
    background-image: repeating-linear-gradient(
      -45deg,
      #333333,
      #333333 1px,
      transparent 2px,
      transparent 5px
    );
    background-size: 7px 7px;
    transform: translateY(2px);
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

const BasicInputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  margin-top: 0.5rem;
  resize: vertical;
  font-size: 1rem;
`;

const BasicFooter = styled.footer`
  ${BasicContainer}
`;
