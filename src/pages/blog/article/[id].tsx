/* eslint-disable react/react-in-jsx-scope */
import { GetServerSideProps } from "next";
import client from "../../../libs/client";
import { renderToc } from "../../../libs/render-toc";
import { renderContent } from "../../../libs/render-content";
import { TableOfContents } from "../../components/TalbleOfContent";
import { RichAirticleContent } from "../../components/RichArticleContent";
import styles from "../../../styles/Home.module.css";

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
    <div className={styles.grid}>
      {article.toc_visible && <TableOfContents toc={toc} />}
      <div className={styles.grid}>
        <div>
          <div className={styles.title}>
            <div>{article?.title}</div>
          </div>
          {article.tag && (
            <div>
              <div>#{article?.tag}</div>
            </div>
          )}
          <div className={styles.code}>
            <RichAirticleContent con={con} />
          </div>
        </div>
      </div>
    </div>
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
