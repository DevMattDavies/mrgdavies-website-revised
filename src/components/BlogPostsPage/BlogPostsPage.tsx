import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import getAllPosts from "@/utils/getAllPosts";
import { Post } from "@/types/posts";
import AbbreviatedPost from "@/components/Posts/AbbreviatedPost";
import getAbbreviatedPosts from "@/utils/getAbbreviatedPosts";
import {
  ContainerBackground,
  ContentContainer,
  PostsContainer,
} from "@/styles/Containers/Container.styles";
import { ColorStop, Subtitle } from "@/styles/Text/Text.styles";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
export const BlogPostsPage: NextPage = ({ abbreviatedPosts }: PageProps) => {
  return (
    <>
      <ContainerBackground red>
        <ContentContainer flexDirection={"column"}>
          <Subtitle color={"var(--white)"}>
            Posts<ColorStop color={"var(--black)"}>.</ColorStop>
          </Subtitle>
        </ContentContainer>
      </ContainerBackground>
      <ContainerBackground>
        <ContentContainer flexDirection={"column"}>
          <PostsContainer>
            {abbreviatedPosts.map((post: Post) => {
              return <AbbreviatedPost key={post.post.id} post={post} />;
            })}
          </PostsContainer>
        </ContentContainer>
      </ContainerBackground>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();
  const slugs = allPosts.map((post) => {
    return post.slug;
  });
  const abbreviatedPosts = await getAbbreviatedPosts(slugs);

  return {
    props: {
      abbreviatedPosts,
    },
    revalidate: 60,
  };
};
