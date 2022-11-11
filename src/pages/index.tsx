/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import { readString } from "react-papaparse";
import styles from "../styles/Home.module.css";
import Accordion from "./components/Accordion";
import ReleaseNotification from "./components/ReleaseNotification";
import CsvDownloadComponents from "./components/CsvDownloader";
import SeoSettings from "./components/SeoSettings";
import { useLocale } from "../hooks/useLocale";

const Home: NextPage = () => {
  const { t } = useLocale();
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
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className={styles.container}>
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

      <main className={styles.main} id="main">
        <div className={styles.grid}>
          <h1 className={styles.title}>{t.TEXT_TOP_TITLE}</h1>
          <p className={styles.card}>
            <Link href={"/about"}>
              <a>{t.TEXT_HOW_TO_USE_HIKAKUN}</a>
            </Link>
          </p>
          <hr />
        </div>

        <ReleaseNotification />

        <div className={styles.grid}>
          <h2 className={styles.description}>
            - {t.TEXT_SELECT_FILE} -
            <hr />
          </h2>
        </div>

        <div className={styles.grid}>
          <h3>{t.TEXT_SELECT_MASTER_FILE}</h3>
          <input
            type="file"
            accept="text/csv"
            onChange={getMasterFile}
            className={styles.card}
          />
        </div>

        <div className={styles.grid}>
          <p>
            上で選択したデータは、オリジナルデータとして参照先のみとして使われます。
          </p>
        </div>

        <div className={styles.grid}>
          <h3>{t.TEXT_SELECT_COMPARE_FILE}</h3>
          <input
            type="file"
            accept="text/csv"
            onChange={getCompareFile}
            className={styles.card}
          />
        </div>

        <div className={styles.grid}>
          <p>
            上で選択したデータは、比較するデータとして比較後はCSVにも出力されます。
          </p>
        </div>

        <div className={styles.grid}>
          <h2 className={styles.description}>
            - {t.TEXT_MANIPULATE_FILE} -
            <hr />
          </h2>
        </div>

        <div>
          <h3>【{t.TEXT_COMPARE_ROW_WITHOUT_INDEX}】</h3>
          <div className={styles.grid}>
            <div>
              <button onClick={openModalCheckWithoutIndex}>
                {t.CHECK_COMPARE_FILE}
              </button>
              <Modal
                //
                contentLabel="CSVを比較した結果を見る"
                isOpen={modalIsOpen}
                className={styles.modalResult}
                onAfterOpen={afterOpenModalWithoutIndex}
                onRequestClose={closeModalWithoutIndex}
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                  {t.DO_COMPARE_FILE}
                </h2>
                <div className="table">
                  <h3>{t.RESULT_COMPARE}</h3>
                  <p>{displayData}</p>
                </div>
                <button onClick={closeModalWithoutIndex}>close</button>
              </Modal>
            </div>
            <div className={styles.grid} onClick={checkRowWithoutIndex}>
              <CsvDownloadComponents
                data={csvCompareRowWithoutIndex}
                className={styles.card}
              />
            </div>
          </div>
        </div>

        <div>
          <h3>【{t.TEXT_COMPARE_ROW_WITH_INDEX}】</h3>
          <div className={styles.grid}>
            <div>
              <button onClick={openModalCheckWithIndex}>
                {t.CHECK_COMPARE_FILE}
              </button>
              <Modal
                //
                contentLabel="CSVを比較した結果を見る"
                isOpen={modalIsOpen}
                className={styles.modalResult}
                onAfterOpen={afterOpenModalWithIndex}
                onRequestClose={closeModalWithIndex}
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                  {t.DO_COMPARE_FILE}
                </h2>
                <div className="table">
                  <h3>{t.RESULT_COMPARE}</h3>
                  <p>{displayData}</p>
                </div>
                <button onClick={closeModalWithIndex}>close</button>
              </Modal>
            </div>
            <div onClick={checkRowWithIndex}>
              <CsvDownloadComponents
                data={csvCompareRowWithIndex}
                className={styles.card}
              />
            </div>
          </div>
        </div>

        <div>
          <h3>【{t.TEXT_COMPARE_VALUES}】</h3>
          <div className={styles.grid}>
            <div>
              <button onClick={openModalRowCol}>{t.CHECK_COMPARE_FILE}</button>
              <Modal
                //
                contentLabel="CSVを比較した結果を見る"
                isOpen={modalIsOpen}
                className={styles.modalResult}
                onAfterOpen={afterOpenModalWithIndex}
                onRequestClose={closeModalWithIndex}
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                  {t.DO_COMPARE_FILE}
                </h2>
                <div className="table">
                  <h3>{t.RESULT_COMPARE}</h3>
                  <p>{displayData}</p>
                </div>
                <button onClick={closeModalWithIndex}>close</button>
              </Modal>
            </div>
            <div onClick={checkRowWithIndex}>
              <CsvDownloadComponents
                data={csvCompareRowWithIndex}
                className={styles.card}
              />
            </div>
          </div>
        </div>

        <div>
          <h3>【{t.TEXT_COMPARE_VALUES}】</h3>
          <div className={styles.grid}>
            <div>
              <button onClick={openModalRowCol}>{t.CHECK_COMPARE_FILE}</button>
              <Modal
                //
                contentLabel="CSVを比較した結果を見る"
                isOpen={modalIsOpen}
                className={styles.modalResult}
                onAfterOpen={afterOpenModalRowCol}
                onRequestClose={closeModalRowCol}
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                  {t.DO_COMPARE_FILE}
                </h2>
                <div className="table">
                  <h3>{t.RESULT_COMPARE}</h3>
                  <p>{displayData}</p>
                </div>
                <button onClick={closeModalRowCol}>close</button>
              </Modal>
            </div>
            <div onClick={checkRowCol}>
              <CsvDownloadComponents
                data={csvCompareRowCol}
                className={styles.card}
              />
            </div>
          </div>
        </div>

        <Accordion />
        <p className={styles.card}>
          <Link href={"/mail"}>
            <a>{t.TEXT_MOVE_TO_CONTACT_PAGE}</a>
          </Link>
        </p>
        <p className={styles.card}>
          <Link href={"/privacy"}>
            <a>{t.TEXT_MOVE_TO_PRIVACY_PAGE}</a>
          </Link>
        </p>
      </main>
      <footer className={styles.footer}>
        <div>
          <p>©2022 Mitsuhiro Okada</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
