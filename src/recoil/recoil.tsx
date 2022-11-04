import { atom } from 'recoil';
import { User, Chat } from '../interfaces/interfaces';
import users from '../db/userList.json';
import chats from '../db/defaultChat.json';

export const userState = atom<User[]>({
  key: 'userList',
  default: users.users,
});

export const chatState = atom<Chat[]>({
  key: 'chatList',
  default: chats.chats,
});

export const curUserState = atom<number>({
  key: 'curUser',
  default: 1,
});
