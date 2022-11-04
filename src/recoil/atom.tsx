import { atom, selector } from "recoil";
import UserInfo from "../assets/UserInfo.json";
import ContentInfo from "../assets/ContentInfo.json";
import {Imsg} from "./type";

export const userState = atom<Object[]>({
  key: "user",
  default: UserInfo,
});

export const textState = atom({
  key: 'textState',
  default: '',
});

// 현재 누구에서 누구로 메세지 보내는지 user의 id 저장
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
