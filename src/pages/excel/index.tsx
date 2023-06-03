import React, { ChangeEvent } from "react";
import Link from "next/link";
import styled from "styled-components";
import SeoSettings from "../components/utils/SeoSettings";
import HeaderExcel from "./layout/layout";
import Logo from "../components/elements/Logo";
import BasicTitle from "../components/elements/BasicTitle";
import XLSX from "xlsx";
import ShowDataWithTable from "../components/elements/ShowDataWithTable";
import DownLoader from "../components/libs/ExcelDownloader";

export default function Excel() {
  const [excelValues, setExcelValues] = React.useState<{
    masterRecords: unknown[];
    compareRecords: unknown[];
    resultWithoutIndex: unknown[];
    resultWithIndex: unknown[];
  }>({
    masterRecords: [],
    compareRecords: [],
    resultWithoutIndex: [],
    resultWithIndex: [],
  });

  const getMasterFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const masterRecords = XLSX.utils.sheet_to_json(
          workbook.Sheets[workbook.SheetNames[0]]
        );
        console.log(masterRecords);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const getCompareFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);

        const workbook = XLSX.readFile(file as unknown as string);

        const compareRecords = XLSX.utils.sheet_to_json(
          workbook.Sheets[workbook.SheetNames[0]]
        );

        setExcelValues((prevValues) => ({
          ...prevValues,
          compareRecords,
        }));
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const compareWithoutIndex = () => {
    const masterRecords = excelValues.masterRecords;
    const compareRecords = excelValues.compareRecords;
    const resultWithoutIndex = masterRecords.filter((masterRecord: any) => {
      return compareRecords.every((compareRecord: any) => {
        return masterRecord.id !== compareRecord.id;
      });
    });
    setExcelValues({ ...excelValues, resultWithoutIndex });
  };

  const checkRowWithIndex = () => {
    const masterRecords = excelValues.masterRecords;
    const compareRecords = excelValues.compareRecords;
    const resultWithIndex = masterRecords.filter((masterRecord: any) => {
      return compareRecords.every((compareRecord: any) => {
        return masterRecord.id !== compareRecord.id;
      });
    });
    setExcelValues({ ...excelValues, resultWithIndex });
  };

  return (
    <BasicContainer>
      <SeoSettings
        pageTitle={"EXCELファイル比較ツール"}
        pageDescription={
          "EXCELファイル比較ツールでは、簡単に2つのファイルを比較することができます。"
        }
        pagePath={"https://hikakuchan.jp/excel"}
        pageImg={"https://hikakuchan.jp/excel"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <HeaderExcel />
      <main id="main">
        {/* ロゴ */}
        <Logo isExcelPage={true} />

        <BasicSubContainer>
          <BasicTitle title="EXCEL比較ツール(.xlsx)" />
          <ExtraText>
            Excel比較ツールでは、簡単に2つのファイルを比較することができます。
          </ExtraText>
          <BasicButton>
            <Link href={"/about"}>Excel比較ツールの具体的な使い方はこちら</Link>
          </BasicButton>
        </BasicSubContainer>

        <BasicSubContainer>
          <BasicSubTitle>1. 準備をする</BasicSubTitle>
        </BasicSubContainer>

        <BasicSubContainer>
          {/* read master data */}
          <BasicSubTitle>マスターとなるデータを選択</BasicSubTitle>
          <BasicText>
            今回選択したデータがマスターとなるので、比較したいデータが空の場合、出力されるデータはマスターデータ全件になります。
          </BasicText>
          <BasicInputField
            title="マスターとなるデータを選択"
            type="file"
            accept=".xlsx"
            onChange={getMasterFile}
          />

          {/* show master data */}
          <ShowDataWithTable
            text="データを表示する"
            array={excelValues.masterRecords}
          />
        </BasicSubContainer>

        <BasicSubContainer>
          {/* read compare data */}
          <BasicSubTitle>比較するデータを選択</BasicSubTitle>
          <BasicText>
            今回選択したデータが比較対象となるので、マスターデータと比較して差分を抽出します。
          </BasicText>
          <BasicInputField
            type="file"
            accept=".xlsx"
            onChange={getCompareFile}
          />
          {/* show compare data */}
          <ShowDataWithTable
            text="データを表示する"
            array={excelValues.compareRecords}
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
              array={excelValues.resultWithoutIndex}
            />
            {excelValues.resultWithoutIndex.length > 0 && (
              <BasicButton>
                <DownLoader
                  filenameprefix="excel_hikaku"
                  data={excelValues.resultWithoutIndex}
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
              array={excelValues.resultWithIndex}
            />
            {excelValues.resultWithIndex.length > 0 && (
              <BasicButton>
                <DownLoader
                  filenameprefix="excel_hikaku"
                  data={excelValues.resultWithIndex}
                />
              </BasicButton>
            )}
          </BasicSubContainerComponent>
        </BasicSubContainer>
      </main>
      {/* フッター */}
      <BasicFooter>
        <BasicText>©2023 Mitsuhiro Okada</BasicText>
      </BasicFooter>
    </BasicContainer>
  );
}

const BasicText = styled.span`
  font-size: 1rem;
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

const ExtraText = styled.span`
  font-weight: bold;
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

const BasicFooter = styled.footer`
  ${BasicContainer}
`;
