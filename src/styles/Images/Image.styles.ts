import styled from "styled-components";
import device from "@/constants/breakpoints";
export const HomeImage = styled.img`
  width: 12rem;
  height: auto;
  margin: 0 auto;
  display: block;

  @media screen and ${device.tablet} {
    margin: 0;
    border: 2px solid white;
    object-fit: cover;
    width: 12rem;
    height: 100%;
  }

  @media screen and ${device.desktop} {
    border: 2px solid white;
    object-fit: cover;
    width: 15rem;
    height: 100%;
  }
`;

export const BlogImage = styled.img`
  width: auto;
  height: 10rem;
  object-fit: contain;
  display: block;
`;
