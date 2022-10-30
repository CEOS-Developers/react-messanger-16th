import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { chatList } from '../../recoil/store';
import ChatBubble from './chatBubble';

const ChatBubbleList = ({roomId}) => {
  const chatting = useRecoilValue(chatList);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToBottom = () => {
    containerRef.current!.scrollTop = containerRef.current!.scrollHeight;
  };

  useEffect(() => {
    goToBottom();
  }, [chatting[roomId]]);

  return (
    <Container ref={containerRef}>
      {chatting[roomId].chat.map((chat, idx) => (
        <ChatBubble
          key={idx}
          roomId={roomId}
          chatId={idx}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 29.5rem;
  background-color: #9bbbd4;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: rgba(128, 128, 128, 0.3);
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export default ChatBubbleList;
