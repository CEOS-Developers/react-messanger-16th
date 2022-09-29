import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { nowRoomState, chatState, accountState } from "../store/atom";

const MessageList = () => {
  const [chatRoom, setChatRoom] = useRecoilState(chatState);
  const [nowRoomId, setNowRoomId] = useRecoilState(nowRoomState);
  const [account, setAccount] = useRecoilState(accountState);

  const nowRoomData = chatRoom.filter((v) => v.roomid === nowRoomId);

  const messageListRef = useRef<HTMLUListElement>(null);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatRoom]);

  return (
    <ChatWrapper ref={messageListRef}>
      {nowRoomData[0].chats.map((v) => (
        <BubbleWrapper key={v.chatid} myAccount={v.myAccount} account={account}>
          <Bubble key={v.chatid} myAccount={v.myAccount} account={account}>
            {v.chat}
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
`;

const BubbleWrapper = styled.div<{
  myAccount: boolean;
  account: boolean;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.myAccount === props.account ? "row-reverse" : "row"};
`;

// 프로필 사진...

const Bubble = styled.div<{
  myAccount: boolean;
  account: boolean;
}>`
  background: ${(props) =>
    props.myAccount === props.account
      ? "linear-gradient(180deg, #ffffff 0%, #aed1fc 100%)"
      : "linear-gradient(180deg, #ffffff 0%, #9de74f 100%)"};
  border-radius: ${(props) =>
    props.myAccount === props.account
      ? " 25px 0px 25px 25px"
      : "0px 25px 25px 25px"};
  border: 1px solid #000000;

  padding: 0.5rem;
  margin: 0.5rem;
`;

// 시간...
const Time = styled.div``;

export default MessageList;
