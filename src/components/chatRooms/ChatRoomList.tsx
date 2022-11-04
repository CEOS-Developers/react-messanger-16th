import styled from 'styled-components';

import { useRecoilValue } from 'recoil';

import ChatRoomItem from './ChatRoomItem';

import { userState } from '../../recoil/recoil';

const ChatRoomList = () => {
  const users = useRecoilValue(userState);

  return (
    <ChatRooms>
      {users
        .filter((user) => user.user_id !== 1)
        .map((user) => (
          <ChatRoomItem key={user.user_id} {...user} />
        ))}
    </ChatRooms>
  );
};

const ChatRooms = styled.div`
  padding: 1rem 1rem 0;
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export default ChatRoomList;
