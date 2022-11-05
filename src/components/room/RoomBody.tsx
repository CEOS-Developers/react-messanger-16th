import styled from 'styled-components';
import useScrollDown from '../../hooks/useScrollDown';
import { IChat } from '../../states/interface';
import ChatItem from './ChatItem';
import { ReactComponent as Bottom } from '../../assets/icons/bottom.svg';

const RoomBody = ({ chatList }: { chatList: IChat[] }) => {
  const { bodyRef, handleToBottom, handleScroll, bodyScrollY } =
    useScrollDown(chatList);

  return (
    <Wrapper ref={bodyRef} onScroll={handleScroll}>
      {chatList.map((chat, index) => (
        <ChatItem
          key={chat.chatId}
          chat={chat}
          isContinual={chatList[index - 1]?.userId === chat.userId}
        />
      ))}
      {bodyScrollY > 1000 && (
        <GoToBottom onClick={handleToBottom}>
          <Bottom />
        </GoToBottom>
      )}
    </Wrapper>
  );
};

export default RoomBody;

const Wrapper = styled.div`
  background-color: #8989bb;
  background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);
  padding: 0 12px;
  overflow-y: scroll;
`;

const GoToBottom = styled.button`
  position: sticky;
  bottom: 20px;
  float: right;

  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 5px;

  &:active {
    background-color: #f3f3f3;
    box-shadow: none;
  }

  & > svg {
    margin-top: 5px;
  }
`;
