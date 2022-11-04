import { Route, Routes } from "react-router-dom";
import FriendListPage from "./pages/FriendListPage";
import ChatroomListPage from "./pages/ChatroomListPage";
import SettingPage from "./pages/SettingPage";
import Chatroom from "./pages/Chatroom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FriendListPage />} />
      <Route path="chatrooms" element={<ChatroomListPage />} />
      <Route path="setting" element={<SettingPage />} />
      <Route path="chatroom" element={<Chatroom />} />
    </Routes>
  );
};

export default App;
