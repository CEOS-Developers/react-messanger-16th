import { Route, Routes } from 'react-router-dom';
import Friends from "./pages/Friends/Friends";
import Chat from "./pages/Chatting/Chat";
import Setting from "./pages/Setting/Setting";
import styled, {createGlobalStyle} from "styled-components";

// 전역 스타일 지정
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HBIOS-SYS';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  * {
    font-family: 'HBIOS-SYS';
  }
  body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`

function App() {

  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path = '/' element={<Friends/>}/>
        <Route path = '/chat' element={<Chat/>}/>
        <Route path = '/setting' element={<Setting/>}/>
      </Routes>
    </>
  );
}

export default App;
