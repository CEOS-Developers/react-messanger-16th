import { useRecoilState } from "recoil";
import ChatListItem from "../components/list/ChatLIstItem";
import Navigation from "../components/Navi";
import { Container, ListDiv, ListWrap, StyledLink } from "../components/style";
import { currentId, roomId } from "../store/recoil/recoil";
import UserData from "../store/UserData.json";

const ChatList = () => {
  let userData = UserData.users;
  const [roomNum, setRoomNum] = useRecoilState(roomId);

  return (
    <Container>
      <Navigation />
      <ListWrap>
        <ListDiv>채팅</ListDiv>
        {userData.map((people) =>
          people.userId != 0 ? (
            <StyledLink
              to="/ChatRoom"
              style={{ textDecoration: "none", color: "#000" }}
              state={{ room: people.userId }}
              onClick={() => {
                setRoomNum(people.userId);
              }}
            >
              <ChatListItem
                key={people.userId}
                userID={people.userId}
                profileImg={people.profileImage}
                name={people.userName}
                PersonalMessage={people.personalMessage}
              />
            </StyledLink>
          ) : (
            <></>
          )
        )}
      </ListWrap>
    </Container>
  );
};

export default ChatList;
