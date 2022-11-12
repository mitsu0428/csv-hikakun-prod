import * as cheerio from "cheerio";

export const renderContent = (body: string) => {
  const $ = cheerio.load(body);
  const contentTags = $("h1, h2, h3, p, ul, li").toArray();
  const con = contentTags.map((data: any) => ({
    text: data.children[0].data,
    id: data.attribs.id,
  }));

  return con;
};
