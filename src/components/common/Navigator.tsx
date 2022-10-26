import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as FriendIcon } from '../../assets/icons/friends.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg';
import { ReactComponent as ThreeDot } from '../../assets/icons/threeDot.svg';

const getColor = (isMatched: boolean) => (isMatched ? `#222222` : `#a1a1a1`);

const Navigator = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/" replace>
            <FriendIcon fill={getColor(pathname === '/')} width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link to="/chattings" replace>
            <ChatIcon fill={getColor(pathname === '/chattings')} width={23} height={23} />
          </Link>
        </li>
        <li>
          <Link to="/setting" replace>
            <ThreeDot fill={getColor(pathname === '/setting')} width={23} height={23} />
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navigator;

const Wrapper = styled.div`
  background-color: #e6e6e6;
  border-right: 1px solid #dfdfdf;
  @media screen and (min-width: 600px) {
    border-radius: 15px 0px 0px 15px;
  }

  ul {
    margin: 0px;
    padding: 0px;
    padding: 18px;
  }

  li {
    list-style: none;
    display: flex;
    justify-content: center;
    padding-top: 24px;
  }
`;
