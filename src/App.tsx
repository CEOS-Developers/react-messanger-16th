import React, { useState } from 'react';
import InputForm from './components/InputMessage';
import styled from 'styled-components';
import { text } from 'stream/consumers';
import MessageChatForm from './components/MessageChatForm';

import { useRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import useInput from './hooks/useInput';
import useChatRoom from './hooks/useChatRoom';
import { useEffect } from 'react';
import { chatRoomState } from './atom';

function App() {
  const { addMsg } = useChatRoom();
  const chatRoom = useRecoilValue(chatRoomState);
  useEffect(() => {
    console.log(chatRoom);
  }, [chatRoom]);
  return (
    <RecoilRoot>
      <AllTemplate>
        <MessageChatForm />
        <InputForm sendMsg={addMsg} />
      </AllTemplate>
    </RecoilRoot>
  );
}

const AllTemplate = styled.div`
  width: 350px;
  height: 660px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 30px grey;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 38%;
  justify-content: center;
  align-items: center;
`;

export default App;
