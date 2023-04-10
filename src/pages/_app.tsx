import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles.styles";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import useIsDevice from "@/hooks/useIsDevice";
import { createContext } from "react";

export const DeviceContext: any = createContext(null);

export default function App({ Component, pageProps }: AppProps) {
  const device = useIsDevice();
  return (
    <>
      <GlobalStyles />
      <DeviceContext.Provider value={device}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </DeviceContext.Provider>
    </>
  );
}
