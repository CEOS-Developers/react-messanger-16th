import { chatRoomState, messageState, userState, idFilterState } from '../atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const useChatRoom = () => {
  const userList = useRecoilValue(userState);
  const [chatState, setChatState] = useRecoilState(chatRoomState);
  const allData = useRecoilValue(messageState);
  console.log(allData);
  let params = useParams();
  console.log(params);
  let num = params.id;
  console.log(num);
  const realNum = Number(num) - 1;
  //const newData = allData.filter((txt) => txt.id === Number(num));
  //console.log(newData);
  //
  const [newD, setNewD] = useRecoilState(messageState);
  //
  const [chatId, setChatId] = useRecoilState(idFilterState);
  console.log(chatId);

  //메세지 추가
  const addMsg = (text: string): void => {
    const curTime =
      String(new Date().getHours()).padStart(2, '0') +
      ':' +
      String(new Date().getMinutes()).padStart(2, '0');
    const messageOb = {
      id: new Date().valueOf(),
      user: chatState.currentUser,
      time: curTime,
      text: text,
    };
    setChatId({
      ...chatId,
      messages: [...chatId.messages, messageOb],
    });
    /*
        setRealChat({
      
    });
    setChatState({
      ...chatState,
      ...newData,
      message: [...chatState.message, messageOb],
    });
    console.log(chatState.message);
    */
  };

  console.log(chatState);

  const toggleAccount = (id: number): void => {
    let toggleId = 0;
    if (id >= 1 && chatState.currentUser.id === userList.mainUser.id) {
      // && chatState.currentUser.id === userList.mainUser.id나는 아직 두개밖에 없어서 이걸 추가해버리면 오류뜬다
      toggleId = userList.users.findIndex((user) => user.id === id);
    }
    setChatState({
      ...chatState,
      currentUser: userList.users[toggleId],
    });
    console.log(id);
  };

  return { addMsg, toggleAccount };
};

export default useChatRoom;
