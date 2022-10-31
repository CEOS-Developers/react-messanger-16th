import { UserInformation } from "../interfaces/interface";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { nowRoomIdState } from "../store/atom";

const SingleUser = ({
  user,
  isFriendPage,
  lastChat,
  lastTime,
}: {
  isFriendPage: boolean;
  user: UserInformation;
  lastChat?: string;
  lastTime?: string;
}) => {
  const setNowRoomId = useSetRecoilState(nowRoomIdState);
  const detailMessage = isFriendPage ? user.statusMessage : lastChat;
  const sendTime = isFriendPage ? "" : lastTime;

  return (
    <>
      <UserWrapper onClick={() => setNowRoomId(user.userid - 1)}>
        <ProfileImage
          src={`${process.env.PUBLIC_URL}/images/${user.userid}.jpg`}
        />
        <div>
          <UserName>{user.name}</UserName>
          <ChatWrapper>
            <DetailMessage>{detailMessage}</DetailMessage>
            <Time>{sendTime}</Time>
          </ChatWrapper>
        </div>
      </UserWrapper>
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
