import styled from "styled-components";
import { Chat, User } from "../interface";
import { ProfileImage } from "../StyledComponents";

interface ChatItemProps {
  chat: Chat;
  sender: User;
}

const ChatItem = ({ chat, sender }: ChatItemProps) => {
  const time = String(chat.date.getHours()).padStart(2, "0");
  const minute = String(chat.date.getMinutes()).padStart(2, "0");
  return (
    <Wrapper>
      <ProfileImage src={sender.profileImage} />
      <ContentWrapper>
        {sender.name}
        <ChatWrapper>
          <ChatBalloon>{chat.text}</ChatBalloon>
          {time}:{minute}
        </ChatWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
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
  background-color: ${({ selected }: { selected?: boolean }) =>
    selected ? "yellow" : "white"};
  padding: 10px;
  border-radius: 5px;
`;

export default ChatItem;
