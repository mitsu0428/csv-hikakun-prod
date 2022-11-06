/* eslint-disable react/react-in-jsx-scope */
import { GetServerSideProps } from "next";
import Image from "next/image";
import client from "../../../libs/client";
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
  body: string;
  content: string;
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  tag: string;
};

export default function Article({ article }: Props) {
  return (
    <div className={styles.grid}>
      <div className={styles.grid}>
        <div>
          <Image src={article.eye_catch?.url} />
          <div className={styles.title}>
            <div>{article?.title}</div>
          </div>
          {article.tag && (
            <div>
              <div>#{article?.tag}</div>
            </div>
          )}
          <div className={styles.code}>
            <div>{article?.body}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  console.log(id);
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
