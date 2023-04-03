import styled from "styled-components";
import * as Types from "@/types/styles";

export const PageTitle = styled.h1<Types.PageTitleProps>`
  font-size: 2rem;
  font-family: ${(props) => (props.outline ? "Asterone Outline" : "Asterone")};
`;

export const NavLink = styled.a`
  font-size: 1.5rem;
`;

export const Text = styled.p<Types.TextProps>`
  font-size: 3rem;
  font-family: "Lora", serif;
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
`;

export const FooterTitle = styled.h2<Types.PageTitleProps>`
  font-size: 1.5rem;
  font-family: ${(props) => (props.outline ? "Asterone Outline" : "Asterone")};
  color: var(--white);
`;

export const FooterSubheading = styled.h3`
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  color: var(--white);
`;

export const FooterText = styled.a`
  font-size: 0.8rem;
  font-family: "Montserrat", sans-serif;
  color: var(--grey);
  text-decoration: none;

  &:hover {
    color: var(--white);
    cursor: pointer;
  }
`;

export const FooterCopyright = styled.p`
  font-size: 0.6rem;
  font-family: "Montserrat", sans-serif;
  color: var(--grey);
`;
