import { atom } from 'recoil';
import messages from '../src/db/messages.json';
import users from '../src/db/user.json';
import { IChatRoomItem, IChatRoomState, IUserState } from './interface';
import messagedummy from './db/messages.json';

export const messageState = atom<IChatRoomItem[]>({
  key: 'messages',
  default: messages,
});

export const userState = atom<IUserState>({
  key: 'user',
  default: {
    users: users,
    mainUser: users[0],
  },
});

export const chatRoomState = atom<IChatRoomState>({
  key: 'chatRoom',
  default: {
    message: [],
    currentUser: { id: 0, name: '이한비' },
  },
});
