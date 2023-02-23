/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Modal from "react-modal";
import type { NextPage } from "next";
import { readString } from "react-papaparse";
import Accordion from "./components/Accordion";
import ReleaseNotification from "./components/ReleaseNotification";
import CsvDownloadComponents from "./components/libs/CsvDownloader";
import SeoSettings from "./components/utils/SeoSettings";
import Toast from "./components/utils/toast/Toast";
import Logo from "./components/Logo";
import DisplayDataButton from "./components/libs/button/DisplayDataButton";

const Home: NextPage = () => {
  //比較する MasterCSV用の配列
  const [csvContent, setCsvContent] = React.useState<Array<any>>([]);
  //比較する CompareCSV用の配列
  const [csvContentCompare, setCsvContentCompare] = React.useState<Array<any>>(
    []
  );

  const [csvCompareRowWithoutIndex, setCsvCompareRowWithoutIndex] =
    React.useState<Array<unknown>>([]);
  const [csvCompareRowWithIndex, setCsvCompareRowWithIndex] = React.useState<
    Array<unknown>
  >([]);
  const [csvCompareRowCol, setCsvCompareRowCol] = React.useState<Array<any>>(
    []
  );

  const [displayData, setDisplayData] = React.useState<Array<any>>([]);

  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  let subtitle: HTMLHeadingElement | null;

  const [isMasterFile, setIsMasterFile] = React.useState<boolean>(true);
  const [isCompareFile, setIsCompareFile] = React.useState<boolean>(true);

  const [isMasterFileRead, setIsMasterFileRead] =
    React.useState<boolean>(false);
  const [isCompareFileRead, setIsCompareFileRead] =
    React.useState<boolean>(false);

  //MasterとなるCSVを取り込む
  const getMasterFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!e.target.files) return;
    const file = e.target.files[0];
    const master_file = await file.text();
    const config: any = {
      worker: true,
      complete: (results: any) => {
        setCsvContent(results.data);
      },
    };
    readString(master_file, config);
    setIsMasterFile(true);
    setIsMasterFileRead(true);
  };

  //Compare先となるCSVを取り込む
  const getCompareFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!e.target.files) return;

    const file = e.target.files[0];
    const master_file = await file.text();
    const config: any = {
      worker: true,
      complete: (results: any) => {
        setCsvContentCompare(results.data);
      },
    };
    readString(master_file, config);
    setIsCompareFile(true);
    setIsCompareFileRead(true);
  };

  //Index番号なしで比較する
  const checkRowWithoutIndex = () => {
    if (csvContent[0] == undefined) {
      setIsMasterFile(false);
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      setIsCompareFile(false);
      setCsvContentCompare([]);
      return;
    } else {
      const csv_content_row_length = [...csvContent].length;
      const csv_content_compare_row_length = [...csvContentCompare].length;
      const csv_content_col_length = [...csvContent[0]].length;
      const csv_contetn_compare_col_length = [...csvContentCompare[0]].length;
      if (csv_content_row_length != csv_content_compare_row_length) {
        alert("行数が一致しません。行数と列数が同じCSVを選択してください。");
        location.reload();
        setCsvContent([]);
        setCsvContentCompare([]);
        return;
      } else if (csv_content_col_length != csv_contetn_compare_col_length) {
        alert("列数が一致しません。行数と列数が同じCSVを選択してください。");
        location.reload();
        setCsvContent([]);
        setCsvContentCompare([]);
        return;
      } else {
        // 重複した行が出力されてしまう可能性があるので一旦、Index番号単位で辞書
        const diff_list_dict = Object();
        for (let count = 0; count < csv_content_row_length; count++) {
          for (
            let sub_count = 0;
            sub_count < csv_content_col_length;
            sub_count++
          ) {
            const content = [...csvContent[count]][sub_count];
            const compare = [...csvContentCompare[count]][sub_count];
            if (content != compare) {
              diff_list_dict[Number(count)] = sub_count;
            }
          }
        }
        // 差分のあったIndex番号ベースでリスト化ける
        const diff_list_withtout_index = [];
        const object_keys = Object.keys(diff_list_dict);
        for (const count_row of object_keys) {
          diff_list_withtout_index.push([
            ...csvContentCompare[Number(count_row)],
            ...csvContent[Number(count_row)],
          ]);
        }
        console.log(diff_list_withtout_index);
        setCsvCompareRowWithoutIndex(diff_list_withtout_index);
        setDisplayData(diff_list_withtout_index);
      }
    }
  };

  const checkRowWithIndex = () => {
    if (csvContent[0] == undefined) {
      setIsMasterFile(false);
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      setIsCompareFile(false);
      setCsvContentCompare([]);
      return;
    } else {
      const csv_content_row_length = [...csvContent].length;
      const csv_content_compare_row_length = [...csvContentCompare].length;
      const csv_content_col_length = [...csvContent[0]].length;
      const csv_contetn_compare_col_length = [...csvContentCompare[0]].length;

      if (csv_content_row_length != csv_content_compare_row_length) {
        alert("行数が一致しません。行数と列数が同じCSVを選択してください。");
        location.reload();
        setCsvContent([]);
        setCsvContentCompare([]);
        return;
      } else if (csv_content_col_length != csv_contetn_compare_col_length) {
        alert("列数が一致しません。行数と列数が同じCSVを選択してください。");
        location.reload();
        setCsvContent([]);
        setCsvContentCompare([]);
        return;
      } else {
        // 重複した行が出力されてしまう可能性があるので一旦、Index番号単位で辞書
        const diff_list_dict = Object();
        for (let count = 0; count < csv_content_row_length; count++) {
          for (
            let sub_count = 0;
            sub_count < csv_content_col_length;
            sub_count++
          ) {
            const content = [...csvContent[count]][sub_count];
            const compare = [...csvContentCompare[count]][sub_count];
            if (content != compare) {
              diff_list_dict[Number(count)] = sub_count;
            }
          }
        }
        // 差分のあったIndex番号ベースでリスト
        const diff_list_with_index = [];
        const object_keys = Object.keys(diff_list_dict);
        for (const count_row of object_keys) {
          diff_list_with_index.push([
            Number(count_row) + Number(1) + "行目",
            ...csvContentCompare[Number(count_row)],
            ...csvContent[Number(count_row)],
          ]);
        }
        console.log(diff_list_with_index);
        setCsvCompareRowWithIndex(diff_list_with_index);
        setDisplayData(diff_list_with_index);
      }
    }
  };

  const checkRowCol = () => {
    if (csvContent[0] == undefined) {
      setIsMasterFile(false);
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      setIsCompareFile(false);
      setCsvContentCompare([]);
      return;
    } else {
      const csv_content_row_length = [...csvContent].length;
      const csv_content_compare_row_length = [...csvContentCompare].length;
      const csv_content_col_length = [...csvContent[0]].length;
      const csv_contetn_compare_col_length = [...csvContentCompare[0]].length;
      if (csv_content_row_length != csv_content_compare_row_length) {
        alert("行数が一致しません。行数と列数が同じCSVを選択してください。");
        location.reload();
        setCsvContent([]);
        setCsvContentCompare([]);
        return;
      } else if (csv_content_col_length != csv_contetn_compare_col_length) {
        alert("列数が一致しません。行数と列数が同じCSVを選択してください。");
        location.reload();
        setCsvContent([]);
        setCsvContentCompare([]);
        return;
      } else {
        const diff_list_row_col = [];
        for (let count = 0; count < csv_content_row_length; count++) {
          for (
            let sub_count = 0;
            sub_count < csv_content_col_length;
            sub_count++
          ) {
            const content = [...csvContent[count]][sub_count];
            const compare = [...csvContentCompare[count]][sub_count];
            if (content != compare) {
              diff_list_row_col.push([compare]);
            }
          }
        }
        console.log(diff_list_row_col);
        setCsvCompareRowCol(diff_list_row_col);
        setDisplayData(diff_list_row_col);
      }
    }
  };

  const openModalCheckWithoutIndex = () => {
    if (csvContent[0] == undefined) {
      setIsMasterFile(false);
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      setIsCompareFile(false);
      setCsvContentCompare([]);
      return;
    } else {
      checkRowWithoutIndex();
      setIsOpen(true);
    }
    setIsMasterFile(true);
    setIsCompareFile(true);
  };
  const afterOpenModalWithoutIndex = () => {
    if (subtitle) subtitle.style.color = "#000";
  };
  const closeModalWithoutIndex = () => {
    setIsOpen(false);
  };

  const openModalCheckWithIndex = () => {
    if (csvContent[0] == undefined) {
      setIsMasterFile(false);
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      setIsCompareFile(false);
      setCsvContentCompare([]);
      return;
    } else {
      checkRowWithIndex();
      setIsOpen(true);
    }
  };
  const afterOpenModalWithIndex = () => {
    if (subtitle) subtitle.style.color = "#000";
  };
  const closeModalWithIndex = () => {
    setIsOpen(false);
  };

  const openModalRowCol = () => {
    if (csvContent[0] == undefined) {
      setIsMasterFile(false);
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      setIsCompareFile(false);
      setCsvContentCompare([]);
      return;
    } else {
      checkRowCol();
      setIsOpen(true);
    }
  };
  const afterOpenModalRowCol = () => {
    if (subtitle) subtitle.style.color = "#000";
  };
  const closeModalRowCol = () => {
    setIsOpen(false);
  };

  return (
    <BasicContainer>
      <SeoSettings
        pageTitle={"CSVファイルを比較する"}
        pageDescription={
          "中身の異なる2つのcsvファイルを簡単に比較し、差分を見ることができるツールです。行単位、もしくは値単位で比較することができます。"
        }
        pagePath={"https://csvhikakun.com/"}
        pageImg={"https://csvhikakun.com/"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <main id="main">
        <Logo />
        <BasicSubContainer>
          <BasicTitle>CSVひかくん - CSV比較ツール</BasicTitle>
          <ExtraText>
            CSVひかくんでは、簡単に2つのファイルを比較することができます。
          </ExtraText>
          <BasicButton>
            <Link href={"/about"}>
              <a>CSVひかくんの具体的な使い方はこちら</a>
            </Link>
          </BasicButton>
        </BasicSubContainer>
        <BasicCard>
          <ReleaseNotification />
        </BasicCard>
        <BasicSubContainer>
          <BasicSubTitle>ファイルを選択</BasicSubTitle>
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicSubTitle>オリジナルデータを選択</BasicSubTitle>
          <BasicInputField
            type="file"
            accept="text/csv"
            onChange={getMasterFile}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          {isMasterFileRead && (
            <DisplayDataButton data={csvContent}>
              データを表示する
            </DisplayDataButton>
          )}
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicText>
            上で選択したデータは、オリジナルデータとして参照先のみとして使われます。
          </BasicText>
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicSubTitle>比較したいデータを選択</BasicSubTitle>
          <BasicInputField
            type="file"
            accept="text/csv"
            onChange={getCompareFile}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          {isCompareFileRead && (
            <DisplayDataButton data={csvContentCompare}>
              データを表示する
            </DisplayDataButton>
          )}
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicText>
            上で選択したデータは、比較するデータとして比較後はCSVにも出力されます。
          </BasicText>
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicSubTitle>ファイルを操作</BasicSubTitle>
        </BasicSubContainer>

        <BasicSubContainer>
          <BasicSubTitle>
            【一致しない値が含まれた行が何個あるかをチェックする 行数なし】
          </BasicSubTitle>
          <BasicSubContainerComponent>
            <BasicButton onClick={openModalCheckWithoutIndex}>
              【CSVを比較した結果を見る】
            </BasicButton>
          </BasicSubContainerComponent>
          <BasicSubContainerComponent>
            <Modal
              contentLabel="CSVを比較した結果を見る"
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModalWithoutIndex}
              onRequestClose={closeModalWithoutIndex}
            >
              <BasicSubTitle ref={(_subtitle) => (subtitle = _subtitle)}>
                【CSVを比較する】
              </BasicSubTitle>
              <BasicSubTitle>【CSV比較結果を確認する】</BasicSubTitle>
              <BasicText>{displayData}</BasicText>
              <BasicButton onClick={closeModalWithoutIndex}>close</BasicButton>
            </Modal>
          </BasicSubContainerComponent>
          <BasicSubContainerComponent>
            <BasicButton onClick={checkRowWithoutIndex}>
              <CsvDownloadComponents
                filenameprefix="csvhikakun"
                data={csvCompareRowWithoutIndex}
              />
            </BasicButton>
          </BasicSubContainerComponent>
        </BasicSubContainer>

        <BasicSubContainer>
          <BasicSubTitle>
            【一致しない値が含まれた行があるかをチェックする 行数付き】
          </BasicSubTitle>
          <BasicSubContainerComponent>
            <BasicSubContainerComponent>
              <BasicButton onClick={openModalCheckWithIndex}>
                【CSVを比較した結果を見る】
              </BasicButton>
            </BasicSubContainerComponent>
            <BasicSubContainerComponent>
              <Modal
                contentLabel="CSVを比較した結果を見る"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModalWithIndex}
                onRequestClose={closeModalWithIndex}
              >
                <BasicSubTitle ref={(_subtitle) => (subtitle = _subtitle)}>
                  【CSVを比較する】
                </BasicSubTitle>
                <BasicSubTitle>【CSV比較結果を確認する】</BasicSubTitle>
                <BasicText>{displayData}</BasicText>
                <BasicButton onClick={closeModalWithIndex}>close</BasicButton>
              </Modal>
            </BasicSubContainerComponent>
            <BasicSubContainerComponent>
              <BasicButton onClick={checkRowWithIndex}>
                <CsvDownloadComponents
                  filenameprefix="csvhikakun"
                  data={csvCompareRowWithIndex}
                />
              </BasicButton>
            </BasicSubContainerComponent>
          </BasicSubContainerComponent>
        </BasicSubContainer>

        <BasicSubContainer>
          <BasicSubTitle>
            【一致しない値を値単位で一つずつチェックする】
          </BasicSubTitle>
          <BasicSubContainerComponent>
            <BasicSubContainerComponent>
              <BasicButton onClick={openModalRowCol}>
                【CSVを比較した結果を見る】
              </BasicButton>
            </BasicSubContainerComponent>
            <BasicSubContainerComponent>
              <Modal
                contentLabel="CSVを比較した結果を見る"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModalRowCol}
                onRequestClose={closeModalRowCol}
              >
                <BasicSubTitle ref={(_subtitle) => (subtitle = _subtitle)}>
                  【CSVを比較する】
                </BasicSubTitle>
                <BasicSubTitle>【CSV比較結果を確認する】</BasicSubTitle>
                <BasicText>{displayData}</BasicText>
                <BasicButton onClick={closeModalRowCol}>close</BasicButton>
              </Modal>
            </BasicSubContainerComponent>
            <BasicSubContainerComponent>
              <BasicButton onClick={checkRowCol}>
                <CsvDownloadComponents
                  filenameprefix="csvhikakun"
                  data={csvCompareRowCol}
                />
              </BasicButton>
            </BasicSubContainerComponent>
          </BasicSubContainerComponent>
        </BasicSubContainer>
        {!isMasterFile && (
          <Toast
            message={"オリジナルデータを選択してください。"}
            type={"error"}
          />
        )}
        {!isCompareFile && (
          <Toast
            message={"比較したいデータを選択してください。"}
            type={"error"}
          />
        )}
        <Accordion />
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

const BasicTitle = styled.h1`
  position: relative;
  font-size: 2rem;
  padding: 1rem 0.5rem;
  text-align: center;
  font-weight: bold;
  color: #333333;
  margin-bottom: 2rem;

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

const BasicSubTitle = styled.h2`
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
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
  color: #333333;
`;

const ExtraText = styled.span`
  font-weight: bold;
  color: #e91e63;
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
  background-color: #e91e63;
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
