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

import PageHead from "@/components/PageHead/PageHead";
import Subtitles from "@/components/WritingPage-PerformingPage/Subtitles/Subtitles";
import Writing from "@/components/WritingPage-PerformingPage/ContentSections/Writing";
import { SectionImage } from "@/components/Images/Images";

import outback_cover from "/public/images/outback_cover.png";

export const WritingPage = (): JSX.Element => {
  const { subtitle, updateSubtitle }: WritingAndPerformingData = useContext(
    WritingAndPerformingDataContext
  );

  return (
    <>
      <PageHead
        title={"Michael Davies Writing"}
        description={"Read about what writing Michael Davies does"}
      />
      <ContainerBackground red>
        <ContentContainer>
          <SectionImage src={outback_cover} alt="bagley novel" />
          <TextContentContainer>
            <Subtitle color={"var(--white)"}>
              Writing<ColorStop color={"var(--black)"}>.</ColorStop>
            </Subtitle>
            <Text color={"var(--white)"}>
              Michael&apos;s writing has appeared on stage, screen, radio,
              t&apos;Interweb and the printed page.
            </Text>
            <Text color={"var(--white)"}>
              He&apos;s currently writing a new Bill Kemp novel, Thin Ice, as a
              sequel to 2023&apos;s <i>Outback</i>.
            </Text>
            <Text color={"var(--white)"}>
              He wrote the book and lyrics for the musical <i>Tess</i>,
              co-written with composer Michael Blore. An adaptation of Thomas
              Hardy&apos;s much-loved epic <i>Tess of the d&apos;Urbervilles</i>
              , the show received standing ovations at workshop performances in
              The Other Place at the RSC in Stratford-upon-Avon.
            </Text>
            <Text color={"var(--white)"}>
              His debut original stage play, <i>Rasputin&apos;s Mother</i>, won
              the national playwriting competition and was professionally
              produced in Yorkshire and Birmingham.
            </Text>
            <Text color={"var(--white)"}>
              His monologue <i>South Sea Bubble</i> was shortlisted for the
              Lyric Hammersmith/ Warwick Arts Centre Playwriting Competition.
            </Text>
            <Text color={"var(--white)"}>
              His play <i>Reality</i> received a staged reading at the Royal &
              Derngate, Northampton, directed by Gary Sefton and starring Robert
              Daws and Michael Fenton Stevens, while his Shakespeare-themed
              farce <i>MacHamLear</i> toured the UK and Ireland in the summer of
              2023.
            </Text>
            <Text color={"var(--white)"}>
              After a successful career editing newspapers, Michael graduated
              with an MA in TV Scriptwriting from De Montfort University and has
              a wide portfolio of television scripts. He has also written radio
              plays, one of which has Sir Derek Jacobi attached and is currently
              being taken through the BBC’s commissioning process by a Radio 4
              staff producer. Other work includes feature films, corporate and
              online scripts and short stories.
            </Text>
            <Text color={"var(--white)"}>
              Michael has been a professional theatre critic for 30 years. His
              work has appeared in national newspapers and he has been a regular
              reviewer for <i>The Stage</i>, as well as serving as resident
              critic for a host of regional titles. His reviews can be read at
              whatsonstage.com as well as on his own website,
              www.stagereviews.co.uk
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
            <Writing writingSubtitle={subtitle} />
          </WritingAndPerformingContainer>
        </RowContentContainer>
      </ContainerBackground>
    </>
  );
};
