import styled from "styled-components";
import device from "@/constants/breakpoints";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100vw;
  height: 75px;
  position: relative;
  top: 0;

  @media screen and ${device.desktop} {
    padding: 2rem 4rem;
    height: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 100%;
  padding-top: 0.5rem;

  @media screen and ${device.desktop} {
    padding-top: 1rem;
  }
`;

export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  top: 75px;
  width: 100%;
  background-color: var(--white);
  right: 0;
  z-index: 1000;

  @media screen and ${device.desktop} {
    position: relative;
    top: 0;
    padding: 0;
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;
    gap: 0;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 75px;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;
