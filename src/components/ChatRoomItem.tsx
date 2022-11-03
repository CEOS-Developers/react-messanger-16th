import { useRecoilValue } from 'recoil';

import styled from 'styled-components';
import { User } from '../interfaces/interfaces';
import { chatState } from '../recoil/recoil';

const ChatRoomItem = (user: User) => {
  const chats = useRecoilValue(chatState);
  const myChats = chats.filter((chat) => chat.user_id === user.user_id);
  console.log(myChats[0]);

  return (
    <UserItemWrapper>
      <UserImgWrapper isSelected={user.isSelected}>
        <UserImg src={user.user_img} />
      </UserImgWrapper>
      <UserInfoWrapper>
        <UserName>{user.user_name}</UserName>
        <Message>{myChats[0].chat_content}</Message>
      </UserInfoWrapper>
    </UserItemWrapper>
  );
};

const UserItemWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 0.7rem;
`;

const UserImgWrapper = styled.div<{ isSelected: boolean }>`
  width: ${(props) => (props.isSelected ? '4rem' : '3rem')};
  height: ${(props) => (props.isSelected ? '4rem' : '3rem')};

  border-radius: 40%;
  overflow: hidden;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.div``;

export default ChatRoomItem;
