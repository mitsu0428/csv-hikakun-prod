import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useCSVDownloader } from 'react-papaparse';
import styles from '../../styles/Home.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
Modal.setAppElement('#main')

//CSVダウンロード関数　呼び出されるときに、パラメータとしてファイル名prefix、ボタン名、JSONデータをもらう
const CsvDownloadComponents = (props: any) => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const filename = props.filenameprefix;
  
  return (
    <div className={styles.grid}>
      <CSVDownloader type={Type.Button} filename={filename} bom={true} config={{delimiter:","}} data={props.data}>
          CSVをダウンロードする
        </CSVDownloader>
    </div>
  )
};

export default CsvDownloadComponents;