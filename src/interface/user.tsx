export interface IUserInfo {
  id: number;
  name: string;
  currentText: string;
}

export interface IUserState {
  users: IUserInfo[];
  mainUser: IUserInfo;
}
