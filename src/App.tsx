import { useState, useRef, useCallback, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ChatList from "./components/ChatList";
import InputForm from "./components/InputForm";
import UserList from "./components/UserList";
import { Chat, User } from "./interface";
import user1 from "./profileAssets/dedenne.jpeg";
import user2 from "./profileAssets/morpeco.png";

function App() {
  const [curUser, setCurUser] = useState(1);
  const [users, setUsers] = useState<User[]>([
    {
      id: 0,
      name: "데덴네",
      profileImage: user1,
    },
    {
      id: 1,
      name: "모르페코",
      profileImage: user2,
    },
  ]);
  const [chats, setChats] = useState<Chat[]>([
    { id: 1, senderId: 0, text: "안녕하세요", date: new Date("2022-09-01") },
    { id: 2, senderId: 1, text: "반가워요", date: new Date("2022-09-01") },
  ]);

  const nextChatId = useRef(3);
  const onConcat = useCallback(
    (text: string) => {
      const now = new Date();
      const chat = {
        id: nextChatId.current,
        senderId: curUser,
        text,
        date: now,
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

export default App;
