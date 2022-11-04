import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Navigation from "../components/Navi";
import FriendsProfile from "../components/list/FriendsProfile";
import useInput from "../hooks/useInput";
import { roomId } from "../store/recoil/recoil";
import UserData from "../store/UserData.json";
import { Container, ListWrap, StyledLink } from "../components/style";

interface DivStyle {
  color?: string;
  padding?: number;
  border?: number;
  font?: number;
}

const FriendsList = () => {
  let userData = UserData.users;
  const [roomNum, setRoomNum] = useRecoilState(roomId);
  const [search, setSearch] = useState(false);
  const { text, handleChange } = useInput("");
  let friendsData = userData.filter((user) => user.userId != 0);

  return (
    <Container>
      <Navigation />
      <ListWrap>
        <>
          <Div font={1}>친구</Div>
          <Search
            src="/img/search.png"
            alt="search"
            onClick={() => setSearch((prev) => !prev)}
          />
          {search === true ? (
            <>
              <Input
                onChange={handleChange}
                value={text}
                placeholder="이름을 검색해주세요"
              />
              {friendsData
                .filter((i) => i.userName.includes(text))
                .map((people) => (
                  <StyledLink
                    to="/ChatRoom"
                    state={{ room: people.userId }}
                    onClick={() => {
                      setRoomNum(people.userId);
                    }}
                  >
                    <FriendsProfile
                      userID={people.userId}
                      profileImg={people.profileImage}
                      name={people.userName}
                      PersonalMessage={people.personalMessage}
                    />
                  </StyledLink>
                ))}
            </>
          ) : (
            <>
              <Div padding={0.8} border={1}>
                <FriendsProfile
                  userID={userData[0].userId}
                  profileImg={userData[0].profileImage}
                  name={userData[0].userName}
                  PersonalMessage={userData[0].personalMessage}
                />
              </Div>
              <Div padding={0.5} color="#7d7d7d">
                친구 {userData.length - 1}
              </Div>

              {friendsData.map((people) => (
                <StyledLink
                  to="/ChatRoom"
                  state={{ room: people.userId }}
                  onClick={() => {
                    setRoomNum(people.userId);
                  }}
                >
                  <FriendsProfile
                    key={people.userId}
                    userID={people.userId}
                    profileImg={people.profileImage}
                    name={people.userName}
                    PersonalMessage={people.personalMessage}
                  />
                </StyledLink>
              ))}
            </>
          )}
        </>
      </ListWrap>
    </Container>
  );
};

const Div = styled.div<DivStyle>`
  color: ${(props) => props.color || "#000"};
  font-weight: bold;
  padding: ${(props) => props.padding || 0}rem 0;
  border-bottom: ${(props) => props.border || 0}px solid lightgray;
  font-size: ${(props) => props.font || 0.5}rem;
`;

const Search = styled.img`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 1rem;
  top: 1.1rem;
`;
const Input = styled.input`
  width: 100%;
  margin: 1.5rem 0;
  background: #f2f2f2;
`;

export default FriendsList;
