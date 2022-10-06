import { useRecoilState } from "recoil";
import styled from "styled-components";
import Header from "../components/Header";
import MessageInput from "../components/MessageInput";
import MessageList from "../components/MessageList";
import { chatState } from "../store/atom";

const ChatRoom = () => {
  const roomData = useRecoilState(chatState);

  console.log("roomData", roomData);

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
  background: linear-gradient(yellow, white 30%, white 90%, yellow);
  display: flex;
  flex-direction: column;
`;

export default ChatRoom;
