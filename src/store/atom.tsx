import { atom } from "recoil";
import { ChatMessage } from "../interfaces/interface";
import messageData from "../assets/chatMessage.json";

export const chatStore = atom<ChatMessage[]>({
  key: "chat",
  default: messageData.chatrooms,
});
