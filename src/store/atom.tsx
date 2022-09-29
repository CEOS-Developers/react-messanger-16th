import { atom } from "recoil";
import { ChatMessage, UserInformation } from "../interfaces/interface";
import messageData from "../assets/chatMessage.json";
import userInformation from "../assets/userInformation.json";

export const chatStore = atom<ChatMessage[]>({
  key: "chatMessage",
  default: messageData.chatrooms,
});

export const userInformationStore = atom<UserInformation[]>({
  key: "userInformation",
  default: userInformation.users,
});

export const nowRoomStore = atom<number>({
  key: "nowRoomId",
  default: 0,
});

export const chatUserStore = atom<number>({
  key: "nowChatUser",
  default: 1,
});

export const nowUserStore = atom<boolean>({
  key: "nowUser",
  default: true,
});
