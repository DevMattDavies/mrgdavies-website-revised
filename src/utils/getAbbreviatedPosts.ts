import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { Post } from "@/types/posts";
import pageToPostTransform from "@/utils/pageToPostTransform";

const getAbbreviatedPosts = (slugs: string[]) => {
  const notion = new Client({
    auth: process.env.NOTION_BLOG_KEY,
  });
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const getAbbreviatedBlogPost = async (): Promise<Post[]> => {
    let posts: Post[] = [];
    for (const slug of slugs) {
      let post, markdown, markdownText;
      const response = await notion.databases.query({
        database_id: process.env.NOTION_BLOG_DATABASE!,
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
      markdownText = markdown.parent;
      post = pageToPostTransform(page);

      if (markdownText.length > 300) {
        markdownText = `${markdownText.slice(
          0,
          300
        )}...[read more](/posts/${slug})`;
      } else {
        markdownText = `${markdownText.slice(
          0,
          markdownText.length - 2
        )}...[read more](posts/${slug})`;
      }

      posts.push({
        post,
        markdownText,
      });
    }
    return posts;
  };
  return getAbbreviatedBlogPost();
};

export default getAbbreviatedPosts;
