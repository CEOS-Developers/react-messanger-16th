import styled from "styled-components";
import { Chat, User } from "../interface";
import ChatItem from "./ChatItem";

interface ChatListProps {
  curUser: number;
  chats: Chat[];
  users: User[];
}

const ChatList = ({ curUser, chats, users }: ChatListProps) => {
  return (
    <Wrapper>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} sender={users[chat.senderId]} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 450px;
  overflow: auto;
  background-color: skyblue;
`;

export default ChatList;
