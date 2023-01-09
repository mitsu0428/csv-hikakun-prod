/* eslint-disable react/react-in-jsx-scope */
import client from "../../libs/client";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Home({ articles }: any) {
  return (
    <BasicContainer>
      <BasicSubTitle>記事一覧</BasicSubTitle>
      <BasicSubContainer>
        {articles.map(
          (article: {
            id: Key | null | undefined;
            eye_catch: { url: string };
            title:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            tag:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => (
            <div key={article.id}>
              <BasicButton>
                <Link href={`/blog/article/${article.id}`} passHref>
                  <a>{article.title}</a>
                </Link>
              </BasicButton>
              <div>{article.tag && <span>#{article.tag}</span>}</div>
            </div>
          )
        )}
      </BasicSubContainer>
    </BasicContainer>
  );
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  console.log(data.displayImage);
  return {
    props: {
      articles: data.contents,
    },
  };
};

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

const BasicButton = styled.button`
  width: 100%;
  max-width: 360px;
  margin-top: 16px;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;
