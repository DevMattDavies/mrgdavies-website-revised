import Link from "next/link";
import { ColorStop, NavLink } from "@/styles/Text/Text.styles";
import { LinksContainer } from "@/styles/Navbar/Navbar.styles";

const NavLinks = ({closeModalOnClick}: any): JSX.Element => {
  return (
    <LinksContainer>
      <Link href="/" passHref legacyBehavior>
        <NavLink onClick={closeModalOnClick}>
          Home
          <ColorStop color={"var(--red)"}>.</ColorStop>
        </NavLink>
      </Link>
      <Link href="/writing" passHref legacyBehavior>
        <NavLink onClick={closeModalOnClick}>
          Writing<ColorStop color={"var(--red)"}>.</ColorStop>
        </NavLink>
      </Link>
      <Link href="/performing" passHref legacyBehavior>
        <NavLink onClick={closeModalOnClick}>
          Performing<ColorStop color={"var(--red)"}>.</ColorStop>
        </NavLink>
      </Link>
      <Link href="/gallery" passHref legacyBehavior>
        <NavLink onClick={closeModalOnClick}>
          Gallery<ColorStop color={"var(--red)"}>.</ColorStop>
        </NavLink>
      </Link>
      <Link href="/events" passHref legacyBehavior>
        <NavLink onClick={closeModalOnClick}>
          Events<ColorStop color={"var(--red)"}>.</ColorStop>
        </NavLink>
      </Link>
      <Link href="/contact" passHref legacyBehavior>
        <NavLink onClick={closeModalOnClick}>
          Contact<ColorStop color={"var(--red)"}>.</ColorStop>
        </NavLink>
      </Link>
    </LinksContainer>
  );
};

export default NavLinks;
