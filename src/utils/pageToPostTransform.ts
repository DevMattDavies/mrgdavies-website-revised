import { Posts } from "@/types/posts";

export const pageToPostTransform = (page: any): Posts => {
  const { id, properties } = page;

  const title = properties.post_title.title[0].plain_text;
  const slug = properties.slug.formula.string;
  const cover = page.cover?.external.url;
  const date = properties.Date.date.start;

  return { id, title, slug, cover, date };
};

export default pageToPostTransform;
