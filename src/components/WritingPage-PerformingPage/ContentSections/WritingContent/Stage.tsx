import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";
import { BlogImage } from "@/components/Images/Images";
import rasputins_mother from "/public/images/rasputins_mother.jpg";
import reality from "/public/images/reality.jpg";
import tess from "/public/images/tess.png";
import machamlear from "/public/images/machamlear.png";
import YouTubeEmbed from "@/components/WritingPage-PerformingPage/ContentSections/YouTubeEmbed";

export const Stage = (): JSX.Element => {
  return (
    <>
      <Subtitle>
        Stage<ColorStop color={"var(--red)"}>.</ColorStop>
      </Subtitle>
      <HR />
      <RowImageContainer>
        <BlogImage src={rasputins_mother} alt="Rasputin's mother" />
        <BlogImage src={reality} alt="Reality" />
        <BlogImage src={tess} alt="Tess" />
        <BlogImage src={machamlear} alt="MacHamLear" />
      </RowImageContainer>
      <Text color={"var(--black)"}>
        <i>MacHamLear</i>, Michael&apos;s farcical exploitation of three of
        Shakespeare&apos;s finest tragedies, tours the UK and Ireland in the
        summer of 2023.
      </Text>
      <Text>
        Heartbreak Productions, specialists in outdoor theatre, take the show on
        a 50-date jaunt around these isles from June to September. For more
        details and to book tickets, visit their website{" "}
        <a
          target="_blank"
          href="https://www.heartbreakproductions.co.uk/show/machamlear/"
        >
          here
        </a>
        , and you can see a trailer for the show below.
      </Text>
      <Text>
        Besides commissioned work, such as an adaptation of Dickens&apos;s{" "}
        <i>The Pickwick Papers</i> for Catch Theatre Company, Michael&apos;s
        original stage work includes full-length and one-act plays.
      </Text>
      <Text>
        His two-act &apos;fantasy history&apos; <i>Rasputin&apos;s Mother</i>{" "}
        won the national Ronald Duncan Playwriting Competition, he was
        shortlisted in the 2014 Lyric Hammersmith/Warwick Arts Centre
        Playwriting Competition for his monologue <i>South Sea Bubble</i>, and
        his follow-up play, Reality, received a staged reading at the Royal &
        Derngate in Northampton, directed by{" "}
        <a target="_blank" href="https://www.garysefton.co.uk/">
          Gary Sefton
        </a>
        .
      </Text>
      <Text>
        Michael has also written a host of comic material from pantomime scripts
        to revues.
      </Text>
      <Text>
        Michael served as bookwriter and lyricist on <i>Tess</i>, a sung-through
        musical adaptation of <i>Tess of the D’Urbervilles</i>, workshopped at
        the RSC’s The Other Place in Stratford-upon-Avon. For more information
        about the show please visit{" "}
        <i>
          <a target="_blank" href="http://www.tessthemusical.com/">
            Tess The Musical
          </a>
        </i>
        .
      </Text>
      <YouTubeEmbed />
    </>
  );
};
