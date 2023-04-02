import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles.styles";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
