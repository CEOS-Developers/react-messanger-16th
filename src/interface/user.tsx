export interface IUserInfo {
  id: number;
  name: string;
}

export interface IUserState {
  users: IUserInfo[];
  mainUser: IUserInfo;
}
