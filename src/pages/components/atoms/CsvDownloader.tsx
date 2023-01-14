/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import { useCSVDownloader } from "react-papaparse";

type CsvDownloadComponentsProps = {
  filenameprefix: string;
  data: any;
};

//CSVダウンロード関数呼び出されるときに、パラメータとしてファイル名prefix、ボタン名、JSONデータをもらう
const CsvDownloadComponents = (props: CsvDownloadComponentsProps) => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const filename = props.filenameprefix;

  return (
    <ExpandCsvDownloader>
      <CSVDownloader
        data={props.data}
        filename={filename}
        bom={true}
        type={Type.Button}
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
    font-size: 16px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
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
