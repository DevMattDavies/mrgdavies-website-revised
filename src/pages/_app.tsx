import type { AppProps } from "next/app";
import "../styles/main.css";
import GlobalStyles from "../styles/GlobalStyles.styles";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useIsDevice, useSetWritingAndPerformingData } from "@/hooks";
import { MainContainer } from "@/styles/Containers/Container.styles";
import { DeviceContext, WritingAndPerformingDataContext } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  const device = useIsDevice();
  const setWritingAndPerformingData = useSetWritingAndPerformingData();

  return (
    <>
      <GlobalStyles />
      <DeviceContext.Provider value={device}>
        <WritingAndPerformingDataContext.Provider
          value={setWritingAndPerformingData}
        >
          <Navbar />
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
          <Footer />
        </WritingAndPerformingDataContext.Provider>
      </DeviceContext.Provider>
    </>
  );
}
