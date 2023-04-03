import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles.styles";
import Footer from "@/components/Footer/Footer";
import useIsMobile from "@/hooks/useIsMobile";
import { createContext } from "react";

export const IsMobileContext: any = createContext(null);

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useIsMobile();
  return (
    <>
      <GlobalStyles />
      <IsMobileContext.Provider value={isMobile}>
        <Component {...pageProps} />
        <Footer />
      </IsMobileContext.Provider>
    </>
  );
}
