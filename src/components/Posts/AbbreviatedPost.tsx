import { Post } from "@/types/posts";
import ReactMarkdown from "react-markdown";
import { BlogDate, BlogTitle, HR } from "@/styles/Text/Text.styles";
import { BlogImage } from "@/styles/Images/Image.styles";
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
      <BlogDate>{date}</BlogDate>
      <HR />
      <BlogContentContainer>
        <BlogImage src={post.post.cover} />
        <div id={"markdown"}>
          <ReactMarkdown>{post.markdown}</ReactMarkdown>
        </div>
      </BlogContentContainer>
    </BlogPostContainer>
  );
};

export default AbbreviatedPost;
