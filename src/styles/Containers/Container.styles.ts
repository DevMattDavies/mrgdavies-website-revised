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
  align-items: ${(props) => props.flexDirection === "row" && "center"};
  width: 100%;

  @media screen and ${device.tablet} {
    width: 80%;
    max-width: var(--max-page-width);
    padding: 4rem 0;
    align-items: ${(props) => props.flexDirection === "row" && "center"};
  }
`;

export const PostsContainer = styled.div`
  gap: 4rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media screen and ${device.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  //padding: 1rem;
  //-webkit-box-shadow: -15px 25px 0px -10px var(--white),
  //  20px -20px 0px -20px var(--white), 20px -20px -0px -10px var(--white),
  //  -20px 20px 0px -10px var(--white), 0px 0px 0px 5px var(--red),
  //  25px 25px 15px 5px rgba(0, 0, 0, 0);
  //box-shadow: -15px 25px 0px -10px var(--white),
  //  20px -20px 0px -20px var(--white), 20px -20px -0px -10px var(--white),
  //  -20px 20px 0px -10px var(--white), 0px 0px 0px 5px var(--red),
  //  25px 25px 15px 5px rgba(0, 0, 0, 0);
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
  margin-top: 4rem;
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
