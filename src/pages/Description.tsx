import styles from '../styles/Home.module.css'

function Description() {
  return (
    <div>
      <div className={styles.grid}>
        <h2 className={styles.description}>
          CSV比較ツールの使い方
          <hr />
        </h2>
      </div>
      <div className={styles.grid}>
        <ul>
          <li>
            1 : 比較したいCSVを選択します。
          </li>
          <li>
            2 : 最初にCSVを比較し、差分があるかどうかをチェックします。
          </li>
          <li>
            3 : 状況に応じて（行を比較したい場合と値のみを比較したい場合）比較をします。
          </li>
          <li>
            4 : 差分のデータが必要な場合は、CSVをダウンロードすることもできます。
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Description