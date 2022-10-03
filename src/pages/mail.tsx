import { useMail } from './hooks/useMail';

export default function Mail() {
  const { setName, setMessage, send } = useMail();

  return (
    <div>
        <h2>
            名前
        </h2>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        <h2>
            内容
        </h2>
        <textarea onChange={(e) => setMessage(e.target.value)} />
        <button type="button" onClick={send}>送信</button>
    </div>
  );
}