import { Route, Routes } from 'react-router-dom';
import Friends from "./pages/Friends";
import Chat from "./pages/Chat";
import Setting from "./pages/Setting";

function App() {
  return (
    <Routes>
      <Route path = '/' element={<Friends/>}/>
      <Route path = '/chat' element={<Chat/>}/>
      <Route path = '/setting' element={<Setting/>}/>
    </Routes>
  );
}

export default App;
