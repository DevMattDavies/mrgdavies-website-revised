import { useContext } from "react";
import {
  ContainerBackground,
  ContentContainer,
  RowContentContainer,
  WritingAndPerformingContainer,
  WritingAndPerformingSubtitlesContainer,
  TextContentContainer,
} from "@/styles/Containers/Container.styles";
import { ColorStop, Subtitle, Text } from "@/styles/Text/Text.styles";

import { WritingAndPerformingDataContext } from "@/context";
import { WritingAndPerformingData } from "@/types/writingAndPerformingData";

import Subtitles from "@/components/WritingPage-PerformingPage/Subtitles/Subtitles";
import WritingContent from "@/components/WritingPage-PerformingPage/Content/WritingContent";
import { HomeImage } from "@/styles/Images/Image.styles";

export const WritingPage = (): JSX.Element => {
  const { subtitle, updateSubtitle }: WritingAndPerformingData = useContext(
    WritingAndPerformingDataContext
  );

  return (
    <>
      <ContainerBackground red>
        <ContentContainer>
          <HomeImage src="/images/outback_cover.png" alt="bagley novel" />
          <TextContentContainer>
            <Subtitle color={"var(--white)"}>
              Writing<ColorStop color={"var(--black)"}>.</ColorStop>
            </Subtitle>
            <Text color={"var(--white)"}>
              Since he abandoned a promising career as a newspaper editor,
              Michael’s writing has appeared on stage, screen, radio, the
              printed page and online. His debut play <i>Rasputin’s Mother</i>{" "}
              won what is now the Bristol Old Vic playwriting competition and
              subsequent work for the stage includes the comedies <i>Reality</i>{" "}
              (Royal & Derngate, Northampton) and <i>This American Carnage</i>.
              He has also written narrative non-fiction for worldwide television
              (Netflix no.1), had short stories and poetry commissioned and
              published, and contributes regular essays for theatre programmes.
            </Text>
            <Text color={"var(--white)"}>
              Michael wrote the book and lyrics for <i>Tess – The Musical</i>,
              an adaptation of Thomas Hardy’s classic{" "}
              <i>Tess of the d’Urbervilles</i> (The Other Place,
              Stratford-upon-Avon), and completed Desmond Bagley’s thriller{" "}
              <i>Domino Island</i> for posthumous publication. <i>Outback</i>,
              the first novel he can call all his own, is published by
              HarperCollins.
            </Text>
          </TextContentContainer>
        </ContentContainer>
      </ContainerBackground>
      <ContainerBackground>
        <RowContentContainer>
          <WritingAndPerformingSubtitlesContainer>
            <Subtitles
              page={"writing"}
              subtitle={subtitle}
              updateSubtitle={updateSubtitle}
            />
          </WritingAndPerformingSubtitlesContainer>
          <WritingAndPerformingContainer>
            <WritingContent writingSubtitle={subtitle} />
          </WritingAndPerformingContainer>
        </RowContentContainer>
      </ContainerBackground>
    </>
  );
};
