import { Client } from "@notionhq/client";
import { Posts } from "@/types/posts";
import pageToPostTransform from "@/utils/pageToPostTransform";

const getAllPosts = () => {
  const notion = new Client({
    auth: process.env.NOTION_BLOG_KEY,
  });

  const getPublishedBlogPosts = async (): Promise<Posts[]> => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE!,
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

  return getPublishedBlogPosts();
};

export default getAllPosts;
