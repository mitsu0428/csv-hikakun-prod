import * as cheerio from "cheerio";

export const renderContent = (body: string) => {
  const $ = cheerio.load(body);
  const contentTags = $("body").find("h1, h2, h3, p, ul, li").toArray();
  const con = contentTags.map((data: any) => {
    const text = $(data).text().trim();
    const id = $(data).attr("id");
    return { text, id };
  });

  return con;
};
