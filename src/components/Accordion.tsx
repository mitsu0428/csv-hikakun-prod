import React from 'react'
import styles from '../../styles/QuestionAndAnswer.module.css'

function Accordion() {
  return (
<div>
  <h2 className={styles.title}>
    Q&A
  </h2>
  <div className={styles.disclosures}>
    <details className={styles.details}>
      <summary className={styles.summary}>
        <h3>CSVとは??<span className={styles.icon}></span></h3>
      </summary>
      <p className={styles.text}>
        comma separated valuesファイルです。カンマによって値が分けられているものを指します。
      </p>
    </details>
    <details className={styles.details}>
      <summary className={styles.summary}>
        <h3>CSVの行だけの差分を調べたい。<span className={styles.icon}></span></h3>
      </summary>
      <p className={styles.text}>
        比較したいCSVを二つ選択し、行だけを比較するを押下することで比較することができます。
      </p>
    </details>
    <details className={styles.details}>
      <summary className={styles.summary}>
        <h3>CSVの値だけの差分を調べたい。<span className={styles.icon}></span></h3>
      </summary>
      <p className={styles.text}>
        比較したいCSVを二つ選択し、値だけを比較するを押下することで比較することができます。
      </p>
    </details>
    <details className={styles.details}>
      <summary className={styles.summary}>
        <h3>比較したCSVの差分をダウンロードしたい。<span className={styles.icon}></span></h3>
      </summary>
      <p className={styles.text}>
        比較を選択した後に、ダウンロードボタンを押すことでCSV出力が可能です。
      </p>
    </details>
  </div>
</div>
  )
}

export default Accordion