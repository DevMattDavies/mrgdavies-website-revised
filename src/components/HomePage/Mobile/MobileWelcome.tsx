import { Subtitle, ColorStop, Text } from "@/styles/Text/Text.styles";
import { ContentContainer } from "@/styles/Containers/Container.styles";
import { HomeImage, ImageGradient } from "@/styles/Images/Image.styles";

const MobileWelcome = (): JSX.Element => {
  return (
    <>
      <ImageGradient>
        <HomeImage src="assets/MD_1.jpg" />
      </ImageGradient>
      <ContentContainer flexDirection={"column"}>
        <Subtitle color={"var(--red)"}>
          Welcome<ColorStop color={"var(--black)"}>.</ColorStop>
        </Subtitle>
        <Text>
          {`If you're looking for trouble, you've come to the wrong
            place.`}
        </Text>
        <Text>{`If you're looking for trouble, I believe it has its own
              website, which I'm not prepared to advertise here as I
              don't wish to be seen to be condoning poor behaviour.`}</Text>
        <Text>{`Instead, this is t'Interweb home of Michael Davies.
              You can pretty much see what I do.`}</Text>
      </ContentContainer>
    </>
  );
};

export default MobileWelcome;
