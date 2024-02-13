import {
  ContainerBackground,
  ContentContainer,
  TextContentContainer,
  ContactContainer,
  LowerContactContainer,
  ContactContentContainer,
} from "@/styles/Containers/Container.styles";
import {
  ColorStop,
  Subtitle,
  ContactLink,
  ContactNonLink,
} from "@/styles/Text/Text.styles";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FacebookOutlined } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import PageHead from "@/components/PageHead/PageHead";
import SubscriptionSection from "@/components/Footer/SubscriptionSection";

export const ContactPage = (): JSX.Element => {
  return (
    <>
      <PageHead
        title={"Michael Davies Contact"}
        description={"Contact information for Michael Davies"}
      />
      <ContainerBackground red>
        <ContentContainer style={{ flexDirection: "column", gap: "3rem" }}>
          <Subtitle color={"var(--white)"}>
            Contact<ColorStop color={"var(--black)"}>.</ColorStop>
          </Subtitle>
          <TextContentContainer style={{ gap: "2rem" }}>
            <ContactContainer>
              <MailOutlineIcon style={{ fontSize: "2rem", color: "white" }} />
              <ContactLink
                href="mailto: michael@mrgdavies.com"
                color={"var(--white)"}
              >
                michael@mrgdavies.com
              </ContactLink>
            </ContactContainer>
            <ContactContainer>
              <TwitterIcon style={{ fontSize: "2rem", color: "white" }} />
              <ContactLink
                href="https://twitter.com/mrgdavies"
                target="_blank"
                color={"var(--white)"}
              >
                @mrgdavies
              </ContactLink>
            </ContactContainer>
            <ContactContainer>
              <FacebookOutlined style={{ fontSize: "2rem", color: "white" }} />
              <ContactLink
                href="https://www.facebook.com/profile.php?id=100068331726986"
                target="_blank"
                color={"var(--white)"}
              >
                Michael Davies - Author
              </ContactLink>
            </ContactContainer>
          </TextContentContainer>
        </ContentContainer>
      </ContainerBackground>
      <ContainerBackground>
        <ContactContentContainer>
          <LowerContactContainer>
            <Subtitle color={"var(--red)"}>
              Acting representation
              <ColorStop color={"var(--black)"}>.</ColorStop>
            </Subtitle>
            <Subtitle color={"var(--black)"}>
              Robert Wilkinson (Red Talent Management)
            </Subtitle>
            <ContactContainer>
              <MailOutlineIcon
                style={{ fontSize: "2rem", color: "var(--black)" }}
              />
              <ContactLink
                href="mailto: info@redtalentmanagement.com"
                color={"var(--black)"}
              >
                info@redtalentmanagement.com
              </ContactLink>
            </ContactContainer>
            <ContactContainer>
              <LanguageIcon
                style={{ fontSize: "2rem", color: "var(--black)" }}
              />
              <ContactLink
                href="https://www.redtalentmanagement.com/"
                color={"var(--black)"}
              >
                redtalentmanagement.com
              </ContactLink>
            </ContactContainer>
            <ContactContainer>
              <PhoneEnabledIcon
                style={{ fontSize: "2rem", color: "var(--black)" }}
              />
              <ContactNonLink color={"var(--black)"}>
                02476 691 900
              </ContactNonLink>
            </ContactContainer>
            <ContactContainer>
              <PhoneAndroidIcon
                style={{ fontSize: "2rem", color: "var(--black)" }}
              />
              <ContactNonLink color={"var(--black)"}>
                07941 133 812
              </ContactNonLink>
            </ContactContainer>
          </LowerContactContainer>
          <LowerContactContainer>
            <Subtitle color={"var(--red)"}>
              Website management
              <ColorStop color={"var(--black)"}>.</ColorStop>
            </Subtitle>
            <Subtitle color={"var(--black)"}>Matt Davies</Subtitle>
            <ContactContainer>
              <MailOutlineIcon
                style={{ fontSize: "2rem", color: "var(--black)" }}
              />
              <ContactLink
                href="mailto: matt@matt.davies.dev"
                color={"var(--black)"}
              >
                matt@mattdavies.dev
              </ContactLink>
            </ContactContainer>
            <ContactContainer>
              <LanguageIcon
                style={{ fontSize: "2rem", color: "var(--black)" }}
              />
              <ContactLink
                href="https://mattdavies.dev/"
                target={"_blank"}
                color={"var(--black)"}
              >
                mattdavies.dev
              </ContactLink>
            </ContactContainer>
          </LowerContactContainer>
        </ContactContentContainer>
      </ContainerBackground>
    </>
  );
};
