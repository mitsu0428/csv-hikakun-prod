/* eslint-disable react/react-in-jsx-scope */
import { useCSVDownloader } from "react-papaparse";

//CSVダウンロード関数呼び出されるときに、パラメータとしてファイル名prefix、ボタン名、JSONデータをもらう
const CsvDownloadComponents = (props: any) => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const filename = props.filenameprefix;
  return (
    <>
      <CSVDownloader
        type={Type.Button}
        filename={filename}
        bom={true}
        config={{ delimiter: "," }}
        data={props.data}
      />
    </>
  );
};

export default CsvDownloadComponents;
