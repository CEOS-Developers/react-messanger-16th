import { atom } from 'recoil';
import { ListInfo } from '../interfaces/interface';

export const listState = atom<ListInfo[]>({
  key: 'List',
  default: [],
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
