import MessageChat from './MessageChat';
import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { chatRoomState, messageState } from '../atom';
import styled from 'styled-components';

const MessageChatForm = () => {
  const messageWrapperRef = useRef<HTMLUListElement>(null);
  const { message, currentUser } = useRecoilValue(chatRoomState);
  const messageData = useRecoilValue(messageState);

  const scrollToBottom = () => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop =
        messageWrapperRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [message]);
  return (
    <Wrapper ref={messageWrapperRef}>
      {messageData[0].messages.map((msg) => (
        <MessageChatContainer
          key={msg.id}
          isUser={msg.user.name === currentUser.name}
        >
          <MessageChat key={msg.id} message={msg} />
        </MessageChatContainer>
      ))}
      {message.map((msg) => (
        <MessageChatContainer
          key={msg.id}
          isUser={msg.user.name === currentUser.name}
        >
          <MessageChat key={msg.id} message={msg} />
        </MessageChatContainer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 67%;
  overflow: auto;
  padding: 1rem 0.8rem 0 0.8rem;
  ::-webkit-scrollbar {
    width: 0.9rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
  }
  background-color: #fafa5c;
`;

const MessageChatContainer = styled.section<{ isUser: boolean }>`
  display: flex;
  justify-content: ${({ isUser }) => isUser && 'flex-end'};
`;

export default MessageChatForm;
