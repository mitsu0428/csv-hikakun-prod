import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

function ReleaseNotification() {
  return (
    <div  className={styles.gridnotification}>
        <h2>今後のリリース予定情報</h2>
        <hr />
        <dl>
            <dt>~1 month.</dt>
            <dd>
                <Link href={"/"}>
                操作方法の説明
                </Link>
            </dd>
        </dl>
        <dl>
            <dt>~2 month.</dt>
            <dd>
                <Link href={"/"}>
                コンタクトフォーム
                </Link>
            </dd>
        </dl>
        <dl>
            <dt>~3 month.</dt>
            <dd>
                <Link href={"/"}>
                比較したデータをブラウザにテーブル表示
                </Link>
            </dd>
        </dl>
        <dl>
            <dt>~4 month.</dt>
            <dd>
                <Link href={"/"}>
                行数と列数が一致しないCSVを比較する
                </Link>
            </dd>
        </dl>
    </div>
  )
}

export default ReleaseNotification