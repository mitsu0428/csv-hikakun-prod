import React from 'react'
import styles from '../../styles/Home.module.css'

function ReleaseNotification() {
  return (
    <div  className={styles.gridnotification}>
        <h2>今後のリリース予定情報</h2>
        <hr />
        <dl>
            <dt>近日中...</dt>
            <dd>
              コンタクトフォーム
            </dd>
        </dl>
        <dl>
            <dt>近日中...</dt>
            <dd>
              比較したデータをブラウザにテーブル表示
            </dd>
        </dl>
        <dl>
            <dt>近日中...</dt>
            <dd>
              行数と列数が一致しないCSVも比較する
            </dd>
        </dl>
    </div>
  )
}

export default ReleaseNotification