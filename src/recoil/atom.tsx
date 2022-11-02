import { atom, selector } from "recoil";
import UserInfo from "../assets/UserInfo.json";
import ContentInfo from "../assets/ContentInfo.json";

export interface IUser {
  id: string;
  pwd: string;
  name: string;
}

export const userState = atom<Object[]>({
  key: "user",
  default: UserInfo,
});

export const textState = atom({
  key: 'textState',
  default: '',
});

export interface Imsg {
  from: number;
  to: number;
}
export const msgState = atom<Imsg>({
  key: 'msgState',
  default: {
    from: 0,
    to: 1
  }
});

export const contentState = atom({
  key: 'contentState',
  default: ContentInfo,
})

export const contentSelector = selector({
  key: 'contentSelector', 
  get: ({get}) => {
    const content = get(contentState);
    const user = get(msgState);
    const fromUser = user.from;
    const toUser = user.to;
    const result = content.filter(c=>(c.to === toUser && c.from === fromUser) || (c.from === toUser && c.to === fromUser));

    return result;
  },
});
