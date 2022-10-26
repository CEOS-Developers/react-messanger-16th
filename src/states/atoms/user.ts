import { atom } from 'recoil';
import { IUser } from '../interface';
import userData from '../mocks/userData.json';

export const userState = atom<IUser>({
  key: 'user',
  default: userData.users[0],
});
