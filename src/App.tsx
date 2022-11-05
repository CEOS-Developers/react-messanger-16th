import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Friends from './pages/Friends';
import Chatting from './pages/Chatting';
import ChatRoom from './pages/ChatRoom';
import Setting from './pages/Setting';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/chatList" element={<Chatting />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/chatRoom/:id" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
