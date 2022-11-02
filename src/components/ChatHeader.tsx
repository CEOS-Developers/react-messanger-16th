import { useRecoilState, useRecoilValue } from 'recoil';

import HeaderItem from './HeaderItem';
import { userState } from '../recoil/recoil';
import styled from 'styled-components';

const ChatHeader = () => {
  const [users, setUsers] = useRecoilState(userState);

  const handleClickChangeUser = (user: number) => {};

  return (
    <HeaderWrapper>
      {users.map((it) => (
        <HeaderItem key={it.user_id} {...it} />
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
