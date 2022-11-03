import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavWrapper>
      <li>
        <Link to={`/friends`} key={"friends"}>
          <ButtonImage src={`${process.env.PUBLIC_URL}/images/calls.png`} />
        </Link>
      </li>
      <li>
        <Link to={`/chats`} key={"chats"}>
          <ButtonImage src={`${process.env.PUBLIC_URL}/images/messages.png`} />
        </Link>
      </li>
      <li>
        <Link to={`/settings`} key={"settings"}>
          <ButtonImage src={`${process.env.PUBLIC_URL}/images/settings.png`} />
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
