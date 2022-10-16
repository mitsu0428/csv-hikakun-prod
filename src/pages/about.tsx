import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SeoSettings from './components/SeoSettings'

const About = () => {
  return (
    <div className={styles.main}>
      <SeoSettings
        pageTitle={'CSVファイル比較ツールの具体的な使い方'}
        pageDescription={'CSVファイルを比較する具体的な使い方・事例などを紹介しています。簡単に差分を抽出し、結果を得ることができます。'}
        pagePath={'https://csvhikakun.com/about'}
        pageImg={'https://csvhikakun.com/about'}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <div className={styles.grid}>
        <h2 className={styles.description}>
          CSV比較ツールの使い方
          <hr />
        </h2>
        <p className={styles.card}>
          <Link href={"/"}>
            <a>CSV比較ツールに戻る</a>
          </Link>
        </p>
      </div>
      <div className={styles.grid}>
        <h3>
          【比較したいCSVファイルを準備 01】
        </h3>
        <p>
          一つ目のファイルは、マスターになるCSVファイルを準備します。
        </p>
        <Image src="/images/page-one.png" width={2880} height={1800} />
      </div>
      <div className={styles.grid}>
        <h3>
          【比較したいファイルを準備　02】
        </h3>
        <p>
          二つ目のファイルには、比較したいCSVファイルを準備します。
        </p>
        <Image src="/images/page-two.png" width={2880} height={1800} />
      </div>
      <div className={styles.grid}>
        <h3>
           【CSVファイルを操作する 01】
        </h3>
        <p>
          オリジナルデータを選択にマスターとなるCSVファイルを選択してデータを読み込みます。
        </p>
      </div>
      <div className={styles.grid}>
        <h3>
           【CSVファイルを操作する 02】
        </h3>
        <p>
          比較したいデータを選択に比較したいCSVファイルを選択してデータを読み込みます。
        </p>
      </div>
      <div className={styles.grid}>
        <h3>
           【結果を確認する 01】
        </h3>
        <p>
          CSVファイルを比較し、結果を確認したい場合は「CSVを比較した結果をみる」ボタンを押下することで確認ができます。
        </p>
      </div>
      <div className={styles.grid}>
        <h3>
           【結果を確認する 02】
        </h3>
        <p>
          CSVファイルを比較し、結果をダウンロードしたい場合は「CSVをダウンロードする」ボタンを押下することで取得することができます。
        </p>
      </div>
    </div>
  )
}

export default About