import {
  ContainerBackground,
  ContentContainer,
  PostsContainer,
} from "@/styles/Containers/Container.styles";
import { Subtitle, ColorStop } from "@/styles/Text/Text.styles";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import getAllEvents from "@/utils/getAllEvents";
import getAbbreviatedEvents from "@/utils/getAbbreviatedEvents";
import { Post } from "@/types/posts";
import AbbreviatedPost from "@/components/Posts/AbbreviatedPost";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const EventsPage: NextPage = ({
  abbreviatedEvents,
}: PageProps): JSX.Element => {
  return (
    <>
      <ContainerBackground red>
        <ContentContainer>
          <Subtitle color={"var(--white)"}>
            Events<ColorStop color={"var(--black)"}>.</ColorStop>
          </Subtitle>
        </ContentContainer>
      </ContainerBackground>
      <ContainerBackground>
        <ContentContainer>
          <PostsContainer>
            {abbreviatedEvents.map((event: Post) => {
              return <AbbreviatedPost key={event.post.id} post={event} />;
            })}
          </PostsContainer>
        </ContentContainer>
      </ContainerBackground>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allEvents = await getAllEvents();
  const slugs = allEvents.map((event) => {
    return event.slug;
  });
  const abbreviatedEvents = await getAbbreviatedEvents(slugs);

  return {
    props: {
      abbreviatedEvents,
    },
    revalidate: 60,
  };
};
