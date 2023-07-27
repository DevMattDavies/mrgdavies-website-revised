import { useContext } from "react";
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
  InnerContainer,
} from "@/styles/Footer/Footer.styles";

import {
  FooterCopyright,
  FooterSubheading,
  FooterTitle,
  FooterLink,
} from "@/styles/Text/Text.styles";

import SubscriptionSection from "@/components/Footer/SubscriptionSection";

import { DeviceContext } from "@/context";

import { Device } from "@/types/device";

const Footer = (): JSX.Element => {
  const { isDesktop }: Device = useContext(DeviceContext);

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
          <SubscriptionSection />
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
