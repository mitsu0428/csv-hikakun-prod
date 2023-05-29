import * as cheerio from "cheerio";

export const renderContent = (body: string) => {
  const $ = cheerio.load(body);
  const contentTags = $("body").find("h1, h2, h3, p, ul, li").toArray();

  const contentsArray = [];
  for (let i = 0; i < contentTags.length; i++) {
    const id = $(contentTags[i]).attr("id");
    const tagName = $(contentTags[i]).prop("tagName");
    if (tagName === "P") {
      const text = $(contentTags[i]).text().trim().split("。");
      for (let j = 0; j < text.length; j++) {
        contentsArray.push({ text: text[j], tagName, id: id + "p" + j });
      }
    } else {
      const text = $(contentTags[i]).text();
      contentsArray.push({ text, tagName, id });
    }
  }
  return contentsArray;
};
