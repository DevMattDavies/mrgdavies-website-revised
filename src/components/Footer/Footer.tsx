import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Link from "next/link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  FooterContainer,
  SectionContainer,
  TitleContainer,
  LeftContainer,
  SocialsContainer,
  NewsletterForm,
  NewsletterInput,
  NewsletterButton,
  InnerContainer,
} from "@/styles/Footer/Footer.styles";

import {
  FooterCopyright,
  FooterSubheading,
  FooterTitle,
  FooterText,
} from "@/styles/Text/Text.styles";

import { IsMobileContext } from "@/pages/_app";

const Footer = (): JSX.Element => {
  const isMobile: boolean = useContext(IsMobileContext);
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      setIsEmailSubmitted(true);
    }
  };

  // TODO: Add email subscription functionality
  // TODO: Refactor styling to make sure footer sticks to bottom of page

  return (
    <FooterContainer isMobile>
      <InnerContainer isMobile>
        {!isMobile && (
          <LeftContainer>
            <TitleContainer>
              <FooterTitle outline>Michael</FooterTitle>
              <FooterTitle>Davies</FooterTitle>
            </TitleContainer>
            <FooterCopyright>
              Copyright &copy; {new Date().getFullYear()}
              {` Michael Davies - All Rights Reserved`}
            </FooterCopyright>
          </LeftContainer>
        )}
        <SectionContainer isMobile>
          <FooterSubheading>Navigation</FooterSubheading>
          <Link
            style={{ textDecoration: "none" }}
            href="/"
            passHref
            legacyBehavior
          >
            <FooterText>Home</FooterText>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="/writing"
            passHref
            legacyBehavior
          >
            <FooterText>Writing</FooterText>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="/performing"
            passHref
            legacyBehavior
          >
            <FooterText>Performing</FooterText>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="/gallery"
            passHref
            legacyBehavior
          >
            <FooterText>Gallery</FooterText>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="/events"
            passHref
            legacyBehavior
          >
            <FooterText>Events</FooterText>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="/contact"
            passHref
            legacyBehavior
          >
            <FooterText>Contact</FooterText>
          </Link>
        </SectionContainer>
        <SectionContainer isMobile>
          <FooterSubheading>Get in touch</FooterSubheading>
          <SocialsContainer>
            <MailOutlineIcon style={{ color: "var(--red)" }} />
            <FooterText
              style={{ textDecoration: "none" }}
              href="mailto:mrgdavies@aol.com"
            >
              Email
            </FooterText>
          </SocialsContainer>
          <SocialsContainer>
            <TwitterIcon style={{ color: "var(--red)" }} />
            <FooterText
              style={{ textDecoration: "none" }}
              href="https://twitter.com/mrgdavies"
              target="_blank"
            >
              Twitter
            </FooterText>
          </SocialsContainer>
        </SectionContainer>
        <SectionContainer isMobile>
          <FooterSubheading>Subscribe</FooterSubheading>
          <NewsletterForm>
            <NewsletterInput
              type="email"
              placeholder="enter email"
              onChange={() => handleEmailChange}
            ></NewsletterInput>
            <NewsletterButton
              type="submit"
              value="Sign up"
              onSubmit={() => handleEmailSubmit}
            >
              {isEmailSubmitted ? "Submitted" : "Sign up"}
            </NewsletterButton>
          </NewsletterForm>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
