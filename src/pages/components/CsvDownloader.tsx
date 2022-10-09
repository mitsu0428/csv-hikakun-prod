import React, { useState } from 'react'
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
const CSVDownloader = (props: any) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const { CSVDownloader, Type } = useCSVDownloader();
  let subtitle: HTMLHeadingElement | null
  let props_array = props.data
  const filename = props.filenameprefix;

  const openModal = () => {
    //ファイルが選択されておらず、0番めがUndefined もしくは、
    if (props.data[0] == undefined) {
      return
    }
    setIsOpen(true)
  }

  const afterOpenModal = () => {
    if (subtitle) subtitle.style.color = '#000'
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.grid}>
      <button onClick={openModal}>CSVを比較した結果を見る</button>
      <Modal
        contentLabel="CSVを比較した結果を見る"
        isOpen={modalIsOpen}
        style={customStyles}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          CSVを比較する
        </h2>
        <table>
          <th>
            CSV比較結果
          </th>
          <td>
            {props_array}
          </td>
        </table>
        <CSVDownloader type={Type.Button} filename={filename} bom={true} config={{delimiter:","}} data={props.data}>
          CSVをダウンロードする
        </CSVDownloader>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  )
};

export default CSVDownloader;