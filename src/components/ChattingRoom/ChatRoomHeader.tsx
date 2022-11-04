import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentId, roomId } from "../../store/recoil/recoil";
import UserData from "../../store/UserData.json";
import UserProfile from "../profile/HedaerProfile";

function ChatRoomHeader() {
  let userData = UserData.users;
  let room = useRecoilValue(roomId);
  const [userId, setUserId] = useRecoilState(currentId);

  // const newUserData = UserData.users.filter((user) => {
  //   user.userId === 0 || user.userId === room;
  // });

  return (
    <Header>
      {userData.map((user) =>
        user.userId === 0 || user.userId === room ? (
          <UserProfile
            key={user.userId}
            userImage={user.profileImage}
            userName={user.userName}
            userId={user.userId}
          />
        ) : (
          <></>
        )
      )}
      <Link to="/Chat" onClick={() => setUserId(0)}>
        <CloseBtn />
      </Link>
    </Header>
  );
}

const Header = styled.div`
  position: relative;
  margin: 0 auto;
  background: #ffffff;
  height: 6rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  display: flex;
  flex-direction: row;
`;
const CloseBtn = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  background: #fa5858;
  border-radius: 1rem;
`;

export default ChatRoomHeader;
