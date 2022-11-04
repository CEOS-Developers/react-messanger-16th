import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

import HeaderItem from './HeaderItem';
import { userState } from '../../recoil/recoil';
import styled from 'styled-components';

const ChatHeader = () => {
  const { id } = useParams();
  const roomId = Number(id);

  const users = useRecoilValue(userState);

  return (
    <HeaderWrapper>
      {users
        .filter((user) => user.user_id === 1 || user.user_id === roomId)
        .map((user) => (
          <HeaderItem key={user.user_id} {...user} />
        ))}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 6rem;
  padding-left: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default ChatHeader;
