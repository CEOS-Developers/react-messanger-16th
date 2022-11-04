import { useRecoilState, useRecoilValue } from 'recoil';

import HeaderItem from './HeaderItem';
import { userState } from '../../recoil/recoil';
import styled from 'styled-components';

const ChatHeader = ({ id }: { id: number }) => {
  const [users, setUsers] = useRecoilState(userState);

  const handleClickChangeUser = (user: number) => {};

  return (
    <HeaderWrapper>
      {users
        .filter((user) => user.user_id === 1 || user.user_id === id)
        .map((user) => (
          <HeaderItem key={user.user_id} {...user} />
        ))}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  flex-grow: 0.5;

  padding-left: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default ChatHeader;
