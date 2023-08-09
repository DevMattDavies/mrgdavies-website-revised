import ReactPlayer from "react-player";
import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";
import { BlogImage } from "@/components/Images/Images";

import inside_job from "/public/images/inside_job.png";
import professor_curvature from "/public/images/professor_curvature.jpg";
import man_wide from "/public/images/man_of_the_moment_wide.jpg";
import man_diving from "/public/images/man_of_the_moment_diving.jpg";
import voiceover from "/public/images/voiceover.png";
import collabro from "/public/images/collabro.png";
import lee_mead from "/public/images/lee_mead.png";
import public_speaking from "/public/images/public_speaking.png";

import outback_audio from "public/audio/outback_audio.mp4";

type TPerformingContent = {
  performingSubtitle: string;
};

const PerformingContent = ({
  performingSubtitle,
}: TPerformingContent): JSX.Element => {
  if (performingSubtitle === "Acting.") {
    return (
      <>
        <Subtitle>
          Acting<ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <RowImageContainer>
          <BlogImage src={professor_curvature} alt="Curvature acting" />
          <BlogImage src={man_wide} alt="Man of the moment acting" />
          <BlogImage src={man_diving} alt="Man of the moment diving" />
        </RowImageContainer>
        <Text color={"var(--black)"}>
          Under his stage name Michael Crask-Davies, Michael’s professional
          debut came in Sir Alan Ayckbourn’s <i>Man of the Moment</i> (Roal &
          Derngate, Northampton), directed by the playwright himself. Michael
          also performed the world premiere of <i>CurvAture</i>, a one-man play
          by William Morris, at Leicester’s Curve Theatre.
        </Text>
        <Text>
          Other roles include the leading man in musicals such as{" "}
          <i>Kiss Me Kate</i>
          and <i>Smike</i>, and plays including the two-hander <i>Sleuth</i>. In
          addition, his musical expertise has led him to act as musical director
          on a number of shows, including Carousel and Sondheim’s{" "}
          <i>A Funny Thing Happened On The Way To The Forum</i>, as well as for
          his own work, such as the originally-scored pantomime{" "}
          <i>Robin Hood</i> and a musical for schools,
          <i>Luigi Da Squigi (and the Wise Guys)</i>.
        </Text>
      </>
    );
  } else if (performingSubtitle === "Voiceover.") {
    return (
      <>
        <Subtitle>
          Voiceover<ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <RowImageContainer>
          <BlogImage src={voiceover} alt="Mike in recording studio" />
        </RowImageContainer>
        <Text color={"var(--black)"}>
          Michael has considerable radio and studio experience and a lovely
          voice, rich and deep and rather chocolatey. You want to hear it now,
          don&apos;t you? It&apos;s RP but not upper-crust and he does some
          great accents and vocalisations, making him ideal for audio books and
          voiceover work.
        </Text>
        <Text>
          Besides a regular slot on a BBC local radio station, Michael has
          broadcast on national networks including Radio 4, Radio Five Live and
          Times Radio.
        </Text>
        <ReactPlayer
          url={outback_audio}
          controls
          height={200}
          width={"80%"}
          style={{ marginTop: "2rem" }}
        />
      </>
    );
  } else if (performingSubtitle === "Presenting.") {
    return (
      <>
        <Subtitle>
          Presenting<ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <RowImageContainer>
          <BlogImage
            src={collabro}
            alt="Mike on guest panel at Collabro event"
          />
          <BlogImage src={lee_mead} alt="Mike speaking with Lee Mead" />
        </RowImageContainer>
        <Text color={"var(--black)"}>
          Michael is a highly experienced presenter and panellist and can host
          both live and on-camera events.
        </Text>
        <Text>
          Interviewees have included Ralph Fiennes, Robert Powell, Craig Revel
          Horwood and many more. Michael was commissioned by the RSC to conduct
          a series of archive interviews with former artistic directors and
          stars, including Adrian Noble, Sir Michael Boyd and Sir Antony Sher,
          while live conversations have included Collabro, Lee Mead and pre- and
          post-show talks for the RSC, Royal & Derngate and Floating Festivals.
        </Text>
      </>
    );
  } else if (performingSubtitle === "Roleplaying.") {
    return (
      <>
        <Subtitle>
          Roleplaying<ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <Text color={"var(--black)"}>
          Nowhere near as dodgy as it sounds, the kind of roleplay in which
          Michael indulges is strictly professional, usually involving
          assessment and development, leadership and management or communication
          skills training. He is also a highly skilled facilitator.
        </Text>
        <Text>
          He holds a full DBS certificate and is specially qualified to deliver
          end-of-life and cancer care skills training. His extensive experience
          across the public and private sectors includes: Home Office, Foreign
          Office, NHS, BBC, Arts Council England, banks and financial
          institutions, police forces, fire and local authorities and retail
          companies.
        </Text>
      </>
    );
  } else if (performingSubtitle === "Public Speaking & Lecturing.") {
    return (
      <>
        <Subtitle>
          Public Speaking & Lecturing
          <ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <RowImageContainer>
          <BlogImage src={public_speaking} alt="Mike speaking to the public" />
        </RowImageContainer>
        <Text color={"var(--black)"}>
          A national award-winning public speaker, Michael is highly experienced
          in formal and informal situations, from after-dinner engagements to
          university lecturing.
        </Text>
        <Text>
          Michael has addressed meetings and conferences from the WI to
          corporate boards and his natural, entertaining style is highly
          adaptable to any audience. He’s given talks on everything from the
          state of the newspaper industry to the brilliance of{" "}
          <i>The West Wing</i>.
        </Text>
        <Text>
          In more formal settings, Michael has delivered lectures, facilitation
          and training for many universities, including Birmingham, Warwick,
          Leicester, Wolverhampton and Northampton. He has led lectures and
          workshops in creative writing and journalism for university
          undergraduates, sessions on media production for secondary pupils and
          ‘how to write a news report’ groups for primary schoolchildren.
        </Text>
        <Text>
          He has trained hundreds of journalists in new technology and is also
          an experienced trainer in project management.
        </Text>
      </>
    );
  } else if (performingSubtitle === "Music.") {
    return (
      <>
        <Subtitle>
          Music<ColorStop color={"var(--red)"}>.</ColorStop>
        </Subtitle>
        <HR />
        <RowImageContainer>
          <BlogImage src={inside_job} alt="mike headshot" />
        </RowImageContainer>
        <Text color={"var(--black)"}>
          A multi-instrumentalist and vocalist with extensive live and studio
          experience, Michael plays saxophone, guitar and keyboards to
          professional standard and has performed with numerous bands and groups
          over the years. He has worked as a duo with his wife Tricia and as a
          solo artist under the stage name Michael Anderson.
        </Text>
        <Text>
          As a composer and songwriter, Michael has written and recorded for 19
          Management, among others, while his work in the non-pop arena ranges
          from a 10-minute video opera, <i>A Hand Raised in Paradise</i>, to
          school musicals and theatrical scores.
        </Text>
      </>
    );
  } else {
    return <></>;
  }
};

export default PerformingContent;
