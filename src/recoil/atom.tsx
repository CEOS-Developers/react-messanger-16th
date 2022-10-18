import { atom } from "recoil";

export interface IUser {
  id: string;
  pwd: string;
  name: string;
}

export const user = atom<IUser>({
  key: "user",
  default: {
    id: "admin",
    pwd: "admin",
    name: "관리자"
  }
});

export const textState = atom({
  key: 'textState',
  default: '',
});