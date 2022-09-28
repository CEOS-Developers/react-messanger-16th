import styled from "styled-components";
import messageData from "../assets/chatMessage.json";
import { Chat, ChatMessage } from "../interfaces/interface";

const MessageList = () => {
  console.log("dd", messageData.chatrooms);
  const roomData = messageData.chatrooms.filter((v) => v.roomid === 1);
  console.log("roomData", roomData);

  return (
    <ChatWrapper>
      {roomData[0].chats.map((v) => (
        <BubbleWrapper key={v.chatid} userid={v.userid}>
          <Bubble key={v.chatid} userid={v.userid}>
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

const BubbleWrapper = styled.div<{ userid: number }>`
  display: flex;
  flex-direction: ${(props) => (props.userid === 0 ? "row-reverse" : "row")};
`;

// 프로필 사진...

const Bubble = styled.div<{ userid: number }>`
  background: ${(props) =>
    props.userid === 0
      ? "linear-gradient(180deg, #ffffff 0%, #aed1fc 100%)"
      : "linear-gradient(180deg, #ffffff 0%, #9de74f 100%)"};
  border-radius: ${(props) =>
    props.userid === 0 ? " 25px 0px 25px 25px" : "0px 25px 25px 25px"};
  border: 1px solid #000000;

  padding: 0.5rem;
  margin: 0.5rem;
`;

// 시간...
const Time = styled.div``;

export default MessageList;
