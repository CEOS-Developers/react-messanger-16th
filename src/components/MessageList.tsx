import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { accountState, chatRoomSelector } from "../store/atom";

const MessageList = () => {
  const filteredChatRoom = useRecoilValue(chatRoomSelector);
  const userAccount = useRecoilValue(accountState);

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
      {filteredChatRoom!.chats.map((chat) => (
        <BubbleWrapper
          key={chat.chatid}
          myAccount={chat.myAccount}
          userAccount={userAccount}
        >
          <Bubble
            key={chat.chatid}
            myAccount={chat.myAccount}
            userAccount={userAccount}
          >
            {chat.chat}
          </Bubble>
        </BubbleWrapper>
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

const BubbleWrapper = styled.div<{
  myAccount: boolean;
  userAccount: boolean;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.myAccount === props.userAccount ? "row-reverse" : "row"};
`;

// 프로필 사진...

const Bubble = styled.div<{
  myAccount: boolean;
  userAccount: boolean;
}>`
  background: ${(props) =>
    props.myAccount === props.userAccount
      ? "linear-gradient(180deg, #ffffff 0%, #aed1fc 100%)"
      : "linear-gradient(180deg, #ffffff 0%, #9de74f 100%)"};
  border-radius: ${(props) =>
    props.myAccount === props.userAccount
      ? " 25px 0px 25px 25px"
      : "0px 25px 25px 25px"};
  border: 1px solid #000000;

  padding: 0.5rem;
  margin: 0.5rem;
`;

// 시간...
const Time = styled.div``;

export default MessageList;
