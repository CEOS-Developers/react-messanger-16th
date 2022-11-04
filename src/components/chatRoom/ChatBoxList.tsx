import { useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { userState, chatState } from '../../recoil/recoil';
import ChatBoxItem from './ChatBoxItem';

const ChatBoxList = ({ id }: { id: number }) => {
  const chatList = useRecoilValue(chatState);
  const userList = useRecoilValue(userState);

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
      {chatList
        .filter((chat) => chat.chat_room === id)
        .map((chat) => (
          <ChatBoxItem
            key={chat.chat_id}
            {...chat}
            user={userList.find((user) => user.user_id === chat.user_id)!}
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

export default ChatBoxList;