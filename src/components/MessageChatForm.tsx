import MessageChat from './MessageChat';
import { useEffect, useRef } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { chatRoomState, idFilterState, messageState, userState } from '../atom';
import styled from 'styled-components';
import Room from '../pages/Room';
import { useParams } from 'react-router-dom';
import { IMessageType } from '../interface';

const MessageChatForm = () => {
  const messageWrapperRef = useRef<HTMLUListElement>(null);
  const { currentUser } = useRecoilValue(chatRoomState);

  //currentRoomId를 사용해서 room번호를 구분시켜줘야함. 이 id값은 버튼 누를때마다 바뀌어야 함!그래서 그 바뀐번호로 렌더링해줘야함
  const messageData = useRecoilValue(messageState);
  let params = useParams();

  const num = params.id;
  const realNum = Number(num) - 1;
  console.log(realNum);

  //room 번호대로 라우팅 페이지 만들어서 그거대로 messageData에 접근!
  const scrollToBottom = () => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop =
        messageWrapperRef.current.scrollHeight;
    }
  };
  const realMessage = useRecoilValue(idFilterState);
  console.log(realMessage);

  const UserList = useRecoilValue(userState);

  useEffect(() => {
    scrollToBottom();
  }, [messageData]);

  return (
    <Wrapper ref={messageWrapperRef}>
      {messageData[realNum].messages.map((msg: IMessageType) => (
        <MessageChatContainer
          key={msg.id}
          isUser={msg.user.name === currentUser.name}
        >
          <MessageChat key={msg.id} messages={msg} />
        </MessageChatContainer>
      ))}
      {messageData[realNum].message.map((msg: IMessageType) => (
        <MessageChatContainer
          key={msg.id}
          isUser={msg.user.name === currentUser.name}
        >
          <MessageChat key={msg.id} messages={msg} />
        </MessageChatContainer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 72.5%;
  overflow: auto;
  padding: 1rem 0.8rem 0 0.8rem;
  ::-webkit-scrollbar {
    width: 0.9rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 1rem;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
  }
  background: black;
`;

const MessageChatContainer = styled.section<{ isUser: boolean }>`
  display: flex;
  justify-content: ${({ isUser }) => isUser && 'flex-end'};
`;

export default MessageChatForm;
