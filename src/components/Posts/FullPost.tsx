import { Post } from "@/types/posts";
import { Subtitle, BlogDate, HR } from "@/styles/Text/Text.styles";
import ReactMarkdown from "react-markdown";
import { BlogImage } from "@/styles/Images/Image.styles";
import {
  BlogPostContainer,
  BlogContentContainer,
} from "@/styles/Containers/Container.styles";
import { format } from "date-fns";

const FullPost = ({ post, markdown }: Post): JSX.Element => {
  const date = format(new Date(post.date), "MMMM dd, yyyy");
  return (
    <BlogPostContainer>
      <Subtitle>{post.title}</Subtitle>
      <BlogDate>{date}</BlogDate>
      <HR />
      <BlogContentContainer>
        <BlogImage src={post.cover} />
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </BlogContentContainer>
    </BlogPostContainer>
  );
};

export default FullPost;
