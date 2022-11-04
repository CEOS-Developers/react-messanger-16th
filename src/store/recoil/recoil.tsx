import { atom, selector } from "recoil";
import Message from "../Message.json";
import { chat, chatRoom } from "../../interface/interface";

export const currentId = atom<number>({
  key: "currentId",
  default: 0,
});

export const roomId = atom<number>({
  key: "roomId",
  default: 1,
});

export const chatList = atom<chatRoom[]>({
  key: "chatList",
  default: Message,
});

export const chattingRoom = selector({
  key: "chattingRoom",
  get: ({ get }) => {
    const im_chatroom = get(chatList);
    const roomNumber = get(roomId);
    const chatRoom = im_chatroom.filter((room) => room.roomId === roomNumber);
    return chatRoom;
  },
});
