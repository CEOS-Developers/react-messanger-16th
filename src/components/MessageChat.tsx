import { IMessageType, IChatRoomItem } from '../interface';
import { useRecoilValue, selector, useRecoilState } from 'recoil';
import { chatRoomState, idFilterState, messageState } from '../atom';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';

const MessageChat = ({ messages }: { messages: IMessageType }) => {
  const { currentUser } = useRecoilValue(chatRoomState);
  const currentData = useRecoilValue(idFilterState);

  console.log(currentData);
  const isUser = messages.user.id === currentUser.id;
  console.log(isUser);
  console.log(currentUser.id);
  console.log(messages.user.id);
  console.log(currentData.messages[2]);

  let params = useParams();
  let num = params.id;
  console.log(num);
  const realNum = Number(num);

  //realNum이랑 id값을 같게 만들어 주면 될듯?selector이용해서?그래서 id값으로 각 채팅방 구분해보자! 내일!

  //currentRoomId를 가진 user정보를 불러와야하는듯?
  //selector이용해서 텍스트 값 가져오기?

  return (
    <MessageBox isUser={isUser}>
      <section>
        <MessageUser isUser={isUser}>{messages.user.name}</MessageUser>
        <MessageProfAll>
          <Messageimg
            isUser={isUser}
            _id={messages.user.id}
            _currentUserId={currentUser.id}
          ></Messageimg>
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

//확장성할 때 고칠 부분
const Messageimg = styled.img<{
  isUser: boolean;
  _id: number;
  _currentUserId: number;
}>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-size: cover;
  ${({ _id }) =>
    _id === 0
      ? css`
          background-image: url(https://hjm79.top/wp-content/uploads/2022/06/zzal1.jpeg);
        `
      : css`
          background-image: url(https://blog.kakaocdn.net/dn/dowIkh/btrdtJZG3Eh/74NuD1tiFw7QzhqxOZ2Po0/img.png);
        `}
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
  ${({ isUser }) =>
    isUser
      ? css`
          box-shadow: 1px 1px 30px grey;
          border-radius: 0.5rem 0 0.5rem 0.5rem;
          background-color: pink;
          color: #ffffff;
          font-weight: bold;
        `
      : css`
          box-shadow: 1px 1px 30px grey;
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
