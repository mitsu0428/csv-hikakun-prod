import Link from 'next/link'
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
                <Link href={"/"}>
                  コンタクトフォーム
                </Link>
            </dd>
        </dl>
        <dl>
            <dt>近日中...</dt>
            <dd>
                <Link href={"/"}>
                  比較したデータをブラウザにテーブル表示
                </Link>
            </dd>
        </dl>
        <dl>
            <dt>近日中...</dt>
            <dd>
                <Link href={"/"}>
                  行数と列数が一致しないCSVも比較する
                </Link>
            </dd>
        </dl>
    </div>
  )
}

export default ReleaseNotification