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

a{
  text-decoration: none;
  color: black;
}

h2{
  font-weight: 500;
  font-size: 1.3rem;
  margin: 5px 0px 0px 20px;
}
`;

export default GlobalStyle;
