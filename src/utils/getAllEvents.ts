import { Client } from "@notionhq/client";
import { Posts } from "@/types/posts";
import pageToPostTransform from "@/utils/pageToPostTransform";

const getAllEvents = () => {
  const notion = new Client({
    auth: process.env.NOTION_EVENTS_KEY,
  });

  const getPublishedEvents = async (): Promise<Posts[]> => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_EVENTS_DATABASE!,
      filter: {
        property: "Publish",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
    return response.results.map((res) => {
      return pageToPostTransform(res);
    });
  };

  return getPublishedEvents();
};

export default getAllEvents;
