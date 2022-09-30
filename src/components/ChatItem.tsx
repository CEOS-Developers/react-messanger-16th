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
        <p>{sender.name}</p>
        <ChatWrapper>
          <ChatBalloon>{chat.text}</ChatBalloon>
          <p>
            {time}:{minute}
          </p>
        </ChatWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const ContentWrapper = styled.div``;
const ChatWrapper = styled.div``;
const ChatBalloon = styled.div``;

export default ChatItem;
