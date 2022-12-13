/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import SeoSettings from "./components/SeoSettings";

export default function Mail() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  // 指定秒を待機する関数
  const _sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  // メール送信関数
  const sendMail = async () => {
    // 名前が入力されているか
    if (name == "") {
      alert("名前を入力してください！");
      return;
    }
    // メールアドレスが入力されているかと正しいフォーマットか
    if (mail == "") {
      alert("メールアドレスを入力してください。");
      return;
    } else if (mail.indexOf("@") == -1) {
      alert("有効なメールアドレスを入力してください。");
      return;
    }
    // 内容が入力されているか
    if (message == "") {
      alert("内容を入力してください。");
      return;
    }
    await _sleep(1000);
    alert("お問い合わせを送信しました。");
    await fetch("/api/mail", {
      method: "POST",
      body: `\n
      名前: ${name} \n
      メールアドレス: ${mail} \n
      お問い合わせ内容: ${message} `,
    });
    // 値は保持されているのでリロードしてOK
    location.reload();
  };

  return (
    <BasicContainer>
      <SeoSettings
        pageTitle={"CSVひかくんへのお問い合わせ"}
        pageDescription={
          "こんなCSVファイルの差分比較の機能が欲しい!バグが出て利用できない!等、ご気軽にお問い合わせください。"
        }
        pagePath={"https://csvhikakun.com/about"}
        pageImg={"https://csvhikakun.com/about"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <BasicSubContainer>
        <BasicSubTitle>お問い合わせ</BasicSubTitle>
        <BasicButton>
          <Link href={"/"}>CSV比較ツールに戻る</Link>
        </BasicButton>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>名前</BasicSubTitle>
        <BasicInputField
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>メールアドレス</BasicSubTitle>
        <BasicInputField
          type="text"
          onChange={(e) => setMail(e.target.value)}
        />
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>内容</BasicSubTitle>
        <BasicTextArea onChange={(e) => setMessage(e.target.value)} />
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicButton type="button" onClick={sendMail}>
          送信
        </BasicButton>
      </BasicSubContainer>
    </BasicContainer>
  );
}

const BasicContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BasicSubContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BasicSubTitle = styled.h2`
  position: relative;
  padding: 1.5rem 1rem;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: 10px;
    content: "";
    background-image: -webkit-repeating-linear-gradient(
      135deg,
      #000,
      #000 1px,
      transparent 2px,
      transparent 5px
    );
    background-image: repeating-linear-gradient(
      -45deg,
      #000,
      #000 1px,
      transparent 2px,
      transparent 5px
    );
    background-size: 7px 7px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;

const BasicInputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`;

const BasicTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
`;

const BasicButton = styled.button`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  height: 2rem;
  padding: 0.3em 1em;
  margin: 0 0.3em 0.3em 0;
  text-decoration: none;
  color: #eea9a9;
  background: none;
  border: solid 1px #eea9a9;
  border-radius: 3px;
  transition: 0.4s;
  :hover {
    background: #eea9a9;
    color: white;
  }
`;
