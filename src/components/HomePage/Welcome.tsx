import { Subtitle, ColorStop, Text } from "@/styles/Text/Text.styles";
import {
  ContainerBackground,
  ContentContainer,
  HomeTextContentContainer,
} from "@/styles/Containers/Container.styles";
import { HomeImage } from "@/styles/Images/Image.styles";

const Welcome = (): JSX.Element => {
  return (
    <ContainerBackground red>
      <ContentContainer>
        <HomeImage src="/assets/MD_1.jpg" alt="mike headshot" />
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
