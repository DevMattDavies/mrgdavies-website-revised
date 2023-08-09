import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";
import { BlogImage } from "@/components/Images/Images";
import collabro from "/public/images/collabro.png";
import lee_mead from "/public/images/lee_mead.png";

export const Presenting = (): JSX.Element => {
  return (
    <>
      <Subtitle>
        Presenting<ColorStop color={"var(--red)"}>.</ColorStop>
      </Subtitle>
      <HR />
      <RowImageContainer>
        <BlogImage src={collabro} alt="Mike on guest panel at Collabro event" />
        <BlogImage src={lee_mead} alt="Mike speaking with Lee Mead" />
      </RowImageContainer>
      <Text color={"var(--black)"}>
        Michael is a highly experienced presenter and panellist and can host
        both live and on-camera events.
      </Text>
      <Text>
        Interviewees have included Ralph Fiennes, Robert Powell, Craig Revel
        Horwood and many more. Michael was commissioned by the RSC to conduct a
        series of archive interviews with former artistic directors and stars,
        including Adrian Noble, Sir Michael Boyd and Sir Antony Sher, while live
        conversations have included Collabro, Lee Mead and pre- and post-show
        talks for the RSC, Royal & Derngate and Floating Festivals.
      </Text>
    </>
  );
};
