import ReactPlayer from "react-player";
import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";
import { BlogImage } from "@/components/Images/Images";
import voiceover from "/public/images/voiceover.png";
import outback_audio from "public/audio/outback_audio.mp4";

export const Voiceover = (): JSX.Element => {
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
        Michael has considerable radio and studio experience and a lovely voice,
        rich and deep and rather chocolatey. You want to hear it now, don&apos;t
        you? It&apos;s RP but not upper-crust and he does some great accents and
        vocalisations, making him ideal for audio books and voiceover work.
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
};
