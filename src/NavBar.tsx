import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsPersonFill, BsChatFill, BsThreeDots } from 'react-icons/bs';

const NavBar = () => {
  return (
    <Nav>
      <Icons>
        <Link to="/">
          <BsPersonFill color={'#696969'} />
        </Link>
      </Icons>
      <Icons>
        <Link to="/chatlist">
          <BsChatFill color={'#696969'} />
        </Link>
      </Icons>
      <Icons>
        <Link to="/settings">
          <BsThreeDots color={'#696969'} />
        </Link>
      </Icons>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dcdcdc;
  border-radius: 20px 0px 0px 20px;
`;

const Icons = styled.li`
  list-style: none;
  font-size: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export default NavBar;
