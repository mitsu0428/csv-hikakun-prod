/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import SeoSettings from "./components/SeoSettings";

const getspreadsheet = () => {
  return (
    <div className={styles.main}>
      <SeoSettings
        pageTitle={"PythonでSpreadSheetから値を取得する"}
        pageDescription={
          "CSVファイルを扱う時、Pythonを利用できる方は下記のコードを利用するだけですぐにローカル環境にデータを取り込むことができます。"
        }
        pagePath={"https://csvhikakun.com/getspreadsheet"}
        pageImg={"https://csvhikakun.com/getspreadsheet"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <div className={styles.grid}>
        <h2 className={styles.description}>
          PythonでSpreadSheetからデータを取得する
          <hr />
        </h2>
      </div>
      <div>
        <Link href="https://github.com/mitsu0428/getSpreadSheetData">
          Githubリンク
        </Link>
      </div>
    </div>
  );
};

export default getspreadsheet;
