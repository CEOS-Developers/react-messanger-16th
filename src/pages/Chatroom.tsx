import { useState, useRef, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ChatList from "../components/ChatList";
import InputForm from "../components/InputForm";
import UserList from "../components/UserList";
import { Chat, User } from "../interface";

import userData from "../data/userData.json";
import chatData from "../data/chatData.json";

function Chatroom() {
  const [curUser, setCurUser] = useState(1);
  const [users, setUsers] = useState<User[]>(userData.users);
  const [chats, setChats] = useState<Chat[]>(chatData.chats);

  const nextChatId = useRef(chatData.chats.length + 1);
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
      <GlobalStyle />
      <UserList curUser={curUser} users={users} changeUser={changeUser} />
      <ChatList curUser={curUser} users={users} chats={chats} />
      <InputForm onConcat={onConcat} />
    </Wrapper>
  );
}

const GlobalStyle = createGlobalStyle`
html{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  font-size: 0.8rem;
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 95vh;
  border: 1px solid lightgray;
  border-radius: 20px;
`;

export default Chatroom;
