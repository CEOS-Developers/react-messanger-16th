import styled from "styled-components";
import { Chat } from "../interface";
import { ProfileImage } from "../StyledComponents";

interface ChatItemProps {
  chat: Chat;
}

const ChatItem = ({ chat }: ChatItemProps) => {
  return (
    <Wrapper>
      <ProfileImage />
      <TextWrapper>
        <p>name</p>
        <p>text</p>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const ChatBalloon = styled.div``;
const TextWrapper = styled.div``;

export default ChatItem;
