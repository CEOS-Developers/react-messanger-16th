import React, { useState } from 'react';
import InputForm from '../components/InputMessage';
import styled from 'styled-components';
import MessageChatForm from '../components/MessageChatForm';
import {
  useRecoilState,
  useRecoilValue,
  RecoilRoot,
  useResetRecoilState,
} from 'recoil';

import useChatRoom from '../hooks/useChatRoom';
import { useEffect } from 'react';
import { chatRoomState, idFilterState, messageState, userState } from '../atom';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { idText } from 'typescript';

function Room() {
  const navigate = useNavigate();
  const { addMsg, toggleAccount } = useChatRoom();
  const ChatRoom = useRecoilValue(chatRoomState);
  const RealChatRoom = useRecoilValue(messageState);

  const UserList = useRecoilValue(userState);
  const [id, setId] = useRecoilState(chatRoomState);
  //const [id, setId] = useRecoilState(idFilterState);

  let params = useParams();
  console.log(params);
  let num = params.id;
  console.log(num);
  const realNum = Number(num);

  useEffect(() => {
    setId((prevId) => {
      const variable = { ...prevId };
      variable.id = realNum;

      return { ...variable };
    });
  }, []);

  const onCLickMe = (): void => {
    toggleAccount(0);
  };
  const onCLickYou = (): void => {
    toggleAccount(realNum);
  };

  const goToMain = () => {
    navigate('/list');
  };

  return (
    <AllTemplate>
      <ImgProfAll>
        <div>
          <ImgProf onClick={onCLickMe} src="/img/0.png" />
        </div>
        <div>
          <ImgProf
            onClick={onCLickYou}
            src={`/../img/${realNum}.png`}
          ></ImgProf>
        </div>
        <div>
          <MoveButton
            className="quitBut"
            onClick={goToMain}
            src={`/img/out.png`}
          ></MoveButton>
        </div>
      </ImgProfAll>
      <MessageChatForm />
      <InputForm sendMsg={addMsg} />
    </AllTemplate>
  );
}

const MoveButton = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 200px;
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
`;

export default Room;
