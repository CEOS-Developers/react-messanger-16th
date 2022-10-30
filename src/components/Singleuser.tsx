import { Chat, UserInformation } from "../interfaces/interface";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { chatState, FriendPageState, nowRoomIdState } from "../store/atom";

const SingleUser = (user: UserInformation) => {
  const setNowRoomId = useSetRecoilState(nowRoomIdState);
  const isFriendPage = useRecoilValue(FriendPageState);
  const chatInformation = useRecoilValue(chatState);

  const filteredChatRoom = chatInformation.find(
    (chatroom) => chatroom.roomid === user.userid - 1
  );

  const emptyChat: Chat = {
    userid: 0,
    chatid: 0,
    myAccount: true,
    chat: "",
    time: "00:00",
  };

  const filteredChat =
    user.userid === 0 ? [emptyChat] : filteredChatRoom!.chats;

  const lastChat = filteredChat![filteredChat.length - 1].chat;
  const lastTime = filteredChat![filteredChat.length - 1].time;

  return (
    <>
      <UserWrapper onClick={() => setNowRoomId(user.userid - 1)}>
        <ProfileImage
          src={`${process.env.PUBLIC_URL}/images/${user.userid}.jpg`}
        />
        <div>
          <UserName>{user.name}</UserName>
          {isFriendPage ? (
            <DetailMessage>{user.statusMessage}</DetailMessage>
          ) : (
            <ChatWrapper>
              <DetailMessage>{lastChat}</DetailMessage>
              <Time>{lastTime}</Time>
            </ChatWrapper>
          )}
        </div>
      </UserWrapper>
      {isFriendPage ? <></> : <Line />}
    </>
  );
};

export default SingleUser;

const UserWrapper = styled.div`
  display: flex;
  flex- direction: "row";

`;

const UserName = styled.div`
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
`;

const DetailMessage = styled.div`
  font-size: 0.8rem;
`;

const ProfileImage = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  margin: 0.5rem;
  border-radius: 100%;
  border: double pink red;
`;

const Time = styled.div`
  font-size: 0.5rem;
  color: #323232;
`;

const ChatWrapper = styled.div`
  display: flex;
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid #8c8c8c;
  color: #000;
  width: 80%;
`;
