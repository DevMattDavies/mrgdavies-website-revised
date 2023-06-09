import { useState } from "react";
import {
  ContainerBackground,
  ContentContainer,
  RowContentContainer,
  TextContentContainer,
  WritingAndPerformingContainer,
  WritingAndPerformingSubtitlesContainer,
} from "@/styles/Containers/Container.styles";
import { ColorStop, Subtitle, Text } from "@/styles/Text/Text.styles";

import Subtitles from "@/components/WritingPage-PerformingPage/Subtitles/Subtitles";
import PerformingContent from "@/components/WritingPage-PerformingPage/Content/PerformingContent";
import { HomeImage } from "@/styles/Images/Image.styles";

export const PerformingPage = (): JSX.Element => {
  const [performingSubtitle, setPerformingSubtitle] = useState("");

  const updatePerformingData = (e: any) => {
    const clickedSubtitle = e.target.textContent;
    setPerformingSubtitle(clickedSubtitle);
  };

  return (
    <>
      <ContainerBackground red>
        <ContentContainer>
          <HomeImage
            src="/images/man_of_the_moment_upright.jpg"
            alt="man of the moment stage picture"
          />
          <TextContentContainer>
            <Subtitle color={"var(--white)"}>
              Performing<ColorStop color={"var(--black)"}>.</ColorStop>
            </Subtitle>
            <Text color={"var(--white)"}>
              As a performer, Michael is an accomplished and sought-after actor
              and presenter. He made his professional acting debut in Sir Alan
              Ayckbourn’s <i>Man of the Moment</i>, directed by the playwright
              himself, and has performed a one-man show at Leicester’s Curve.
            </Text>
            <Text color={"var(--white)"}>
              Corporate and film work includes training films, ‘virtual’
              presenting and voiceovers, while his background in journalism also
              means he is in high demand as a ‘live’ interviewer and panellist.
              Check out the tabs below for more details.
            </Text>
          </TextContentContainer>
        </ContentContainer>
      </ContainerBackground>
      <ContainerBackground>
        <RowContentContainer>
          <WritingAndPerformingSubtitlesContainer>
            <Subtitles updatePerformingData={updatePerformingData} />
          </WritingAndPerformingSubtitlesContainer>
          <WritingAndPerformingContainer>
            <PerformingContent performingSubtitle={performingSubtitle} />
          </WritingAndPerformingContainer>
        </RowContentContainer>
      </ContainerBackground>
    </>
  );
};
