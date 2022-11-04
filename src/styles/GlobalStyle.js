import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'InfinitySans-RegularA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    font-family: 'InfinitySans-RegularA1';
  }
  body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`

export default GlobalStyle;