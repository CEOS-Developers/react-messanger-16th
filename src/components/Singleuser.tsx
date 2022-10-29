import { UserInformation } from "../interfaces/interface";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { chatState, FriendPageState, nowRoomIdState } from "../store/atom";
import { Link } from "react-router-dom";

const SingleUser = (user: UserInformation) => {
  const setNowRoomId = useSetRecoilState(nowRoomIdState);
  const isFriendPage = useRecoilValue(FriendPageState);
  const chatInformation = useRecoilValue(chatState);

  console.log("chatInformation", chatInformation);
  const filteredChatRoom = chatInformation.find(
    (chatroom) => chatroom.roomid === user.userid - 1
  );
  const filteredChat = filteredChatRoom!.chats;
  console.log(filteredChatRoom);

  const lastChat = filteredChat![filteredChat.length - 1].chat;
  const lastTime = filteredChat![filteredChat.length - 1].time;

  return (
    <Link to={`/room/${user.userid - 1}`}>
      {/* 두 번째 클릭부터 링크가 이전 걸로 바뀜 모지... 들어가는 건 잘 됨 */}
      <UserWrapper onClick={() => setNowRoomId(user.userid - 1)}>
        <ProfileImage
          src={`${process.env.PUBLIC_URL}/images/${user.userid}.jpg`}
        />
        <div>
          <UserName>{user.name}</UserName>
          {isFriendPage ? (
            <DetailMessage>{user.statusMessage}</DetailMessage>
          ) : (
            //<DetailMessage>{user.statusMessage}</DetailMessage>
            <ChatWrapper>
              <DetailMessage>{lastChat}</DetailMessage>
              <Time>{lastTime}</Time>
            </ChatWrapper>
          )}
        </div>
      </UserWrapper>
    </Link>
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

//const ProfileImageWrapper = styled.div``;

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
