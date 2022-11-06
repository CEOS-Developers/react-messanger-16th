import React, { useRef, useEffect } from 'react';
import Chat from './Chat';
import styled from 'styled-components';
import { IChatBoard } from '../../interface';
import { listAtom } from '../../atoms';
import { useRecoilState } from 'recoil';

function ChatBoard({ roomid }: any) {
  const [chatList] = useRecoilState<IChatBoard[]>(listAtom);
  const chatBoardRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    if (chatBoardRef.current) {
      chatBoardRef.current.scrollTop = chatBoardRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollDown();
  }, [chatList]);

  const currentChatList = chatList[roomid].msg;

  return (
    <ChatBoardContainer ref={chatBoardRef}>
      <UserChat>
        {currentChatList.map((li: any) => (
          <Chat key={li.name} name={li.name} text={li.text} />
        ))}
      </UserChat>
    </ChatBoardContainer>
  );
}

const ChatBoardContainer = styled.div`
  background-color: #85c1e9;
  overflow: auto;
`;

const UserChat = styled.ul`
  list-style: none;
`;

export default ChatBoard;
