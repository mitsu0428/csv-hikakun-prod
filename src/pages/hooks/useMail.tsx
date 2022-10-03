import { useState } from 'react';

const useMail = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const send = async () => {
    await fetch('/api/mail', {
      method: 'POST',
      body: `名前: ${name} \nお問い合わせ内容: ${message}`,
    });
  };
  return {
    setName, setMessage, send,
  };
};

export default useMail 