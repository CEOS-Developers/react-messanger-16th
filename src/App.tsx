import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import ChatList from './components/chatList';
import ChatInput from './components/chatInput';

function App() {
  return(
    <Background>
      <Container>
        <Header/>
        <ChatList/>
        <ChatInput/>
      </Container>
    </Background>

  )
}

const Background = styled.div`
  display: relative;
`

const Container = styled.div`
  display : flex;
  position: absolute;
  top: 50%;
  left : 50%;
  transform: translate(-50%, -50%);
  flex-direction : column;
  justify-items : center;
  align-items : center;
  width: 25rem;
  height: 40rem;
  border : 1px solid #E8E8E8 ;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #E8E8E8;
  border-radius: 1rem;
`

export default App;
