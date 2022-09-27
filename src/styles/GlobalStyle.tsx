import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
 ${normalize}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 800;
  font-style: normal;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Regular";
  margin: 0;
}

header {
  display: flex;
  padding: 1rem;
  justify-content: flex-start;
  align-items: flex-end;
}
`;

export default GlobalStyle;
