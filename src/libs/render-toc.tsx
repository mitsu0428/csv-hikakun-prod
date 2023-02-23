import * as cheerio from "cheerio";

export const renderToc = (body: string) => {
  const $ = cheerio.load(body);
  const headings = $("body").find("h1, h2, h3").toArray();
  const toc = headings.map((data: any) => {
    const text = $(data).text().trim();
    const id = $(data).attr("id");
    return { text, id };
  });

  return toc;
};
