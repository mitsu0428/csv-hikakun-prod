import { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SeoSettings from './components/SeoSettings';

export default function Mail() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  // 指定秒を待機する関数
  const _sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
  // メール送信関数
  const sendMail = async () => {
    // 名前が入力されているか
    if (name == "") {
      alert("名前を入力してください。")
      return
    }
    // メールアドレスが入力されているかと正しいフォーマットか
    if (mail == "") {
      alert("メールアドレスを入力してください。")
      return
    } else if (mail.indexOf("@") == -1) {
      alert("有効なメールアドレスを入力してください。")
      return
    }
    // 内容が入力されているか
    if (message == "") {
      alert("内容を入力してください。")
      return
    }
    await _sleep(1000);
    alert('お問い合わせを送信しました。')
    await fetch('/api/mail', {
      method: 'POST',
      body: `\n
      名前: ${name} \n
      メールアドレス: ${mail} \n
      お問い合わせ内容: ${message} `,
    });
    // 値は保持されているのでリロードしてOK
    location.reload()
  }

  return (
    <div className={styles.contactRoot}>
      <SeoSettings
        pageTitle={'お問い合わせ'}
        pageDescription={'こんなCSVファイルの比較機能が欲しい！バグが出て利用できない！等、ご気軽にお問い合わせください。'}
        pagePath={'https://csvhikakun.com/about'}
        pageImg={'https://csvhikakun.com/about'}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <div className={styles.contactParent}>
        <div className={styles.contactChild}>
          <h2>
            Contact
          </h2>
        </div>
        <div className={styles.contactChild}>
          <h2>
            名前：
          </h2>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.contactChild}>
          <h2>
            メールアドレス：
          </h2>
          <input type="text" onChange={(e) => setMail(e.target.value)} />
        </div>
        <div className={styles.contactChild}>
          <h2>
            内容：
          </h2>
          <textarea onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className={styles.contactChild}>
          <button type="button" onClick={sendMail}>送信</button>
        </div>
        <div className={styles.contactChild}>
          <br />
          <button>
            <Link href={"/"}>
              CSV比較ツールに戻る
            </Link>
          </button>
        </div>
      </div>
    </div>

  );
}