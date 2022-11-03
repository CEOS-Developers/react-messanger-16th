import { useRecoilValue } from 'recoil';

import Friend from './Friend';
import { userState } from '../recoil/recoil';
import styled from 'styled-components';

const FriendsList = () => {
  const users = useRecoilValue(userState);

  return (
    <Friends>
      {users.map((it) => (
        <Friend key={it.user_id} {...it} />
      ))}
    </Friends>
  );
};

const Friends = styled.div`
  padding: 0 1rem 0;
  display: flex;
  flex-direction: column;
`;

export default FriendsList;
