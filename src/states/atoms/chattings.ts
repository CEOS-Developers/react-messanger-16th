import { atom, selectorFamily } from 'recoil';
import { IChatting } from '../interface';
import chattingsData from '../mocks/chattingsData.json';

export const chattingsState = atom<IChatting[]>({
  key: 'chattings',
  default: chattingsData.chattings,
});

export const chattingStateByChattingId = selectorFamily<IChatting, number>({
  key: 'room',
  get:
    (chattingId: number) =>
    ({ get }) =>
      get(chattingsState).filter((chatting) => chatting.chattingId === chattingId)[0],
});

export const chattingStateByUserId = selectorFamily<IChatting, number>({
  key: 'room',
  get:
    (userId: number) =>
    ({ get }) =>
      get(chattingsState).filter((chatting) => chatting.userIdList[1] === userId)[0],
});
