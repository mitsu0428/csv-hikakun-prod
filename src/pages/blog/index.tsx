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
import styles from "../../styles/Home.module.css";

export default function Home({ articles }: any) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className={styles.grid}>
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
            <div className={styles.grid} key={article.id}>
              <div className={styles.card}>
                <Link href={`/blog/article/${article.id}`} passHref>
                  <a>{article.title}</a>
                </Link>
              </div>
              <div className={styles.grid}>
                {article.tag && (
                  <span className={styles.card}>#{article.tag}</span>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </>
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
