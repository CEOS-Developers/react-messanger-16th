import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import UserList from "../components/UserList";
import { FriendPageState } from "../store/atom";

const ChatListPage = () => {
  const setIsFriendPage = useSetRecoilState(FriendPageState);
  setIsFriendPage(false);
  return (
    <ChatListContainer>
      <Header leftChild="<" textChild="Chats" rightChild="⋮" />
      <UserList />
      <Navigation />
    </ChatListContainer>
  );
};

const ChatListContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(yellow, white 30%, white 90%, yellow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ChatListPage;
