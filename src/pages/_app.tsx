import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles.styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
