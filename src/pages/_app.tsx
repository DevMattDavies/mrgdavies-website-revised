import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles.styles";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useIsDevice, useSetWritingData, useSetPerformingData } from "@/hooks";
import { MainContainer } from "@/styles/Containers/Container.styles";
import { DeviceContext, WritingContext, PerformingContext } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  const device = useIsDevice();
  const setWritingData = useSetWritingData();
  const setPerformingData = useSetPerformingData();

  return (
    <>
      <GlobalStyles />
      <DeviceContext.Provider value={device}>
        <WritingContext.Provider value={setWritingData}>
          <PerformingContext.Provider value={setPerformingData}>
            <Navbar />
            <MainContainer>
              <Component {...pageProps} />
            </MainContainer>
            <Footer />
          </PerformingContext.Provider>
        </WritingContext.Provider>
      </DeviceContext.Provider>
    </>
  );
}
