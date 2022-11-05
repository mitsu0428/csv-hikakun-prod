/* eslint-disable react/react-in-jsx-scope */
import Modal from "react-modal";
import { useCSVDownloader } from "react-papaparse";
import styles from "../../styles/Home.module.css";

Modal.setAppElement("#main");

//CSVダウンロード関数呼び出されるときに、パラメータとしてファイル名prefix、ボタン名、JSONデータをもらう
const CsvDownloadComponents = (props: any) => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const filename = props.filenameprefix;
  return (
    <div className={styles.grid}>
      <CSVDownloader
        type={Type.Button}
        filename={filename}
        bom={true}
        config={{ delimiter: "," }}
        data={props.data}
      >
        CSVをダウンロードする
      </CSVDownloader>
    </div>
  );
};

export default CsvDownloadComponents;
