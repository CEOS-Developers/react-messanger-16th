import styled from "styled-components";
import { User } from "../../common/interface";
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
  justify-content: end;
  gap: 12px;
  padding: 8px 20px;
  box-sizing: border-box;
`;

export default UserList;
