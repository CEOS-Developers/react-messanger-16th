import { IMessageType } from '../interface';
import { useRecoilValue } from 'recoil';
import { chatRoomState } from '../atom';
import styled, { css } from 'styled-components';

const MessageChat = ({ message }: { message: IMessageType }) => {
  const { currentUser } = useRecoilValue(chatRoomState);
  const isUser = message.user.id === currentUser.id;
  console.log(isUser);
  console.log(currentUser.id);
  console.log(message.user.id);
  return (
    <MessageBox isUser={isUser}>
      <section>
        <MessageProfAll>
          <MessageUser isUser={isUser}>{message.user.name}</MessageUser>
          <Messageimg isUser={isUser} _id={message.user.id}></Messageimg>
        </MessageProfAll>
      </section>
      <MessageText isUser={isUser}>{message.text}</MessageText>
      <MessageTime isUser={isUser}>{message.time}</MessageTime>
    </MessageBox>
  );
};

const MessageProfAll = styled.section`
  display: flex;
  flex-direction: column;
`;

const Messageimg = styled.img<{ isUser: boolean; _id: number }>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  ${({ _id }) =>
    _id === 0
      ? css`
          background-size: cover;
          background-image: url(https://hjm79.top/wp-content/uploads/2022/06/zzal1.jpeg);
        `
      : css`
          background-size: cover;
          background-image: url(https://blog.kakaocdn.net/dn/dowIkh/btrdtJZG3Eh/74NuD1tiFw7QzhqxOZ2Po0/img.png);
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
  ${({ isUser }) =>
    isUser
      ? css`
          border-radius: 0.5rem 0 0.5rem 0.5rem;
          background-color: pink;
          color: #ffffff;
          font-weight: bold;
        `
      : css`
          border-radius: 0 0.5rem 0.5rem 0.5rem;
          background-color: #f1f1f3;
          font-weight: bold;
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
          font-weight: bold;
        `
      : css`
          margin-left: 0.5rem;
          font-weight: bold;
        `}
`;

export default MessageChat;
