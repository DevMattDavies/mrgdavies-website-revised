import NavDesktop from "@/components/Navbar/Desktop/NavDesktop";
import NavMobile from "@/components/Navbar/Mobile/NavMobile";
import { useContext } from "react";
import { DeviceContext } from "@/context";
const Navbar = (): JSX.Element => {
  const { isDesktop }: any = useContext(DeviceContext);
  return <>{isDesktop ? <NavDesktop /> : <NavMobile />}</>;
};

export default Navbar;
