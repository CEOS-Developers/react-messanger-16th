import { atom } from 'recoil';
import chatInfo from '../assets/chatInfo.json';

export const activeId = atom<number>({
  key: 'activeId',
  default: 0,
});

export const chatList = atom<any>({
  key: 'chatList',
  default: chatInfo,
});
