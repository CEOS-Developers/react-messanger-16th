import React, { useMemo, useState } from 'react';

import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import { Chat, User } from './interfaces/interfaces';

import Header from './components/Header';
import InputBox from './components/InputBox';
import ChatBoxList from './components/ChatBoxList';

export const Context = React.createContext<{
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}>({
  setChats: () => {},
  setUsers: () => {},
});

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
  const [users, setUsers] = useState<User[]>(userList);

  const func = useMemo(() => ({ setChats, setUsers }), [setChats, setUsers]);

  return (
    <Context.Provider value={func}>
      <GlobalStyle />
      <Container>
        <Header userList={users} />
        <ChatBoxList chatList={chats} userList={users} />
        <InputBox userList={users} />
      </Container>
    </Context.Provider>
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
