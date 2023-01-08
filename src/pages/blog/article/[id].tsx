/* eslint-disable react/react-in-jsx-scope */
import { GetServerSideProps } from "next";
import client from "../../../libs/client";
import { renderToc } from "../../../libs/render-toc";
import { renderContent } from "../../../libs/render-content";
import TableOfContents from "../../components/TalbleOfContent";
import RichAirticleContent from "../../components/RichArticleContent";
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
    <BasicContainer>
      <ArticleUl>
        {article.toc_visible && <TableOfContents toc={toc} />}
      </ArticleUl>
      <BasicSubContainer>
        <BasicSubTitle>{article?.title}</BasicSubTitle>
        {article.tag && <ArticleTag>#{article?.tag}</ArticleTag>}
        <ArticleContent>
          <RichAirticleContent con={con} />
        </ArticleContent>
      </BasicSubContainer>
    </BasicContainer>
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

const ArticleUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ArticleList = styled.li`
  list-style: none;
`;
const ArticleTag = styled.div`
  font-size: 0.8rem;
  color: #999;
`;

const ArticleContent = styled.div`
  font-size: 1rem;
  line-height: 1.8;
`;
