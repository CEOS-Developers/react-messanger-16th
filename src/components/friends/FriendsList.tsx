import { useRecoilValue } from 'recoil';

import Friend from './FriendItem';
import { userState } from '../../recoil/recoil';
import styled from 'styled-components';

const FriendsList = () => {
  const users = useRecoilValue(userState);

  return (
    <Friends>
      {users.map((it) => (
        <>
          <Friend key={it.user_id} {...it} />
          {it.isSelected ? (
            <FriendsNum>친구 {users.length - 1}</FriendsNum>
          ) : (
            <></>
          )}
        </>
      ))}
    </Friends>
  );
};

const Friends = styled.div`
  padding: 1rem 1rem 0;
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const FriendsNum = styled.div`
  width: 100%;

  padding: 1rem 0 0;

  font-size: 0.8rem;
  font-weight: 600;
  color: gray;
  border-top: 1px solid lightgray;
`;

export default FriendsList;
