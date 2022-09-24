import * as React from 'react';
import { useCSVDownloader } from 'react-papaparse';

//CSVダウンロード関数　呼び出されるときに、パラメータとしてファイル名prefix、ボタン名、JSONデータをもらう
const CSVDownloader = (props: any) => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const filename = props.filenameprefix;
  return (
    <CSVDownloader type={Type.Button} filename={filename} bom={true} config={{delimiter:","}} data={props.data}>
      CSVをダウンロードする
    </CSVDownloader>
  );
};

export default CSVDownloader;