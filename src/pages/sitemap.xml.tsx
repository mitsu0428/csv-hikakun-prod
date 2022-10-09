import { GetServerSidePropsContext } from 'next';

async function generateSitemapXml() {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    
    <!--  created with free sitemap generation system www.sitemapxml.jp  --> 
    <url>
      <loc>https://csvhikakun.com/</loc>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://csvhikakun.com/description</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://csvhikakun.com/mail</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://csvhikakun.com/privacypolicy</loc>
      <priority>0.8</priority>
    </url>
    </urlset>
    `
    return xml;
  }

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml();

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間のキャッシュ
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;

