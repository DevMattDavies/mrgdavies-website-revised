import Link from "next/link";
import { ColorStop, NavLink } from "@/styles/Text/Text.styles";
import { LinksContainer } from "@/styles/Navbar/Navbar.styles";

const NavLinks = (): JSX.Element => {
  return (
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
  );
};

export default NavLinks;
