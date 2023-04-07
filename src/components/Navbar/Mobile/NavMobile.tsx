import Link from "next/link";
import {
  HamburgerContainer,
  LinksContainer,
  NavContainer,
  TitleContainer,
} from "@/styles/Navbar/Navbar.styles";
import { PageTitle, NavLink, ColorStop } from "@/styles/Text/Text.styles";
import { useContext, useEffect, useState } from "react";
import { IsMobileContext } from "@/pages/_app";

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
  const isMobile: boolean = useContext(IsMobileContext);

  return (
    <NavContainer isMobile={isMobile}>
      <TitleContainer isMobile={isMobile}>
        <PageTitle isMobile={isMobile} outline>
          Michael
        </PageTitle>
        <PageTitle isMobile={isMobile}>Davies</PageTitle>
      </TitleContainer>
      <HamburgerContainer>
        {!isModalOpen ? (
          <CloseIcon style={{ fontSize: "30px" }} onClick={modalHandler} />
        ) : (
          <MenuIcon style={{ fontSize: "30px" }} onClick={modalHandler} />
        )}
      </HamburgerContainer>
    </NavContainer>
  );
};

export default NavMobile;
