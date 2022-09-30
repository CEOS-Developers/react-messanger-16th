import { Chat } from "../interface";

interface ChatItemProps {
  chat: Chat;
}

const ChatItem = ({ chat }: ChatItemProps) => {
  return (
    <li>
      {chat.senderId} : {chat.text}
    </li>
  );
};

export default ChatItem;
