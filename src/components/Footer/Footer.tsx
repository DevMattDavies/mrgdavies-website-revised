import Link from "next/link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  FooterContainer,
  SectionContainer,
  TitleContainer,
  LeftContainer,
  SocialsContainer,
} from "@/styles/Footer/Footer.styles";

import {
  FooterCopyright,
  FooterSubheading,
  FooterTitle,
  FooterText,
} from "@/styles/Text/Text.styles";

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
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
        <Link style={{ textDecoration: "none" }} href="/">
          <FooterText>Home</FooterText>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/writing">
          <FooterText>Writing</FooterText>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/performing">
          <FooterText>Performing</FooterText>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/gallery">
          <FooterText>Gallery</FooterText>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/events">
          <FooterText>Events</FooterText>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/contact">
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
          >
            <FooterText>Twitter</FooterText>
          </Link>
        </SocialsContainer>
      </SectionContainer>
      <SectionContainer>
        <FooterSubheading>Subscribe</FooterSubheading>
      </SectionContainer>
    </FooterContainer>
  );
};

export default Footer;
