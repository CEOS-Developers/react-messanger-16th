import { IUserInfo } from './user';

export interface IMessageType {
  id: number;
  text: string;
  user: IUserInfo;
  time: string;
}

export interface IInputForm {
  sendMsg: (text: string) => void;
}
