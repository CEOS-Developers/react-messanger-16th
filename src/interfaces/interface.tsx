export interface Chat {
  userid: number;
  chatid: string;
  chat: string;
}

export interface ChatMessage {
  roomid: number;
  users: number;
  chats: Chat[];
}

export interface UserInformation {
  userid: number;
  name: string;
}
