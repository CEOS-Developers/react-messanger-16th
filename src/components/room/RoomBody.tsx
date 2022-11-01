import styled from 'styled-components';
import { IChat } from '../../states/interface';
import ChatItem from './ChatItem';

const RoomBody = ({ chatList }: { chatList: IChat[] }) => {
  return (
    <Wrapper>
      {chatList.map((chat, index) => (
        <ChatItem
          key={chat.chatId}
          chat={chat}
          isContinual={chatList[index - 1]?.userId === chat.userId}
        />
      ))}
    </Wrapper>
  );
};

export default RoomBody;

const Wrapper = styled.div`
  background-color: #8989bb;
  background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);
  padding: 0 12px;
`;
