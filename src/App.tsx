import { Route, Routes } from 'react-router-dom';
import Friends from "./pages/Friends/Friends";
import Chat from "./pages/Chatting/Chat";
import Setting from "./pages/Setting/Setting";
import Room from './pages/Room/Room';
import GlobalStyle from './styles/GlobalStyle';

function App() {

  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path = '/' element={<Friends/>}/>
        <Route path = '/chat' element={<Chat/>}/>
        <Route path = '/setting' element={<Setting/>}/>
        <Route path = '/room/:id' element={<Room/>}/>
      </Routes>
    </>
  );
}

export default App;
