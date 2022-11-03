import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  faUser,
  faComment,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigator = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <NavItem
        onClick={() => {
          navigate('/');
        }}
      >
        <FontAwesomeIcon icon={faUser} size="xl" />
      </NavItem>
      <NavItem
        onClick={() => {
          navigate('/chatList');
        }}
      >
        <FontAwesomeIcon icon={faComment} size="xl" />
      </NavItem>
      <NavItem
        onClick={() => {
          navigate('/setting');
        }}
      >
        <FontAwesomeIcon icon={faEllipsis} size="xl" />
      </NavItem>
    </Nav>
  );
};

const Nav = styled.div`
  width: 5rem;
  height: 100%;

  padding: 4rem 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: rgb(230, 230, 230);
`;

const NavItem = styled.div`
  width: 1rem;
  display: flex;
  justify-content: center;
`;

export default Navigator;
