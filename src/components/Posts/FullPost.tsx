import { Post } from "@/types/posts";
import { Subtitle, BlogDate, HR } from "@/styles/Text/Text.styles";
import ReactMarkdown from "react-markdown";
import { BlogImage } from "@/components/Images/Images";
import {
  BlogPostContainer,
  BlogContentContainer,
} from "@/styles/Containers/Container.styles";

const FullPost = ({ post, markdownText }: Post): JSX.Element => {
  return (
    <BlogPostContainer>
      <Subtitle>{post.title}</Subtitle>
      <BlogDate>{post.formattedDate}</BlogDate>
      <HR />
      <BlogContentContainer>
        {post.cover && (
          <BlogImage src={post.cover} alt={`${post.title} cover`} />
        )}
        <ReactMarkdown className="linebreak">{markdownText}</ReactMarkdown>
      </BlogContentContainer>
    </BlogPostContainer>
  );
};

export default FullPost;
