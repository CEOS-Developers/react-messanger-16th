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
  const { id, message, currentUser } = useRecoilValue(chatRoomState);
  const testRoom = useRecoilValue(chatRoomState);
  //currentRoomId를 사용해서 room번호를 구분시켜줘야함. 이 id값은 버튼 누를때마다 바뀌어야 함!그래서 그 바뀐번호로 렌더링해줘야함
  const messageData = useRecoilValue(messageState); //내가이름을 잘못 선정함 그냥 메세지 포함해서 채팅방 번호까지 포함
  let params = useParams();

  const num = params.id;
  const realNum = Number(num) - 1;
  console.log(realNum);
  const newData = messageData.filter((txt) => txt.id === Number(num));
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
      {messageData[realNum].messages.map(
        (
          msg: IMessageType //여기 부분을 filter함수 써서 id=param인것을 골라주면 될ㄷ듯??
        ) => (
          <MessageChatContainer
            key={msg.id}
            isUser={msg.user.name === currentUser.name}
          >
            <MessageChat key={msg.id} messages={msg} />
          </MessageChatContainer>
        )
      )}
      {messageData[realNum].message.map(
        (
          msg: IMessageType //여기 부분을 filter함수 써서 id=param인것을 골라주면 될ㄷ듯??
        ) => (
          <MessageChatContainer
            key={msg.id}
            isUser={msg.user.name === currentUser.name}
          >
            <MessageChat key={msg.id} messages={msg} />
          </MessageChatContainer>
        )
      )}
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
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
  }
  background-color: #3bb4e8;
`;

const MessageChatContainer = styled.section<{ isUser: boolean }>`
  display: flex;
  justify-content: ${({ isUser }) => isUser && 'flex-end'};
`;

export default MessageChatForm;
