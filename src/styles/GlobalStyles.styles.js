import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --red: #b3002d;
    --black: #000;
    --white: #fff;
    --grey: grey;
    --max-page-width: 100rem;
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
    
    @font-face {
      font-family: "Lora";
      src: url('/static/fonts/Lora-Regular.woff2') format('woff2'),
      url('/static/fonts/Lora-Italic.woff2') format('woff2');
    }

    @font-face {
      font-family: "Asterone";
      src: url('/static/fonts/Asterone-Regular.woff2') format('woff2');
      font-style: normal;
    }

    @font-face {
      font-family: "Asterone Outline";
      src: url('/static/fonts/AsteroneOutline-Regular.woff2') format('woff2');
      font-style: normal;
    }

    @font-face {
      font-family: "Montserrat";
      src: url('/static/fonts/Montserrat-Bold.woff2') format('woff2');
      font-style: normal;
    }
`;

export default GlobalStyles;
