import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <Link to="/">친구</Link>
        <Link to="/chatrooms">채팅</Link>
        <Link to="/setting">설정</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
