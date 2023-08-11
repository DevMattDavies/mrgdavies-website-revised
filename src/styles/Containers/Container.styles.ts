import styled from "styled-components";
import device from "@/constants/breakpoints";
import * as Types from "@/types/styles";

// General containers
export const MainContainer = styled.div`
  padding-bottom: 38rem;

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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem var(--mobile-padding);
  width: 100%;

  @media screen and ${device.tablet} {
    flex-direction: row;
    width: 80%;
    max-width: var(--max-page-width);
    padding: 4rem 0;
  }
`;

export const ContactContentContainer = styled(ContentContainer)`
  gap: 3rem;

  @media screen and ${device.tablet} {
    gap: 5rem;
  }
`;

export const RowContentContainer = styled(ContentContainer)`
  flex-direction: column;

  @media screen and ${device.tablet} {
    flex-direction: row;
  }
`;

export const RowImageContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

// Homepage containers
export const HomeLowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  gap: 1rem;
  width: 100%;

  @media screen and ${device.desktop} {
    width: 50%;
  }
`;

export const HomeTextContentContainer = styled(TextContentContainer)`
  width: auto;
  height: 100%;
  max-width: 400px;
  display: flex;
`;

export const PostsContainer = styled.div`
  gap: 4rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media screen and ${device.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Blog posts containers
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

  a {
    text-decoration: none;
    color: var(--black);
    font-style: italic;
    position: relative;
    font-size: 1rem;
    font-weight: bold;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: var(--red);
      transform-origin: bottom right;
      transition: transform 0.5s ease-out;
    }

    &:hover {
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
`;

export const SeeAllPostsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  align-items: center;
  padding: 2rem var(--mobile-padding);
  width: 100%;

  @media screen and ${device.tablet} {
    max-width: var(--max-page-width);
    margin-top: 0;
  }
`;

// Writing / Performing containers

export const WritingAndPerformingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media screen and ${device.desktop} {
    width: 60%;
  }
`;

export const WritingAndPerformingSubtitlesContainer = styled(
  WritingAndPerformingContainer
)`
  width: 100%;

  @media screen and ${device.tablet} {
    width: 30%;
    margin-right: 2rem;
  }
`;

// Gallery containers
export const GalleryContainer = styled.div`
  padding: 2rem var(--mobile-padding);
  width: 100%;

  @media screen and ${device.tablet} {
    width: 80%;
    max-width: var(--max-page-width);
    padding: 4rem 0;
  }
`;

// Contact page containers

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const LowerContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
