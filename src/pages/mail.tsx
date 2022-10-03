import { useState } from 'react';
import styles from '../styles/Home.module.css'

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
    <div>
      <div className={styles.contact}>
        <h2>
          Contact
        </h2>
      </div>
      <div className={styles.contact}>
        <h2>
          名前：
        </h2>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={styles.contact}>
        <h2>
          メールアドレス：
        </h2>
        <input type="text" onChange={(e) => setMail(e.target.value)} />
      </div>
      <div className={styles.contact}>
        <h2>
          内容：
        </h2>
        <textarea onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div className={styles.contact}>
        <button type="button" onClick={sendMail}>送信</button>
      </div>
    </div>
  );
}