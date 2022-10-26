import { atom } from 'recoil';

export const currentState = atom<number>({
  key: 'current',
  default: 0,
});
