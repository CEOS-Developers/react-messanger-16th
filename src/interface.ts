interface IChat {
  text?: string;
  name?: string;
}

interface IUser {
  userid?: number;
  name?: string;
}

interface IUserChat extends IUser {
  msgid?: number;
  text?: string;
}

interface IFriendList extends IUser {
  status: string;
}

interface IChatRoomList extends IUserChat {
  roomid?: number;
}

interface IChatBoard extends IChatRoomList {
  msg: IUserChat[];
}

export type { IChat, IUserChat, IUser, IFriendList, IChatRoomList, IChatBoard };
