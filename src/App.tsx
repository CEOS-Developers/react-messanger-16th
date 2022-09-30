import { useState, useRef, useCallback } from "react";
import ChatList from "./components/ChatList";
import InputForm from "./components/InputForm";
import UserList from "./components/UserList";
import { Chat, User } from "./interface";
import user1 from "./profileAssets/dedenne.jpeg";
import user2 from "./profileAssets/morpeco.png";

function App() {
  const tmp = new Date("2022-09-01");
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
    { id: 1, senderId: 0, text: "안녕하세요", date: tmp },
    { id: 2, senderId: 1, text: "반가워요", date: tmp },
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
    <>
      <UserList curUser={curUser} users={users} changeUser={changeUser} />
      <ChatList curUser={curUser} users={users} chats={chats} />
      <InputForm onConcat={onConcat} />
    </>
  );
}

export default App;
