import { Post } from "@/types/posts";
import ReactMarkdown from "react-markdown";
import { BlogDate, BlogTitle, HR } from "@/styles/Text/Text.styles";
import { BlogImage } from "@/components/Images/Images";
import {
  BlogContentContainer,
  BlogPostContainer,
} from "@/styles/Containers/Container.styles";

import { format } from "date-fns";

const AbbreviatedPost = ({ post }: { post: Post }): JSX.Element => {
  const date = format(new Date(post.post.date), "MMMM dd, yyyy");
  return (
    <BlogPostContainer>
      <BlogTitle>{post.post.title}</BlogTitle>

      <HR />
      <BlogContentContainer>
        {post.post.cover && (
          <BlogImage src={post.post.cover} alt={`${post.post.title} cover`} />
        )}
        <BlogDate>{date}</BlogDate>
        <div id={"markdown"}>
          <ReactMarkdown>{post.markdownText}</ReactMarkdown>
        </div>
      </BlogContentContainer>
    </BlogPostContainer>
  );
};

export default AbbreviatedPost;
