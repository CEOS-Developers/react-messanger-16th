import { atom } from "recoil";
import { ChatMessage, UserInformation } from "../interfaces/interface";
import messageData from "../assets/chatMessage.json";
import userInformation from "../assets/userInformation.json";
export const chatStore = atom<ChatMessage[]>({
  key: "chat",
  default: messageData.chatrooms,
});

export const chatUserStore = atom<number>({
  key: "nowRoom",
  default: 0,
});

export const nowUserStore = atom<boolean>({
  key: "nowUser",
  default: true,
});

export const userInformationStore = atom<UserInformation[]>({
  key: "userInformation",
  default: userInformation.users,
});
