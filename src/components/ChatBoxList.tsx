import styled from 'styled-components';

import ChatBoxItem from './ChatBox';

type Chat = {
  user_id: number;
  chat_id: number;
  chat_content: string;
};

const ChatBox = ({ chatList }: { chatList: Chat[] }) => {
  console.log(chatList);
  return (
    <ChatBoxWrapper>
      {chatList.map((it) => (
        <ChatBoxItem key={it.chat_id} {...it} />
      ))}
    </ChatBoxWrapper>
  );
};

const ChatBoxWrapper = styled.div`
  flex-grow: 8.5;

  background-color: rgb(180, 213, 226);
`;

export default ChatBox;
