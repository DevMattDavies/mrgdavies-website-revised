import { useContext, useState } from "react";
import Link from "next/link";
import { DeviceContext, WritingAndPerformingDataContext } from "@/context";
import { ColorStop, NavLink, DropdownLink } from "@/styles/Text/Text.styles";
import { LinksContainer, NavDropdown } from "@/styles/Navbar/Navbar.styles";
import { WritingAndPerformingData } from "@/types/writingAndPerformingData";
import { Device } from "@/types/device";

const NavLinks = ({ closeModalOnClick }: any): JSX.Element => {
  const [isWritingHovered, setIsWritingHovered] = useState(false);
  const [isPerformingHovered, setIsPerformingHovered] = useState(false);

  const { isDesktop }: Device = useContext(DeviceContext);

  const { updateSubtitle }: WritingAndPerformingData = useContext(
    WritingAndPerformingDataContext
  );

  const handleWritingHover = () => {
    setIsWritingHovered((isWritingHovered) => !isWritingHovered);
  };

  const handlePerformingHover = () => {
    setIsPerformingHovered((isPerformingHovered) => !isPerformingHovered);
  };

  return (
    <LinksContainer>
      <Link href="/" passHref legacyBehavior>
        <NavLink onClick={closeModalOnClick}>
          Home
          <ColorStop color={"var(--red)"}>.</ColorStop>
        </NavLink>
      </Link>
      <Link href="/writing" passHref legacyBehavior>
        <NavLink
          onClick={isDesktop ? updateSubtitle : closeModalOnClick}
          onMouseEnter={handleWritingHover}
          onMouseLeave={handleWritingHover}
        >
          Writing<ColorStop color={"var(--red)"}>.</ColorStop>
          {isDesktop && isWritingHovered && (
            <NavDropdown>
              <DropdownLink onClick={updateSubtitle}>
                Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateSubtitle}>
                Scriptwriting<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateSubtitle}>
                Stage<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateSubtitle}>
                Non-Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateSubtitle}>
                Journalism<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
            </NavDropdown>
          )}
        </NavLink>
      </Link>
      <Link href="/performing" passHref legacyBehavior>
        <NavLink
          onClick={isDesktop ? updateSubtitle : closeModalOnClick}
          onMouseEnter={handlePerformingHover}
          onMouseLeave={handlePerformingHover}
        >
          Performing<ColorStop color={"var(--red)"}>.</ColorStop>
          {isDesktop && isPerformingHovered && (
            <NavDropdown>
              <DropdownLink onClick={updateSubtitle}>
                Acting<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateSubtitle}>
                Voiceover<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateSubtitle}>
                Presenting<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateSubtitle}>
                Roleplaying<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateSubtitle}>
                Public Speaking<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateSubtitle}>
                Music<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
            </NavDropdown>
          )}
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
