import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import getAllPosts from "@/utils/getAllPosts";
import getAbbreviatedPosts from "@/utils/getAbbreviatedPosts";
import {
  PostsContainer,
  ContainerBackground,
  ContentContainer,
  SeeAllPostsContainer,
  HomeLowerContainer,
} from "@/styles/Containers/Container.styles";
import { Post } from "@/types/posts";

import Welcome from "@/components/HomePage/Welcome";
import AbbreviatedPost from "@/components/Posts/AbbreviatedPost";
import { ColorStop, SeeAllPosts, Subtitle } from "@/styles/Text/Text.styles";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const HomePage: NextPage = ({ abbreviatedPosts }: PageProps) => {
  return (
    <>
      <Welcome />
      <ContainerBackground>
        <ContentContainer>
          <HomeLowerContainer>
            <Subtitle color={"var(--red)"}>
              Breaking News<ColorStop color={"var(--black)"}>.</ColorStop>
            </Subtitle>
            <PostsContainer>
              {abbreviatedPosts.map((post: Post) => {
                return <AbbreviatedPost key={post.post.id} post={post} />;
              })}
            </PostsContainer>
            <SeeAllPostsContainer>
              <Link href="/posts" passHref legacyBehavior>
                <SeeAllPosts>All posts</SeeAllPosts>
              </Link>
              <EastIcon style={{ color: "var(--red)" }} />
            </SeeAllPostsContainer>
          </HomeLowerContainer>
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
