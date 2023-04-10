import {
  HamburgerContainer,
  NavContainer,
  TitleContainer,
} from "@/styles/Navbar/Navbar.styles";
import { PageTitle } from "@/styles/Text/Text.styles";
import { useEffect, useState } from "react";

import NavLinks from "@/components/Navbar/NavLinks";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavMobile = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = (): void => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  console.log(isModalOpen);

  return (
    <NavContainer>
      <TitleContainer>
        <PageTitle outline>Michael</PageTitle>
        <PageTitle>Davies</PageTitle>
      </TitleContainer>
      <HamburgerContainer>
        {isModalOpen ? (
          <CloseIcon style={{ fontSize: "30px" }} onClick={modalHandler} />
        ) : (
          <MenuIcon style={{ fontSize: "30px" }} onClick={modalHandler} />
        )}
      </HamburgerContainer>
      {isModalOpen && <NavLinks />}
    </NavContainer>
  );
};

export default NavMobile;
