import styled from "styled-components";
import { Chat, User } from "../interface";
import { ProfileImage } from "../StyledComponents";

interface ChatItemProps {
  chat: Chat;
  isCurUser: boolean;
  sender: User;
}

const ChatItem = ({ chat, isCurUser, sender }: ChatItemProps) => {
  const time = String(chat.date.getHours()).padStart(2, "0");
  const minute = String(chat.date.getMinutes()).padStart(2, "0");
  return (
    <Wrapper isCurUser={isCurUser}>
      {isCurUser ? (
        <>
          <ChatWrapper>
            {time}:{minute}
            <ChatBalloon isCurUser={true}>{chat.text}</ChatBalloon>
          </ChatWrapper>
        </>
      ) : (
        <>
          <ProfileImage src={sender.profileImage} />
          <ContentWrapper>
            {sender.name}
            <ChatWrapper>
              <ChatBalloon isCurUser={false}>{chat.text}</ChatBalloon>
              {time}:{minute}
            </ChatWrapper>
          </ContentWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: ${({ isCurUser }: { isCurUser: boolean }) =>
    isCurUser ? "flex-end" : "flex-start"};
  width: 100%;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ChatWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;
const ChatBalloon = styled.div`
  background-color: ${({ isCurUser }: { isCurUser: boolean }) =>
    isCurUser ? "yellow" : "white"};
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  word-break: break-all;
`;

export default ChatItem;
