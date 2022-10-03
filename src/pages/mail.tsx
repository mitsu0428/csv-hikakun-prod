import useMail from './hooks/useMail';
import styles from '../styles/Home.module.css'

export default function Mail() {
  const { setName, setMessage, send } = useMail();

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
        <button type="button" onClick={send}>送信</button>
      </div>
    </div>
  );
}