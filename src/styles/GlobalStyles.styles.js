import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --red: #b3002d;
    --black: #000;
    --white: #fff;
    --grey: grey;
    --max-page-width: 150rem;
    --mobile-padding: 1rem;
  }

  html {
    font-size: calc(60% + 0.8vmin);
  }

  * {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lora", serif;
  }

  body {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

export default GlobalStyles;
