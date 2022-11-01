import { atom, selectorFamily } from 'recoil';
import { IChat, IChatting } from '../interface';
import chattingsData from '../mocks/chattingsData.json';

export const chattingsState = atom<IChatting[]>({
  key: 'chattings',
  default: chattingsData.chattings,
});

export const chattingStateByChattingId = selectorFamily<IChatting, number>({
  key: 'chattingByChattingId',
  get:
    (chattingId: number) =>
    ({ get }) =>
      get(chattingsState).filter(
        (chatting) => chatting.chattingId === chattingId,
      )[0],
  set:
    (chattingId: number) =>
    ({ set }, newChatting) => {
      set(chattingsState, (prev) =>
        prev.map((chatting) =>
          chatting.chattingId === chattingId
            ? (newChatting as IChatting)
            : chatting,
        ),
      );
    },
});

export const chattingStateByUserId = selectorFamily<IChatting, number>({
  key: 'chattingByUserId',
  get:
    (userId: number) =>
    ({ get }) =>
      get(chattingsState).filter(
        (chatting) => chatting.userIdList[1] === userId,
      )[0],
});
