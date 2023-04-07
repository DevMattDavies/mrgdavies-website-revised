import NavDesktop from "@/components/Navbar/Desktop/NavDesktop";
import NavMobile from "@/components/Navbar/Mobile/NavMobile";
import { useContext } from "react";
import { IsMobileContext } from "@/pages/_app";
const Navbar = (): JSX.Element => {
  const isMobile = useContext(IsMobileContext);
  return <>{isMobile ? <NavMobile /> : <NavDesktop />}</>;
};

export default Navbar;
