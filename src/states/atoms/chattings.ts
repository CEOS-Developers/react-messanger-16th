import { atom, selectorFamily } from 'recoil';
import { IRoom } from '../interface';
import chattingsData from '../mocks/chattingsData.json';

export const chattingsState = atom<IRoom[]>({
  key: 'chattings',
  default: chattingsData.rooms,
});

export const roomSelecter = selectorFamily<IRoom, number>({
  key: 'room',
  get:
    (roomId: number) =>
    ({ get }) =>
      get(chattingsState).filter((room) => room.roomId === roomId)[0],
});
