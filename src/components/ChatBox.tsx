import styled from 'styled-components';

import { User } from '../interfaces/interfaces';

interface ChatProps {
  user_id: number;
  chat_id: number;
  chat_content: string;

  user: User;
}

const ChatBox: React.FC<ChatProps> = ({ user, chat_id, chat_content }) => {
  return (
    <ChatBoxItem isSelected={user.isSelected}>
      {user.isSelected ? (
        <></>
      ) : (
        <UserImgWrapper>
          <UserImg src={user.user_img} />
        </UserImgWrapper>
      )}
      <ChatWrapper>
        {user.isSelected ? (
          <></>
        ) : (
          <ChatUserName>{user.user_name}</ChatUserName>
        )}
        <Chat>
          <ChatText isSelected={user.isSelected}>{chat_content}</ChatText>
          <ChatTime />
        </Chat>
      </ChatWrapper>
    </ChatBoxItem>
  );
};

const ChatBoxItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  gap: 0.8rem;

  justify-content: ${(props) => (props.isSelected ? 'right' : 'left')};
`;

const UserImgWrapper = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 40%;
  overflow: hidden;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ChatWrapper = styled.div``;

const ChatUserName = styled.div`
  padding-bottom: 0.4rem;

  font-size: 0.75rem;
`;

const Chat = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ChatText = styled.div<{ isSelected: boolean }>`
  padding: 0.6rem 0.8rem 0.5rem;

  border-radius: 5px;

  font-size: 0.9rem;
  font-weight: 500;

  background-color: ${(props) =>
    props.isSelected ? 'rgb(255, 234, 0)' : 'white'};
`;

const ChatTime = styled.div`
  align-self: flex-end;

  font-size: 0.5rem;
  font-weight: 500;
`;

export default ChatBox;
