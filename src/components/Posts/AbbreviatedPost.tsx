import { Post } from "@/types/posts";
import ReactMarkdown from "react-markdown";
import { BlogDate, BlogTitle, HR } from "@/styles/Text/Text.styles";
import { BlogImage } from "@/styles/Images/Image.styles";
import {
  BlogContentContainer,
  BlogPostContainer,
  BlogTextContainer,
} from "@/styles/Containers/Container.styles";
import { useContext } from "react";
import { DeviceContext } from "@/pages/_app";

import { format } from "date-fns";

// TODO: Add conditional for image

const AbbreviatedPost = ({ post }: { post: Post }): JSX.Element => {
  const { isMobile }: any = useContext(DeviceContext);
  const date = format(new Date(post.post.date), "MMMM dd, yyyy");
  return (
    <BlogPostContainer>
      <BlogTitle>{post.post.title}</BlogTitle>
      <BlogDate>{date}</BlogDate>
      <HR />
      <BlogContentContainer>
        <BlogTextContainer>
          <ReactMarkdown>{post.markdown}</ReactMarkdown>
        </BlogTextContainer>
        {!isMobile && <BlogImage src={post.post.cover} />}
      </BlogContentContainer>
    </BlogPostContainer>
  );
};

export default AbbreviatedPost;
