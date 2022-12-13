/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import { readString } from "react-papaparse";
import styled from "styled-components";
import Accordion from "./components/Accordion";
import ReleaseNotification from "./components/ReleaseNotification";
import CsvDownloadComponents from "./components/CsvDownloader";
import SeoSettings from "./components/SeoSettings";
import Image from "next/image";

const Home: NextPage = () => {
  //比較する MasterCSV用の配列
  const [csvContent, setCsvContent] = useState<Array<any>>([]);
  //比較する CompareCSV用の配列
  const [csvContentCompare, setCsvContentCompare] = useState<Array<any>>([]);

  const [csvCompareRowWithoutIndex, setCsvCompareRowWithoutIndex] = useState<
    Array<unknown>
  >([]);
  const [csvCompareRowWithIndex, setCsvCompareRowWithIndex] = useState<
    Array<unknown>
  >([]);
  const [csvCompareRowCol, setCsvCompareRowCol] = useState<Array<any>>([]);

  const [displayData, setDisplayData] = useState<Array<any>>([]);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  let subtitle: HTMLHeadingElement | null;

  //MasterとなるCSVを取り込む
  const getMasterFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file.name.match(".csv$")) {
      alert("CSVファイルを選択してください");
      return;
    }
    const master_file = await file.text();
    const config: any = {
      worker: true,
      complete: (results: any) => {
        setCsvContent(results.data);
      },
    };
    readString(master_file, config);
  };

  //Compare先となるCSVを取り込む
  const getCompareFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file.name.match(".csv$")) {
      alert("CSVファイルを選択してください");
      return;
    }
    const master_file = await file.text();
    const config: any = {
      worker: true,
      complete: (results: any) => {
        setCsvContentCompare(results.data);
      },
    };
    readString(master_file, config);
  };

  //Index番号なしで比較する
  const checkRowWithoutIndex = () => {
    if (csvContent[0] == undefined) {
      alert("マスターとなるファイルを選択してください。");
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      alert("比較したいファイルを選択してください。");
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
      alert("マスターとなるファイルを選択してください。");
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      alert("比較したいファイルを選択してください。");
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
      alert("マスターとなるファイルを選択してください。");
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      alert("比較したいファイルを選択してください。");
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
      alert("マスターとなるファイルを選択してください。");
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      alert("比較したいファイルを選択してください。");
      setCsvContentCompare([]);
      return;
    } else {
      checkRowWithoutIndex();
      setIsOpen(true);
    }
  };
  const afterOpenModalWithoutIndex = () => {
    if (subtitle) subtitle.style.color = "#000";
  };
  const closeModalWithoutIndex = () => {
    setIsOpen(false);
  };

  const openModalCheckWithIndex = () => {
    if (csvContent[0] == undefined) {
      alert("マスターとなるファイルを選択してください。");
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      alert("比較したいファイルを選択してください。");
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
      alert("マスターとなるファイルを選択してください。");
      setCsvContent([]);
      return;
    } else if (csvContentCompare[0] == undefined) {
      alert("比較したいファイルを選択してください。");
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
        <LogoContainer>
          <Image
            src="/images/csvhikakun_logo_ver0.2.png"
            width={100}
            height={100}
            alt="csvhikrakunのロゴ"
          />
        </LogoContainer>
        <BasicSubContainer>
          <BasicTitle>CSVひかくん | CSV比較ツール</BasicTitle>
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
              <CsvDownloadComponents data={csvCompareRowWithoutIndex} />
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
                <CsvDownloadComponents data={csvCompareRowWithIndex} />
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
                <CsvDownloadComponents data={csvCompareRowCol} />
              </BasicButton>
            </BasicSubContainerComponent>
          </BasicSubContainerComponent>
        </BasicSubContainer>
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

const LogoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

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

const BasicSubContainerComponent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BasicCard = styled.div`
  width: 100%;
  max-width: 1200px;
  display: inline-block;
  text-align: left;
  border-radius: 3px;
`;

const BasicTitle = styled.h1`
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

const BasicText = styled.span`
  font-size: 1rem;
`;

const BasicButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 350px;
  height: 2rem;
  padding: 0.3em 1em;
  margin: 0 0.3em 0.3em 0;
  text-decoration: none;
  color: #eea9a9;
  background: none;
  border: solid 1px #eea9a9;
  border-radius: 3px;
  transition: 0.4s;
  :hover {
    background: #eea9a9;
    color: white;
  }
`;

const BasicInputField = styled.input`
  width: 100%;
  max-width: 350px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`;

const BasicFooter = styled.footer`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;
