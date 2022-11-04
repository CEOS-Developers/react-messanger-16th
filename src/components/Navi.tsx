import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <IconWrap>
        <Link to="/FriendsList">
          {pathname === "/FriendsList" ? (
            <Icon src="img/full_profile.png" />
          ) : (
            <Icon src="img/profile.png" />
          )}
        </Link>
        <Link to="/Chat">
          {pathname === "/Chat" ? (
            <Icon src="img/full_chat.png" />
          ) : (
            <Icon src="img/chat.png" />
          )}
        </Link>
        <Link to="/Setting">
          {pathname === "/Setting" ? (
            <Icon src="img/full_setting.png" />
          ) : (
            <Icon src="img/setting.png" />
          )}
        </Link>
      </IconWrap>
    </Nav>
  );
};

const Nav = styled.div`
  width: 5rem;
  height: 42.9rem;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: rgb(230, 230, 230);
  //border-right: 1px solid rgb(230, 230, 230);
  border: 0.05rem solid #fff;
`;

const IconWrap = styled.div`
  width: 1.7rem;
  margin: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const Icon = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  margin: auto;
  padding: 1rem 0;
`;

export default Navigation;
