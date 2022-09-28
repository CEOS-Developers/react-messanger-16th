import React, {
  useState,
  useRef,
  useReducer,
  useMemo,
  useCallback,
} from 'react';
import styled from 'styled-components';
import Header from './components/header/header';
import ChatList from './components/chatList/chatList';
import ChatInput from './components/chatInput';

import userInfo from './assets/userInfo';

function App() {
  const userId = 1;

  return (
    <Background>
      <Container>
        <Header />
        <ChatList />
        <ChatInput />
      </Container>
    </Background>
  );
}

const Background = styled.div`
  display: relative;
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 25rem;
  height: 40rem;
  border: 1px solid #e8e8e8;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #e8e8e8;
  border-radius: 1rem;
`;

export default App;
