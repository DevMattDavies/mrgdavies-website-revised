import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { Post } from "@/types/posts";
import pageToPostTransform from "@/utils/pageToPostTransform";

const getSinglePost = (slug: string) => {
  const notion = new Client({
    auth: process.env.NOTION_KEY,
  });
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const getSingleBlogPost = async (): Promise<Post> => {
    let post, markdown;
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE!,
      filter: {
        property: "slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });
    const page = response.results[0];
    const mdBlocks = await n2m.pageToMarkdown(page.id);
    markdown = n2m.toMarkdownString(mdBlocks);
    post = pageToPostTransform(page);

    return {
      post,
      markdown,
    };
  };
  return getSingleBlogPost();
};

export default getSinglePost;
