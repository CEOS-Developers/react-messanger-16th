import { IMessageType } from '../interface';
import { useRecoilValue } from 'recoil';
import { chatRoomState } from '../atom';
import styled, { css } from 'styled-components';

const MessageChat = ({ message }: { message: IMessageType }) => {
  const { currentUser } = useRecoilValue(chatRoomState);
  const isUser = message.user.id === currentUser.id;

  return (
    <MessageBox isUser={isUser}>
      <section>
        <MessageUser isUser={isUser}>{message.user.name}</MessageUser>
        <MessageText isUser={isUser}>{message.text}</MessageText>
      </section>
      <MessageTime isUser={isUser}>{message.time}</MessageTime>
    </MessageBox>
  );
};

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
  ${({ isUser }) =>
    isUser
      ? css`
          border-radius: 0.5rem 0 0.5rem 0.5rem;
          background-color: #1986fc;
          color: #ffffff;
        `
      : css`
          border-radius: 0 0.5rem 0.5rem 0.5rem;
          background-color: #f1f1f3;
        `};
`;

const MessageUser = styled.p<{ isUser: boolean }>`
  font-size: 0.75rem;
  margin: 0;
  display: flex;
  ${({ isUser }) =>
    isUser
      ? css`
          justify-content: flex-end;
          margin-right: 0.5rem;
        `
      : css`
          margin-left: 0.5rem;
        `}
`;

export default MessageChat;
