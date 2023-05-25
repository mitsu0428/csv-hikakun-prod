import React from "react";
import Link from "next/link";
import styled from "styled-components";
import router from "next/router";
import { useToast } from "../hooks/useToast";

export default function Mail() {
  const [currentValues, setCurentValues] = React.useState({
    name: "",
    mail: "",
    message: "",
  });

  const toast = useToast();

  const sendMail = async () => {
    if (currentValues.name == "") {
      toast({
        text: "名前が入力されていません。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    if (currentValues.mail == "") {
      toast({
        text: "メールアドレスが入力されていません。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    if (currentValues.mail.indexOf("@") == -1) {
      toast({
        text: "無効なメールアドレスです。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    if (currentValues.message == "") {
      toast({
        text: "内容が入力されていません。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    await fetch("/api/mail", {
      method: "POST",
      body: `\n
      名前: ${currentValues.name} \n
      メールアドレス: ${currentValues.mail} \n
      お問い合わせ内容: \n${currentValues.message} `,
    });

    setCurentValues({ name: "", mail: "", message: "" });
    toast({
      text: "お問い合わせを送信しました。",
      type: "normal",
      isDisplay: true,
    });
  };

  const hideToast = React.useCallback(() => {
    toast({ text: "", type: "", isDisplay: false });
  }, [toast]);

  React.useEffect(() => {
    const handleRouteChange = () => {
      hideToast();
    };

    const handleBeforeUnload = () => {
      hideToast();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [hideToast]);

  return (
    <BasicContainer>
      <ContactContainer>
        <BasicSubContainer>
          <ContactSubTitle>機能追加のお問い合わせ</ContactSubTitle>
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicInputField
            type="text"
            placeholder="名前"
            value={currentValues.name ?? ""}
            onChange={(e: { target: { value: any } }) => {
              setCurentValues({ ...currentValues, name: e.target.value });
            }}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicInputField
            type="text"
            placeholder="メールアドレス"
            value={currentValues.mail ?? ""}
            onChange={(e: { target: { value: any } }) => {
              setCurentValues({ ...currentValues, mail: e.target.value });
            }}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          <ContactTextArea
            placeholder="お問い合わせ&#13; 例）新規で〇〇の比較ツールが欲しい。"
            value={currentValues.message ?? ""}
            onChange={(e: { target: { value: any } }) => {
              setCurentValues({ ...currentValues, message: e.target.value });
            }}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicButton
            type="button"
            onClick={() => {
              sendMail();
            }}
          >
            送信
          </BasicButton>
        </BasicSubContainer>
      </ContactContainer>
      <BasicText>
        <BasicButton>
          <Link href={"/"}>公式サイトに戻る</Link>
        </BasicButton>
      </BasicText>
    </BasicContainer>
  );
}

const BasicContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 8px;
`;

const BasicSubContainer = styled(BasicContainer)``;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #fff;
  border-radius: 8px;
`;

const ContactSubTitle = styled.h2`
  position: relative;
  padding: 1.5rem 1rem;
  margin: 0;
  font-size: 2rem;
  color: #333132;
  font-weight: bold;
`;

const BasicText = styled.span`
  font-size: 1rem;
  color: #fff;
`;

const BasicInputField = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  transition: border-bottom-color 0.3s;
  color: #fff;
  :focus {
    border-bottom-color: #fff;
    outline: none;
  }
`;

const ContactTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-top: 6px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  resize: none;
  transition: border-bottom-color 0.3s;
  color: #fff;
  :focus {
    border-bottom-color: #fff;
    outline: none;
  }
`;

const BasicButton = styled.button`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  height: 3rem;
  margin: 0.5rem 0;
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #c3d941;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background-color: #d3e173;
  }
`;
