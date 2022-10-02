import { atom } from 'recoil';
import chatInfo from '../assets/chatInfo.json';
import { chatting } from '../interface/chatting';

export const activeId = atom<number>({
  key: 'activeId',
  default: 0,
});

export const chatList = atom<chatting[]>({
  key: 'chatList',
  default: chatInfo,
});
