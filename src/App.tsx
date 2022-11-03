import styled from "styled-components";
import ChatRoom from "./pages/ChatRoom";
import ChatListPage from "./pages/ChatListPage";
import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FriendsPage from "./pages/FriendsPage";
import SettingPage from "./pages/SettingPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/chats" element={<ChatListPage />} />
            <Route path="/room/:roomid" element={<ChatRoom />} />
            <Route path="/settings" element={<SettingPage />} />
          </Routes>
        </Container>
      </RecoilRoot>
    </BrowserRouter>
  );
}

// ㄱ-
// const PhoneImage = styled.img`
//   width: 26rem;
//   z-index: 1;
//   position: absolute;
//   top: 7%;
//   left: 37%;
// `;

const Container = styled.div`
  width: 23rem;
  height: 45rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgb(125, 123, 125);
  display: flex;
  flex-direction: column;
`;

export default App;
