import { useContext } from "react";
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
import Performing from "@/components/WritingPage-PerformingPage/ContentSections/Performing";
import { SectionImage } from "@/components/Images/Images";

import { WritingAndPerformingData } from "@/types/writingAndPerformingData";
import { WritingAndPerformingDataContext } from "@/context";

import moment_upright from "/public/images/moment_upright.jpg";

export const PerformingPage = (): JSX.Element => {
  const { subtitle, updateSubtitle }: WritingAndPerformingData = useContext(
    WritingAndPerformingDataContext
  );

  return (
    <>
      <ContainerBackground red>
        <ContentContainer>
          <SectionImage
            src={moment_upright}
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
            <Subtitles updateSubtitle={updateSubtitle} subtitle={subtitle} />
          </WritingAndPerformingSubtitlesContainer>
          <WritingAndPerformingContainer>
            <Performing performingSubtitle={subtitle} />
          </WritingAndPerformingContainer>
        </RowContentContainer>
      </ContainerBackground>
    </>
  );
};
