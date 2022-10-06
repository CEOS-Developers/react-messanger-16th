import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { chatState, nowRoomIdState } from "../store/atom";

const ChatListPage = () => {
  const roomData = useRecoilState(chatState);
  const setNowRoomId = useSetRecoilState(nowRoomIdState);
  console.log(roomData);
  return (
    <ChatListContainer>
      <Header leftChild="<" rightChild="⋮" />
      {roomData[0].map((room) => (
        <Link to={`/room/${room.roomid}`} key={room.roomid}>
          <div onClick={() => setNowRoomId(room.roomid)}>{room.roomid}</div>
        </Link>
      ))}
      <p>채팅 목록 페이지 </p>
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
