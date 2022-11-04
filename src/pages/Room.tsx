import React, { useState } from 'react';
import InputForm from '../components/InputMessage';
import styled from 'styled-components';
import MessageChatForm from '../components/MessageChatForm';
import { useRecoilState, useRecoilValue } from 'recoil';

import useChatRoom from '../hooks/useChatRoom';
import { useEffect } from 'react';
import { chatRoomState, messageState, userState } from '../atom';
import { useNavigate, useParams } from 'react-router-dom';
import { idText } from 'typescript';

function Room() {
  const navigate = useNavigate();
  const { addMsg, toggleAccount } = useChatRoom();

  const UserList = useRecoilValue(userState);
  const [id, setId] = useRecoilState(chatRoomState);

  let params = useParams();

  let num = params.id;

  const realNum = Number(num);

  useEffect(() => {
    setId((prevId) => {
      const variable = { ...prevId };
      variable.id = realNum;

      return { ...variable };
    });
  }, []);

  const onCLickYou = (): void => {
    toggleAccount(realNum);
  };

  const goToMain = () => {
    toggleAccount(0);
    navigate('/list');
  };

  return (
    <AllTemplate>
      <ImgProfAll>
        <ImgProf onClick={onCLickYou} src={`/../img/${realNum}.png`}></ImgProf>

        <MoveButton
          className="quitBut"
          onClick={goToMain}
          src={`/img/out.png`}
        ></MoveButton>
      </ImgProfAll>
      <Text>{UserList.users[realNum].name}</Text>

      <MessageChatForm />
      <InputForm sendMsg={addMsg} />
    </AllTemplate>
  );
}
const Text = styled.div`
  margin-top: 1px;
  margin-left: 10px;
  font-size: 13px;
`;
const MoveButton = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 250px;
`;
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
  width: 53px;
  height: 53px;
  border-radius: 25px;
  transition: 0.5s;
  display: block;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 0.05px;
`;

export default Room;
