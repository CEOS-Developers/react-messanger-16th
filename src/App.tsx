// import MessangerPage from './components/messangerPage/MessangerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import ProfilePage from './components/profilePage/ProfilePage';
import ChattingListPage from './components/chattingListPage/ChattingListPage';
import SettingPage from './components/settingPage/settingPage';
import ChattingPage from './components/chattingPage/ChattingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<ProfilePage />} />
          <Route path="chattingList" element={<ChattingListPage />} />
          <Route path="setting" element={<SettingPage />} />
        </Route>
        <Route path="chattingRoom/:userId" element={<ChattingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
