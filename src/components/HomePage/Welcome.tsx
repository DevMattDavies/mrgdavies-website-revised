import { SectionImage } from "@/components/Images/Images";
import { Subtitle, ColorStop, Text } from "@/styles/Text/Text.styles";
import {
  ContainerBackground,
  ContentContainer,
  HomeTextContentContainer,
} from "@/styles/Containers/Container.styles";

import MD_1 from "/public/images/MD_1.jpg";

const Welcome = (): JSX.Element => {
  return (
    <ContainerBackground red>
      <ContentContainer>
        <SectionImage src={MD_1} alt="mike headshot" />
        <HomeTextContentContainer>
          <Subtitle color={"var(--white)"}>
            Welcome<ColorStop color={"var(--black)"}>.</ColorStop>
          </Subtitle>
          <Text color={"var(--white)"}>
            {`Thanks so much for visiting my website – I’m delighted you’ve found me!`}
          </Text>
          <Text
            color={"var(--white)"}
          >{`Please feel free to browse the pages to see what I’m up to. At the moment I’m particularly focused on my novels, which are thrillers in the vein of classic writers such as Desmond Bagley (you’ll find plenty more about him on the site). But I’m also an award-winning playwright, poet, short story writer and journalist, as well as dabbling in presenting and performing.`}</Text>
          <Text
            color={"var(--white)"}
          >{`Do let me know what you think and sign up for my author newsletter at the bottom of this page – I’d love to hear from you.`}</Text>
        </HomeTextContentContainer>
      </ContentContainer>
    </ContainerBackground>
  );
};

export default Welcome;
