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
}
