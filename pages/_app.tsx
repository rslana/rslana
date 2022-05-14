import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/globals.css";
import "../styles/animation.css";
import { initGlobalAnimation } from "../src/helpers/animation";
import { useEffect } from "react";

// --purple-color:#1106b4;
// --purple-color-lighter: #5a51e2;
// --purple-color-opacity:#033cd821;
// --purple-color-opacity-secondary:#1106b445;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Red Hat Display', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#1106b4",
    secondary: "#5a51e2",
  },
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGlobalAnimation();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
