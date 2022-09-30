import { useState, useRef, useCallback } from "react";
import ChatList from "./components/ChatList";
import InputForm from "./components/InputForm";
import UserList from "./components/UserList";
import { Chat, User } from "./interface";

function App() {
  const [curUser, setCurUser] = useState(1);
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "데덴네", profileImage: "tmp" },
    { id: 2, name: "모르페코", profileImage: "tmp" },
  ]);
  const [chats, setChats] = useState<Chat[]>([
    { id: 1, senderId: 1, text: "안녕하세요" },
  ]);

  const nextChatId = useRef(3);
  const onConcat = useCallback(
    (text: string) => {
      const chat = {
        id: nextChatId.current,
        senderId: curUser,
        text,
      };
      console.log(curUser + text);
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
      <UserList users={users} changeUser={changeUser} />
      <ChatList chats={chats} />
      <InputForm onConcat={onConcat} />
    </>
  );
}

export default App;
