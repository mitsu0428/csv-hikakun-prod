import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { readString } from 'react-papaparse'
import styles from '../styles/Home.module.css'
import Accordion from './components/Accordion'
import ReleaseNotification from './components/ReleaseNotification'
import CSVDownloader from './components/CsvDownloader'
import HeaderLogo from './components/HeaderLogo'

const Home: NextPage = () => {
  //比較する MasterCSV用の配列
  const [csvContent, setCsvContent] = useState<Array<any>>([]);
  //比較する CompareCSV用の配列
  const [csvContentCompare, setCsvContentCompare] = useState<Array<any>>([]);

  const [csvCompareRow, setCsvCompareRow] = useState<Array<any>>([]);
  const [csvCompareRowOutputWithIndex, setCsvCompareRowOutputWithIndex] = useState<Array<any>>([]);
  const [csvCompareRowCol, setCsvCompareRowCol] = useState<Array<any>>([]);

  //MasterとなるCSVを取り込む
  const getMasterFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return
    if (!e.target.files) return
    const file = e.target.files[0]
    if(!file.name.match('.csv$')) {
      alert('CSVファイルを選択してください');
      return;
    }
    const master_file = await file.text()
    const config: any = {
      worker: true,
      complete: (results: any) => {
        setCsvContent(results.data);
      }
    };
    readString(master_file, config);
  }

  //Compare先となるCSVを取り込む
  const getCompareFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return
    if (!e.target.files) return
    const file = e.target.files[0]
    if(!file.name.match('.csv$')) {
      alert('CSVファイルを選択してください');
      return;
    }
    const master_file = await file.text()
    const config: any = {
      worker: true,
      complete: (results: any) => {
        setCsvContentCompare(results.data);
      }
    };
    readString(master_file, config);
  }

  //行単位で比較
  const checkRow = () => {
    if (csvContent[0] == undefined) {
        alert("マスターとなるファイルを選択してください。")
    } else if (csvContentCompare[0] == undefined) {
        alert("比較したいファイルを選択してください。")
    } else {
        const csv_content_row_length = ([...csvContent].length)
        const csv_content_compare_row_length = ([...csvContentCompare].length)
        const csv_content_col_length = ([...csvContent[0]].length)
        const csv_contetn_compare_col_length = ([...csvContentCompare[0]].length)
        if (csv_content_row_length != csv_content_compare_row_length) {
            alert("行数が一致しません。行数と列数が同じCSVを選択してください。")
            return
        }
        if (csv_content_col_length != csv_contetn_compare_col_length) {
            alert("列数が一致しません。行数と列数が同じCSVを選択してください。")
            return
        }
        // 重複した行が出力されてしまう可能性があるので一旦、Index番号単位で辞書
        let diff_list_dict = Object()
        for (let count=0; count<csv_content_row_length; count++) {
          for (let sub_count=0; sub_count<csv_content_col_length; sub_count++) {
            let content = [...csvContent[count]][sub_count]
            let compare = [...csvContentCompare[count]][sub_count]
            if (content != compare) {
              diff_list_dict[Number(count)] = sub_count
            }
          }
        };
        // 差分のあったIndex番号ベースでリスト化ける
        let diff_list_row = []
        let object_keys = Object.keys(diff_list_dict)
        console.log(object_keys)
        for (let count_row of object_keys) {
          diff_list_row.push(
            [
              ...csvContentCompare[Number(count_row)],
              ...csvContent[Number(count_row)]
            ]
          )
        }
        setCsvCompareRow(diff_list_row);
    }
  }

  const checkRowOutputWithIndex = () => {
    if (csvContent[0] == undefined) {
        alert("マスターとなるファイルを選択してください。")
    } else if (csvContentCompare[0] == undefined) {
        alert("比較したいファイルを選択してください。")
    } else {
        const csv_content_row_length = ([...csvContent].length)
        const csv_content_compare_row_length = ([...csvContentCompare].length)
        const csv_content_col_length = ([...csvContent[0]].length)
        const csv_contetn_compare_col_length = ([...csvContentCompare[0]].length)
    
        if (csv_content_row_length != csv_content_compare_row_length) {
          alert("行数が一致しません。行数と列数が同じCSVを選択してください。")
          return
        }
        if (csv_content_col_length != csv_contetn_compare_col_length) {
          alert("列数が一致しません。行数と列数が同じCSVを選択してください。")
          return
        }
    
        // 重複した行が出力されてしまう可能性があるので一旦、Index番号単位で辞書
        let diff_list_dict = Object()
        for (let count=0; count<csv_content_row_length; count++) {
          for (let sub_count=0; sub_count<csv_content_col_length; sub_count++) {
            let content = [...csvContent[count]][sub_count]
            let compare = [...csvContentCompare[count]][sub_count]
            if (content != compare) {
              diff_list_dict[Number(count)] = sub_count
            }
          }
        };
    
        // 差分のあったIndex番号ベースでリスト化ける
        let diff_list_row = []
        let object_keys = Object.keys(diff_list_dict)
        console.log(object_keys)
        let loop_count = 1
        for (let count_row of object_keys) {
          diff_list_row.push(
            [
              Number(loop_count),
              ...csvContentCompare[Number(count_row)],
              ...csvContent[Number(count_row)]
            ]
          )
          loop_count += 1
        }
        setCsvCompareRowOutputWithIndex(diff_list_row);
    }
}

  const checkRowCol = () => {
    if (csvContent[0] == undefined) {
        alert("マスターとなるファイルを選択してください。")
    } else if (csvContentCompare[0] == undefined) {
        alert("比較したいファイルを選択してください。")
    } else {
        const csv_content_row_length = ([...csvContent].length)
        const csv_content_compare_row_length = ([...csvContentCompare].length)
        const csv_content_col_length = ([...csvContent[0]].length)
        const csv_contetn_compare_col_length = ([...csvContentCompare[0]].length)
        if (csv_content_row_length != csv_content_compare_row_length) {
          alert("行数が一致しません。行数と列数が同じCSVを選択してください。")
          return
        }
        if (csv_content_col_length != csv_contetn_compare_col_length) {
          alert("列数が一致しません。行数と列数が同じCSVを選択してください。")
          return
        }
    
        let diff_row_col = []
        for (let count=0; count<csv_content_row_length; count++) {
          for (let sub_count=0; sub_count<csv_content_col_length; sub_count++) {
            let content = [...csvContent[count]][sub_count]
            let compare = [...csvContentCompare[count]][sub_count]
            if (content != compare) {
              diff_row_col.push(
                [
                  compare
                ]
              )
            }
          }
        }
        setCsvCompareRowCol(diff_row_col);        
    }
  }
  
  return (
    <div className={styles.container}>

      <Head>
        <title>CSVひかくん｜CSV比較ツール</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/csvhikakun_logo_ver0.2.png.ico" />
      </Head>

      <header>
        <HeaderLogo />
      </header>

      <main className={styles.main} id="main">
        <div className={styles.grid}>
          <h1 className={styles.title}>
            CSVひかくん
          </h1>
          <p className={styles.card}>
            <Link href={"/description"}>
              <a>CSVひかくんの具体的な使い方</a>
            </Link>
          </p>
          <hr />
        </div>

        <ReleaseNotification />

        <div className={styles.grid}>
          <h2 className={styles.description}>
            - ファイルを選択 -
            <hr />
          </h2>
        </div>

        <div className={styles.grid}>
          <h3>
            オリジナルデータを選択
          </h3>
          <input type="file" accept="text/csv" onChange={getMasterFile} className={styles.card}/>
        </div>

        <div className={styles.grid}>
          <p>
            上で選択したデータは、オリジナルデータとして参照先のみとして使われます。
          </p>
        </div>

        <div className={styles.grid}>
          <h3>
            比較したいデータを選択
          </h3>
          <input type="file" accept="text/csv" onChange={getCompareFile}  className={styles.card}/>
        </div>

        <div className={styles.grid}>
          <p>
            上で選択したデータは、比較するデータとして比較後はCSVにも出力されます。
          </p>
        </div>


        <div className={styles.grid}>
          <h2 className={styles.description}>
            - ファイルを操作 -
            <hr />
          </h2>
        </div>

        <div>
          <h3>
            【一致しない値が含まれた行が何個あるかをチェックする】
          </h3>
          <div className={styles.grid} onClick={checkRow}>
            <div className={styles.grid}>
              <CSVDownloader data={csvCompareRow}/>
            </div>
          </div>
        </div>

        <div>
          <h3>
            【一致しない値が含まれた行があるかをチェックする　Indexつき】
          </h3>
          <div className={styles.grid} onClick={checkRowOutputWithIndex}>
            <div className={styles.grid}>
              <CSVDownloader data={csvCompareRowOutputWithIndex} className={styles.card}/>
            </div>
          </div>
        </div>

        <div>
          <h3>
            【一致しない値のみが何個あるかをチェックする】
          </h3>
          <div className={styles.grid} onClick={checkRowCol}>
            <div className={styles.grid}>
              <CSVDownloader data={csvCompareRowCol} className={styles.card}/>
            </div>
          </div>
        </div>

        <Accordion />
        <p className={styles.card}>
          <Link href={"/mail"}>
            <a>お問い合わせはこちら</a>
          </Link>
        </p>
        <p className={styles.card}>
          <Link href={"/privacypolicy"}>
            <a>プライバシーポリシーはこちら</a>
          </Link>
        </p>
      </main>
      <footer className={styles.footer}>
        <div>
          <p>
            ©2022 Mitsuhiro Okada
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home