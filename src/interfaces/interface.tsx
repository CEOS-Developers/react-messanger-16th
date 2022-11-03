export interface TextInfo {
  text: string;
}

export interface ListInfo {
  IsUser: boolean;
  addText: string;
}

export interface ListInfoWrap {
  userId: number;
  chat: ListInfo[];
}

export interface TalkBoxInfo {
  IsUser: boolean;
  nowIsUser: boolean;
}

export interface UserListInfo {
  userId: number;
  userName: string;
  stateMsg: string;
}

export interface ChatInfo {
  userId: number;
  userName: string;
  IsUser?: boolean;
}
