import styled from "styled-components";
import * as Types from "@/types/styles";

// Text styles
export const Text = styled.p<Types.TextProps>`
  font-size: 1rem;
  font-family: "Lora", serif;
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  color: ${(props) => props.color};
`;

export const ColorStop = styled.span<Types.ColorStopProps>`
  color: ${(props) => props.color};
  font-size: 2rem;
`;

export const BlogTitle = styled.h2`
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
`;

export const BlogDate = styled.p`
  font-size: 0.8rem;
  font-family: "Montserrat", sans-serif;
  color: var(--black);
`;

// Navbar styles
export const PageTitle = styled.h1<Types.PageTitleProps>`
  font-size: ${(props) => (props.outline ? "1.85rem" : "2rem")};
  font-family: ${(props) => (props.outline ? "Asterone Outline" : "Asterone")};
  color: var(--red);
`;

export const Subtitle = styled.h2<Types.TextProps>`
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.color};
`;

export const NavLink = styled.a`
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: var(--black);
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: var(--red);
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }

  &:hover {
    color: var(--red);
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const SeeAllPosts = styled(NavLink)`
  font-size: 1rem;
  font-family: "Lora", serif;
  text-align: right;
  font-style: italic;
`;

// Footer styles
export const FooterTitle = styled.h2<Types.FooterProps>`
  font-size: 1.5rem;
  font-family: ${(props) => (props.outline ? "Asterone Outline" : "Asterone")};
  color: var(--white);
`;

export const FooterSubheading = styled.h3`
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  color: var(--white);
`;

export const FooterLink = styled.a`
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

export const HR = styled.hr`
  width: 30%;
  border: 0.7px solid var(--red);
`;
