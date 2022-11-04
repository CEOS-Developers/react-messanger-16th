import FriendItem from './FriendItem';
import { User } from '../../interfaces/interfaces';

import styled from 'styled-components';

const FriendsList = ({ users }: { users: User[] }) => {
  return (
    <Friends>
      {users.map((user) => (
        <>
          <FriendItem key={user.user_id} {...user} />
          {user.user_id === 1 ? (
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
