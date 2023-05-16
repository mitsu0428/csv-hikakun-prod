/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import type { NextPage } from "next";
import { readString } from "react-papaparse";
import HowToUseDescription from "./components/business/HowToUseDescription";
import QuestionAnsewer from "./components/business/QuestionAnsewer";
import CsvDownloadComponents from "./components/libs/CsvDownloader";
import SeoSettings from "./components/utils/SeoSettings";
import Logo from "./components/elements/Logo";
import BasicTitle from "./components/elements/BasicTitle";
import UpdateInformation from "./components/business/UpdateInformation";
import ShowDataWithTable from "./components/elements/ShowDataWithTable";

const Home: NextPage = () => {
  const [csvValues, setCsvValues] = React.useState({
    isMasterFileUploaded: false,
    isCompareFileUploaded: false,
    masterRecords: Array<any>(),
    compareRecords: Array<any>(),
    resultWithIndex: Array<any>(),
    resultWithoutIndex: Array<any>(),
  });

  const [ModalSettings, setModalSettings] = React.useState({
    isModalOpen: false,
    isWithIndex: false,
    isWithoutIndex: false,
  });

  const getMasterFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!e.target.files) return;

    const file = e.target.files[0];
    const master_file = await file.text();

    const config: any = {
      worker: true,
      complete: (results: any) => {
        setCsvValues({
          ...csvValues,
          isMasterFileUploaded: true,
          masterRecords: results.data,
        });
      },
    };

    readString(master_file, config);
  };

  const getCompareFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!e.target.files) return;

    const file = e.target.files[0];
    const master_file = await file.text();

    const config: any = {
      worker: true,
      complete: (results: any) => {
        setCsvValues({
          ...csvValues,
          isCompareFileUploaded: true,
          compareRecords: results.data,
        });
      },
    };

    readString(master_file, config);
  };

  const compareWithoutIndex = () => {
    const result: any[][] = [];

    for (const rowA of csvValues.masterRecords) {
      const flatA = rowA.flat();
      let found = false;

      for (const rowB of csvValues.compareRecords) {
        const flatB = rowB.flat();

        if (
          flatA.length === flatB.length &&
          flatA.every((value: any, index: any) => value === flatB[index])
        ) {
          found = true;
          break;
        }
      }

      if (!found) {
        result.push(rowA);
      }
    }

    setCsvValues({
      ...csvValues,
      resultWithoutIndex: result,
    });

    return result;
  };

  const checkRowWithIndex = () => {
    let loopCount = 1;
    const result: any[][] = [];

    for (const rowA of csvValues.masterRecords) {
      const flatA = rowA.flat();
      let found = false;

      for (const rowB of csvValues.compareRecords) {
        const flatB = rowB.flat();

        if (
          flatA.length === flatB.length &&
          flatA.every((value: any, index: any) => value === flatB[index])
        ) {
          found = true;
          break;
        }
      }

      if (!found) {
        result.push([loopCount, ...rowA]);
      }
      loopCount++;
    }

    setCsvValues({
      ...csvValues,
      resultWithIndex: result,
    });
  };

  return (
    <BasicContainer>
      <SeoSettings />

      <main id="main">
        {/* ロゴ */}
        <Logo />

        <BasicSubContainer>
          <BasicTitle title="CSVひかくん - CSV比較ツール" />
          <ExtraText>
            CSVひかくんでは、簡単に2つのファイルを比較することができます。
          </ExtraText>
          <BasicButton>
            <Link href={"/about"}>
              <a>CSVひかくんの具体的な使い方はこちら</a>
            </Link>
          </BasicButton>
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

        {/* read master data */}
        <BasicSubContainer>
          <BasicSubTitle>マスターとなるデータを選択</BasicSubTitle>
          <BasicInputField
            title="マスターとなるデータを選択"
            type="file"
            accept="text/csv"
            onChange={getMasterFile}
          />
          {/* show master data */}
          <ShowDataWithTable
            text="データを表示する"
            array={csvValues.masterRecords}
          />
        </BasicSubContainer>

        {/* read compare data */}
        <BasicSubContainer>
          <BasicSubTitle>比較するデータを選択</BasicSubTitle>
          <BasicInputField
            type="file"
            accept="text/csv"
            onChange={getCompareFile}
          />
          {/* show compare data */}
          <ShowDataWithTable
            text="データを表示する"
            array={csvValues.compareRecords}
          />
        </BasicSubContainer>

        <BasicSubContainer>
          <BasicSubTitle>2. 比較をする</BasicSubTitle>
        </BasicSubContainer>

        <BasicSubContainer>
          <BasicSubTitle>
            メソッド1: 行数なしで差分レコードを抽出する
          </BasicSubTitle>
          <ExtraText>
            ・一致しない値が含まれた行が何行あるかをチェックする
          </ExtraText>
          <ExtraText>
            ・行番号（Index番号）は出力を行わないこととする。
          </ExtraText>

          <BasicSubContainerComponent>
            <BasicButton onClick={compareWithoutIndex}>
              行なし比較を実行する
            </BasicButton>
            <ShowDataWithTable
              text="結果を表示する"
              array={csvValues.resultWithoutIndex}
            />
            {csvValues.resultWithoutIndex.length > 0 && (
              <BasicButton>
                <CsvDownloadComponents
                  filenameprefix="csvhikakun"
                  data={csvValues.resultWithoutIndex}
                />
              </BasicButton>
            )}
          </BasicSubContainerComponent>
        </BasicSubContainer>

        <BasicSubContainer>
          <BasicSubTitle>
            メソッド2: 行数ありで差分レコードを抽出する
          </BasicSubTitle>
          <ExtraText>
            ・一致しない値が含まれた行が何行あるかをチェックする
          </ExtraText>
          <ExtraText>・行番号（Index番号）を出力することとする。</ExtraText>

          <BasicSubContainerComponent>
            <BasicButton onClick={checkRowWithIndex}>
              行あり比較を実行する
            </BasicButton>
            <ShowDataWithTable
              text="結果を表示する"
              array={csvValues.resultWithIndex}
            />
            {csvValues.resultWithIndex.length > 0 && (
              <BasicButton>
                <CsvDownloadComponents
                  filenameprefix="csvhikakun"
                  data={csvValues.resultWithIndex}
                />
              </BasicButton>
            )}
          </BasicSubContainerComponent>
        </BasicSubContainer>

        {/* よくある質問 */}
        <QuestionAnsewer />

        {/* お問い合わせ */}
        <BasicSubContainer>
          <BasicText>
            <BasicButton>
              <Link href={"/mail"}>お問い合わせはこちら</Link>
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
  border-radius: 0.5rem;
  padding: 2rem;
`;

const BasicSubContainerComponent = styled.div`
  ${BasicContainer}
`;

const BasicCard = styled.div`
  ${BasicContainer} display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem; /* Update: Change box-shadow */
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
  border-radius: 0.5rem;
  transition: 0.4s;

  :hover {
    background-color: #ff6f91;
  }
`;

const BasicInputField = styled.input`
  width: 100%;
  max-width: 350px;
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
