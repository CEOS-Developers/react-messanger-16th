import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import UserList from "../components/UserList";
import { FriendPageState } from "../store/atom";

const FriendsPage = () => {
  const setIsFriendPage = useSetRecoilState(FriendPageState);
  setIsFriendPage(true);
  return (
    <FriendsPageContainer>
      <Header leftChild="<" textChild="Profiles" rightChild="🔍" />
      <UserList />
      <Navigation />
    </FriendsPageContainer>
  );
};
const FriendsPageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(#bed7f9, white 30%, white 90%, #bed7f9);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default FriendsPage;
