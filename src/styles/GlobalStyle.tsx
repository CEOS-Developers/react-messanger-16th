import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
 ${normalize}

@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

.notosanskr * { 
 font-family: 'Noto Sans KR', sans-serif;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
}

header {
  display: flex;
  padding: 1rem;
  justify-content: start;
}

ul{
  list-style:none;
}
`;

export default GlobalStyle;
