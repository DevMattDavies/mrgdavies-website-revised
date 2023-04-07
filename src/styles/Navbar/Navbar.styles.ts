import styled from "styled-components";
import * as Types from "@/types/styles";

export const NavContainer = styled.nav<Types.PageTitleProps>`
  display: flex;
  justify-content: space-between;
  //align-items: center;
  padding: ${(props) => (props.isMobile ? "1rem" : "2rem 4rem")};
  width: 100vw;
  height: 100%;
`;

export const TitleContainer = styled.div<Types.PageTitleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 100%;
  padding-top: ${(props) => (props.isMobile ? "0.5rem" : "1rem")};
`;

export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
`;
