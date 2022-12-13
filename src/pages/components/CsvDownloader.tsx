/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import { useCSVDownloader } from "react-papaparse";

//CSVダウンロード関数呼び出されるときに、パラメータとしてファイル名prefix、ボタン名、JSONデータをもらう
const CsvDownloadComponents = (props: any) => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const filename = props.filenameprefix;
  return (
    <ExpandCsvDownloader>
      <CSVDownloader
        type={Type.Button}
        filename={filename}
        bom={true}
        config={{ delimiter: "," }}
        data={props.data}
      >
        比較結果をダウンロード
      </CSVDownloader>
    </ExpandCsvDownloader>
  );
};

export default CsvDownloadComponents;

const ExpandCsvDownloader = styled.span`
  width: 100%;
  height: 100%;
  button {
    width: 100%;
    height: 100%;
    color: #eea9a9;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    :hover {
      color: #fff;
    }
  }
`;
