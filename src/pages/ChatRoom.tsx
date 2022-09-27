import styled from "styled-components";
import Header from "../components/Header";
import MessageInput from "../components/MessageInput";

const ChatRoom = () => {
  return (
    <ChatRoomContainer>
      <Header headText="NewJeans 👖" leftChild="<" rightChild="⋮" />
      <MessageInput />
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(yellow, white 30%, white 90%, yellow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ChatRoom;
