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
    
   #markdown a {
     text-decoration: none;
     color: var(--black);
     font-style: italic;
     position: relative;
     font-size: 1rem;

     &:after {
       content: "";
       position: absolute;
       width: 100%;
       transform: scaleX(0);
       height: 1px;
       bottom: 0;
       left: 0;
       background-color: var(--red);
       transform-origin: bottom right;
       transition: transform 0.5s ease-out;
     }

     &:hover {
       cursor: pointer;
       transition: 0.2s ease-in-out;
     }

     &:hover:after {
       transform: scaleX(1);
       transform-origin: bottom left;
     }
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
