/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import SeoSettings from "./components/utils/SeoSettings";

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
        <BasicSubTitle>CSVファイル比較ツールの具体的な使い方</BasicSubTitle>
        <BasicText>
          <BasicButton>
            <Link href={"/"}>
              <a>CSV比較ツールに戻る</a>
            </Link>
          </BasicButton>
        </BasicText>
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
  padding: 0 2rem;
`;

const BasicSubContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BasicSubTitle = styled.h2`
  position: relative;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
  font-size: 2rem;
  font-weight: bold;

  ::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 4rem;
    height: 4px;
    background: linear-gradient(to right, #111, #ccc);
  }
`;

const BasicText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: #333;
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
  background-color: #4caf50;
  border: none;
  border-radius: 1.5rem;
  transition: 0.2s;

  &:hover {
    background-color: #3d8c40;
  }
`;
