import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Link from "next/link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  FooterContainer,
  SectionContainer,
  NavigationContainer,
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
  FooterLink,
} from "@/styles/Text/Text.styles";

import { DeviceContext } from "@/pages/_app";

import { Device } from "@/types/device";

const Footer = (): JSX.Element => {
  const { isDesktop }: Device = useContext(DeviceContext);
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
        {isDesktop && (
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
        <NavigationContainer>
          <FooterSubheading>Navigation</FooterSubheading>
          <Link href="/" passHref legacyBehavior>
            <FooterLink>Home</FooterLink>
          </Link>
          <Link href="/writing" passHref legacyBehavior>
            <FooterLink>Writing</FooterLink>
          </Link>
          <Link href="/performing" passHref legacyBehavior>
            <FooterLink>Performing</FooterLink>
          </Link>
          <Link href="/gallery" passHref legacyBehavior>
            <FooterLink>Gallery</FooterLink>
          </Link>
          <Link href="/events" passHref legacyBehavior>
            <FooterLink>Events</FooterLink>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <FooterLink>Contact</FooterLink>
          </Link>
        </NavigationContainer>
        <SectionContainer>
          <FooterSubheading>Get in touch</FooterSubheading>
          <SocialsContainer>
            <MailOutlineIcon style={{ color: "var(--red)" }} />
            <FooterLink
              style={{ textDecoration: "none" }}
              href="mailto:mrgdavies@aol.com"
            >
              Email
            </FooterLink>
          </SocialsContainer>
          <SocialsContainer>
            <TwitterIcon style={{ color: "var(--red)" }} />
            <FooterLink
              style={{ textDecoration: "none" }}
              href="https://twitter.com/mrgdavies"
              target="_blank"
            >
              Twitter
            </FooterLink>
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
