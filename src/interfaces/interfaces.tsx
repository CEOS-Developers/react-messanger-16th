export interface User {
  user_id: number;
  user_img: string;
  user_name: string;
  isSelected: boolean;
}

export interface Chat {
  chat_id: number;
  user_id: number;
  chat_room: number;
  chat_content: string;
}

export interface ChatRoom {
  chatRoom_id: number;
  chatRoom_users: User[];
}
