import { Chat, User } from "../interface";
import ChatItem from "./ChatItem";

interface ChatListProps {
  curUser: number;
  chats: Chat[];
  users: User[];
}

const ChatList = ({ curUser, chats, users }: ChatListProps) => {
  return (
    <>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} sender={users[chat.senderId]} />
      ))}
    </>
  );
};

export default ChatList;
