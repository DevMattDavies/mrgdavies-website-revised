import styled from "styled-components";
import * as Types from "@/types/styles";

export const FooterContainer = styled.footer<Types.FooterProps>`
  background-color: #000;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  height: ${(props) => (props.isMobile ? "max-content" : "250px")};
  margin-top: auto;
  position: absolute;
  bottom: 0;
`;

export const InnerContainer = styled.div<Types.FooterProps>`
  width: 100%;
  max-width: var(--max-page-width);
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  justify-content: space-between;
  gap: ${(props) => props.isMobile && "1.5rem"};
  border-left: ${(props) => props.isMobile && "2px solid white"};
  padding-left: ${(props) => props.isMobile && "1rem"};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionContainer = styled.div<Types.FooterProps>`
  display: flex;
  flex-direction: column;
  border-left: ${(props) => !props.isMobile && "2px solid var(--white)"};
  padding-left: ${(props) => !props.isMobile && "1rem"};
  gap: 0.6rem;
`;

export const SocialsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NewsletterInput = styled.input`
  font-size: 0.8rem;
  border: none;
  border-bottom: 0.5px solid var(--red);
  outline: none;
  background: none;
  color: var(--white);
  padding: 0 0 0.5rem 0;
  font-family: "Montserrat", sans-serif;
`;

export const NewsletterButton = styled.button<Types.NewsletterButtonProps>`
  font-size: 0.8rem;
  outline: none;
  border: 1px solid var(--red);
  background: var(--red);
  background: transparent;
  border-radius: 5px;
  padding: 0.2rem 0;
  font-family: "Montserrat", sans-serif;
  color: var(--white);

  &:hover {
    cursor: pointer;
    background: var(--red);
  }
`;
