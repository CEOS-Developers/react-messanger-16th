import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './page/mainPage';
import SettingPage from './page/settingPage';
import ListPage from './page/listPage';
import ChatPage from './page/chatPage';

function App() {
  return (
    <Background>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/chatting" element={<ListPage/>}/>
            <Route path="/setting" element={<SettingPage/>}/>
            <Route path="/chatRoom" element={<ChatPage/>}/>
          </Routes>
          
        </BrowserRouter>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  display: relative;
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: row;
  justify-items: center;
  align-items: center;
  width: 25rem;
  height: 44rem;
  border: 1px solid #e8e8e8;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #e8e8e8;
  border-radius: 1rem;
`;

export default App;
