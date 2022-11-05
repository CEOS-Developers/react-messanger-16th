import { Route, Routes, useLocation } from 'react-router-dom';
import Navigator from '../components/common/Navigator';
import Chattings from './Chattings';
import Friends from './Friends';
import Room from './Room';
import Setting from './Setting';

const Router = () => {
  const { pathname } = useLocation();
  const path = pathname!.split('/')[1];

  return (
    <>
      {path !== 'room' && <Navigator />}
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/chattings" element={<Chattings />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </>
  );
};

export default Router;
