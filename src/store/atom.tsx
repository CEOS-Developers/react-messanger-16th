import { atom } from "recoil";
import { ChatRoom, UserInformation } from "../interfaces/interface";
import messageData from "../assets/chatMessage.json";
import userInformation from "../assets/userInformation.json";

export const chatState = atom<ChatRoom[]>({
  key: "chatMessage",
  default: messageData.chatrooms,
});

export const userInformationState = atom<UserInformation[]>({
  key: "userInformation",
  default: userInformation.users,
});

// 현재 채팅방의 id
export const nowRoomState = atom<number>({
  key: "nowRoomId",
  default: 0,
});

// 현재 채팅 중인 유저의 id
export const chatUserState = atom<number>({
  key: "nowChatUser",
  default: 1,
});

//
export const accountState = atom<boolean>({
  key: "account",
  default: true,
});
