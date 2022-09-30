export interface User {
  id: number;
  name: string;
  profileImage: string;
}

export interface Chat {
  id: number;
  senderId: number;
  text: string;
  date: Date;
}
