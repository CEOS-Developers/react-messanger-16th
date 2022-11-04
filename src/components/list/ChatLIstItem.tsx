import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { profile } from "../../interface/interface";
import { chatList } from "../../store/recoil/recoil";
import { Name, NameWrap, ProfileContainer, ProfileImg, Msg } from "../style";

const ChatListItem = ({
  userID,
  profileImg,
  name,
  PersonalMessage,
}: profile) => {
  const chatting = useRecoilValue(chatList);

  let lastChatIndex = chatting[userID - 1].chat.length - 1;
  let lastChat = chatting[userID - 1].chat[lastChatIndex].text;
  let lastChatTime = chatting[userID - 1].chat[lastChatIndex].time;

  return (
    <ProfileContainer>
      <>
        <ProfileImg src={`/img/${profileImg}.png`} />
        <NameWrap>
          <Name>{name}</Name>
          <Msg>{lastChat}</Msg>
          <Time>{lastChatTime}</Time>
        </NameWrap>
      </>
    </ProfileContainer>
  );
};

const Time = styled.div`
  position: absolute;
  color: lightgray;
  font-size: 7px;
  right: 0rem;
  padding-bottom: 1rem;
`;

export default ChatListItem;
