import { atom } from 'recoil';
import chatData from '../data/chatData.json';
import userData from '../data/userData.json';
export interface IUser {
  userId: number;
  username: string;
  introMessage: string;
}

export interface IChat {
  username: string;
  messageTime: string;
  content: string;
}

export const userState = atom<IUser[]>({
  key: 'user',
  default: userData,
});

export const chatState = atom<any>({
  key: 'chat',
  default: chatData,
});

export const selectedContentState = atom<string>({
  key: 'selectedContent',
  default: 'profile',
});
