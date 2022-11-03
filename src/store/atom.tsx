import { atom, selector } from "recoil";
import { ChatRoom, UserInformation } from "../interfaces/interface";
import messageData from "../assets/chatMessage.json";
import userInformation from "../assets/userInformation.json";

// 채팅룸 전체 정보
export const chatState = atom<ChatRoom[]>({
  key: "chat",
  default: messageData.chatrooms.reverse(),
});

// 현재 채팅룸의 정보
export const chatRoomSelector = selector({
  key: "filteredChatRoom",
  get: ({ get }) => {
    const chatrooms = get(chatState);
    const filteredRoom = chatrooms.find(
      (chatroom) => chatroom.roomid === get(nowRoomIdState)
    );
    return filteredRoom;
  },
});

// 유저 전체 정보
export const userInformationState = atom<UserInformation[]>({
  key: "userInformation",
  default: userInformation.users,
});

// 유저 검색 결과
export const userSearchState = atom<UserInformation[]>({
  key: "userSearch",
  default: userInformation.users,
});

// 현재 채팅룸의 대화 상대 정보
export const userSelector = selector({
  key: "filteredUser",
  get: ({ get }) => {
    const users = get(userInformationState);
    const filteredUser = users.find(
      (user) => user.userid === get(chatRoomSelector)!.user
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

// 현재 페이지가 친구 목록 페이지인지
export const FriendPageState = atom<boolean>({
  key: "friendPage",
  default: true,
});

// 본인 계정 정보
export const myInfoSelector = selector({
  key: "myInfo",
  get: ({ get }) => {
    const users = get(userInformationState);
    const myInfo = users.find((user) => user.userid === 0);
    return myInfo;
  },
});

// 검색중인지
export const SearchState = atom<boolean>({
  key: "isSearching",
  default: false,
});

// 최신 메시지 순인지
export const SortState = atom<boolean>({
  key: "isOn",
  default: false,
});
