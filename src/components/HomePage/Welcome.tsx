import { SectionImage } from "@/components/Images/Images";
import { Subtitle, ColorStop, Text } from "@/styles/Text/Text.styles";
import {
  ContainerBackground,
  ContentContainer,
  HomeTextContentContainer,
} from "@/styles/Containers/Container.styles";

import MD_2 from "/public/images/MD_2.jpg";

const Welcome = (): JSX.Element => {
  return (
    <ContainerBackground red>
      <ContentContainer>
        <SectionImage src={MD_2} alt="mike headshot" />
        <HomeTextContentContainer>
          <Subtitle color={"var(--white)"}>
            Welcome<ColorStop color={"var(--black)"}>.</ColorStop>
          </Subtitle>
          <Text color={"var(--white)"}>
            {`Thanks so much for visiting my website – I’m delighted you’ve found me!`}
          </Text>
          <Text
            color={"var(--white)"}
          >{`Please feel free to browse the site to see what I’m up to. At the moment I’m particularly focused on novels, including my new cosy crime series and my thrillers in the vein of classic writers. But I’m also an award-winning playwright, poet, short story writer and journalist, as well as dabbling in presenting and performing.`}</Text>
          <Text
            color={"var(--white)"}
          >{`I’d love you to sign up for my newsletter – just fill in your details below and click the button...`}</Text>
        </HomeTextContentContainer>
      </ContentContainer>
    </ContainerBackground>
  );
};


export default Welcome;
