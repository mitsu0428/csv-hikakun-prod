import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Mail() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  
  const sendMail = async () => {
    await fetch('/api/mail', {
      method: 'POST',
      body: `名前: ${name} \nお問い合わせ内容: ${message}`,
    });
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
          Name
        </h2>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={styles.contact}>
        <h2>
          Content
        </h2>
        <textarea onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div className={styles.contact}>
        <button type="button" onClick={sendMail}>送信</button>
      </div>
    </div>
  );
}