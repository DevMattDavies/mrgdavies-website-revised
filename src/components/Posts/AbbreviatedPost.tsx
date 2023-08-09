import { Post } from "@/types/posts";
import ReactMarkdown from "react-markdown";
import { BlogDate, BlogTitle, HR } from "@/styles/Text/Text.styles";
import { BlogImage } from "@/components/Images/Images";
import {
  BlogContentContainer,
  BlogPostContainer,
} from "@/styles/Containers/Container.styles";

const AbbreviatedPost = ({ post }: { post: Post }): JSX.Element => {
  return (
    <BlogPostContainer>
      <BlogTitle>{post.post.title}</BlogTitle>
      <BlogDate>{post.post.formattedDate}</BlogDate>
      <HR />
      <BlogContentContainer>
        {post.post.cover && (
          <BlogImage src={post.post.cover} alt={`${post.post.title} cover`} />
        )}
        <div id="markdown">
          <ReactMarkdown className="linebreak">
            {post.markdownText}
          </ReactMarkdown>
        </div>
      </BlogContentContainer>
    </BlogPostContainer>
  );
};

export default AbbreviatedPost;
