import { Posts } from "@/types/posts";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";

export const pageToPostTransform = (page: any): Posts => {
  const { id, properties } = page;
  const date = properties.Date.date.start;
  const slug = properties.slug.formula.string;
  const cover = page.cover?.external.url;

  let title;
  let formattedDate;

  if (properties.post_title) {
    title = properties.post_title.title[0].plain_text;
    formattedDate = format(new Date(date), "MMMM dd, yyyy", { locale: enGB });
  }

  if (properties.event_title) {
    title = properties.event_title.title[0].plain_text;
    formattedDate = format(new Date(date), "MMMM dd, yyyy h:mmaaa", {
      locale: enGB,
    });
  }

  return { id, title, slug, cover, formattedDate };
};

export default pageToPostTransform;
