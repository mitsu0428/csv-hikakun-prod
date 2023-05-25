import React from "react";
import Link from "next/link";
import styled from "styled-components";
export default function Custom404(): JSX.Element {
  return (
    <main>
      <BasicText>
        <BasicButton>
          <Link href={"/"}>ホーム画面に戻る</Link>
        </BasicButton>
      </BasicText>
      <NotificationText>ページがありません。</NotificationText>
    </main>
  );
}

const BasicText = styled.span`
  font-size: 1rem;
`;

const BasicButton = styled.button`
  width: 100%;
  max-width: 350px;
  height: 2rem;
  color: #fff;
  background: #3c5e8b;
  border-radius: 8px;
  :hover {
    background: #557ea7;
  }
`;

const NotificationText = styled.p`
  font-size: 16px;
  margin-left: 16px;
`;
