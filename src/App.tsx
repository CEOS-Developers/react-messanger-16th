import { GlobalStyle } from './styles/global-style';
import Chatting from './pages/chatting';
import Main from './pages/main';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ChatList from './pages/chatlist';
import Setting from './pages/setting';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Routes>
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chat/:userId" element={<Chatting />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
