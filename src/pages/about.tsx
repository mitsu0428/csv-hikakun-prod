/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import SeoSettings from "./components/SeoSettings";

const About = () => {
  return (
    <BasicContainer>
      <SeoSettings
        pageTitle={"CSVファイル比較ツールの具体的な使い方"}
        pageDescription={
          "CSVファイルを比較する具体的な使い方・事例などを紹介しています。簡単に差分を抽出し、結果を得ることができます。"
        }
        pagePath={"https://csvhikakun.com/about"}
        pageImg={"https://csvhikakun.com/about"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <BasicSubContainer>
        <BasicSubTitle>
          CSVファイル比較ツールの具体的な使い方
          <BasicHr />
        </BasicSubTitle>
        <BasicButton>
          <Link href={"/"}>
            <a>CSV比較ツールに戻る</a>
          </Link>
        </BasicButton>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【比較したいCSVファイルを準備 01】</BasicSubTitle>
        <BasicText>
          一つ目のファイルは、マスターになるCSVファイルを準備します。
        </BasicText>
        <Image src="/images/page-one.png" width={2880} height={1800} />
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【比較したいファイルを準備 02】</BasicSubTitle>
        <BasicText>
          二つ目のファイルには、比較したいCSVファイルを準備します。
        </BasicText>
        <Image src="/images/page-two.png" width={2880} height={1800} />
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【CSVファイルを操作する 01】</BasicSubTitle>
        <BasicText>
          オリジナルデータを選択にマスターとなるCSVファイルを選択してデータを読み込みます。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【CSVファイルを操作する 02】</BasicSubTitle>
        <BasicText>
          比較したいデータを選択に比較したいCSVファイルを選択してデータを読み込みます。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【結果を確認する 01】</BasicSubTitle>
        <BasicText>
          CSVファイルを比較し、結果を確認したい場合は「CSVを比較した結果をみる」ボタンを押下することで確認ができます。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>【結果を確認する 02】</BasicSubTitle>
        <BasicText>
          CSVファイルを比較し、結果をダウンロードしたい場合は「CSVをダウンロードする」ボタンを押下することで取得することができます。
        </BasicText>
      </BasicSubContainer>
    </BasicContainer>
  );
};

export default About;

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

const BasicHr = styled.hr`
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

const BasicText = styled.p`
  font-size: 1rem;
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
