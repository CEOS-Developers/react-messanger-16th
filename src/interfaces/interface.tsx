export interface HeaderProps {
  leftChild: string;
  rightChild: string;
  textChild?: string;
  isFriendsPage?: boolean;
}

export interface Chat {
  userid: number;
  chatid: number;
  myAccount: boolean;
  chat: string;
  time: string;
}

export interface ChatRoom {
  roomid: number;
  user: number;
  chats: Chat[];
}

export interface UserInformation {
  userid: number;
  name: string;
  statusMessage: string;
}

export interface ModalDefaultType {
  onClickToggleModal: () => void;
}
