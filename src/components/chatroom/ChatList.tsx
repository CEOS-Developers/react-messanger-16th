import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Chat, User } from "../../common/interface";
import ChatItem from "./ChatItem";

interface ChatListProps {
  curUser: number;
  chats: Chat[];
  users: User[];
}

const ChatList = ({ curUser, chats, users }: ChatListProps) => {
  // 채팅이 업데이트될 때마다 아래로 스크롤
  const chatListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
    console.log("스크롤!");
  }, [chats]);

  return (
    <Wrapper ref={chatListRef}>
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          isCurUser={curUser === chat.senderId}
          chat={chat}
          sender={users[chat.senderId]}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
  height: 65%;
  overflow: auto;
  background-color: powderblue;

  /* 스크롤바 커스텀*/
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
  }
`;

export default ChatList;
