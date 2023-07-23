import { useEffect, useState } from "react";
import { Device } from "@/types/device";
export const useIsDevice = (): Device => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      setIsDesktop(window.innerWidth >= 1024);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 480);
        setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        setIsDesktop(window.innerWidth >= 1024);
      };
      window.addEventListener("resize", handleResize, false);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { isMobile, isTablet, isDesktop };
};
