import { chatRoomState, messageState, userState, idFilterState } from '../atom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const useChatRoom = () => {
  const userList = useRecoilValue(userState);
  const [chatState, setChatState] = useRecoilState(chatRoomState);
  const allData = useRecoilValue(messageState);
  console.log(allData);

  const [newC, setNewC] = useRecoilState(chatRoomState);

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
      user: newC.currentUser,
      time: curTime,
      text: text,
    };
    console.log(chatState);

    const newOb = {
      ...chatId,
      currentUser: newC.currentUser,
      message: [...chatId.message, messageOb],
    };
    setNewC(newOb);

    console.log(newC.messages);
    //newC or chatId인데 newC를 하면...currentUser newCcureentUser이랑 chatId의 user값이 같으면 넣어주기 아니면 x이런식으로 해보기!값을 구분해줘야됨 비어있을때도 생각해줘야함

    setChatId([
      ...allData.map((data) => (data.id === newOb.id ? newOb : data)),
      newOb,
    ]);
    //객체를 그냥 선언해줘서 그걸 사용하면 오류!!해결!!
  };

  const toggleAccount = (id: number): void => {
    let toggleId = 0;
    if (id >= 1 && chatState.currentUser.id === userList.mainUser.id) {
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
