import { ChangeEvent, FormEvent, useState } from "react";
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

const Footer = (): JSX.Element => {
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

  return (
    <FooterContainer>
      <InnerContainer>
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
        <SectionContainer>
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
        <SectionContainer>
          <FooterSubheading>Get in touch</FooterSubheading>
          <SocialsContainer>
            <MailOutlineIcon style={{ color: "var(--red)" }} />
            <Link
              style={{ textDecoration: "none" }}
              href="mailto:mrgdavies@aol.com"
              passHref
              legacyBehavior
            >
              <FooterText>Email</FooterText>
            </Link>
          </SocialsContainer>
          <SocialsContainer>
            <TwitterIcon style={{ color: "var(--red)" }} />
            <Link
              style={{ textDecoration: "none" }}
              href="https://twitter.com/mrgdavies"
              target="_blank"
              passHref
              legacyBehavior
            >
              <FooterText>Twitter</FooterText>
            </Link>
          </SocialsContainer>
        </SectionContainer>
        <SectionContainer>
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
