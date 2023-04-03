import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 480);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 480); // update isMobile state
      };
      window.addEventListener("resize", handleResize, false);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  console.log(`isMobile: ${isMobile}`);
  return isMobile;
};

export default useIsMobile;
