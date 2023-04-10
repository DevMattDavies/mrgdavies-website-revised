import styled from "styled-components";
import device from "@/constants/breakpoints";
import Footer from "@/components/Footer/Footer";

export const MainContainer = styled.div`
  padding-bottom: 375px;

  @media screen and ${device.tablet} {
    padding-bottom: 450px;
  }

  @media screen and ${device.desktop} {
    padding-bottom: 300px;
  }
`;

export const RedContainer = styled.div`
  background-color: var(--red);
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--max-page-width);
`;
