import styled from 'style-components';
import { GlobalStyle } from './styles/global-style';
import Chatting from './pages/chatting';
import Main from './pages/main';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatList from './pages/chatlist';
import Setting from './pages/setting';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chat/*" element={<Chatting />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        <Main />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
