import { atom, selectorFamily } from 'recoil';
import { IUser } from '../interface';
import friendsData from '../mocks/friendsData.json';
import { userState } from './user';

export const friendsState = atom<IUser[]>({
  key: 'friends',
  default: friendsData.users,
});

export const friendByUserId = selectorFamily<IUser, number>({
  key: 'friendByUserId',
  get:
    (userId: number) =>
    ({ get }) => {
      const user = get(userState);
      const friends = get(friendsState);
      if (userId === 0) {
        return user;
      } else {
        return friends.filter((friend) => friend.userId === userId)[0];
      }
    },
});
