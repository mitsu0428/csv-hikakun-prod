import React from "react";
import { GetServerSideProps } from "next";
import client from "../../../libs/client";
import { renderToc } from "../../../libs/render-toc";
import { renderContent } from "../../../libs/render-content";
import TableOfContents from "../../components/TableOfContent";
import RichArticleContent from "../../components/RichArticleContent";
import styled from "styled-components";

type Props = {
  article: Article;
};

type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  tag: string;
  toc_visible: boolean;
};

export default function Article({ article }: Props) {
  const toc = renderToc(article.content);
  const con = renderContent(article.content);

  return (
    <Container>
      <LeftColumn>
        {article.toc_visible && <TableOfContents toc={toc} />}
      </LeftColumn>
      <RightColumn>
        <Title>{article?.title}</Title>
        {article.tag && <Tag>#{article?.tag}</Tag>}
        <ArticleContent>
          <RichArticleContent contents={con} />
        </ArticleContent>
      </RightColumn>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "blogs",
    contentId: idExceptArray,
  });

  return {
    props: {
      article: data,
    },
  };
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  max-width: 300px;
  margin-right: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin: 0;
`;

const Tag = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ArticleContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #ccc;
`;
