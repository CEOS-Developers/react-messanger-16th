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
        <UserWrapper
          key={chat.chatid}
          myAccount={chat.myAccount}
          userAccount={userAccount}
        >
          <ProfileImage
            src={`${process.env.PUBLIC_URL}/images/${chat.userid}.jpg`}
          />
          <BubbleWrapper>
            <Bubble
              key={chat.chatid}
              myAccount={chat.myAccount}
              userAccount={userAccount}
            >
              {chat.chat}
            </Bubble>
          </BubbleWrapper>
          <Time>{chat.time}</Time>
        </UserWrapper>
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

const UserWrapper = styled.div<{
  myAccount: boolean;
  userAccount: boolean;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.myAccount === props.userAccount ? "row-reverse" : "row"};
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 25px;
  padding: 0.5rem;
`;

const BubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bubble = styled.span<{
  myAccount: boolean;
  userAccount: boolean;
}>`
  font-size: 0.8rem;
  padding: 0.5rem;

  background: ${(props) =>
    props.myAccount === props.userAccount
      ? "linear-gradient(180deg, #ffffff 0%, #aed1fc 100%)"
      : "linear-gradient(180deg, #ffffff 0%, #9de74f 100%)"};
  border-radius: ${(props) =>
    props.myAccount === props.userAccount
      ? " 25px 0px 25px 25px"
      : "0px 25px 25px 25px"};
  border: 1px solid #000000;
`;

// 시간...
const Time = styled.div`
  font-size: 0.5rem;
  color: #323232;

  margin: 0.2rem;
  padding-top: 1.2rem;
`;

export default MessageList;
