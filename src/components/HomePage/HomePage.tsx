import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import getAllPosts from "@/utils/getAllPosts";
import getAbbreviatedPosts from "@/utils/getAbbreviatedPosts";
import { useContext } from "react";
import { DeviceContext } from "@/pages/_app";
import {
  PostsContainer,
  ContainerBackground,
  ContentContainer,
} from "@/styles/Containers/Container.styles";
import { Post } from "@/types/posts";

import MobileWelcome from "@/components/HomePage/Mobile/MobileWelcome";
import DesktopWelcome from "@/components/HomePage/Desktop/DesktopWelcome";
import AbbreviatedPost from "@/components/Posts/AbbreviatedPost";
import { Subtitle } from "@/styles/Text/Text.styles";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

// TODO: Mobile page layout leaves large gap between welcome text and posts due to negative top adjustment - to be resolved

export const HomePage: NextPage = ({ abbreviatedPosts }: PageProps) => {
  const { isMobile }: any = useContext(DeviceContext);
  return (
    <>
      {isMobile ? <MobileWelcome /> : <DesktopWelcome />}
      <ContainerBackground>
        <ContentContainer flexDirection={"column"}>
          <Subtitle color={"var(--red)"}>Breaking News.</Subtitle>
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
  const slugs = allPosts.slice(0, 2).map((post) => {
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
