import { atom } from 'recoil';
import { ListInfo, UserListInfo } from '../interfaces/interface';
import Chatting from '../json/default.json';
import UserList from '../json/user.json';

export const listState = atom<ListInfo[]>({
  key: 'List',
  default: Chatting.ChattingList,
});

export const textState = atom<string>({
  key: 'Text',
  default: '',
});

export const talkState = atom<string>({
  key: 'Talk',
  default: '',
});

export const userState = atom<boolean>({
  key: 'isUser',
  default: false,
});

export const boxState = atom<ListInfo[]>({
  key: 'box',
  default: [],
});

export const userListState = atom<UserListInfo[]>({
  key: 'userId',
  default: UserList.UserList,
});
