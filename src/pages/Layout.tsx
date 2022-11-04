import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const activeStyle = {
    color: "pink",
  };

  const normalStyle = {
    color: "black",
  };

  return (
    <div>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          친구
        </NavLink>
        <NavLink
          to="/chatrooms"
          style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          채팅
        </NavLink>
        <NavLink
          to="/setting"
          style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          설정
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
