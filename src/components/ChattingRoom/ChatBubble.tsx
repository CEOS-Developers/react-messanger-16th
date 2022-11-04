import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { chat } from "../../interface/interface";
import { currentId } from "../../store/recoil/recoil";
import UserData from "../../store/UserData.json";
import { UserProfileImage } from "../style";

interface bubbleStyle {
  color?: string;
  flexDirection?: string;
}

function ChatBubble({ chatId, senderId, receiverId, text, time }: chat) {
  const currentUser = useRecoilValue(currentId);

  return (
    <>
      {currentUser === senderId ? (
        <BubbleList justifyContent="flex-end">
          <TimeStyle>{time}</TimeStyle>
          <div>
            <UserName>{UserData.users[senderId].userName}</UserName>
            <Bubble>{text}</Bubble>
          </div>
        </BubbleList>
      ) : (
        <BubbleList>
          <UserProfileImage
            src={`img/user${senderId}.png`}
            width={2}
            height={2}
          />
          <div style={{ marginLeft: "0.3rem" }}>
            <UserName flex="row">{UserData.users[senderId].userName}</UserName>
            <Bubble color="#fff" flexDirection="row">
              {text}
            </Bubble>
          </div>
          <TimeStyle>{time}</TimeStyle>
        </BubbleList>
      )}
    </>
  );
}

const BubbleList = styled.div<{ justifyContent?: string }>`
  display: flex;
  justify-content: ${((props) => props.justifyContent) || "flex-start"};
  // justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;

const Bubble = styled.div<bubbleStyle>`
  display: flex;
  width: auto;
  border-radius: 0.3rem;
  background-color: ${(props) => props.color || "#dee2e6"};
  font-size: 13px;
  flex-direction: ${(props) => props.flexDirection || "row-reverse"};
  padding: 8px;
`;

const UserName = styled.div<{ flex?: string }>`
  font-size: 0.5rem;
  margin-bottom: 0.1rem;
  display: flex;
  flex-direction: ${(props) => props.flex || "row-reverse"};
`;

const TimeStyle = styled.div`
  font-size: 0.4rem;
  margin-top: 2rem;
  padding: 0.3rem;
`;

export default ChatBubble;
