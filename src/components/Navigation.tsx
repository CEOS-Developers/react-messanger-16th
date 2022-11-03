import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import FriendsPage from "../pages/FriendsPage";

const Navigation = () => {
  const location = useLocation();
  const nowPage = location.pathname.split("/", 2)[1];

  console.log(nowPage);

  const getImageSrc = (isPage: boolean, page: string) => {
    return isPage
      ? `${process.env.PUBLIC_URL}/images/${page}.png`
      : `${process.env.PUBLIC_URL}/images/${page}-clicked.png`;
  };

  return (
    <NavWrapper>
      <li>
        <Link to={`/friends`} key={"friends"}>
          <ButtonImage src={getImageSrc(nowPage === "friends", "calls")} />
        </Link>
      </li>
      <li>
        <Link to={`/chats`} key={"chats"}>
          <ButtonImage src={getImageSrc(nowPage === "chats", "messages")} />
        </Link>
      </li>
      <li>
        <Link to={`/settings`} key={"settings"}>
          <ButtonImage src={getImageSrc(nowPage === "settings", "settings")} />
        </Link>
      </li>
    </NavWrapper>
  );
};

const NavWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem 0.5rem 2rem;
`;

const ButtonImage = styled.img`
  width: 3rem;
  height: 4rem;
  padding: 0.5rem;
`;

export default Navigation;
