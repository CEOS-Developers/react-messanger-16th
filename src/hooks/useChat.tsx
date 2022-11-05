import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chattingStateByChattingId } from '../states/atoms/chattings';
import { currentState } from '../states/atoms/current';
import { IChat } from '../states/interface';

const useChat = (chattingId: number) => {
  const currentId = useRecoilValue(currentState);
  const [chatting, setChatting] = useRecoilState(
    chattingStateByChattingId(chattingId),
  );

  const sendChat = (value: string) => {
    if (value.length !== 0 && value.replace(/ /g, '').length !== 0) {
      const newChat: IChat = {
        userId: currentId,
        content: value,
        date: dayjs().format(),
        like: false,
        chatId: uuid(),
      };

      setChatting({ ...chatting, chatList: [...chatting.chatList, newChat] });
    }
  };

  return { sendChat };
};

export default useChat;
