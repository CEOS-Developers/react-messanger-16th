import { IUserInfo } from './user';
import { IMessageType } from './message';

export interface IChatRoomItem {
  id: number;
  user: IUserInfo[];
  messages: IMessageType[];
}

export interface IChatRoomState {
  message: IMessageType[];
  currentUser: IUserInfo;
  id: number;
}

export interface IChatRoomId {
  id: number;
}

export interface IChatRooms {
  message: IMessageType[];
  currentUser: IUserInfo;
  id: number;
}
