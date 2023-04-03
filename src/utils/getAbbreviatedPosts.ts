import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { Post } from "@/types/posts";
import pageToPostTransform from "@/utils/pageToPostTransform";

const getAbbreviatedPosts = (slugs: string[]) => {
  const notion = new Client({
    auth: process.env.NOTION_KEY,
  });
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const getAbbreviatedBlogPost = async (): Promise<Post[]> => {
    let posts: Post[] = [];
    for (const slug of slugs) {
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
      markdown = n2m.toMarkdownString(mdBlocks).slice(0, 500);
      post = pageToPostTransform(page);

      posts.push({
        post,
        markdown,
      });
    }
    return posts;
  };
  return getAbbreviatedBlogPost();
};

export default getAbbreviatedPosts;