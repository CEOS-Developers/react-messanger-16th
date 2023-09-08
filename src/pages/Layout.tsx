import { NavLink, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ICON } from "../asset/icon";

const MENUS = [
  { text: "친구", path: "/", icon: ICON.person },
  { text: "채팅", path: "/chatrooms", icon: ICON.chat },
  { text: "설정", path: "/setting", icon: ICON.more },
];

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Navigation>
        {MENUS.map((menu) => (
          <NavLink
            key={menu.text}
            to={menu.path}
            style={({ isActive }) =>
              isActive ? { opacity: 1.0 } : { opacity: 0.5 }
            }>
            <img src={menu.icon} alt="" />
          </NavLink>
        ))}
      </Navigation>
      <Container>
        <h2>{MENUS.find((menu) => menu.path === pathname)?.text}</h2>
        <Outlet />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #e6e6e6;
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  h2 {
    margin: 0px;
    padding: 20px;
  }
`;
