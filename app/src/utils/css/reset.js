import { css } from "styled-components";

const reset = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    font-weight: normal;
    font-smoothing: antialiaseit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    @font-face {
      font-family: "Inter UI Bold";
      src: url("/fonts/Inter-UI-Bold.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-Bold.woff") format("woff");
      font-weight: bold;
      font-style: normal;
    }
  
    @font-face {
      font-family: "Inter UI Medium";
      src: url("/fonts/Inter-UI-Medium.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-Medium.woff") format("woff");
      font-weight: 500;
      font-style: normal;
    }
  
    @font-face {
      font-family: "Inter UI Italic";
      src: url("/fonts/Inter-UI-Italic.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-Italic.woff") format("woff");
      font-weight: normal;
      font-style: italic;
    }
  
    @font-face {
      font-family: "Inter UI Semi Bold Italic";
      src: url("/fonts/Inter-UI-SemiBoldItalic.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-SemiBoldItalic.woff")
          format("woff");
      font-weight: 600;
      font-style: italic;
    }
  
    @font-face {
      font-family: "Inter UI Extra Bold";
      src: url("/fonts/Inter-UI-ExtraBold.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-ExtraBold.woff")
          format("woff");
      font-weight: 800;
      font-style: normal;
    }
  
    @font-face {
      font-family: "Inter UI Black";
      src: url("/fonts/Inter-UI-Black.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-Black.woff") format("woff");
      font-weight: 900;
      font-style: normal;
    }
  
    @font-face {
      font-family: "Inter UI Extra Bold Italic";
      src: url("/fonts/Inter-UI-ExtraBoldItalic.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-ExtraBoldItalic.woff")
          format("woff");
      font-weight: 800;
      font-style: italic;
    }
  
    @font-face {
      font-family: "Inter UI Semi Bold";
      src: url("/fonts/Inter-UI-SemiBold.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-SemiBold.woff")
          format("woff");
      font-weight: 600;
      font-style: normal;
    }
  
    @font-face {
      font-family: "Inter UI Regular";
      src: url("/fonts/Inter-UI-Regular.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-Regular.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
  
    @font-face {
      font-family: "Inter UI Medium Italic";
      src: url("/fonts/Inter-UI-MediumItalic.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-MediumItalic.woff")
          format("woff");
      font-weight: 500;
      font-style: italic;
    }
  
    @font-face {
      font-family: "Inter UI Black Italic";
      src: url("/fonts/Inter-UI-BlackItalic.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-BlackItalic.woff")
          format("woff");
      font-weight: 900;
      font-style: italic;
    }
  
    @font-face {
      font-family: "Inter UI Bold Italic";
      src: url("/fonts/Inter-UI-BoldItalic.woff2")
          format("woff2"),
        url("/fonts/Inter-UI-BoldItalic.woff")
          format("woff");
      font-weight: bold;
      font-style: italic;
    }
  }  
`;

export default reset;
