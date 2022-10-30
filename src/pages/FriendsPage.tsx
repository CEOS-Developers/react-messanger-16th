import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SingleUser from "../components/SingleUser";
import UserList from "../components/UserList";
import { FriendPageState, myInfoSelector } from "../store/atom";

const FriendsPage = () => {
  const setIsFriendPage = useSetRecoilState(FriendPageState);
  const myInfo = useRecoilValue(myInfoSelector);
  console.log(myInfo);
  setIsFriendPage(true);
  return (
    <FriendsPageContainer>
      <Header leftChild="<" textChild="Profiles" rightChild="🔍" />
      <h2>me</h2>
      <Line />
      <SingleUser {...myInfo!} />
      <h2>friends</h2>
      <Line />
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

const Line = styled.hr`
  border: none;
  border-top: 1px solid #8c8c8c;
  color: #000;
  width: 90%;
`;
export default FriendsPage;
