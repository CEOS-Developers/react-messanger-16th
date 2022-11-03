import { atom, selector } from 'recoil';
import {
  ListInfo,
  UserListInfo,
  ChatInfo,
  ListInfoWrap,
} from '../interfaces/interface';
import Chatting from '../json/default.json';
import UserList from '../json/user.json';

export const listState = atom<ListInfo[]>({
  key: 'List',
  default: Chatting.ChattingList[4].chat,
});

export const nowListState = atom<ListInfoWrap[]>({
  key: 'ListWrap',
  default: Chatting.ChattingList,
});

export const userState = atom<boolean>({
  key: 'isUser',
  default: false,
});

export const userListState = atom<UserListInfo[]>({
  key: 'user',
  default: UserList.UserList,
});

export const nowUserState = atom<number>({
  key: 'nowUserId',
  default: 0,
});

export const chatSelector = selector({
  key: 'userId',

  get: ({ get }) => {
    const chat = get(nowListState);
    const nowChat = chat.find((chat) => chat.userId === get(nowUserState));
    return nowChat?.chat;
  },
});

export const userSelector = selector({
  key: 'nowUser',
  get: ({ get }) => {
    const user = get(nowListState);
    const nowUser = user.find((user) => user.userId === get(nowUserState));
    const nowUserNum = nowUser?.userId;
    if (nowUserNum !== undefined) {
      return UserList.UserList[nowUserNum];
    }
  },
});

// export const IsUserSelector = selector({
//   key: 'userId',

//   get: ({ get }) => {
//     const chat = get(nowListState);
//     const nowChat = chat.find((chat) => chat.userId === get(nowUserState));
//     return nowChat?.chat[0].IsUser;
//   },
// });
