import { User } from "../interface";
import UserItem from "./UserItem";

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <>
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </>
  );
};

export default UserList;
