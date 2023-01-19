/* eslint-disable react/react-in-jsx-scope */

import Link from "next/link";
import styled from "styled-components";
export default function Custom404(): JSX.Element {
  return (
    <main>
      <BasicText>
        <BasicButton>
          <Link href={"/"}>
            <a>CSV比較ツールに戻る</a>
          </Link>
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
  display: inline-block;
  width: 100%;
  max-width: 350px;
  height: 2rem;
  padding: 0.3em 1em;
  margin: 0.5em 0.3em;
  margin-left: 16px;
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

const NotificationText = styled.p`
  font-size: 16px;
  margin-left: 16px;
`;
