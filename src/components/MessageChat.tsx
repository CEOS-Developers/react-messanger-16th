import { IMessageType } from '../interface';
import { useRecoilValue } from 'recoil';
import { chatRoomState } from '../atom';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';

const MessageChat = ({ messages }: { messages: IMessageType }) => {
  const { currentUser } = useRecoilValue(chatRoomState);

  const isUser = messages.user.id === currentUser.id;

  console.log(isUser);
  console.log(currentUser.id);
  console.log(messages.user.id);

  let params = useParams();
  let num = params.id;
  console.log(num);

  return (
    <MessageBox isUser={isUser}>
      <section>
        <MessageUser isUser={isUser}></MessageUser>
        <MessageProfAll>
          <Messageimg
            isUser={isUser}
            _id={messages.user.id}
            _currentUserId={currentUser.id}
            src={`/img/${messages.user.id}.png`}
          />
          <MessageText isUser={isUser}>{messages.text}</MessageText>
        </MessageProfAll>
      </section>

      <MessageTime isUser={isUser}>{messages.time}</MessageTime>
    </MessageBox>
  );
};

const MessageProfAll = styled.section`
  display: flex;
  flex-direction: column;
`;

const Messageimg = styled.img<{
  isUser: boolean;
  _id: number;
  _currentUserId: number;
}>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-size: cover;

  ${({ _id, _currentUserId }) =>
    _id === _currentUserId &&
    css`
      align-self: flex-end;
    `}
`;

const MessageTime = styled.p<{ isUser: boolean }>`
  font-size: 0.5rem;
  color: lightgrey;
  display: flex;
  align-items: flex-end;
  ${({ isUser }) =>
    isUser
      ? css`
          margin-left: 0.5rem;
        `
      : css`
          margin-right: 0.5rem;
        `}
`;

const MessageBox = styled.section<{ isUser: boolean }>`
  display: flex;
  flex-direction: ${({ isUser }) => isUser && 'row-reverse'};
  padding-bottom: 1rem;
`;

const MessageText = styled.p<{ isUser: boolean }>`
  padding: 0.65rem;

  font-size: 0.75rem;
  margin: 0.4rem;
  margin-top: 0.1px;
  ${({ isUser }) =>
    isUser
      ? css`
          border-radius: 0.5rem 0 0.5rem 0.5rem;
          background-color: #337de4;
          color: #ffffff;
          font-weight: bold;
          margin-right: 40px;
        `
      : css`
          border-radius: 0 0.5rem 0.5rem 0.5rem;
          background-color: #f1f1f3;
          font-weight: bold;
          margin-left: 40px;
        `};
`;

const MessageUser = styled.p<{ isUser: boolean }>`
  font-size: 0.5rem;
  color: white;
  margin: 0px;
  display: flex;
  ${({ isUser }) =>
    isUser
      ? css`
          justify-content: flex-end;
          margin-right: 0.2rem;
          font-weight: bold;
        `
      : css`
          margin-left: 0.2rem;
          font-weight: bold;
        `}
`;

export default MessageChat;
