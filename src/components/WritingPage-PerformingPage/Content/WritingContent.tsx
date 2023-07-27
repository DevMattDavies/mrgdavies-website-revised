import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { BlogImage } from "@/styles/Images/Image.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";

type TWritingContent = {
  writingSubtitle: string;
};

export const WritingContent = ({
  writingSubtitle,
}: TWritingContent): JSX.Element => {
  if (writingSubtitle === "Fiction.") {
    return (
      <>
        <Subtitle>
          Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <RowImageContainer>
          <BlogImage src="/images/outback_cover.png" alt="outback book cover" />
          <BlogImage
            src="/images/domino_island_cover.jpg"
            alt="domino island book cover"
          />
          <BlogImage
            src="/images/lancashire_stories_cover.jpeg"
            alt="lancashire stories book cover"
          />
          <BlogImage
            src="/images/vicious_circle_cover.jpg"
            alt="vicious circle book cover"
          />
        </RowImageContainer>
        <Text color={"var(--black)"}>
          <i>Outback</i>, Michael’s debut novel published in May 2023 by
          HarperCollins, is the culmination of years of fiction-writing. It
          features the protagonist Bill Kemp – described by Jeffrey Deaver as
          ‘part James Bond, part Philip Marlowe, and all hero’ – who first
          appeared in the Desmond Bagley thriller <i>Domino Island</i> , which
          Michael was commissioned to complete for posthumous publication in
          2019.
          <i>Outback</i> is a kind of sequel and honours the legacy of the
          ‘master of the genre’ Bagley in the centenary year of his birth.
        </Text>
        <Text>
          Elsewhere, Michael contributed to <i>Vicious Circle</i>, a
          collaboration between a dozen writers to create a novel in just one
          weekend. His short stories have won awards and the latest,{" "}
          <i>Last Tram to Fleetwood</i>, is published in an anthology entitled{" "}
          <i>Lancashire Stories</i>.
        </Text>
      </>
    );
  } else if (writingSubtitle === "Scriptwriting.") {
    return (
      <>
        <Subtitle>
          Scriptwriting<ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <RowImageContainer>
          <BlogImage
            src="/images/meet_marry_murder.png"
            alt="meet marry murder image"
          />
        </RowImageContainer>
        <Text color={"var(--black)"}>
          Michael has written more than 20 hours of narrative non-fiction for
          television shows that have been sold worldwide. One of these –{" "}
          <i>Meet, Marry, Murder</i> – was named number one in the Netflix
          charts.
        </Text>
        <Text>
          He holds an MA in TV Scriptwriting from De Montfort University and has
          a wide portfolio of scripts. He has also written radio plays, one of
          which has Sir Derek Jacobi attached and is being taken through the
          BBC’s commissioning process by a Radio 4 staff producer. Other work
          includes feature films, shorts, corporate and online scripts.
        </Text>
      </>
    );
  } else if (writingSubtitle === "Stage.") {
    return (
      <>
        <Subtitle>
          Stage<ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <RowImageContainer>
          <BlogImage
            src="/images/rasputins_mother.jpg"
            alt="Rasputin's mother"
          />
          <BlogImage src="/images/reality.jpg" alt="Reality" />
          <BlogImage src="/images/tess.png" alt="Tess" />
          <BlogImage src="/images/machamlear.png" alt="MacHamLear" />
        </RowImageContainer>
        <Text color={"var(--black)"}>
          Michael’s first full-length stage play <i>Rasputin&apos;s Mother</i>{" "}
          was named the overall winner of what is now the Bristol Old Vic
          Playwriting Competition and was professionally produced in Yorkshire
          and Birmingham.
        </Text>
        <Text>
          The follow-up, <i>Reality</i>, received a staged reading at the Royal
          & Derngate, Northampton, directed by Gary Sefton and starring Robert
          Daws and Michael Fenton Stevens. Subsequent stage work includes{" "}
          <i>This American Carnage</i> and a new comedy, <i>MacHamLear</i>,
          which tours the UK and Ireland in 2023. His monologue{" "}
          <i>South Sea Bubble</i> was shortlisted in the Lyric
          Hammersmith/Warwick Arts Centre Playwriting Competition and he has
          also adapted Dickens’s <i>The Pickwick Papers</i> for the stage.
        </Text>
        <Text>
          Michael served as bookwriter and lyricist on <i>Tess</i>, a
          sung-through musical adaptation of <i>Tess of the D’Urbervilles</i>,
          workshopped at the RSC’s The Other Place in Stratford-upon-Avon.
        </Text>
      </>
    );
  } else if (writingSubtitle === "Non-Fiction.") {
    return (
      <>
        <Subtitle>
          Non-Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <RowImageContainer>
          <BlogImage src="/images/whatsonstage.png" alt="Whatsonstage logo" />
        </RowImageContainer>
        <Text color={"var(--black)"}>
          Michael has been a professional theatre critic for 30 years. His work
          has appeared in national newspapers and he has been a regular reviewer
          for <i>The Stage</i>, as well as serving as resident critic for a host
          of regional newspaper titles. His reviews can be read at{" "}
          <a href="www.stagereviews.co.uk">www.stagereviews.co.uk</a> and{" "}
          <a href="www.whatsonstage.com">whatsonstage.com</a>.
        </Text>
        <Text>
          He is also a regular contributor of articles, interviews and
          biographies for theatre and concert programmes. His pieces have
          featured in productions for the Royal Shakespeare Company, West End
          shows and regional venues all over the country.
        </Text>
      </>
    );
  } else if (writingSubtitle === "Journalism.") {
    return (
      <>
        <Subtitle>
          Journalism<ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <Text color={"var(--black)"}>
          Michael is an experienced journalist with more than 25 years at the
          highest levels in newspapers, including editorships and senior
          executive posts at several publishing groups. He has edited regional
          evening newspapers, served as Group Editor for a series of Sunday
          titles, and written regular columns and theatre reviews.
        </Text>
        <Text>
          He is recognised as one of the foremost newspaper designers in the UK
          and has redesigned every publication he has worked for. His skills
          have even been exploited to create mock-up newspapers for television
          productions.
        </Text>
        <Text>
          In a varied journalism career, Michael has been responsible for
          editorial departments of up to 100 staff, as well as project managing
          the multi-million-pound installation of entire new systems on time and
          on budget.
        </Text>
      </>
    );
  } else {
    return <></>;
  }
};

export default WritingContent;
