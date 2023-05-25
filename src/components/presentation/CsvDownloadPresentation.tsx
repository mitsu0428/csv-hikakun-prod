import React from "react";
import styled from "styled-components";
import CsvDownloadUseCase from "../../usecase/CsvDownloadUseCase";

type CsvDownloadComponentsProps = {
  filenameprefix: string;
  data: any;
};

const CsvDownloadComponents = (props: CsvDownloadComponentsProps) => {
  const { filenameprefix, data } = props;

  const downloadCsvFile = () => {
    const { csvFile } = CsvDownloadUseCase({ filenameprefix, data });
    const url = URL.createObjectURL(csvFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = filenameprefix + ".csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ExpandCsvDownloader>
      <Button onClick={downloadCsvFile}>比較結果をダウンロード</Button>
    </ExpandCsvDownloader>
  );
};

const ExpandCsvDownloader = styled.span`
  width: 100%;
  height: 100%;
  button {
    width: 100%;
    height: 100%;
    font-size: 16px;
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
}`;

const Button = styled.button``;

export default CsvDownloadComponents;
