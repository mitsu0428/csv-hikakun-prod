import React from "react";
import styled from "styled-components";
import { writeXLSX } from "xlsx";

type Props = {
  filenameprefix: string;
  data: any;
};

const DownLoader = (props: Props) => {
  const filename = props.filenameprefix;
  const records = props.data;

  return (
    <ExpandCsvDownloader>
      <button
        onClick={() => {
          writeXLSX(
            {
              SheetNames: ["Sheet1"],
              Sheets: {
                Sheet1: {
                  ...records,
                },
              },
            },
            { bookType: "xlsx", bookSST: false, type: "binary" }
          );
        }}
      >
        比較結果をダウンロード
      </button>
    </ExpandCsvDownloader>
  );
};

export default DownLoader;

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
    color: #fff;
    background: #eea9a9;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    :hover {
      color: #fff;
    }
  }
`;
