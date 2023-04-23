import styled from "styled-components";
import device from "@/constants/breakpoints";
export const HomeImage = styled.img`
  width: 100vw;
  height: auto;
  display: block;
  position: relative;
  
  @media screen and ${device.tablet} {
    border: 2px solid white;
    object-fit: cover;
    width: 100%;
    height: 100%;

    @media screen and ${device.desktop} {
      //width: 18rem;
      //height: auto;
      //border: 2px solid white;
      border: 2px solid white;
      object-fit: cover;
      width: 15rem;
      height: 100%;
`;

export const BlogImage = styled.img`
  width: auto;
  height: 10rem;
  object-fit: contain;
  display: block;
`;
