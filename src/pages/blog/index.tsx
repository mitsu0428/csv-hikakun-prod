import client from "../../libs/client";
import React, {
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
                  {article.title}
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
