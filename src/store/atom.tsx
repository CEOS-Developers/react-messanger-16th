import { atom, selector } from "recoil";
import { ChatRoom, UserInformation } from "../interfaces/interface";
import messageData from "../assets/chatMessage.json";
import userInformation from "../assets/userInformation.json";

// 채팅룸 전체 정보
export const chatState = atom<ChatRoom[]>({
  key: "chat",
  default: messageData.chatrooms,
});

// 현재 채팅룸의 정보
export const chatRoomSelector = selector({
  key: "filteredChatRoom",
  get: ({ get }) => {
    const chatrooms = get(chatState);
    const filteredRoom = chatrooms.find(
      (v) => v.roomid === get(nowRoomIdState)
    );
    return filteredRoom;
  },
});

// 유저 전체 정보
export const userInformationState = atom<UserInformation[]>({
  key: "userInformation",
  default: userInformation.users,
});

// 현재 채팅룸의 대화 상대 정보
export const userSelector = selector({
  key: "filteredUser",
  get: ({ get }) => {
    const users = get(userInformationState);
    const filteredUser = users.find(
      (v) => v.userid === get(chatRoomSelector)!.user
    );
    return filteredUser;
  },
});

// 현재 채팅방의 roomid
export const nowRoomIdState = atom<number>({
  key: "nowRoomId",
  default: 0,
});

// 채팅을 전송하는 계정이 본인 계정인지 아닌지
export const accountState = atom<boolean>({
  key: "userAccount",
  default: true,
});
