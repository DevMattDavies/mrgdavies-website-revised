import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #000;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
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
  border-left: 2px solid var(--white);
  padding-left: 1rem;
  gap: 0.8rem;
`;

export const SocialsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
