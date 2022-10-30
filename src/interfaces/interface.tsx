export interface TextInfo {
  text: string;
}

export interface ListInfo {
  IsUser: boolean;
  addText: string;
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
