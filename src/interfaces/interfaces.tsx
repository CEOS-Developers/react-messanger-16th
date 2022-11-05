export interface User {
  user_id: number;
  user_img: string;
  user_name: string;
  user_msg: string;
}

export interface Chat {
  chat_id: number;
  user_id: number;
  chat_room: number;
  chat_content: string;
}
