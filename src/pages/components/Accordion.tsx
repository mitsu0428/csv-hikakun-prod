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
        Comma Separated Valuesの略称。
      </p>
      <p className={styles.text}>
        項目と項目の間が区切られたデータを指す。
      </p>
      <p className={styles.text}>
        hoge.csvという拡張子のファイルになる。
      </p>
    </details>
    <details className={styles.details}>
      <summary className={styles.summary}>
        <h3>csv比較ツール【csvひかくん】について<span className={styles.icon}></span></h3>
      </summary>
      <p className={styles.text}>
      インデックスとカラムが一致したCSVにおいて、行単位もしくは、列単位でCSVファイルを比較することができます。
      </p>
    </details>
    <details className={styles.details}>
      <summary className={styles.summary}>
        <h3>csvファイルの行を比較する<span className={styles.icon}></span></h3>
      </summary>
      <p className={styles.text}>
      インデックスとカラムの値が一致しているCSVにおいて、
      </p>
      <p className={styles.text}>
      差分が見つかった行を返します。
      </p>
    </details>
    <details className={styles.details}>
      <summary className={styles.summary}>
        <h3>csvファイルの値を比較する<span className={styles.icon}></span></h3>
      </summary>
      <p className={styles.text}>
      インデックスとカラムの値が一致しているCSVにおいて、
      </p>
      <p className={styles.text}>
      差分が見つかった値のみを返します。
      </p>
    </details>
    <details className={styles.details}>
      <summary className={styles.summary}>
        <h3>csvファイルを比較した差分のみダウンロードする<span className={styles.icon}></span></h3>
      </summary>
      <p className={styles.text}>
      ・比較し、差分の見つかった行だけ
      </p>
      <p className={styles.text}>
      ・比較し、差分の見つかった値だけ
      </p>
      <p className={styles.text}>
      の2種類で出力することができます。
      </p>
    </details>
  </div>
</div>
  )
}

export default Accordion