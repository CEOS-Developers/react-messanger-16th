import { Chat } from "../interface";
import ChatItem from "./ChatItem";

interface ChatListProps {
  chats: Chat[];
}

const ChatList = ({ chats }: ChatListProps) => {
  return (
    <>
      {chats.map((chat) => (
        <ChatItem chat={chat} />
      ))}
    </>
  );
};

export default ChatList;
