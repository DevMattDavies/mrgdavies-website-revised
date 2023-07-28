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
  ContainerBackground,
  ContentContainer,
  SeeAllPostsContainer,
} from "@/styles/Containers/Container.styles";
import Link from "next/link";
import { SeeAllPosts } from "@/styles/Text/Text.styles";
import EastIcon from "@mui/icons-material/East";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const SingleBlogPostPage: NextPage = ({ post }: PageProps) => {
  return (
    <ContainerBackground>
      <ContentContainer>
        <FullPost post={post.post} markdownText={post.markdownText} />
      </ContentContainer>
      <div style={{ width: "80%" }}>
        <SeeAllPostsContainer>
          <Link href="/posts" passHref legacyBehavior>
            <SeeAllPosts>All posts</SeeAllPosts>
          </Link>
          <EastIcon style={{ color: "var(--red)" }} />
        </SeeAllPostsContainer>
      </div>
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
