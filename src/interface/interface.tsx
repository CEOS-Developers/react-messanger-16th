interface chat {
  chatId: number;
  senderId: number;
  receiverId: number;
  text: string;
  time: string;
}

interface profile {
  userID: number;
  profileImg: string;
  name: string;
  PersonalMessage: string;
}

interface chatRoom {
  roomId: number;
  chat: chat[];
}

export type { chat, profile, chatRoom };
