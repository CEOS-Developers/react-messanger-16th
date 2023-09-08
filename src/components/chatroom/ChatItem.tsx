import styled from "styled-components";
import { Chat, User } from "../../common/interface";
import { ProfileImage } from "../Item";

interface ChatItemProps {
  chat: Chat;
  isCurUser: boolean;
  noProfile: boolean;
  sender: User;
}

const ChatItem = ({ chat, isCurUser, sender, noProfile }: ChatItemProps) => {
  const time = String(new Date(chat.date).getHours()).padStart(2, "0");
  const minute = String(new Date(chat.date).getMinutes()).padStart(2, "0");

  return (
    <Wrapper isCurUser={isCurUser} isMargin={!noProfile}>
      {isCurUser ? (
        <>
          <ChatWrapper>
            <div className="time">
              {time}:{minute}
            </div>
            <ChatBalloon isCurUser={true}>{chat.text}</ChatBalloon>
          </ChatWrapper>
        </>
      ) : (
        <>
          {noProfile ? (
            <ProfileImage src={sender.profileImage} noImage={true} />
          ) : (
            <ProfileImage src={sender.profileImage} />
          )}
          <ContentWrapper>
            {!noProfile && <div className="name">{sender.name}</div>}
            <ChatWrapper>
              <ChatBalloon isCurUser={false}>{chat.text}</ChatBalloon>
              <div className="time">
                {time}:{minute}
              </div>
            </ChatWrapper>
          </ContentWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isCurUser: boolean; isMargin: boolean }>`
  display: flex;
  gap: 10px;
  justify-content: ${({ isCurUser }: { isCurUser: boolean }) =>
    isCurUser ? "flex-end" : "flex-start"};
  width: 100%;
  margin-top: ${({ isMargin }: { isMargin: boolean }) =>
    isMargin ? "20px" : "0px"};
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
  .time {
    font-size: 8px;
    color: grey;
  }
`;
const ChatBalloon = styled.div`
  background-color: ${({ isCurUser }: { isCurUser: boolean }) =>
    isCurUser ? "yellow" : "white"};
  padding: 10px;
  border-radius: 5px;
  word-break: break-all;
`;

export default ChatItem;
