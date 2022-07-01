import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :focus {
    outline: none;
    border: none;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'SF Pro Text',-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    font-size: 10px;
    width: 100%;
    height: 100vh;
  }

  body {
    width: 100%;
    height: 100vh;
  }

  * {
  box-sizing: border-box;
  }
`;
