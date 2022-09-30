import { useRef, useEffect } from 'react';
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
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const scrollTo = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    scrollTo();
  }, [chatList]);

  return (
    <ChatBoxWrapper ref={chatBoxRef}>
      {chatList.map((it) => (
        <ChatBoxItem
          key={it.chat_id}
          {...it}
          user={userList.find((user) => user.user_id === it.user_id)!}
        />
      ))}
    </ChatBoxWrapper>
  );
};

const ChatBoxWrapper = styled.div`
  flex-grow: 8;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: auto;

  background-color: rgb(180, 213, 226);
`;

export default ChatBox;
