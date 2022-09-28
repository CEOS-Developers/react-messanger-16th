import { atom } from 'recoil';

export const activeId = atom<any>({
  key: 'activeId',
  default: 1,
});
