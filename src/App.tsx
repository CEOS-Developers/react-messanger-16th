import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Friends from './pages/Friends';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import Setting from './pages/Setting';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/chatList" element={<ChatList />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/chatRoom" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
