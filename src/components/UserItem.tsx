import { User } from "../interface";

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  return <button>{user.name}</button>;
};

export default UserItem;
