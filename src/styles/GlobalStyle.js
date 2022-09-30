import { createGlobalStyle } from 'styled-components';
import reset from './reset.css';

const GlobalStyle = createGlobalStyle`
${reset};
html {
    width: 100vw;
    height: 100vh;
  }

body {
    height: 100%;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
