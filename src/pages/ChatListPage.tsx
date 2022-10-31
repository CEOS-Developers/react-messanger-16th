import styled from "styled-components";
import ChatList from "../components/ChatList";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const ChatListPage = () => {
  return (
    <ChatListContainer>
      <Header leftChild="<" textChild="My Chats" rightChild="⋮" />
      <ChatList />
      <Navigation />
    </ChatListContainer>
  );
};

const ChatListContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(#fffe8d, white 30%, white 90%, #fffe8d);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ChatListPage;