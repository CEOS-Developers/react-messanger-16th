import { useRecoilState, useRecoilValue } from "recoil";
import { chatState, userInformationState } from "../store/atom";
import styled from "styled-components";
import { UserInformation } from "../interfaces/interface";
import SingleUser from "./SingleUser";
import { Link } from "react-router-dom";

const ChatList = () => {
  const userData = useRecoilState(userInformationState);
  const chatData = useRecoilValue(chatState);

  const getLastChat = (userId: number) => {
    const filteredChat = chatData.find(
      (chatroom) => chatroom.user === userId
    )!.chats;
    return filteredChat![filteredChat.length - 1];
  };

  const getRoomId = (userId: number) => {
    return chatData.find((chatroom) => chatroom.user === userId)!.roomid;
  };

  return (
    <ItemWrapper>
      {userData[0].map((user: UserInformation, index: number) =>
        index > 0 ? (
          <Link to={`/room/${getRoomId(user.userid)}`}>
            <SingleUser
              key={getLastChat(user.userid).chatid}
              user={user}
              isFriendPage={false}
              lastChat={getLastChat(user.userid).chat}
              lastTime={getLastChat(user.userid).time}
            />
            <Line />
          </Link>
        ) : (
          <div key={12443}></div>
        )
      )}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.section`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid #8c8c8c;
  color: #000;
  width: 80%;
`;

export default ChatList;
