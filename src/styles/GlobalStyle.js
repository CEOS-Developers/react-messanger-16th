import { createGlobalStyle } from 'styled-components';
import reset from './reset.css';

const GlobalStyle = createGlobalStyle`
${reset};
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
    format('woff');
  font-weight: 400;
  font-style: normal;
}

html {
    width: 100vw;
    height: 100vh;

    font-family: 'Pretendard-Regular';
  }

body {
    height: 100%;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
