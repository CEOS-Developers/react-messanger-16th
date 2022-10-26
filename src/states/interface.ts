export interface IChat {
  userId: number;
  content: string;
  date: string;
  like: boolean;
  chatId: string;
}
export interface IRoom {
  roomId: number;
  userIdList: number[];
  chatList: IChat[];
}

export interface IUser {
  userId: number;
  userName: string;
  profileImage: string;
  statusMessage: string;
}
