import styled from "styled-components";
import device from "@/constants/breakpoints";

export const FooterContainer = styled.footer`
  background-color: #000;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
  bottom: 0;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: var(--max-page-width);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  @media screen and ${device.tablet} {
    flex-direction: row;
    gap: 0;
  }
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

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media screen and ${device.tablet} {
    border-left: 2px solid var(--white);
    padding-left: 1rem;
  }
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

export const NewsletterButton = styled.button`
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
