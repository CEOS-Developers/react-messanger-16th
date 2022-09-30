import { chatRoomState, messageState, userState } from '../atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const useChatRoom = () => {
  const allMessage = useRecoilValue(messageState);
  const userList = useRecoilValue(userState);
  const [chatState, setChatState] = useRecoilState(chatRoomState);

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
    setChatState({ ...chatState, message: [...chatState.message, messageOb] });
  };

  const toggleAccount = (id: number): void => {
    let toggleId = 0;
    if (id <= 1 && chatState.currentUser.id === userList.mainUser.id) {
      toggleId = userList.users.findIndex((user) => user.id === id);
    }
    setChatState({ ...chatState, currentUser: userList.users[toggleId] });
    console.log(id);
  };

  return { addMsg, toggleAccount };
};

export default useChatRoom;