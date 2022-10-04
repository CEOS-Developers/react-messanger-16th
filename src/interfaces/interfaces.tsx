export interface User {
  user_id: number;
  user_img: string;
  user_name: string;
  isSelected: boolean;
}

export interface Chat {
  user_id: number;
  chat_id: number;
  chat_content: string;
}
