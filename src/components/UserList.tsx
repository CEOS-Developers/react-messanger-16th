import styled from "styled-components";
import { User } from "../interface";
import UserItem from "./UserItem";

interface UserListProps {
  curUser: number;
  users: User[];
  changeUser(id: number): void;
}

const UserList = ({ curUser, users, changeUser }: UserListProps) => {
  return (
    <Wrapper>
      {users.map((user) => (
        <UserItem
          key={user.id}
          selected={user.id === curUser}
          user={user}
          changeUser={changeUser}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  background-color: white;
`;

export default UserList;
