import React, { useMemo, useState } from 'react';

import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';
import InputBox from './components/InputBox';
import ChatBoxList from './components/ChatBoxList';

type Chat = {
  user_id: number;
  chat_id: number;
  chat_content: string;
};

export const ChatContext = React.createContext<{
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
}>({
  setChats: () => {},
});

function App() {
  const [chats, setChats] = useState<Chat[]>([]);
  const chatFunc = useMemo(() => ({ setChats }), [setChats]);

  return (
    <ChatContext.Provider value={chatFunc}>
      <GlobalStyle />
      <Container>
        <Header />
        <ChatBoxList chatList={chats} />
        <InputBox />
      </Container>
    </ChatContext.Provider>
  );
}

const Container = styled.div`
  width: 25rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 20px;
  box-shadow: 1px 1px 10px lightgray;
`;

export default App;
