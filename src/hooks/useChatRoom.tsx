import { chatRoomState, messageState, userState, idFilterState } from '../atom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

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
  //const newData = allData.filter((txt) => txt.id === Number(num))[0];
  //console.log(newData);
  //
  const [newD, setNewD] = useRecoilState(messageState);
  const [newC, setNewC] = useRecoilState(chatRoomState);
  //
  const [chatId, setChatId] = useRecoilState(idFilterState);
  console.log(chatId);
  //console.log(newD);
  const ResetData = useResetRecoilState(chatRoomState);
  //메세지 추가

  const addMsg = (text: string): void => {
    const curTime =
      String(new Date().getHours()).padStart(2, '0') +
      ':' +
      String(new Date().getMinutes()).padStart(2, '0');
    const messageOb = {
      id: new Date().valueOf(),
      user: newC.currentUser, //여기가 문제네 또 입력하면 유저가 없는데 어캐 user을 쓰냐..이게 문제였네
      time: curTime,
      text: text,
    };
    console.log(chatState);
    //refresh..?prefetching??
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

    //setNewD는 전체 []를 바꾸는 것이므로 하나만 바꿔서 다시 전체에 넣어줘야함..chatroomState를 가져와서 바꾸는걸 해볼까?
    /*
    setChatId(
      allData.map((data) =>
        data.id === newC.id &&
        newC.messages.length !== 0 &&
        newC.message[0].id >= 1000
          ? newC
          : data
      )
    );
    */
    /*
     */

    //이렇게하면,....messageState값이 그냥 바뀌어 버림..
    console.log(newC);

    //변경해서 넣어줘야하는데..
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
