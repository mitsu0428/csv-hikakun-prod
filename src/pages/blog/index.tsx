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
import Image from "next/image";

export default function Home({ articles }: any) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
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
            <div className="rounded overflow-hidden shadow-lg" key={article.id}>
              <div className="px-6 py-4">
                <Image
                  className="w-full"
                  src={article.eye_catch?.url}
                  alt="Article eye catch"
                />
                <Link href={`/blog/article/${article.id}`} passHref>
                  <a>{article.title}</a>
                </Link>
              </div>
              <div className="px-6 pt-4 pb-2">
                {article.tag && (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{article.tag}
                  </span>
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
