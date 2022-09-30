import { useState, useRef, useCallback } from "react";
import ChatList from "./components/ChatList";
import InputForm from "./components/InputForm";
import { Chat } from "./interface";

function App() {
  const [chats, setChats] = useState<Chat[]>([
    { id: 1, senderId: 1, text: "안녕하세요" },
  ]);

  const nextId = useRef(3);
  const onConcat = useCallback(
    (text: string) => {
      const chat = {
        id: nextId.current,
        senderId: 1,
        text,
      };
      setChats(chats.concat(chat));
      nextId.current++;
    },
    [chats]
  );

  return (
    <>
      <ChatList chats={chats} />
      <InputForm onConcat={onConcat} />
    </>
  );
}

export default App;
