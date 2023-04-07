import Link from "next/link";
import {
  LinksContainer,
  NavContainer,
  TitleContainer,
} from "@/styles/Navbar/Navbar.styles";
import { PageTitle, NavLink, ColorStop } from "@/styles/Text/Text.styles";

const NavDesktop = (): JSX.Element => {
  return (
    <NavContainer>
      <TitleContainer>
        <PageTitle outline>Michael</PageTitle>
        <PageTitle>Davies</PageTitle>
      </TitleContainer>
      <LinksContainer>
        <Link href="/" passHref legacyBehavior>
          <NavLink>
            Home
            <ColorStop color={"var(--red)"}>.</ColorStop>
          </NavLink>
        </Link>
        <Link href="/writing" passHref legacyBehavior>
          <NavLink>
            Writing<ColorStop color={"var(--red)"}>.</ColorStop>
          </NavLink>
        </Link>
        <Link href="/performing" passHref legacyBehavior>
          <NavLink>
            Performing<ColorStop color={"var(--red)"}>.</ColorStop>
          </NavLink>
        </Link>
        <Link href="/gallery" passHref legacyBehavior>
          <NavLink>
            Gallery<ColorStop color={"var(--red)"}>.</ColorStop>
          </NavLink>
        </Link>
        <Link href="/events" passHref legacyBehavior>
          <NavLink>
            Events<ColorStop color={"var(--red)"}>.</ColorStop>
          </NavLink>
        </Link>
        <Link href="/contact" passHref legacyBehavior>
          <NavLink>
            Contact<ColorStop color={"var(--red)"}>.</ColorStop>
          </NavLink>
        </Link>
      </LinksContainer>
    </NavContainer>
  );
};

export default NavDesktop;
