import { atom } from 'recoil';
import { chatRoom } from '../interface/chatRoom';
import chatInfo from '../assets/chatInfo.json';

export const activeId = atom<number>({
  key: 'activeId',
  default: 5,
});

export const chatList = atom<chatRoom[]>({
  key: 'chatList',
  default: chatInfo,
});
