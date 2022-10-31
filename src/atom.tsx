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
