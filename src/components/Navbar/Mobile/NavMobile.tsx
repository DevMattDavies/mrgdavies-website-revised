import {
  HamburgerContainer,
  HeroContainer,
  NavContainer,
  TaglineText,
  TitleContainer,
} from "@/styles/Navbar/Navbar.styles";
import { PageTitle } from "@/styles/Text/Text.styles";
import { useEffect, useState } from "react";
import { ModalBackground } from "@/styles/Navbar/Navbar.styles";

import NavLinks from "@/components/Navbar/NavLinks";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavMobile = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = (): void => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const closeModalOnClick = (): void => {
    isModalOpen && setIsModalOpen(false);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  return (
    <NavContainer>
      <HeroContainer>
        <TitleContainer>
          <PageTitle outline>Michael</PageTitle>
          <PageTitle>Davies</PageTitle>
        </TitleContainer>
        <TaglineText>Author | Actor | Playwright</TaglineText>
      </HeroContainer>
      <HamburgerContainer>
        {isModalOpen ? (
          <CloseIcon style={{ fontSize: "30px" }} onClick={modalHandler} />
        ) : (
          <MenuIcon style={{ fontSize: "30px" }} onClick={modalHandler} />
        )}
      </HamburgerContainer>
      {isModalOpen && <NavLinks closeModalOnClick={closeModalOnClick} />}
      {isModalOpen && <ModalBackground onClick={modalHandler} />}
    </NavContainer>
  );
};

export default NavMobile;
