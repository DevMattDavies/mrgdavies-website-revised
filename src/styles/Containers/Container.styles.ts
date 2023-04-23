import styled from "styled-components";
import device from "@/constants/breakpoints";
import * as Types from "@/types/styles";

export const MainContainer = styled.div`
  padding-bottom: 30rem;

  @media screen and ${device.tablet} {
    padding-bottom: 20rem;
  }

  @media screen and ${device.desktop} {
    padding-bottom: 15rem;
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
  padding: 2rem var(--mobile-padding);

  @media screen and ${device.tablet} {
    width: 80%;
    max-width: var(--max-page-width);
    padding: 4rem 0;
    // align-items: ${(props) => props.flexDirection === "row" && "center"};
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4rem;

  @media screen and ${device.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const BlogContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const SeeAllPostsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  align-items: center;
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
  display: flex;
`;
