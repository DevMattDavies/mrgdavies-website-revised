import { Posts } from "@/types/posts";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const pageToPostTransform = (page: any): Posts => {
  console.log(page);
  const { id, properties } = page;
  const date = properties.Date.date.start;
  const slug = properties.slug.formula.string;
  const cover = page.cover?.external.url;

  let title;
  let formattedDate;

  if (properties.post_title) {
    title = properties.post_title.title[0].plain_text;
    formattedDate = format(new Date(date), "MMMM dd, yyyy");
  }

  if (properties.event_title) {
    const timeZone = "GB";
    const zonedDate = utcToZonedTime(new Date(date), timeZone);
    formattedDate = format(zonedDate, "MMMM dd, yyyy h:mmaaa");
    title = properties.event_title.title[0].plain_text;
  }

  return { id, title, slug, cover, formattedDate };
};

export default pageToPostTransform;
