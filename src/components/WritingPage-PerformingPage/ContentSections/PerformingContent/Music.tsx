import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";
import { BlogImage } from "@/components/Images/Images";
import inside_job from "/public/images/inside_job.png";

export const Music = (): JSX.Element => {
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
};
