import { IUser } from '../interface';
import userData from '../mocks/userData.json';
import { atom, selectorFamily } from 'recoil';
import friendsData from '../mocks/friendsData.json';

export const userState = atom<IUser>({
  key: 'user',
  default: userData.users[0],
});

export const friendsState = atom<IUser[]>({
  key: 'friends',
  default: friendsData.users,
});

export const userStateByUserId = selectorFamily<IUser, number>({
  key: 'userByUserId',
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

export const usersStateByUserIdList = selectorFamily<IUser[], number[]>({
  key: 'usersByUserIdList',
  get:
    (userIdList: number[]) =>
    ({ get }) => {
      return userIdList.map((userId) => get(userStateByUserId(userId)));
    },
});
