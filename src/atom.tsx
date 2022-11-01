import { atom, selector } from 'recoil';
import messages from '../src/db/messages.json';
import users from '../src/db/user.json';
import {
  IChatRoomItem,
  IChatRoomState,
  IUserState,
  IMessageType,
  IChatRoomId,
  IChatRooms,
} from './interface';

export const messageState = atom<IChatRoomItem[]>({
  key: 'messages',
  default: messages,
});

export const idFilterState = selector({
  key: 'rooms',
  get: ({ get }) => {
    const filter = get(chatRoomState);
    const ids = get(messageState);
    return ids.filter((va) => filter.id === va.id)[0];
  },
  set: ({ set }, newValue: any) => {
    set(messageState, newValue);
  },
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
    id: 1,
    message: [],
    currentUser: {
      id: 0,
      name: '이한비',
    },
  },
});

export const chatRoomId = atom<IChatRoomId>({
  key: 'chatId',
  default: {
    id: 1,
  },
});

/*
export const chatState = atom<IMessageType[]>({
  key:"chats",
  default:[
    {id: number,
    text: string,
    user: IUserInfo,
    time: string}
  ]
})
export const selectCurrentUser = selector<IChatRoomState[]>({
  key:"selectUser",
  get:({get})=>{
    const original
  }
})*/
