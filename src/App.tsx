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

type User = {
  user_id: number;
  user_img: string;
  user_name: string;
  isSelected: boolean;
};

const userList: Array<User> = [
  {
    user_id: 1,
    user_img: process.env.PUBLIC_URL + `/assets/default.png`,
    user_name: '이현영',
    isSelected: true,
  },
  {
    user_id: 2,
    user_img: process.env.PUBLIC_URL + `/assets/보통이.jpeg`,
    user_name: '보통이',
    isSelected: false,
  },
];

function App() {
  const [chats, setChats] = useState<Chat[]>([]);
  const chatFunc = useMemo(() => ({ setChats }), [setChats]);

  return (
    <ChatContext.Provider value={chatFunc}>
      <GlobalStyle />
      <Container>
        <Header userList={userList} />
        <ChatBoxList chatList={chats} userList={userList} />
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
