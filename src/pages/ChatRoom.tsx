import styled from "styled-components";
import Header from "../components/Header";
import MessageInput from "../components/chatRoom/MessageInput";
import MessageList from "../components/chatRoom/MessageList";

const ChatRoom = () => {
  return (
    <ChatRoomContainer>
      <Header leftChild="<" rightChild="⋮" />
      <MessageList />
      <MessageInput />
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(#fffe8d, white 30%, white 90%, #fffe8d);
  display: flex;
  flex-direction: column;
`;

export default ChatRoom;
