import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Excel() {
  return (
    <main>
      <BasicText>
        <BasicButton>
          <Link href={"/"}>
            <a>ホーム画面に戻る</a>
          </Link>
        </BasicButton>
      </BasicText>
      <NotificationText>Coming soon...</NotificationText>
    </main>
  );
}

const BasicText = styled.span`
  font-size: 1rem;
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
  background-color: #eea9a9;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background-color: #ff6f91;
  }
`;

const NotificationText = styled.p`
  font-size: 16px;
  margin-left: 16px;
`;
