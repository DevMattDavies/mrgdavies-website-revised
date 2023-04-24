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
  }

  @media screen and ${device.desktop} {
    border: 2px solid white;
    object-fit: cover;
    width: 15rem;
    height: 100%;
  }
`;

export const ImageGradient = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.1) 90%,
      rgba(255, 255, 255, 0.3) 91%,
      rgba(255, 255, 255, 0.4) 92%,
      rgba(255, 255, 255, 0.6) 93%,
      rgba(255, 255, 255, 0.7) 94%,
      rgba(255, 255, 255, 0.8) 95%,
      rgba(255, 255, 255, 0.9) 98%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export const BlogImage = styled.img`
  width: auto;
  height: 10rem;
  object-fit: contain;
  display: block;
`;
