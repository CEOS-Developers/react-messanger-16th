import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { nowRoomStore, chatStore, nowUserStore } from "../store/atom";

const MessageList = () => {
  // const roomData = messageData.chatrooms.filter((v) => v.roomid === 1);
  const [chatRoom, setChatRoom] = useRecoilState(chatStore);
  const [nowRoomId, setNowRoomId] = useRecoilState(nowRoomStore);
  const [nowUser, setnowUser] = useRecoilState(nowUserStore);

  const nowRoomData = chatRoom.filter((v) => v.roomid === nowRoomId);
  console.log("aasa", nowRoomData);

  const messageListRef = useRef<HTMLUListElement>(null);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatRoom]);

  console.log("recoil chatRoom", chatRoom);
  return (
    <ChatWrapper ref={messageListRef}>
      {nowRoomData[0].chats.map((v) => (
        <BubbleWrapper
          key={v.chatid}
          userid={v.userid}
          myAccount={v.myAccount}
          nowUser={nowUser}
        >
          <Bubble
            key={v.chatid}
            userid={v.userid}
            myAccount={v.myAccount}
            nowUser={nowUser}
          >
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
  userid: number;
  myAccount: boolean;
  nowUser: boolean;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.myAccount === props.nowUser ? "row-reverse" : "row"};
`;

// 프로필 사진...

const Bubble = styled.div<{
  userid: number;
  myAccount: boolean;
  nowUser: boolean;
}>`
  background: ${(props) =>
    props.myAccount === props.nowUser
      ? "linear-gradient(180deg, #ffffff 0%, #aed1fc 100%)"
      : "linear-gradient(180deg, #ffffff 0%, #9de74f 100%)"};
  border-radius: ${(props) =>
    props.myAccount === props.nowUser
      ? " 25px 0px 25px 25px"
      : "0px 25px 25px 25px"};
  border: 1px solid #000000;

  padding: 0.5rem;
  margin: 0.5rem;
`;

// 시간...
const Time = styled.div``;

export default MessageList;
