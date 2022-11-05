import React from "react";
import styles from "../../styles/Home.module.css";

function ReleaseNotification() {
  return (
    <div className={styles.gridnotification}>
      <h2>具体的な利用事例</h2>
      <hr />
      <dl>
        <dt>Google Spread Sheetを比較</dt>
        <dd>
          スプレッドシート（Google Spread
          Sheet）において、2つのシートを比較して差分を知りたい時に利用することができます。
        </dd>
      </dl>
      <dl>
        <dt>CSVファイルを比較</dt>
        <dd>
          2つのCSVファイルにおける差分を確認したり、比較をしたい時に簡単に調べることができるツールです。
        </dd>
      </dl>
      <dl>
        <dt>CSVファイルでダブルチェックをする</dt>
        <dd>
          AとBのファイルを用意して、前後で異なる値を準備できているかどうかを調べることができます。
        </dd>
      </dl>
    </div>
  );
}

export default ReleaseNotification;
