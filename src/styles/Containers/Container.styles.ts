import styled from "styled-components";
import device from "@/constants/breakpoints";
import * as Types from "@/types/styles";

export const MainContainer = styled.div`
  padding-bottom: 375px;

  @media screen and ${device.tablet} {
    padding-bottom: 450px;
  }

  @media screen and ${device.desktop} {
    padding-bottom: 300px;
  }
`;

export const ContainerBackground = styled.div<Types.ContainerBackgroundProps>`
  background-color: ${(props) => (props.red ? "var(--red)" : "var(--white)")};
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div<Types.ContentContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: 1rem;
  padding: var(--mobile-padding);

  @media screen and ${device.tablet} {
    width: 80%;
    max-width: var(--max-page-width);
    padding: 4rem 0;
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;

  @media screen and ${device.desktop} {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
`;

export const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
`;

export const BlogTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const BlogContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  gap: 1rem;
`;

export const HomeTextContentContainer = styled(TextContentContainer)`
  width: auto;
  height: 100%;
  max-width: 400px;
  margin-left: 1rem;
`;

export const MobileWelcomeContainer = styled(ContentContainer)`
  padding-top: 4rem;
  position: relative;
  top: -75px;
  background: -webkit-linear-gradient(
    rgba(255, 255, 255, 0.1) 1%,
    rgba(255, 255, 255, 0.3) 3%,
    rgba(255, 255, 255, 0.4) 5%,
    rgba(255, 255, 255, 0.6) 10%,
    rgba(255, 255, 255, 0.7) 15%,
    rgba(255, 255, 255, 0.8) 20%,
    rgba(255, 255, 255, 0.9) 25%,
    rgba(255, 255, 255, 1) 30%
  );
  z-index: 10;
`;
