import { useContext, useState } from "react";
import Link from "next/link";
import { DeviceContext, WritingContext, PerformingContext } from "@/context";
import { ColorStop, NavLink, DropdownLink } from "@/styles/Text/Text.styles";
import { LinksContainer, NavDropdown } from "@/styles/Navbar/Navbar.styles";
import { PerformingData, WritingData } from "@/types/writingAndPerformingData";
import { Device } from "@/types/device";

const NavLinks = ({ closeModalOnClick }: any): JSX.Element => {
  const [isWritingHovered, setIsWritingHovered] = useState(false);
  const [isPerformingHovered, setIsPerformingHovered] = useState(false);

  const { isDesktop }: Device = useContext(DeviceContext);

  const { updateWritingSubtitle }: WritingData = useContext(WritingContext);

  const { updatePerformingSubtitle }: PerformingData =
    useContext(PerformingContext);

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
          onClick={isDesktop ? updateWritingSubtitle : closeModalOnClick}
          onMouseEnter={handleWritingHover}
          onMouseLeave={handleWritingHover}
        >
          Writing<ColorStop color={"var(--red)"}>.</ColorStop>
          {isDesktop && isWritingHovered && (
            <NavDropdown>
              <DropdownLink onClick={updateWritingSubtitle}>
                Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateWritingSubtitle}>
                Scriptwriting<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateWritingSubtitle}>
                Stage<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateWritingSubtitle}>
                Non-Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updateWritingSubtitle}>
                Journalism<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
            </NavDropdown>
          )}
        </NavLink>
      </Link>
      <Link href="/performing" passHref legacyBehavior>
        <NavLink
          onClick={isDesktop ? updatePerformingSubtitle : closeModalOnClick}
          onMouseEnter={handlePerformingHover}
          onMouseLeave={handlePerformingHover}
        >
          Performing<ColorStop color={"var(--red)"}>.</ColorStop>
          {isDesktop && isPerformingHovered && (
            <NavDropdown>
              <DropdownLink onClick={updatePerformingSubtitle}>
                Acting<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updatePerformingSubtitle}>
                Voiceover<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updatePerformingSubtitle}>
                Presenting<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updatePerformingSubtitle}>
                Roleplaying<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updatePerformingSubtitle}>
                Public Speaking<ColorStop color={"var(--red)"}>.</ColorStop>
              </DropdownLink>
              <DropdownLink onClick={updatePerformingSubtitle}>
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
