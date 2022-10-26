import { atom } from 'recoil';
import { IUser } from '../interface';
import friendsData from '../mocks/friendsData.json';

export const friendsState = atom<IUser[]>({
  key: 'friends',
  default: friendsData.users,
});
