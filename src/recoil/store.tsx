import { atom } from 'recoil';
import chatRoom from '../assets/chatRoom';

export const activeId = atom<any>({
  key: 'activeId',
  default: 0,
});

export const chatList = atom<any>({
  key: 'chatList',
  default: chatRoom,
});
