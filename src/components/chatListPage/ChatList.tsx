import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  accountState,
  chatState,
  nowRoomIdState,
  userInformationState,
} from "../../store/atom";
import styled from "styled-components";
import { ChatRoom } from "../../interfaces/interface";
import SingleUser from "../SingleUser";
import { Link } from "react-router-dom";

const ChatList = () => {
  const userData = useRecoilState(userInformationState);
  const chatData = useRecoilValue(chatState);
  const setNowRoomId = useSetRecoilState(nowRoomIdState);
  const setUserAccount = useSetRecoilState(accountState);

  const getLastChat = (userId: number) => {
    const filteredChat = chatData.find(
      (chatroom) => chatroom.user === userId
    )!.chats;
    return filteredChat![filteredChat.length - 1];
  };

  const getUserData = (userId: number) => {
    const filteredUser = userData[0].find((user) => user.userid === userId);
    return filteredUser!;
  };

  const handleChatroomClick = (roomId: number) => {
    setNowRoomId(roomId);
    setUserAccount(true);
  };

  return (
    <ItemWrapper>
      {chatData.map((chatroom: ChatRoom, index: number) => (
        <Link
          to={`/room/${chatroom.roomid}`}
          onClick={() => handleChatroomClick(chatroom.roomid)}
          key={getLastChat(chatroom.user).chatid}
        >
          <SingleUser
            key={getLastChat(chatroom.user).chatid}
            user={getUserData(chatroom.user)}
            isFriendPage={false}
            lastChat={getLastChat(chatroom.user).chat}
            lastTime={getLastChat(chatroom.user).time}
          />
          <Line />
        </Link>
      ))}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.section`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background: #ccc;
  }
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid #8c8c8c;
  color: #000;
  width: 90%;
`;

export default ChatList;
