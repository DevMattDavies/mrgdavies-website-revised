import { NavContainer, TitleContainer } from "@/styles/Navbar/Navbar.styles";
import { PageTitle } from "@/styles/Text/Text.styles";

import NavLinks from "@/components/Navbar/NavLinks";

const NavDesktop = (): JSX.Element => {
  return (
    <NavContainer>
      <TitleContainer>
        <PageTitle outline>Michael</PageTitle>
        <PageTitle>Davies</PageTitle>
      </TitleContainer>
      <NavLinks />
    </NavContainer>
  );
};

export default NavDesktop;
