export interface Chat {
  userid: number;
  chat: string;
}

export interface ChatMessage {
  roodId: number;
  users: number;
  chat: Chat[];
}

export interface UserInformation {
    userid: number;
    name: string;
}