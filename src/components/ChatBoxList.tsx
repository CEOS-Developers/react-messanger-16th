import styled from 'styled-components';

import ChatBoxItem from './ChatBox';

type Chat = {
  user_id: number;
  chat_id: number;
  chat_content: string;
};

type User = {
  user_id: number;
  user_img: string;
  user_name: string;
  isSelected: boolean;
};

const ChatBox = ({
  chatList,
  userList,
}: {
  chatList: Chat[];
  userList: User[];
}) => {
  return (
    <ChatBoxWrapper>
      {chatList.map((it) => (
        <ChatBoxItem
          key={it.chat_id}
          {...it}
          user={userList.find((user) => user.isSelected === true)!}
        />
      ))}
    </ChatBoxWrapper>
  );
};

const ChatBoxWrapper = styled.div`
  flex-grow: 8.5;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;

  background-color: rgb(180, 213, 226);
`;

export default ChatBox;
