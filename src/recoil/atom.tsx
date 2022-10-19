import { atom } from "recoil";
import UserInfo from "../assets/UserInfo.json";

export interface IUser {
  id: string;
  pwd: string;
  name: string;
}

export const user = atom<Object[]>({
  key: "user",
  default: UserInfo
});

export const textState = atom({
  key: 'textState',
  default: '',
});