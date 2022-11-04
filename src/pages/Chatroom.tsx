import { useState, useRef, useCallback } from "react";
import styled from "styled-components";

import ChatList from "../components/chatroom/ChatList";
import InputForm from "../components/chatroom/InputForm";
import UserList from "../components/chatroom/UserList";

import { Chat, User } from "../common/interface";

import userData from "../data/userData.json";
import chatData from "../data/chatData.json";
import { useNavigate, useParams } from "react-router-dom";

function Chatroom() {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const roomId: number = parseInt(id!);

  const [curUser, setCurUser] = useState(1);
  const [users, setUsers] = useState<User[]>(userData.users);
  const [chats, setChats] = useState<Chat[]>(chatData.rooms[roomId].chats);

  const nextChatId = useRef(chats.length + 1);

  const onConcat = useCallback(
    (text: string) => {
      const chat = {
        id: nextChatId.current,
        senderId: curUser,
        text,
        date: String(new Date()),
      };
      setChats(chats.concat(chat));
      nextChatId.current++;
    },
    [chats, curUser]
  );

  const changeUser = (id: number) => {
    setCurUser(id);
  };

  return (
    <Wrapper>
      <button onClick={() => navigate(-1)} />
      <UserList curUser={curUser} users={users} changeUser={changeUser} />
      <ChatList curUser={curUser} users={users} chats={chats} />
      <InputForm onConcat={onConcat} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 95vh;
  border: 1px solid lightgray;
  border-radius: 20px;
`;

export default Chatroom;
