import {
  HeroContainer,
  NavContainer,
  TaglineText,
  TitleContainer,
} from "@/styles/Navbar/Navbar.styles";
import { PageTitle } from "@/styles/Text/Text.styles";

import NavLinks from "@/components/Navbar/NavLinks";

const NavDesktop = (): JSX.Element => {
  return (
    <NavContainer>
      <HeroContainer>
        <TitleContainer>
          <PageTitle outline>Michael</PageTitle>
          <PageTitle>Davies</PageTitle>
        </TitleContainer>
        <TaglineText>Author | Actor | Playwright</TaglineText>
      </HeroContainer>
      <NavLinks />
    </NavContainer>
  );
};

export default NavDesktop;
