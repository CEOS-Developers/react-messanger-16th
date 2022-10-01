import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Chat } from "../interfaces/interface";
import { chatRoomSelector } from "../store/atom";
import SingleMessage from "./SingleMessage";

const MessageList = () => {
  const filteredChatRoom = useRecoilValue(chatRoomSelector);

  const messageListRef = useRef<HTMLUListElement>(null);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [filteredChatRoom]);

  return (
    <ChatWrapper ref={messageListRef}>
      {filteredChatRoom!.chats.map((chat: Chat) => (
        <SingleMessage key={chat.chatid} {...chat} />
      ))}
    </ChatWrapper>
  );
};

const ChatWrapper = styled.section`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background: #ccc;
  }
`;

export default MessageList;
