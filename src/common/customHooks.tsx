import { User } from "../common/interface";
import chatData from "../data/chatData.json";
import userData from "../data/userData.json";

const chatrooms = chatData.rooms;
const users = userData.users;

// 해당 채팅방 멤버들의 유저정보를 담은 배열을 반환
export const getRoomMembers = (roomId: number, includeCurUser: Boolean) => {
  const roomMembers: User[] = [];
  chatrooms[roomId].users.map((memberId) => roomMembers.push(users[memberId]));
  if (!includeCurUser) {
    roomMembers.shift();
  }
  return roomMembers;
};
