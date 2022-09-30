import { useState, useRef, useCallback } from "react";
import InputForm from "./components/InputForm";

function App() {
  const [chats, setChats] = useState([
    { id: 1, senderId: 1, text: "반갑다" },
    { id: 2, senderId: 2, text: "안녕하세요" },
  ]);

  const nextId = useRef(3);
  const onConcat = useCallback(
    (text) => {
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
      <InputForm onConcat={onConcat} />
    </>
  );
}

export default App;
