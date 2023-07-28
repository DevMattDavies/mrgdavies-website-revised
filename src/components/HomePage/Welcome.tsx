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
            {`If you're looking for trouble, you've come to the wrong
            place.`}
          </Text>
          <Text
            color={"var(--white)"}
          >{`If you're looking for trouble, I believe it has its own
              website, which I'm not prepared to advertise here as I
              don't wish to be seen to be condoning poor behaviour.`}</Text>
          <Text
            color={"var(--white)"}
          >{`Instead, this is t'Interweb home of Michael Davies.
              You can pretty much see what I do.`}</Text>
        </HomeTextContentContainer>
      </ContentContainer>
    </ContainerBackground>
  );
};

export default Welcome;
