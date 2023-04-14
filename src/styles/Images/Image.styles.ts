import styled from "styled-components";
import device from "@/constants/breakpoints";
export const HomeImage = styled.img`
  width: 100vw;
  height: auto;
  display: block;
  position: relative;
  
  @media screen and ${device.tablet} {
    width: auto;
    height: 300px;
    border: 2px solid white;
`;

export const BlogImage = styled.img`
  width: auto;
  height: 200px;
  display: block;
`;
