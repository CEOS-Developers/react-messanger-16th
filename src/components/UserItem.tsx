import { User } from "../interface";

interface UserItemProps {
  user: User;
  changeUser(id: number): void;
}

const UserItem = ({ user, changeUser }: UserItemProps) => {
  return <button onClick={() => changeUser(user.id)}>{user.name}</button>;
};

export default UserItem;
