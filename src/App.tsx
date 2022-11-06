import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { RecoilRoot } from 'recoil';
import ChatRoomListPage from './pages/ChatRoomListPage';
import FriendsPage from './pages/FriendsPage';
import SettingsPage from './pages/SettingsPage';
import ChatsPage from './pages/ChatsPage';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//vercel 배포
function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <NavBar />
            <Routes>
              <Route path="/" element={<FriendsPage />} />
              <Route path="/chatlist" element={<ChatRoomListPage />} />
              <Route path="/chatroom/:roomid" element={<ChatsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Container>
        </Wrapper>
      </RecoilRoot>
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Helvetica", "Arial", sans-serif;
        width: 100%;
        height: 100%;
        background-color: white;
    }

    button {
        background-color: transparent;
        font-size: 20px;
        cursor: pointer;
        border: none;
    }

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  border-radius: 20px;
`;

const Container = styled.div`
  border-radius: 20px;
  width: 400px;
  height: 600px;
  box-shadow: 1px 1px 10px gray;
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

export default App;
