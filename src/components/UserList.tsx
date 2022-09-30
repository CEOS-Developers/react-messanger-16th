import { User } from "../interface";
import UserItem from "./UserItem";

interface UserListProps {
  users: User[];
  changeUser(id: number): void;
}

const UserList = ({ users, changeUser }: UserListProps) => {
  return (
    <>
      {users.map((user) => (
        <UserItem user={user} changeUser={changeUser} />
      ))}
    </>
  );
};

export default UserList;
