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
  const { addMsg, toggleAccount } = useChatRoom();
  const chatRoom = useRecoilValue(chatRoomState);
  useEffect(() => {
    console.log(chatRoom);
  }, [chatRoom]);

  const onCLickMe = (): void => {
    toggleAccount(0);
    alert('이한비');
  };
  const onCLickYou = (): void => {
    toggleAccount(1);
    alert('문상훈');
  };

  return (
    <AllTemplate>
      <MessageChatForm />
      <InputForm sendMsg={addMsg} />
      <ImgProfAll>
        <ImgProf
          onClick={onCLickMe}
          src="https://hjm79.top/wp-content/uploads/2022/06/zzal1.jpeg"
        ></ImgProf>
        <ImgProf
          onClick={onCLickYou}
          src="https://blog.kakaocdn.net/dn/dowIkh/btrdtJZG3Eh/74NuD1tiFw7QzhqxOZ2Po0/img.png"
        ></ImgProf>
      </ImgProfAll>
    </AllTemplate>
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

const ImgProfAll = styled.section`
  display: flex;
  flex-direction: row;
`;
const ImgProf = styled.img`
  width: 135px;
  height: 140px;
  border-radius: 25px;
  transition: 0.5s;
  display: block;
  :hover {
    cursor: grab;
    width: 140px;
    height: 150px;
  }
`;

export default App;
