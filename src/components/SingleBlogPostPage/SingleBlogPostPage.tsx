import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import getSinglePost from "@/utils/getSinglePost";
import getAllPosts from "@/utils/getAllPosts";

import FullPost from "@/components/Posts/FullPost";
import {
  BlogPostContainer,
  ContainerBackground,
  ContentContainer,
} from "@/styles/Containers/Container.styles";
import { format } from "date-fns";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const SingleBlogPostPage: NextPage = ({ post }: PageProps) => {
  return (
    <ContainerBackground>
      <ContentContainer flexDirection={"column"}>
        <FullPost post={post.post} markdown={post.markdown} />
      </ContentContainer>
    </ContainerBackground>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  let post;
  if (params) {
    const slug = params.postId;
    post = await getSinglePost(slug as string);
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const slugs = allPosts.map((post) => {
    return { params: { postId: post.slug } };
  });
  const paths = [...slugs];

  return {
    paths: paths,
    fallback: false,
  };
};