import {
  ContainerBackground,
  ContentContainer,
} from "@/styles/Containers/Container.styles";
import { Subtitle, ColorStop } from "@/styles/Text/Text.styles";

export const EventsPage = (): JSX.Element => {
  return (
    <>
      <ContainerBackground red>
        <ContentContainer>
          <Subtitle color={"var(--white)"}>
            Events<ColorStop color={"var(--black)"}>.</ColorStop>
          </Subtitle>
        </ContentContainer>
      </ContainerBackground>
      <ContainerBackground>
        <ContentContainer>
          <h2>Coming soon...</h2>
        </ContentContainer>
      </ContainerBackground>
    </>
  );
};
